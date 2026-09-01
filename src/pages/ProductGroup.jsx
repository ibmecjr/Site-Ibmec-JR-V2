import { Link } from 'react-router-dom';
import Button from '../components/Button';
import NotFound from './NotFound';
import PageHero from '../components/PageHero';
import { solutionBySlug, whatsappUrl } from '../data/site';

export default function ProductGroup({ groupSlug }) {
  const group = solutionBySlug(groupSlug);
  if (!group) return <NotFound />;

  return <><PageHero eyebrow="Soluções" title={group.title} description={group.description} /><section className="section section--tinted"><div className="container product-layout"><aside className="side-nav" aria-label={`Produtos de ${group.title}`}><strong>Nesta frente</strong>{group.products.map((product) => <Link to={`${group.route}#${product.id}`} key={product.id}>{product.name}</Link>)}</aside><div className="product-sections">{group.products.map((product, index) => <section className="product-section" id={product.id} key={product.id}><span className="kicker">{String(index + 1).padStart(2, '0')} · Produto / serviço</span><h2>{product.name}</h2><p className="product-summary">{product.summary}</p>{(product.solves || product.deliverables) && <div className="product-details">{product.solves && <div><h3>Quando faz sentido</h3><ul>{product.solves.map((item) => <li key={item}>{item}</li>)}</ul></div>}{product.deliverables && <div><h3>O que entregamos</h3><ul>{product.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>}</div>}<Button href={whatsappUrl(`Olá! Vim pelo site da IBMEC Jr e tenho interesse em ${product.name}.`)} target="_blank" rel="noopener noreferrer">Tenho interesse</Button></section>)}</div></div></section></>;
}
