import linkedinIcon from '../../assets/imagens/Linkedin.png';
import './TeamCard.css';

// Resolve os arquivos de imagem incluídos em src/assets/imagens pelo nome informado no JSON.
const imagensEquipe = import.meta.glob('../../assets/imagens/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

function getInitials(nome) {
  const parts = nome.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function getFotoUrl(foto) {
  if (!foto) return null;
  const entrada = Object.entries(imagensEquipe).find(([caminho]) => caminho.endsWith(`/${foto}`));
  return entrada?.[1] ?? null;
}

export default function TeamCard({ integrante }) {
  const { nome, cargo, linkedin, foto } = integrante;
  const fotoUrl = getFotoUrl(foto);

  return (
    <div className="team-card card">
      {fotoUrl ? (
        <img
          src={fotoUrl}
          alt={`Foto de ${nome}`}
          className="team-card-avatar team-card-avatar--image"
          loading="lazy"
        />
      ) : (
        <div className="team-card-avatar" aria-hidden="true">
          {getInitials(nome)}
        </div>
      )}
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
