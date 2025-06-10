'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './page.module.css';

// --- 型定義 ---
interface Species {
  id: number;
  name: string;
  count: number;
  color: string;
}

// --- 初期データと定数 ---
const INITIAL_COLORS = ["#4C92D9", "#4CD992", "#D9D94C", "#D94C4C", "#924CD9", "#4CD9D9"];
const INITIAL_SPECIES: Species[] = [
  { id: 1, name: "種A", count: 15, color: INITIAL_COLORS[0] },
  { id: 2, name: "種B", count: 15, color: INITIAL_COLORS[1] },
  { id: 3, name: "種C", count: 15, color: INITIAL_COLORS[2] },
];

// --- 子コンポーネント: 棒グラフ ---
const BarChart = ({ species }: { species: Species[] }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.min(width * 0.6, 300);
    const margin = { top: 20, right: 20, bottom: 40, left: 50 };

    const svg = d3.select(ref.current).attr("width", width).attr("height", height);
    svg.selectAll("*").remove(); 

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(species.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.2);
    
    const y = d3.scaleLinear()
      .domain([0, 100])
      .nice()
      .range([innerHeight, 0]);

    g.append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)");

    g.append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y).ticks(5));

    g.selectAll(".bar")
      .data(species)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", d => d.color)
      .attr("x", d => x(d.name) || 0)
      .attr("width", x.bandwidth())
      .attr("y", y(0))
      .attr("height", 0)
      .transition()
      .duration(750)
      .attr("y", d => y(d.count))
      .attr("height", d => innerHeight - y(d.count));
      
  }, [species]);

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: '300px' }}>
      <svg ref={ref} style={{ maxWidth: '100%' }} />
    </div>
  );
};

// --- 子コンポーネント: 散布図 ---
const ScatterPlot = ({ species }: { species: Species[] }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.min(width * 0.6, 300);
    
    interface Point { id: string; color: string; x: number; y: number; }

    const points = species.flatMap(sp =>
      Array.from({ length: sp.count }, (_, i) => ({
        id: `${sp.id}-${i}`, color: sp.color, x: Math.random() * width, y: Math.random() * height
      }))
    );
    
    const svg = d3.select(ref.current).attr("width", width).attr("height", height);
    
    svg.selectAll<SVGCircleElement, Point>("circle")
      .data(points, d => d.id)
      .join(
        enter => enter.append("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r", 0)
          .attr("fill", d => d.color)
          .attr("opacity", 0.7)
          .call(enter => enter.transition().duration(500).attr("r", 5)),
        update => update,
        exit => exit.transition().duration(500).attr("r", 0).remove()
      );
  }, [species]);

  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: '300px' }}>
      {/* ↓↓↓ style属性をclassNameに変更 ↓↓↓ */}
      <svg ref={ref} className={styles.scatterPlotSvg} />
    </div>
  );
};


// --- 親コンポーネント: ページ全体 ---
export default function ShannonVisualizerPage() {
  const [species, setSpecies] = useState<Species[]>(INITIAL_SPECIES);

  const handleCountChange = (id: number, count: number) => {
    setSpecies(prevSpecies => prevSpecies.map(sp => sp.id === id ? { ...sp, count } : sp));
  };

  const addSpecies = () => {
    const newId = (species.length > 0 ? Math.max(...species.map(sp => sp.id)) : 0) + 1;
    const newColor = INITIAL_COLORS[species.length % INITIAL_COLORS.length];
    setSpecies([...species, {
      id: newId,
      name: `種${String.fromCharCode(65 + species.length)}`,
      count: 15,
      color: newColor
    }]);
  };

  const removeSpecies = (id: number) => {
    setSpecies(species.filter(sp => sp.id !== id));
  };

  const calculateShannonIndex = () => {
    const totalCount = species.reduce((sum, sp) => sum + sp.count, 0);
    if (totalCount === 0) return { h: 0, j: 0 };
    
    let h = 0;
    const S = species.filter(sp => sp.count > 0).length;
    if (S <= 1) return { h: 0, j: 0 };
    
    species.forEach(sp => {
      if (sp.count > 0) {
        const p = sp.count / totalCount;
        h -= p * Math.log(p);
      }
    });

    const j = Math.log(S) > 0 ? h / Math.log(S) : 0;
    return { h, j };
  };

  const { h, j } = calculateShannonIndex();

  return (
    <div className={styles.main}>
      <div className={styles.controls}>
        <h2>操作パネル</h2>
        <button 
          className={styles.addButton}
          onClick={addSpecies}
          disabled={species.length >= INITIAL_COLORS.length}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ stroke: 'currentColor' }}>
            <path d="M8 1V15M1 8H15" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          新しい種を追加
        </button>
        {species.map(sp => (
          <div key={sp.id} className={styles.controlGroup}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '12px', height: '12px', background: sp.color, borderRadius: '50%'}} />
              <span>{sp.name}: <strong>{sp.count}</strong></span>
              <button 
                  className={styles.removeButton}
                  onClick={() => removeSpecies(sp.id)}
                  disabled={species.length <= 1}
                  type="button"
              >
                  削除
              </button>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sp.count}
              onChange={(e) => handleCountChange(sp.id, parseInt(e.target.value, 10))}
              className={styles.slider}
            />
          </div>
        ))}
        <div className={styles.result}>
          <h3>計算結果</h3>
          <p>シャノン指数 (H'): {h.toFixed(3)}</p>
          <p>均等度 (J'): {j.toFixed(3)}</p>
        </div>
      </div>
  
      <div className={styles.visuals}>
        <div className={styles.visBlock}>
          <h3>各種の個体数</h3>
          <BarChart species={species} />
        </div>
        <div className={styles.visBlock}>
          <h3>個体分布</h3>
          <ScatterPlot species={species} />
        </div>
      </div>
    </div>
  );
}