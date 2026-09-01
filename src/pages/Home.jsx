import BrandMark from '../components/BrandMark';
import Button from '../components/Button';
import CaseCard from '../components/CaseCard';
import SectionHeader from '../components/SectionHeader';
import SolutionCard from '../components/SolutionCard';
import { cases } from '../data/cases';
import { clients, homeSolutions, partners, whatsappUrl } from '../data/site';

export default function Home() {
  return <>
    <section className="hero"><div className="container hero__grid"><div className="hero__content"><span className="eyebrow">Soluções para negócios desde 1996</span><h1>Problemas existem.<br />Nós gostamos de resolvê-los.</h1><p>Estratégia, gestão, marketing e tecnologia para transformar desafios empresariais em soluções aplicáveis — com proximidade do diagnóstico à entrega.</p><div className="actions"><Button to="/solucoes">Conheça nossas soluções</Button><Button variant="secondary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Fale com nosso Comercial</Button></div></div><div className="hero__visual" aria-hidden="true"><div className="orb orb--large" /><div className="orb orb--small" /><div className="floating-card floating-card--one"><small>TRAJETÓRIA</small><strong>Desde 1996</strong><span>conectando conhecimento e mercado.</span></div><div className="floating-card floating-card--two"><small>PORTFÓLIO</small><strong>Gestão + Tech</strong><span>da estratégia à implementação.</span></div></div></div></section>

    <section className="client-strip" aria-label="Clientes"><div className="client-strip__label">Empresas que já confiaram na IBMEC Jr</div><div className="client-marquee"><div className="client-marquee__track">{[...clients, ...clients].map((client, index) => <div className="client-marquee__item" key={`${client.name}-${index}`}><BrandMark brand={client} decorative={index >= clients.length} /></div>)}</div></div></section>

    <section className="section section--tinted"><div className="container"><SectionHeader eyebrow="O que fazemos" title="Você não precisa saber o nome da solução. Basta saber o problema." description="Reunimos consultoria e execução em seis grandes frentes para encontrar um ponto de partida compatível com o desafio da sua empresa." /><div className="card-grid card-grid--three">{homeSolutions.map((solution) => <SolutionCard key={solution.slug} solution={solution} />)}</div><div className="section-action"><Button variant="secondary" to="/solucoes">Ver portfólio completo</Button></div></div></section>

    <section className="section"><div className="container"><SectionHeader eyebrow="Cases" title="Entrega real merece contexto." description="Esta área receberá projetos autorizados, com o desafio, o trabalho desenvolvido e os resultados que puderem ser divulgados." />{cases.length > 0 ? <div className="card-grid card-grid--three">{cases.slice(0, 3).map((item) => <CaseCard key={item.slug} item={item} />)}</div> : <div className="content-placeholder"><strong>Cases em preparação</strong><span>Nenhum projeto ou resultado foi inventado. Os cases entram aqui quando o conteúdo institucional for aprovado.</span></div>}</div></section>

    <section className="section section--tinted"><div className="container"><SectionHeader eyebrow="Como trabalhamos" title="Processo claro. Execução próxima. Entrega aplicável." /><div className="process-grid">{[['01', 'Conversa', 'Entendemos o negócio, o contexto e o desafio.'], ['02', 'Diagnóstico', 'Organizamos a necessidade e avaliamos o melhor caminho.'], ['03', 'Proposta', 'Definimos escopo, etapas e expectativas de entrega.'], ['04', 'Execução', 'Desenvolvemos, acompanhamos e entregamos a solução.']].map(([number, title, text]) => <article className="process-step" key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="section partner-section"><div className="container partner-panel"><div><span className="kicker">Parcerias</span><h2>Conexões que ampliam a experiência.</h2><p>A Red Bull integra nossa rede de parceiros institucionais.</p></div><div className="partner-mark">{partners.map((partner) => <BrandMark brand={partner} key={partner.name} />)}</div></div></section>
  </>;
}
