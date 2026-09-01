import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { megaMenuGroups, solutions, whatsappUrl } from '../data/site';
import { isNavItemActive } from '../utils/navigation';
import Button from './Button';

export default function Header() {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const firstMegaLinkRef = useRef(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMenus = () => {
    setSolutionsOpen(false);
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileCategory(null);
  };

  useEffect(() => closeMenus(), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setSolutionsOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenus();
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const navClass = (item) => `nav-link${isNavItemActive(pathname, item) ? ' is-active' : ''}`;
  const openMegaWithKeyboard = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSolutionsOpen(true);
      window.setTimeout(() => firstMegaLinkRef.current?.focus(), 0);
    }
  };

  return <>
    <header ref={headerRef} className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="header__inner">
        <Link className="logo" to="/" onClick={closeMenus} aria-label="IBMEC Jr — Início"><img src="/brand/logo-primary.png" alt="IBMEC Jr" /></Link>
        <nav className="nav nav--desktop" aria-label="Navegação principal">
          <Link className={navClass('inicio')} to="/">Início</Link>
          <div className="nav-products" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
            <button className={navClass('solucoes')} type="button" aria-expanded={solutionsOpen} aria-controls="solutions-mega-menu" onClick={() => setSolutionsOpen((open) => !open)} onKeyDown={openMegaWithKeyboard}>Soluções <ChevronDown size={15} aria-hidden="true" /></button>
            <div id="solutions-mega-menu" className={`mega-menu${solutionsOpen ? ' is-open' : ''}`} aria-hidden={!solutionsOpen}>
              {megaMenuGroups.map((group, groupIndex) => <div className="mega-col" key={group.title}>
                <Link ref={groupIndex === 0 ? firstMegaLinkRef : undefined} className="mega-title" to={group.to} onClick={closeMenus}>{group.title}</Link>
                {group.links.map((link) => <Link key={link.to} to={link.to} onClick={closeMenus}>{link.label}</Link>)}
              </div>)}
              <Link className="mega-all arrow-link" to="/solucoes" onClick={closeMenus}>Ver todas as soluções <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <Link className={navClass('clientes')} to="/clientes">Clientes</Link>
          <Link className={navClass('cases')} to="/cases">Cases</Link>
          <Link className={navClass('sobre')} to="/sobre">Sobre nós</Link>
        </nav>
        <Button className="header-cta" variant="dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Entre em contato</Button>
        <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={() => setMobileOpen((open) => !open)}>{mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </div>
    </header>

    <button className={`mobile-backdrop${mobileOpen ? ' is-open' : ''}`} type="button" aria-label="Fechar menu" tabIndex={mobileOpen ? 0 : -1} onClick={closeMenus} />
    <aside id="mobile-menu" className={`mobile-menu${mobileOpen ? ' is-open' : ''}`} aria-hidden={!mobileOpen}>
      <nav aria-label="Navegação mobile">
        <Link className={navClass('inicio')} to="/" onClick={closeMenus}>Início</Link>
        <button className={`${navClass('solucoes')} mobile-accordion__trigger`} type="button" aria-expanded={mobileSolutionsOpen} aria-controls="mobile-solutions" onClick={() => setMobileSolutionsOpen((open) => !open)}>Soluções <ChevronDown aria-hidden="true" size={18} /></button>
        <div id="mobile-solutions" className={`mobile-accordion${mobileSolutionsOpen ? ' is-open' : ''}`}>
          <Link className="mobile-all-solutions" to="/solucoes" onClick={closeMenus}>Todas as soluções</Link>
          {solutions.map((solution) => <div className="mobile-category" key={solution.slug}>
            <button type="button" aria-expanded={mobileCategory === solution.slug} aria-controls={`mobile-${solution.slug}`} onClick={() => setMobileCategory((current) => current === solution.slug ? null : solution.slug)}>{solution.title}<ChevronDown aria-hidden="true" size={17} /></button>
            <div id={`mobile-${solution.slug}`} className={`mobile-category__links${mobileCategory === solution.slug ? ' is-open' : ''}`}>
              <Link to={solution.route} onClick={closeMenus}>Ver categoria</Link>
              {solution.products.map((product) => <Link key={product.id} to={`${solution.route}#${product.id}`} onClick={closeMenus}>{product.name}</Link>)}
            </div>
          </div>)}
        </div>
        <Link className={navClass('clientes')} to="/clientes" onClick={closeMenus}>Clientes</Link>
        <Link className={navClass('cases')} to="/cases" onClick={closeMenus}>Cases</Link>
        <Link className={navClass('sobre')} to="/sobre" onClick={closeMenus}>Sobre nós</Link>
        <Button variant="whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Entre em contato</Button>
      </nav>
    </aside>
  </>;
}
