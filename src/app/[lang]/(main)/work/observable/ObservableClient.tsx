'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from './page.module.css';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectDescription from '@/components/ProjectDescription';
import { useTranslations } from '../../../i18n';

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
  { id: 1, name: "A", count: 15, color: INITIAL_COLORS[0] },
  { id: 2, name: "B", count: 15, color: INITIAL_COLORS[1] },
  { id: 3, name: "C", count: 15, color: INITIAL_COLORS[2] },
];

// --- 子コンポーネント: 棒グラフ ---
const BarChart = ({ species }: { species: Species[] }) => {
  const ref = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = Math.min(width * 0.7, 350);
    const margin = { top: 20, right: 20, bottom: 60, left: 50 };
    const svg = d3.select(ref.current).attr('width', width).attr('height', height);
    svg.selectAll('*').remove();
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const x = d3.scaleBand<string>()
      .domain(species.map(d => d.name))
      .range([0, innerWidth])
      .padding(0.2);
    const y = d3.scaleLinear()
      .domain([0, 100])
      .nice()
      .range([innerHeight, 0]);
    g.append('g')
      .attr('class', styles.xAxis)
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-45)');
    g.append('g')
      .attr('class', styles.yAxis)
      .call(d3.axisLeft(y).ticks(5));
    g.selectAll('.bar')
      .data(species)
      .join('rect')
      .attr('class', 'bar')
      .attr('fill', d => d.color)
      .attr('x', d => x(d.name) || 0)
      .attr('width', x.bandwidth())
      .attr('y', y(0))
      .attr('height', 0)
      .transition()
      .duration(750)
      .attr('y', d => y(d.count))
      .attr('height', d => innerHeight - y(d.count));
  }, [species]);
  return (
    <div ref={containerRef} style={{ width: '100%', minHeight: '350px' }}>
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
    const height = Math.min(width, 350);
    interface Point { id: string; color: string; x: number; y: number; }
    const points = species.flatMap(sp =>
      Array.from({ length: sp.count }, (_, i) => ({
        id: `${sp.id}-${i}`, color: sp.color, x: Math.random() * width, y: Math.random() * height
      }))
    );
    const svg = d3.select(ref.current).attr('width', width).attr('height', height);
    svg.selectAll<SVGCircleElement, Point>('circle')
      .data(points, d => d.id)
      .join(
        enter => enter.append('circle')
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .attr('r', 0)
          .attr('fill', d => d.color)
          .attr('opacity', 0.7)
          .call(enter => enter.transition().duration(500).attr('r', 5)),
        update => update,
        exit => exit.transition().duration(500).attr('r', 0).remove()
      );
  }, [species]);
  return (
    <div ref={containerRef} style={{ width: '100%', height: '350px' }}>
      <svg ref={ref} className={styles.scatterPlotSvg} />
    </div>
  );
};

export default function ObservableClient() {
  const { t } = useTranslations();
  const [species, setSpecies] = useState<Species[]>(INITIAL_SPECIES);

  const handleCountChange = (id: number, count: number) => {
    setSpecies(prev => prev.map(sp => sp.id === id ? { ...sp, count } : sp));
  };
  const addSpecies = () => {
    const newId = (species.length > 0 ? Math.max(...species.map(sp => sp.id)) : 0) + 1;
    const newColor = INITIAL_COLORS[species.length % INITIAL_COLORS.length];
    setSpecies([...species, {
      id: newId,
      name: String.fromCharCode(65 + species.length),
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
    const S = species.filter(sp => sp.count > 0).length;
    if (S <= 1) return { h: 0, j: 0 };
    let h = 0;
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
  const projectInfo = {
    title: t('observable.title'),
    keywords: [t('observable.keywords.0'), t('observable.keywords.1'), t('observable.keywords.2')],
    background: t('observable.background'),
    objective: t('observable.objective'),
  };
  return (
    <div className={styles.pageContainer} style={{ width: '90vw', margin: '0 auto' }}>
      <ProjectHeader
        title={t('observable.header.title')}
        date={t('observable.header.date')}
        description={t('observable.header.description')}
      />
      <div className={styles.main}>
        <div className={styles.controls}>
          <h2>{t('observable.controls.title')}</h2>
          <button className={styles.addButton} onClick={addSpecies} disabled={species.length >= 6}>
            {t('observable.controls.addSpecies')}
          </button>
          {species.map(sp => (
            <div key={sp.id} className={styles.controlGroup}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontWeight: 500 }}>{t('observable.controls.species')} {sp.name}</span>
                <button className={styles.removeButton} onClick={() => removeSpecies(sp.id)} disabled={species.length <= 1}>
                  {t('observable.controls.remove')}
                </button>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={sp.count}
                className={styles.slider}
                onChange={e => handleCountChange(sp.id, Number(e.target.value))}
              />
              <div style={{ fontSize: '0.95rem', color: '#666', marginTop: '0.5rem' }}>
                {t('observable.controls.count')}: {sp.count}
              </div>
            </div>
          ))}
          <div className={styles.result}>
            <h3>{t('observable.controls.result')}</h3>
            <div>{t('observable.controls.shannon')}: {h.toFixed(3)}</div>
            <div>{t('observable.controls.evenness')}: {j.toFixed(3)}</div>
          </div>
        </div>
        <div className={styles.visuals}>
          <div className={styles.visBlock}>
            <h3>{t('observable.controls.barChart')}</h3>
            <BarChart species={species} />
          </div>
          <div className={styles.visBlock}>
            <h3>{t('observable.controls.scatterPlot')}</h3>
            <ScatterPlot species={species} />
          </div>
        </div>
      </div>
      <ProjectDescription
        title={projectInfo.title}
        keywords={projectInfo.keywords}
        background={projectInfo.background}
        objective={projectInfo.objective}
      />
    </div>
  );
} 