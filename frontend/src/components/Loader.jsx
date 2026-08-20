export default function Loader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text-3)', animation: 'pulse 1.4s ease infinite' }}>
        FR<span style={{ color: 'var(--accent-warm)' }}>.</span>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:.2} 50%{opacity:.7} }`}</style>
    </div>
  );
}
