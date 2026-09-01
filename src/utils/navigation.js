import { solutions } from '../data/solutions.js';

const solutionPaths = ['/solucoes', ...solutions.map((solution) => solution.route)];

export function isNavItemActive(pathname, item) {
  if (item === 'inicio') return pathname === '/';
  if (item === 'solucoes') return solutionPaths.includes(pathname);
  if (item === 'clientes') return pathname === '/clientes';
  if (item === 'cases') return pathname === '/cases' || pathname.startsWith('/cases/');
  if (item === 'sobre') return pathname === '/sobre';
  return false;
}
