import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { contact } from '../data/site';

const timeline = [
  ['1996', 'O começo', 'A IBMEC Jr nasce para aproximar o conhecimento acadêmico dos alunos do Ibmec dos desafios reais do mercado.'],
  ['Anos seguintes', 'Aprendizado em escala', 'Projeto a projeto, a empresa amplia sua atuação em gestão, estratégia, inovação e tecnologia.'],
  ['Hoje', 'Experiência que continua', 'Quase três décadas depois, novos talentos seguem se desenvolvendo enquanto constroem soluções para organizações reais.'],
];

export default function Sobre() {
  return <>
    <PageHero eyebrow="Sobre nós" title="Conhecimento acadêmico encontrando desafios reais desde 1996." description="Uma empresa júnior formada por alunos do Ibmec e movida pelo desenvolvimento profissional através da prática." />
    <section className="section" id="historia"><div className="container about-intro"><div><SectionHeader eyebrow="Nossa história" title="Uma trajetória construída projeto por projeto." /></div><div className="prose"><p>A IBMEC Jr foi fundada em 1996 com o propósito de conectar o conhecimento acadêmico dos estudantes do Ibmec às necessidades concretas do mercado.</p><p>Ao longo de quase três décadas, centenas de soluções foram desenvolvidas combinando gestão, estratégia, inovação e tecnologia. Em cada entrega, empresas avançam em seus desafios enquanto jovens talentos desenvolvem experiência profissional em projetos reais.</p></div></div></section>
    <section className="section section--tinted"><div className="container"><SectionHeader eyebrow="Trajetória" title="O que muda é o desafio. A vontade de construir permanece." /><div className="timeline">{timeline.map(([year, title, text]) => <article className="timeline-item" key={year}><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="section"><div className="container identity-panel"><div><span className="kicker">IBMEC Jr Soluções</span><h2>Estratégia, execução e formação em um mesmo projeto.</h2></div><div><p>Nosso trabalho aproxima alunos, empresas e problemas que pedem respostas aplicáveis — com acompanhamento próximo e escopo construído para cada realidade.</p><address>{contact.address}</address></div></div></section>
  </>;
}
