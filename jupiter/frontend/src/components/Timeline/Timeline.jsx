import './Timeline.css';

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li
          key={item.ano}
          className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
        >
          <span className={`timeline-dot ${item.atual ? 'timeline-dot--atual' : ''}`} aria-hidden="true" />
          <div className="timeline-card card">
            <span className="timeline-year">{item.ano}</span>
            <h3 className="timeline-title">{item.titulo}</h3>
            <p className="timeline-text">{item.texto}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
