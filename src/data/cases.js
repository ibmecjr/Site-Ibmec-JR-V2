// Cases reais ainda não foram fornecidos. Não inclua conteúdo fictício aqui.
// Estrutura esperada: { slug, client, title, category, summary, challenge, solution, results, metrics, image }
export const cases = [];

export function caseBySlug(slug) {
  return cases.find((item) => item.slug === slug);
}
