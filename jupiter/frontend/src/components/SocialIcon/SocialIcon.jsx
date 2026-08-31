export default function SocialIcon({ image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon-link"
      aria-label={image.alt}
    >
      <img src={image.src} alt={image.alt} className="social-icon" />
    </a>
  );
}
