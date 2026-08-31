import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/imagens/LOGO.png';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Início', end: true },
  { to: '/equipe', label: 'Equipe' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/patrocinadores', label: 'Patrocinadores' },
  { to: '/contato', label: 'Contato' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner container">
        <NavLink to="/" className="header-brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo Jupiter" className="header-logo" />
          <span className="header-title">JUPITER</span>
        </NavLink>

        <button
          type="button"
          className={`header-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
          <ul className="header-nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
