import Timeline from '../../components/Timeline/Timeline';
import trajetoria from '../../data/trajetoria';
import equipeFoto from '../../assets/imagens/equipe-foto-grupo.jpg';
import equipePatrocinio from '../../assets/imagens/equipe-patrocinio.png';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Linha de chegada de ponta a ponta da página */}
      <div className="spectrum-line hero-spectrum-full">
        <span /><span /><span /><span />
      </div>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Equipe Jupiter · Unicamp</span>
          <h1 className="hero-title">
            Movidos a hidrogênio.
            <br />
            Construídos para competir.
          </h1>
          <p className="hero-lead">
            Somos uma equipe de estudantes da Unicamp que projeta e constrói veículos
            de competição totalmente elétricos, alimentados por células a
            combustível de hidrogênio.
          </p>
        </div>

        <div className="container hero-photo-wrap">
          <figure className="hero-photo">
            <img src={equipeFoto} alt="Equipe Jupiter reunida ao lado do protótipo" />
          </figure>
        </div>
      </section>

      {/* ── Quem somos ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="quem-somos">
            <div className="quem-somos-texto">
              <span className="eyebrow">Quem somos</span>
              <h2 className="section-title">A Equipe Jupiter</h2>
              <p className="section-lead">
                Somos a Jupiter, uma equipe da Universidade Estadual de Campinas
                dedicada ao desenvolvimento e à competição com veículos movidos a
                hidrogênio. Reunimos estudantes de diferentes cursos e áreas,
                conectando mecânica, elétrica, computação, controle e gestão de
                projetos para projetar e construir nossas próprias soluções.
              </p>
              <p className="section-lead">
                Nosso trabalho vai além da construção de um veículo: desenvolvemos
                tecnologia, enfrentamos desafios reais de engenharia e buscamos
                aplicar conhecimentos acadêmicos em um ambiente de forte
                aprendizado prático. A cada projeto, nossos integrantes têm a
                oportunidade de crescer profissionalmente, trabalhando em equipe e
                transformando ideias em soluções concretas para a mobilidade
                movida a hidrogênio.
              </p>
            </div>

            <figure className="quem-somos-foto">
              <img src={equipePatrocinio} alt="Equipe Jupiter reunida ao lado do protótipo" />
            </figure>
          </div>
        </div>
      </section>

      {/* ── Trajetória ───────────────────────────────────────────────── */}
      <section className="section section--tight trajetoria-section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Nossa história</span>
            <h2 className="section-title">Trajetória</h2>
            <p className="section-lead">
              De um desafio acadêmico a duas temporadas de campeão: cada ano trouxe
              uma nova evolução para o veículo e para a equipe.
            </p>
          </div>

          <Timeline items={trajetoria} />
        </div>
      </section>
    </div>
  );
}
