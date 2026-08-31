import api from '../../services/api';
import useFetch from '../../services/useFetch';
import SponsorCard from '../../components/SponsorCard/SponsorCard';
import './Patrocinadores.css';

export default function Patrocinadores() {
  const { data: patrocinadores, status } = useFetch(api.getPatrocinadores, []);

  return (
    <section className="section patrocinadores-page">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Parceiros</span>
          <h1 className="section-title">Patrocinadores</h1>
          <p className="section-lead">
            O Jupiter só sai do papel graças às empresas e instituições que
            investem em engenharia, inovação e no futuro do hidrogênio como
            energia limpa.
          </p>
        </div>

        {status === 'loading' && (
          <p className="state-message">Carregando patrocinadores…</p>
        )}

        {status === 'error' && (
          <p className="state-message state-message--error">
            Não foi possível carregar os patrocinadores agora. Tente novamente em instantes.
          </p>
        )}

        {status === 'success' && patrocinadores.length === 0 && (
          <p className="state-message">Ainda não há patrocinadores cadastrados.</p>
        )}

        {status === 'success' && patrocinadores.length > 0 && (
          <div className="grid grid--4 sponsor-grid">
            {patrocinadores.map((patrocinador) => (
              <SponsorCard key={patrocinador.id} patrocinador={patrocinador} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
