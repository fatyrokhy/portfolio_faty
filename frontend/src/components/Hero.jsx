import { Github, Linkedin, MapPin, Circle, ArrowDown } from 'lucide-react';

export default function Hero({ profile, stats }) {
  if (!profile) return null;
  const firstName = profile.name.split(' ')[0];

  return (
    <section id="about" style={{ paddingTop: 130, paddingBottom: 80, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <div className="hero-inner">

        {/* ── Left column ── */}
        <div>

        {/* Availability pill */}
        {profile.availability && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 36,
            padding: '5px 13px', background: 'var(--green-bg)',
            border: '1px solid var(--green-border)', borderRadius: 20,
            fontSize: '.75rem', color: 'var(--green)', fontFamily: 'var(--font-mono)'
          }}>
            <Circle size={6} fill="currentColor" />
            Disponible pour missions
          </div>
        )}

        {/* Heading */}
        <h1 style={{ marginBottom: 20, maxWidth: 820 }}>
          Bonjour, je suis{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--accent-warm)' }}>{firstName}</em>
          <span style={{ color: 'var(--text-3)' }}>.</span>
          <br />
          <span style={{ color: 'var(--text-2)' }}>{profile.title}</span>
        </h1>

        {/* Bio */}
        <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', maxWidth: 520, lineHeight: 1.75, marginBottom: 12 }}>
          {profile.bio}
        </p>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-3)', fontSize: '.82rem', marginBottom: 36, fontFamily: 'var(--font-mono)' }}>
          <MapPin size={12} />
          {profile.location}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
          <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Voir mes projets
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Me contacter
          </button>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 64 }}>
          {[
            { url: profile.social?.github, Icon: Github, label: 'GitHub' },
            { url: profile.social?.linkedin, Icon: Linkedin, label: 'LinkedIn' },
          ].filter(s => s.url).map(({ url, Icon, label }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              style={{ gap: 6 }}>
              <Icon size={13} /> {label}
            </a>
          ))}
        </div>

        {/* Stats row */}
        {stats && (
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 0,
            borderTop: '1px solid var(--border)', paddingTop: 28, width: 'fit-content'
          }}>
            {[
              { value: `${stats.yearsExperience} ans`, label: "d'expérience" },
              { value: `${stats.projectsCompleted}+`, label: 'projets' },
              { value: `${stats.technologies}+`, label: 'technologies' },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: i < 2 ? 32 : 0, marginRight: i < 2 ? 32 : 0,
                borderRight: i < 2 ? '1px solid var(--border)' : 'none'
              }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', lineHeight: 1, marginBottom: 2 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-3)', fontFamily: 'var(--font-mono)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
        </div>{/* end left column */}

        {/* ── Right column — Photo ── */}
        <div className="hero-photo-wrap">
          <div style={{ position: 'relative' }}>
            {/* Decorative ring */}
            <div style={{
              position: 'absolute', inset: -8,
              borderRadius: '50%',
              border: '1.5px dashed var(--border-2)',
              animation: 'spin 20s linear infinite',
              opacity: .5
            }} />
            <img
              src="/photo.png"
              alt="Faty Rokhy Niasse"
              style={{
                width: 280, height: 280,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '3px solid var(--border)',
                boxShadow: 'var(--shadow-lg)',
                display: 'block',
                position: 'relative', zIndex: 1
              }}
            />
            {/* Availability dot on photo */}
            {profile.availability && (
              <div style={{
                position: 'absolute', bottom: 18, right: 8, zIndex: 2,
                width: 20, height: 20, borderRadius: '50%',
                background: 'var(--green)',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 0 2px var(--green-border)'
              }} title="Disponible" />
            )}
          </div>
        </div>

        </div>{/* end hero-inner */}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
        color: 'var(--text-3)', fontSize: '.7rem', fontFamily: 'var(--font-mono)',
        opacity: .6
      }}>
        <ArrowDown size={13} style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        @keyframes spin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .hero-inner {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
        }
        .hero-photo-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-photo-wrap {
            order: -1;
          }
          .hero-photo-wrap img {
            width: 180px !important;
            height: 180px !important;
          }
          .hero-photo-wrap > div > div:first-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
