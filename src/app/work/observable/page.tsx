'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

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
    const height = Math.min(width * 0.6, 200);
    const margin = { 
      top: 20, 
      right: 20, 
      bottom: 30, 
      left: 40 
    };

    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3.scaleBand<string>()
      .domain(species.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);
    
    const y = d3.scaleLinear()
      .domain([0, 100])
      .nice()
      .range([height - margin.bottom, margin.top]);

    svg.selectAll(".x-axis")
      .data([null])
      .join("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.selectAll(".y-axis")
      .data([null])
      .join("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    svg.selectAll("rect")
      .data(species, d => (d as Species).id)
      .join(
        enter => enter.append("rect")
          .attr("fill", d => d.color)
          .attr("x", d => x(d.name)!)
          .attr("y", y(0))
          .attr("height", 0)
          .attr("width", x.bandwidth()),
        update => update,
        exit => exit.remove()
      )
      .transition()
      .duration(500)
      .attr("x", d => x(d.name)!)
      .attr("y", d => y(d.count))
      .attr("height", d => y(0) - y(d.count))
      .attr("width", x.bandwidth());

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = Math.min(newWidth * 0.6, 200);
      
      svg.attr("width", newWidth)
         .attr("height", newHeight);
      
      x.range([margin.left, newWidth - margin.right]);
      y.range([newHeight - margin.bottom, margin.top]);
      
      svg.selectAll(".x-axis")
         .attr("transform", `translate(0,${newHeight - margin.bottom})`)
         .call(d3.axisBottom(x));
      
      svg.selectAll(".y-axis")
         .call(d3.axisLeft(y));
      
      svg.selectAll("rect")
         .attr("x", d => x(d.name)!)
         .attr("y", d => y(d.count))
         .attr("height", d => y(0) - y(d.count))
         .attr("width", x.bandwidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [species]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
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
    const height = Math.min(width * 0.6, 200);
    
    const points = species.flatMap(sp =>
      Array.from({ length: sp.count }, (_, i) => ({
        id: `${sp.id}-${i}`,
        color: sp.color,
        x: Math.random() * width,
        y: Math.random() * height
      }))
    );
    
    const svg = d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#f0f0f0")
      .style("border-radius", "4px");
    
    svg.selectAll("circle")
      .data(points, d => (d as {id: string}).id)
      .join(
        enter => enter.append("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r", 0)
          .attr("fill", d => d.color)
          .attr("opacity", 0.8)
          .call(enter => enter.transition().duration(500).attr("r", 5)),
        update => update,
        exit => exit.transition().duration(500).attr("r", 0).remove()
      );

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = Math.min(newWidth * 0.6, 200);
      
      svg.attr("width", newWidth)
         .attr("height", newHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [species]);

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <svg ref={ref} style={{ maxWidth: '100%' }} />
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
    const newId = Math.max(...species.map(sp => sp.id)) + 1;
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

  const styles = {
    container: { 
      display: 'flex', 
      flexDirection: 'column',
      gap: '2rem', 
      padding: '1.5rem',
      fontFamily: 'sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        padding: '2.5rem'
      }
    },
    controls: { 
      flex: 1,
      minWidth: '280px',
      '@media (min-width: 768px)': {
        maxWidth: '400px'
      }
    },
    visuals: { 
      flex: 1,
      '@media (min-width: 768px)': {
        flex: 2
      }
    },
    controlGroup: { 
      marginBottom: '1rem',
      background: '#f3f3f3',
      padding: '0.75rem',
      borderRadius: '8px'
    },
    slider: { 
      width: '100%',
      height: '4px',
      WebkitAppearance: 'none',
      background: '#ddd',
      borderRadius: '2px',
      outline: 'none',
      opacity: '0.7',
      transition: 'opacity .2s',
      '&::-webkit-slider-thumb': {
        WebkitAppearance: 'none',
        width: '12px',
        height: '12px',
        background: '#666',
        borderRadius: '50%',
        cursor: 'pointer'
      },
      '&::-moz-range-thumb': {
        width: '12px',
        height: '12px',
        background: '#666',
        borderRadius: '50%',
        cursor: 'pointer',
        border: 'none'
      }
    },
    result: { 
      background: '#f0f0f0', 
      padding: '1.25rem', 
      borderRadius: '8px',
      marginTop: '1rem'
    },
    visBlock: { 
      marginBottom: '2rem'
    },
    addButton: {
      width: '100%',
      padding: '0.75rem',
      background: 'transparent',
      color: '#111111',
      border: '2px solid #111111',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '1rem',
      transition: 'all 0.2s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.95rem',
      fontWeight: 500,
      '&:hover': {
        background: '#111111',
        color: 'white'
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    },
    removeButton: {
      padding: '0.25rem 0.5rem',
      background: '#ff4444',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '1rem',
      fontSize: '0.8rem',
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      }
    }
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <div style={styles.controls as React.CSSProperties}>
        <h2>操作パネル</h2>
        <button 
          style={styles.addButton as React.CSSProperties}
          onClick={addSpecies}
          disabled={species.length >= INITIAL_COLORS.length}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          新しい種を追加
        </button>
        {species.map(sp => (
          <div key={sp.id} style={styles.controlGroup}>
            <label style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <div style={{width: '12px', height: '12px', background: sp.color, borderRadius: '50%'}} />
              {sp.name}: <strong>{sp.count}</strong>
              <button 
                style={styles.removeButton as React.CSSProperties}
                onClick={() => removeSpecies(sp.id)}
                disabled={species.length <= 1}
              >
                削除
              </button>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={sp.count}
              onChange={(e) => handleCountChange(sp.id, parseInt(e.target.value, 10))}
              style={styles.slider as React.CSSProperties}
            />
          </div>
        ))}
        <div style={styles.result}>
          <h3>計算結果</h3>
          <p>シャノン指数 (H'): {h.toFixed(3)}</p>
          <p>均等度 (J'): {j.toFixed(3)}</p>
        </div>
      </div>

      <div style={styles.visuals as React.CSSProperties}>
        <h2>可視化エリア</h2>
        <div style={styles.visBlock}>
          <h3>各種の個体数 (Bar Chart)</h3>
          <BarChart species={species} />
        </div>
        <div style={styles.visBlock}>
          <h3>個体分布 (Scatter Plot)</h3>
          <ScatterPlot species={species} />
        </div>
      </div>
    </div>
  );
}