function Bar({ name, level }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
        <span style={{ fontSize: '.83rem', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>{level}%</span>
      </div>
      <div style={{ height: 3, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${level}%`, borderRadius: 2,
          background: 'linear-gradient(90deg, var(--accent-warm), var(--accent))',
          transition: 'width 1.1s ease'
        }} />
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  return (
    <section id="skills">
      <div className="container">
        <p className="label" style={{ marginBottom: 10 }}>Compétences</p>
        <h2 style={{ marginBottom: 48 }}>Stack technique</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))', gap: 20 }}>
          {skills?.map(group => (
            <div key={group.id} style={{
              padding: '22px 24px', background: 'var(--bg-card)',
              border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
                <span style={{ fontSize: '1.25rem' }}>{group.icon}</span>
                <span style={{ fontSize: '.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                  {group.category}
                </span>
              </div>
              {group.items.map(item => <Bar key={item.name} name={item.name} level={item.level} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
