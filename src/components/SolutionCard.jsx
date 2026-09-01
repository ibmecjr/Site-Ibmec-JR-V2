import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SolutionCard({ solution }) {
  return <Link className="card solution-card" to={solution.route}><span className="kicker">Solução</span><h3>{solution.title}</h3><p>{solution.description}</p><span className="arrow-link">Explorar <ArrowRight aria-hidden="true" size={17} /></span></Link>;
}
