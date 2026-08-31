import { Link } from 'react-router-dom';
import logo from '../../assets/imagens/LOGO.png';
import SocialIcon from '../SocialIcon/SocialIcon';
import redesSociais from '../../data/redesSociais';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="spectrum-line spectrum-line--thin">
        <span /><span /><span /><span />
      </div>

      <div className="footer-inner container">
        <div className="footer-col">
          <h6 className="footer-heading">Localização</h6>
          <a
            href="https://maps.app.goo.gl/5LC1iGggBwrPNnrz9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-address"
          >
            R. Josué de Castro, 100<br />
            Cidade Universitária<br />
            Campinas — SP, 13083-861
          </a>
        </div>

        <div className="footer-col footer-brand">
          <Link to="/" className="footer-brand-link">
            <img src={logo} alt="Logo Jupiter" className="footer-logo" />
            <span className="footer-title">JUPITER</span>
          </Link>
          <p className="footer-tagline">H2 Racing · Unicamp</p>
        </div>

        <div className="footer-col footer-socials-col">
          <h6 className="footer-heading">Redes sociais</h6>
          <div className="footer-socials">
            {redesSociais.map((entry) => (
              <SocialIcon key={entry.id} image={entry.image} link={entry.link} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jupiter Unicamp. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;
