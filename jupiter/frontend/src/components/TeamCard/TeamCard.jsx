import linkedinIcon from '../../assets/imagens/Linkedin.png';
import './TeamCard.css';

function getInitials(nome) {
  const parts = nome.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

export default function TeamCard({ integrante }) {
  const { nome, cargo, linkedin } = integrante;

  return (
    <div className="team-card card">
      <div className="team-card-avatar" aria-hidden="true">
        {getInitials(nome)}
      </div>
      <div className="team-card-info">
        <h3 className="team-card-name">{nome}</h3>
        <p className="team-card-role">{cargo}</p>
      </div>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="team-card-linkedin"
          aria-label={`LinkedIn de ${nome}`}
        >
          <img src={linkedinIcon} alt="" />
        </a>
      )}
    </div>
  );
}
