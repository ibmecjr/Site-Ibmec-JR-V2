import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseCard({ item }) {
  return <Link className="card case-card" to={`/cases/${item.slug}`}>
    {item.image ? <img className="case-card__image" src={item.image} alt="" /> : <div className="case-card__art" aria-hidden="true" />}
    <div className="case-card__body">{item.category && <span className="kicker">{item.category}</span>}<h3>{item.title}</h3>{item.summary && <p>{item.summary}</p>}<span className="arrow-link">Conhecer projeto <ArrowRight aria-hidden="true" size={17} /></span></div>
  </Link>;
}
