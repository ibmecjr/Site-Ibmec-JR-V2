import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SolutionCard from '../components/SolutionCard';
import { solutions } from '../data/site';

export default function Solucoes() {
  return <>
    <PageHero eyebrow="Soluções" title="Da estratégia ao código. Da análise à execução." description="Explore as frentes da IBMEC Jr e encontre o ponto de partida mais adequado para o desafio da sua empresa." />
    <section className="section section--tinted"><div className="container"><div className="card-grid card-grid--two">{solutions.map((solution) => <SolutionCard key={solution.slug} solution={solution} />)}</div></div></section>
    <section className="section solution-directory"><div className="container"><div className="directory-heading"><span className="kicker">Portfólio completo</span><h2>Produtos e serviços por frente</h2></div>{solutions.map((solution, index) => <section className="directory-group" key={solution.slug}><div className="directory-group__title"><span>{String(index + 1).padStart(2, '0')}</span><h3><Link to={solution.route}>{solution.title}</Link></h3></div><div className="directory-group__links">{solution.products.map((product) => <Link key={product.id} to={`${solution.route}#${product.id}`}>{product.name}<span aria-hidden="true">→</span></Link>)}</div></section>)}</div></section>
  </>;
}
