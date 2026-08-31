import api from '../../services/api';
import useFetch from '../../services/useFetch';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projetos.css';

export default function Projetos() {
  const { data: projetos, status } = useFetch(api.getProjetos, []);

  return (
    <section className="section projetos-page">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Nossos veículos</span>
          <h1 className="section-title">Projetos</h1>
          <p className="section-lead">
            Cada veículo que construímos é uma iteração sobre a mesma pergunta:
            como levar hidrogênio para dentro de um carro de competição sem abrir
            mão de desempenho.
          </p>
        </div>

        {status === 'loading' && (
          <p className="state-message">Carregando projetos…</p>
        )}

        {status === 'error' && (
          <p className="state-message state-message--error">
            Não foi possível carregar os projetos agora. Tente novamente em instantes.
          </p>
        )}

        {status === 'success' && projetos.length === 0 && (
          <p className="state-message">Nenhum projeto cadastrado ainda.</p>
        )}

        {status === 'success' && projetos.length > 0 && (
          <div className="projetos-list">
            {projetos.map((projeto) => (
              <ProjectCard key={projeto.id} projeto={projeto} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
