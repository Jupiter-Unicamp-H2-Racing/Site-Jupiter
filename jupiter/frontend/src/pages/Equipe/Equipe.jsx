import api from '../../services/api';
import useFetch from '../../services/useFetch';
import TeamCard from '../../components/TeamCard/TeamCard';
import { agruparIntegrantes } from '../../utils/equipeGrupos';
import './Equipe.css';

export default function Equipe() {
  const { data: integrantes, status } = useFetch(api.getIntegrantes, []);
  const grupos = integrantes ? agruparIntegrantes(integrantes) : [];

  return (
    <section className="section equipe-page">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Quem somos</span>
          <h1 className="section-title">Equipe</h1>
          <p className="section-lead">
            Estudantes de diferentes cursos da Unicamp, dividindo o trabalho entre
            mecânica, elétrica e controle, e gestão de projeto.
          </p>
        </div>

        {status === 'loading' && (
          <p className="state-message">Carregando integrantes…</p>
        )}

        {status === 'error' && (
          <p className="state-message state-message--error">
            Não foi possível carregar a equipe agora. Tente novamente em instantes.
          </p>
        )}

        {status === 'success' && grupos.map(({ chave, titulo, itens }) => (
          <div key={chave} className="equipe-grupo">
            <h2 className="equipe-grupo-title">{titulo}</h2>
            <div className="grid grid--4">
              {itens.map((integrante) => (
                <TeamCard key={integrante.id} integrante={integrante} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
