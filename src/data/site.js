export { clients, partners } from './clients.js';
export {
  footerSolutions,
  homeSolutions,
  megaMenuGroups,
  solutions,
  solutionByRoute,
  solutionBySlug,
} from './solutions.js';

export const contact = {
  address: 'Av. Armando Lombardi, 940 — Barra da Tijuca, Rio de Janeiro — RJ',
  instagram: 'https://www.instagram.com/ibmecjr/',
  linkedin: 'https://www.linkedin.com/company/ibmecjr/posts/?feedView=all',
};

const whatsappNumber = '5521972257889';

export function whatsappUrl(message = 'Olá! Vim pelo site da IBMEC Jr e gostaria de conhecer as soluções.') {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
