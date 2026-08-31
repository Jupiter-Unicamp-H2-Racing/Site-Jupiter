import './SponsorCard.css';

export default function SponsorCard({ patrocinador }) {
  const { nome, site } = patrocinador;

  const content = (
    <div className="sponsor-card card">
      <span className="sponsor-card-wordmark">{nome}</span>
    </div>
  );

  if (!site) return content;

  return (
    <a
      href={site}
      target="_blank"
      rel="noopener noreferrer"
      className="sponsor-card-link"
      aria-label={`Visitar site de ${nome}`}
    >
      {content}
    </a>
  );
}
