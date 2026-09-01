import { Link } from 'react-router-dom';
import { contact, footerSolutions, whatsappUrl } from '../data/site';
import Button from './Button';

export default function Footer() {
  return <>
    <section className="contact-band"><div><span className="kicker">Vamos conversar</span><h2>Qual problema a sua empresa quer resolver agora?</h2><p>Converse diretamente com nosso time Comercial pelo WhatsApp.</p></div><Button variant="whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</Button></section>
    <footer className="footer"><div className="footer-grid">
      <div className="footer-brand"><Link className="footer-logo" to="/" aria-label="IBMEC Jr — Início"><img src="/brand/logo-light.png" alt="IBMEC Jr" /></Link><p>Desde 1996, conectando conhecimento acadêmico a desafios reais de mercado por meio de gestão, estratégia, inovação e tecnologia.</p></div>
      <div><h2>Soluções</h2>{footerSolutions.map((solution) => <Link key={solution.slug} to={solution.route}>{solution.title}</Link>)}<Link to="/solucoes">Todas as soluções</Link></div>
      <div><h2>Empresa</h2><Link to="/sobre">Sobre nós</Link><Link to="/clientes">Clientes</Link><Link to="/cases">Cases</Link><Link to="/sobre#historia">Nossa história</Link></div>
      <div><h2>Contato</h2><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Comercial ↗</a><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><address>{contact.address}</address></div>
    </div><div className="footer-bottom"><span>© 2026 IBMEC Jr Soluções.</span><span>Rio de Janeiro, RJ</span></div></footer>
  </>;
}
