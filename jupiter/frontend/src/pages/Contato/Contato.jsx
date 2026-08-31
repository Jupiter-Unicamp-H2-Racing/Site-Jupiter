import { useState } from 'react';
import redesSociais from '../../data/redesSociais';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import './Contato.css';

const CONTACT_EMAIL = 'contato@jupiterunicamp.com.br';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const assunto = encodeURIComponent(`Contato pelo site — ${form.nome || 'sem nome'}`);
    const corpo = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\n\n${form.mensagem}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${assunto}&body=${corpo}`;
  }

  return (
    <section className="section contato-page">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Fale com a gente</span>
          <h1 className="section-title">Contato</h1>
          <p className="section-lead">
            Dúvidas, propostas de parceria ou interesse em fazer parte da
            equipe? Manda uma mensagem.
          </p>
        </div>

        <div className="contato-grid">
          <form className="contato-form card" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Nome</span>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
              />
            </label>

            <label className="form-field">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="voce@email.com"
                required
              />
            </label>

            <label className="form-field">
              <span>Mensagem</span>
              <textarea
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Como podemos ajudar?"
                rows={5}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">Enviar mensagem</button>
          </form>

          <aside className="contato-info">
            <div className="contato-info-block">
              <h2 className="contato-info-heading">E-mail</h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contato-info-link">
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="contato-info-block">
              <h2 className="contato-info-heading">Localização</h2>
              <a
                href="https://maps.app.goo.gl/5LC1iGggBwrPNnrz9"
                target="_blank"
                rel="noopener noreferrer"
                className="contato-info-link"
              >
                R. Josué de Castro, 100<br />
                Cidade Universitária<br />
                Campinas — SP, 13083-861
              </a>
            </div>

            <div className="contato-info-block">
              <h2 className="contato-info-heading">Redes sociais</h2>
              <div className="contato-socials">
                {redesSociais.map((entry) => (
                  <SocialIcon key={entry.id} image={entry.image} link={entry.link} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
