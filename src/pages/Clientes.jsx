import { Link } from 'react-router-dom';
import BrandMark from '../components/BrandMark';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { clients, partners } from '../data/site';

function ClientItem({ client }) {
  if (client.caseSlug) return <Link className="client-card" to={`/cases/${client.caseSlug}`}><BrandMark brand={client} /></Link>;
  return <div className="client-card"><BrandMark brand={client} /></div>;
}

export default function Clientes() {
  return <>
    <PageHero eyebrow="Clientes" title="Empresas que já construíram com a IBMEC Jr." description="Marcas de diferentes setores que confiaram à nossa equipe desafios de negócio, comunicação e tecnologia." />
    <section className="section"><div className="container"><div className="client-grid">{clients.map((client) => <ClientItem client={client} key={client.name} />)}</div><p className="asset-note">Quando um arquivo oficial não pôde ser confirmado com segurança, mantivemos a marca identificada por texto até o envio do asset correto.</p></div></section>
    <section className="section section--tinted"><div className="container"><SectionHeader eyebrow="Parceiros" title="Relações que fortalecem nossa formação e atuação." description="Parceiros institucionais aparecem separados da carteira de clientes para preservar o contexto de cada relação." /><div className="partner-grid">{partners.map((partner) => <div className="client-card" key={partner.name}><BrandMark brand={partner} /></div>)}</div></div></section>
  </>;
}
