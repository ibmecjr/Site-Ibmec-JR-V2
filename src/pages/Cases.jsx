import { useMemo, useState } from 'react';
import CaseCard from '../components/CaseCard';
import PageHero from '../components/PageHero';
import { cases } from '../data/cases';

export default function Cases() {
  const categories = useMemo(() => [...new Set(cases.map((item) => item.category).filter(Boolean))], []);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const visibleCases = activeCategory === 'Todos' ? cases : cases.filter((item) => item.category === activeCategory);

  return <><PageHero eyebrow="Cases" title="Projetos que mostram como pensamos e entregamos." description="Problema, abordagem, solução e impacto." /><section className="section section--tinted"><div className="container">{categories.length > 0 && <div className="filters" aria-label="Filtrar cases"><button className={activeCategory === 'Todos' ? 'is-active' : ''} type="button" onClick={() => setActiveCategory('Todos')}>Todos</button>{categories.map((category) => <button className={activeCategory === category ? 'is-active' : ''} type="button" key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>}{visibleCases.length > 0 ? <div className="card-grid card-grid--three case-results" key={activeCategory}>{visibleCases.map((item) => <CaseCard key={item.slug} item={item} />)}</div> : <div className="content-placeholder"><strong>Cases em preparação</strong><span>Os projetos serão publicados quando o conteúdo real estiver disponível.</span></div>}</div></section></>;
}
