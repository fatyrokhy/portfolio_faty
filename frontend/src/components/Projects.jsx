import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const STATUS_STYLE = {
  'Live':        { bg: 'var(--green-bg)',  border: 'var(--green-border)', color: 'var(--green)' },
  'Open Source': { bg: 'var(--accent-light)', border: 'var(--border-2)', color: 'var(--accent-warm)' },
  'En cours':    { bg: 'var(--bg-subtle)', border: 'var(--border)',    color: 'var(--text-3)' },
};

function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);
  const st = STATUS_STYLE[p.status] || STATUS_STYLE['En cours'];

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'all .22s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? 'var(--shadow)' : 'var(--shadow-sm)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9', flexShrink: 0 }}>
        <img src={p.image} alt={p.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover',
            transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform .4s ease' }} />
        {/* Status */}
        <span style={{
          position: 'absolute', top: 10, right: 10,
          padding: '3px 10px', borderRadius: 20, fontSize: '.68rem', fontWeight: 600,
          fontFamily: 'var(--font-mono)', background: st.bg,
          border: `1px solid ${st.border}`, color: st.color
        }}>{p.status}</span>
        {/* Year */}
        <span style={{
          position: 'absolute', bottom: 10, left: 10,
          padding: '3px 10px', borderRadius: 20, fontSize: '.68rem',
          fontFamily: 'var(--font-mono)', background: 'rgba(0,0,0,.55)',
          color: 'rgba(255,255,255,.85)'
        }}>{p.year}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
          <h3 style={{ fontSize: '.95rem' }}>{p.title}</h3>
        </div>
        <p style={{ fontSize: '.83rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: 14, flex: 1 }}>
          {p.description}
        </p>
        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
          {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        {/* Links */}
        <div style={{ display: 'flex', gap: 8, borderTop: '1px solid var(--border)', paddingTop: 14 }}>
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
              <Github size={13} /> Code
            </a>
          )}
          {p.live && (
            <a href={p.live} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
              <ExternalLink size={13} /> Démo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  const [filter, setFilter] = useState('Tous');
  const cats = ['Tous', ...new Set(projects?.map(p => p.category) ?? [])];
  const shown = filter === 'Tous' ? projects : projects?.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p className="label" style={{ marginBottom: 10 }}>Projets</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <h2>Ce que j'ai construit</h2>
            {/* Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {cats.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  style={{
                    padding: '5px 14px', border: '1px solid', borderRadius: 20, fontSize: '.78rem',
                    fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-sans)',
                    transition: 'all .18s',
                    background: filter === c ? 'var(--accent)' : 'transparent',
                    color: filter === c ? 'var(--bg)' : 'var(--text-2)',
                    borderColor: filter === c ? 'var(--accent)' : 'var(--border-2)'
                  }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {shown?.map(p => <ProjectCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
