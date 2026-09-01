export const solutions = [
  {
    slug: 'estrategia-gestao',
    route: '/consultoria',
    title: 'Estratégia & Gestão',
    description: 'Clareza para decidir, organizar a operação e transformar objetivos em um plano executável.',
    home: true,
    products: [
      {
        id: 'plano-financeiro', name: 'Plano Financeiro',
        summary: 'Organiza os números do negócio para dar visibilidade sobre caixa, lucro, preços e decisões.',
        solves: ['Falta de controle do fluxo de caixa', 'Dúvidas sobre lucro real e precificação', 'Decisões financeiras sem base'],
        deliverables: ['Relatório de planejamento financeiro', 'Diagnóstico e precificação', 'Cenários e ferramenta de controle', 'Orientação para uso da ferramenta'],
      },
      {
        id: 'plano-de-marketing', name: 'Plano de Marketing',
        summary: 'Estrutura cliente ideal, concorrência, canais, mensagens e ações de aquisição.',
        solves: ['Falta de clareza sobre o cliente ideal', 'Dificuldade para escolher canais e mensagens', 'Aquisição sem planejamento'],
        deliverables: ['Plano e diagnóstico de marketing', 'Posicionamento e perfil de cliente ideal', 'Mix de marketing', 'Plano de ação'],
      },
      {
        id: 'planejamento-estrategico', name: 'Planejamento Estratégico',
        summary: 'Define direção, metas e prioridades para alinhar o time e reduzir a dependência do dono.',
        solves: ['Ausência de direção e prioridades', 'Equipe desalinhada', 'Operação excessivamente dependente do dono'],
        deliverables: ['Diagnóstico do negócio', 'Missão, visão e valores', 'Objetivos e mapa estratégico', 'Indicadores e plano de ação'],
      },
      {
        id: 'estudo-de-viabilidade-economica', name: 'Estudo de Viabilidade Econômica (EVE)',
        summary: 'Avalia novos negócios e expansões com projeções, retorno esperado e análise de riscos.',
        solves: ['Incerteza antes de investir ou expandir', 'Falta de projeções de receita e despesa', 'Risco e retorno pouco claros'],
        deliverables: ['Parecer de viabilidade', 'Projeções e estimativa de demanda', 'Ponto de equilíbrio e payback', 'Cenários e recomendação'],
      },
      {
        id: 'mapeamento-de-processos', name: 'Mapeamento de Processos',
        summary: 'Torna a operação mais clara ao identificar gargalos, retrabalho e conhecimento concentrado.',
        solves: ['Gargalos e retrabalho', 'Processos desorganizados', 'Dificuldade para treinar e delegar'],
        deliverables: ['Fluxogramas atuais e otimizados', 'Procedimentos operacionais e documentação', 'Indicadores', 'Dashboard de acompanhamento'],
      },
    ],
  },
  {
    slug: 'inteligencia-de-mercado', route: '/mercado', title: 'Inteligência de Mercado',
    description: 'Informação estruturada para compreender o mercado, os clientes e as oportunidades reais.', home: true,
    products: [
      {
        id: 'analise-mercadologica', name: 'Análise Mercadológica',
        summary: 'Dimensiona o mercado e organiza evidências sobre concorrência, sazonalidade, tendências e demanda.',
        solves: ['Pouca visibilidade sobre o mercado', 'Decisões sem leitura de concorrência e tendências', 'Dúvidas sobre demanda e oportunidade'],
        deliverables: ['Relatório de mercado e concorrência', 'Tendências e dimensionamento', 'Estágio da demanda', 'Oportunidades, ameaças e projeções'],
      },
      {
        id: 'pesquisa-de-clientes', name: 'Pesquisa de Clientes',
        summary: 'Investiga percepções, reclamações, churn e dúvidas para orientar melhorias no produto e na experiência.',
        solves: ['Perda de clientes e reclamações recorrentes', 'Percepção do consumidor pouco conhecida', 'Dúvidas sobre preço e produto'],
        deliverables: ['Relatório da pesquisa', 'Análise quantitativa e qualitativa', 'Mapa de empatia e percepção do consumidor', 'Recomendações'],
      },
    ],
  },
  {
    slug: 'marketing-digital', route: '/marketing-digital', title: 'Marketing & Presença Digital',
    description: 'Presença profissional, conteúdo consistente e canais digitais preparados para gerar oportunidades.', home: true,
    products: [
      {
        id: 'presenca-digital-express', name: 'Presença Digital Express',
        summary: 'Estrutura os pontos essenciais para empresas que ainda têm uma presença digital improvisada ou incompleta.',
        solves: ['Ausência de presença profissional', 'Identidade e canais improvisados', 'Falta de uma página de conversão'],
        deliverables: ['Identidade visual e landing page', 'Catálogo ou menu digital', 'Google Business e Instagram', 'WhatsApp Business e orientação de uso'],
      },
      {
        id: 'gestao-de-redes-sociais', name: 'Gestão de Redes Sociais',
        summary: 'Mantém os canais ativos com planejamento, produção e acompanhamento contínuo.',
        solves: ['Redes sociais inativas', 'Publicações sem consistência', 'Ausência de acompanhamento de resultados'],
        deliverables: ['Planejamento e produção', 'Publicação e calendário editorial', 'Relatório mensal'],
      },
      {
        id: 'producao-de-conteudo-em-video', name: 'Produção de Conteúdo em Vídeo',
        summary: 'Transforma ideias e materiais brutos em vídeos finalizados para redes sociais.',
        solves: ['Falta de vídeos', 'Materiais brutos sem edição', 'Conteúdo audiovisual com baixa qualidade'],
        deliverables: ['Vídeos editados e finalizados para redes sociais'],
      },
      {
        id: 'social-media-day', name: 'Social Media Day',
        summary: 'Cria um banco de conteúdo em uma produção concentrada para alimentar os canais da empresa.',
        solves: ['Falta de fotos e vídeos', 'Ausência de um banco de conteúdo', 'Dificuldade para manter frequência'],
        deliverables: ['Banco de fotos e vídeos', 'Reels e cortes', 'Sugestão de calendário'],
      },
    ],
  },
  {
    slug: 'tecnologia', route: '/tecnologia', title: 'Tecnologia & Software',
    description: 'Produtos digitais sob medida, da interface à infraestrutura necessária para colocá-los em operação.', home: true,
    products: [
      { id: 'sites-landing-pages', name: 'Sites e landing pages', summary: 'Experiências web responsivas para apresentar marcas, serviços e campanhas.' },
      { id: 'sistemas-saas', name: 'Sistemas e SaaS', summary: 'Soluções web para organizar operações e transformar processos em produtos digitais.' },
      { id: 'aplicativos', name: 'Aplicativos', summary: 'Aplicações pensadas para a jornada e as necessidades específicas de cada projeto.' },
      { id: 'front-end', name: 'Front-end', summary: 'Interfaces responsivas, acessíveis e alinhadas à experiência do usuário.' },
      { id: 'back-end', name: 'Back-end', summary: 'Estrutura de dados, regras de negócio e serviços que sustentam a solução.' },
      { id: 'solucoes-web', name: 'Soluções web', summary: 'Projetos digitais completos para desafios que pedem uma resposta online.' },
      { id: 'ferramentas-sob-medida', name: 'Ferramentas sob medida', summary: 'Recursos digitais desenvolvidos para uma rotina ou necessidade particular.' },
    ],
  },
  {
    slug: 'dados-ia', route: '/dados-ia', title: 'Dados & IA',
    description: 'Dados organizados e inteligência aplicada para comunicar resultados e apoiar decisões melhores.', home: true,
    products: [
      { id: 'dashboards', name: 'Dashboards', summary: 'Painéis para acompanhar indicadores e enxergar o que merece atenção.' },
      { id: 'analise-de-dados', name: 'Análise de dados', summary: 'Leitura estruturada de dados para revelar padrões, diferenças e oportunidades.' },
      { id: 'relatorios', name: 'Relatórios', summary: 'Sínteses claras para transformar análise em entendimento compartilhado.' },
      { id: 'implementacao-de-ia', name: 'Implementação de IA', summary: 'Aplicação de inteligência artificial em fluxos e necessidades do negócio.' },
      { id: 'cortes-com-ia', name: 'Cortes com IA', summary: 'Apoio de inteligência artificial para gerar cortes de conteúdo audiovisual.' },
    ],
  },
  {
    slug: 'automacao-integracoes', route: '/automacao', title: 'Automação & Integrações',
    description: 'Fluxos mais ágeis e conectados para reduzir tarefas manuais e aproximar ferramentas.', home: true,
    products: [
      { id: 'automacoes', name: 'Automações', summary: 'Rotinas automatizadas para reduzir trabalho repetitivo e aumentar consistência.' },
      { id: 'apis', name: 'APIs', summary: 'Interfaces que permitem a comunicação estruturada entre sistemas.' },
      { id: 'integracoes', name: 'Integrações', summary: 'Conexões entre ferramentas para manter informações e etapas sincronizadas.' },
      { id: 'integracao-whatsapp', name: 'Integração com WhatsApp', summary: 'Integração do WhatsApp a fluxos e soluções digitais da empresa.' },
    ],
  },
  {
    slug: 'ferramentas-empresariais', route: '/ferramentas-empresariais', title: 'Ferramentas Empresariais',
    description: 'Controles simples e úteis para tirar informações da dispersão e apoiar a rotina da empresa.',
    products: [{
      id: 'kit-digital-de-organizacao-empresarial', name: 'Kit Digital de Organização Empresarial',
      summary: 'Centraliza controles que hoje estão espalhados ou dependem de rotinas manuais.',
      solves: ['Gestão dispersa e controles manuais', 'Falta de acompanhamento de clientes, estoque e finanças', 'Agenda e informações desorganizadas'],
      deliverables: ['Planilhas, modelos e controles', 'Dashboards simples', 'Manual de uso', 'Treinamento e orientação'],
    }],
  },
  {
    slug: 'infraestrutura-suporte', route: '/infraestrutura-suporte', title: 'Infraestrutura & Suporte',
    description: 'Base técnica e acompanhamento para publicar, manter e evoluir soluções digitais.',
    products: [
      { id: 'deploy-hospedagem', name: 'Deploy e hospedagem', summary: 'Publicação e configuração do ambiente necessário para a solução funcionar.' },
      { id: 'manutencao-monitoramento', name: 'Manutenção e monitoramento', summary: 'Acompanhamento técnico para preservar disponibilidade e evolução.' },
      { id: 'versionamento', name: 'Versionamento', summary: 'Organização do histórico de mudanças e colaboração no desenvolvimento.' },
      { id: 'suporte-tecnico', name: 'Suporte técnico', summary: 'Apoio para dúvidas, ajustes e necessidades técnicas do projeto.' },
    ],
  },
];

export const homeSolutions = solutions.filter((solution) => solution.home);

export const footerSolutions = ['estrategia-gestao', 'inteligencia-de-mercado', 'marketing-digital', 'tecnologia']
  .map((slug) => solutions.find((solution) => solution.slug === slug));

function productLink(groupSlug, productId, label) {
  const group = solutions.find((solution) => solution.slug === groupSlug);
  const product = group?.products.find((item) => item.id === productId);
  return { label: label || product?.name, to: `${group.route}#${productId}` };
}

export const megaMenuGroups = [
  { title: 'Consultoria & Gestão', to: '/consultoria', links: solutions[0].products.map((product) => ({ label: product.name, to: `/consultoria#${product.id}` })) },
  { title: 'Mercado', to: '/mercado', links: solutions[1].products.map((product) => ({ label: product.name, to: `/mercado#${product.id}` })) },
  { title: 'Marketing & Digital', to: '/marketing-digital', links: solutions[2].products.map((product) => ({ label: product.name, to: `/marketing-digital#${product.id}` })) },
  { title: 'Tecnologia', to: '/tecnologia', links: [
    productLink('tecnologia', 'sites-landing-pages', 'Sites'),
    productLink('tecnologia', 'sistemas-saas', 'Sistemas / SaaS'),
    productLink('tecnologia', 'aplicativos'),
    { label: 'Dados & IA', to: '/dados-ia' },
    { label: 'Automação / APIs', to: '/automacao' },
  ] },
];

export function solutionBySlug(slug) {
  return solutions.find((solution) => solution.slug === slug);
}

export function solutionByRoute(route) {
  return solutions.find((solution) => solution.route === route);
}
