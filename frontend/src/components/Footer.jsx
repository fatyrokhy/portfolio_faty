import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer({ profile }) {
  return (
    <footer style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem' }}>
            {profile?.name}<span style={{ color: 'var(--accent-warm)' }}>.</span>
          </span>
          <p style={{ fontSize: '.75rem', color: 'var(--text-3)', marginTop: 3 }}>{profile?.location}</p>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { Icon: Github, url: profile?.social?.github },
            { Icon: Linkedin, url: profile?.social?.linkedin },
          ].filter(s => s.url).map(({ Icon, url }, i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer"
              style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-3)', transition: 'all .2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--text)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-3)'; }}>
              <Icon size={14} />
            </a>
          ))}
        </div>

        <p style={{ fontSize: '.73rem', color: 'var(--text-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
          © {new Date().getFullYear()} {profile?.name} — fait avec <Heart size={11} fill="var(--accent-warm)" color="var(--accent-warm)" />
        </p>
      </div>
    </footer>
  );
}
