import Button from '../components/Button';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return <PageHero eyebrow="Erro 404" title="Essa página não foi encontrada." description="O endereço pode ter mudado ou não estar mais disponível."><div className="actions"><Button to="/">Voltar para o início</Button><Button to="/solucoes" variant="secondary">Conhecer soluções</Button></div></PageHero>;
}
