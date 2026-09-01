import { useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { caseBySlug } from '../data/cases';
import NotFound from './NotFound';

export default function CaseDetail() {
  const { slug } = useParams();
  const item = caseBySlug(slug);
  if (!item) return <NotFound />;

  return <><PageHero eyebrow={item.category || 'Case'} title={item.title} description={item.summary} />{item.challenge && <section className="section"><div className="container prose"><span className="kicker">O desafio</span><h2>O que precisava ser resolvido.</h2><p>{item.challenge}</p></div></section>}{item.solution && <section className="section section--tinted"><div className="container prose"><span className="kicker">A solução</span><h2>O que a IBMEC Jr construiu.</h2><p>{item.solution}</p></div></section>}{item.results && <section className="section"><div className="container prose"><span className="kicker">Resultado</span><p className="quote">{item.results}</p></div></section>}</>;
}
