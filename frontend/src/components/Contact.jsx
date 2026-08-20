import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { contactService } from '../services/api';

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errMsg, setErrMsg] = useState('');

  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await contactService.send(form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrMsg(err.response?.data?.errors?.[0]?.msg || 'Une erreur est survenue, réessayez.');
    }
  };

  const inp = {
    width: '100%', padding: '10px 13px',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-sans)', fontSize: '.875rem',
    background: 'var(--bg)', color: 'var(--text)',
    outline: 'none', transition: 'border-color .18s', boxSizing: 'border-box'
  };
  const lbl = { display: 'block', marginBottom: 5, fontSize: '.75rem', fontWeight: 500, color: 'var(--text-2)' };
  const focus = e => e.target.style.borderColor = 'var(--accent)';
  const blur = e => e.target.style.borderColor = 'var(--border)';

  return (
    <section id="contact" style={{ background: 'var(--bg-subtle)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 56px' }}>
          <p className="label" style={{ marginBottom: 10 }}>Contact</p>
          <h2>Travaillons ensemble</h2>
          <p style={{ color: 'var(--text-2)', marginTop: 12, fontSize: '.9rem' }}>
            Disponible pour une alternance, un stage ou des missions freelance. N'hésitez pas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.7fr', gap: 56, maxWidth: 860, margin: '0 auto', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 28 }}>
              Je suis à la recherche d'opportunités pour mettre mes compétences au service de projets ambitieux. Écrivez-moi, je réponds sous 24 h.
            </p>
            {[
              { Icon: Mail, val: profile?.email, href: `mailto:${profile?.email}` },
              { Icon: MapPin, val: profile?.location },
            ].map(({ Icon, val, href }, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }}>
                  <Icon size={14} color="var(--text-3)" />
                </div>
                <div style={{ paddingTop: 7 }}>
                  {href
                    ? <a href={href} style={{ fontSize: '.85rem', color: 'var(--text)', fontWeight: 500 }}
                        onMouseEnter={e => e.target.style.color = 'var(--accent-warm)'}
                        onMouseLeave={e => e.target.style.color = 'var(--text)'}>{val}</a>
                    : <span style={{ fontSize: '.85rem', fontWeight: 500 }}>{val}</span>
                  }
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: 8, marginTop: 24 }}>
              {[
                { Icon: Github, url: profile?.social?.github, label: 'GitHub' },
                { Icon: Linkedin, url: profile?.social?.linkedin, label: 'LinkedIn' },
              ].filter(s => s.url).map(({ Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                  <Icon size={13} /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '28px 28px 32px' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle size={44} color="var(--green)" style={{ margin: '0 auto 14px' }} />
                <h3 style={{ fontFamily: 'var(--font-sans)', marginBottom: 8, fontSize: '1rem' }}>Message envoyé !</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '.85rem', marginBottom: 20 }}>
                  Merci, je vous réponds très bientôt.
                </p>
                <button className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>Nouveau message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
                  <div>
                    <label style={lbl}>Nom *</label>
                    <input name="name" value={form.name} onChange={set} required placeholder="Prénom Nom" style={inp} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={lbl}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={set} required placeholder="vous@exemple.com" style={inp} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={lbl}>Sujet</label>
                  <input name="subject" value={form.subject} onChange={set} placeholder="Collaboration, stage, alternance…" style={inp} onFocus={focus} onBlur={blur} />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={lbl}>Message *</label>
                  <textarea name="message" value={form.message} onChange={set} required rows={5}
                    placeholder="Décrivez votre projet ou opportunité…"
                    style={{ ...inp, resize: 'vertical', minHeight: 110 }} onFocus={focus} onBlur={blur} />
                </div>
                {status === 'error' && (
                  <div style={{ display: 'flex', gap: 7, alignItems: 'center', padding: '9px 12px', background: '#fff5f5', border: '1px solid #fca5a5', borderRadius: 'var(--radius-sm)', marginBottom: 14, fontSize: '.82rem', color: '#dc2626' }}>
                    <AlertCircle size={14} /> {errMsg}
                  </div>
                )}
                <button type="submit" className="btn btn-primary" disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? .7 : 1 }}>
                  {status === 'loading' ? 'Envoi…' : <><Send size={14} /> Envoyer</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #contact .container > div:last-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #contact form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
