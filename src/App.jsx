import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollManager from './components/ScrollManager';
import Seo from './components/Seo';
import { solutions } from './data/site';
import CaseDetail from './pages/CaseDetail';
import Cases from './pages/Cases';
import Clientes from './pages/Clientes';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductGroup from './pages/ProductGroup';
import Sobre from './pages/Sobre';
import Solucoes from './pages/Solucoes';

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('enter');

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return undefined;
    setTransitionStage('exit');
    const timer = window.setTimeout(() => {
      setDisplayLocation(location);
      setTransitionStage('enter');
    }, 140);
    return () => window.clearTimeout(timer);
  }, [location, displayLocation.pathname]);

  return <div className="site">
    <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
    <Seo />
    <ScrollManager />
    <Header />
    <main id="main-content">
      <div className={`route-view route-view--${transitionStage}`} key={displayLocation.pathname}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<CaseDetail />} />
          <Route path="/sobre" element={<Sobre />} />
          {solutions.map((solution) => <Route key={solution.slug} path={solution.route} element={<ProductGroup groupSlug={solution.slug} />} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
    <Footer />
  </div>;
}
