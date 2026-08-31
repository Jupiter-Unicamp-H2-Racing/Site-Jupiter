import carroFoto from '../../assets/imagens/carro-projeto.jpg';
import './ProjectCard.css';

export default function ProjectCard({ projeto }) {
  const { nome, categoria, ano, status, resumo, descricao, destaques } = projeto;

  return (
    <article className="project-card card">
      <div className="spectrum-line">
        <span /><span /><span /><span />
      </div>

      <figure className="project-card-photo">
        <img src={carroFoto} alt={`Protótipo ${nome} da equipe Jupiter`} />
      </figure>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="badge">{categoria}</span>
          <span className="badge">{ano}</span>
          <span className="badge project-card-status">{status}</span>
        </div>

        <h3 className="project-card-title">{nome}</h3>
        <p className="project-card-summary">{resumo}</p>
        {descricao && <p className="project-card-description">{descricao}</p>}

        {destaques?.length > 0 && (
          <ul className="project-card-highlights">
            {destaques.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
