import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { caseBySlug } from '../data/cases';
import { solutionByRoute } from '../data/site';

const metadata = {
  '/': ['IBMEC Jr Soluções | Consultoria, Estratégia e Tecnologia', 'Consultoria, estratégia, marketing, tecnologia, dados e automação para transformar desafios empresariais em soluções aplicáveis.'],
  '/solucoes': ['Soluções | IBMEC Jr', 'Conheça o portfólio de estratégia, mercado, marketing, tecnologia, dados, automação e ferramentas empresariais da IBMEC Jr.'],
  '/clientes': ['Clientes | IBMEC Jr', 'Conheça empresas que já confiaram em soluções desenvolvidas pela IBMEC Jr.'],
  '/cases': ['Cases | IBMEC Jr', 'Projetos que mostram como a IBMEC Jr pensa e entrega.'],
  '/sobre': ['Sobre nós | IBMEC Jr', 'Conheça a história da IBMEC Jr, fundada em 1996 no Rio de Janeiro.'],
};

const solutionDescriptions = {
  tecnologia: 'Tecnologia e software sob medida para transformar necessidades de negócio em soluções digitais.',
  'estrategia-gestao': 'Consultoria, planejamento e gestão para decisões mais claras e operações mais eficientes.',
  'dados-ia': 'Dashboards, análise de dados e inteligência artificial aplicados a decisões melhores.',
};

export default function Seo() {
  const { pathname } = useLocation();
  const caseSlug = pathname.startsWith('/cases/') ? pathname.split('/').filter(Boolean)[1] : null;
  const caseItem = caseSlug ? caseBySlug(caseSlug) : null;
  const solution = solutionByRoute(pathname);
  const solutionMetadata = solution
    ? [`${solution.title} | IBMEC Jr`, solutionDescriptions[solution.slug] || solution.description]
    : null;
  const pageMetadata = caseItem
    ? [`${caseItem.title} | IBMEC Jr`, caseItem.summary || metadata['/cases'][1]]
    : solutionMetadata || metadata[pathname];
  const [title, description] = pageMetadata || ['Página não encontrada | IBMEC Jr', 'A página solicitada não foi encontrada.'];

  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }, [title, description]);

  return null;
}
