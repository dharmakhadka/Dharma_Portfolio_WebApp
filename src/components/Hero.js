import React, { useEffect, useState } from 'react';

const terminalLines = [
  { icon: '✔', color: '#c8f135', text: 'Code pushed to GitHub' },
  { icon: '✔', color: '#c8f135', text: 'Jenkins build triggered' },
  { icon: '✔', color: '#c8f135', text: 'Tests passed (24/24)' },
  { icon: '✔', color: '#c8f135', text: 'Docker image built' },
  { icon: '✔', color: '#c8f135', text: 'Pushed to registry' },
  { icon: '→', color: '#60a5fa', text: 'Deploying to production' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const t = setTimeout(() => setVisibleLines(v => v + 1), 600);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section id="about" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '8rem 2.5rem 4rem', gap: '4rem',
      maxWidth: '1200px', margin: '0 auto',
      flexWrap: 'wrap',
    }}>
      {/* Left */}
      <div style={{ flex: 1, minWidth: '300px' }}>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', color: '#c8f135', marginBottom: '1.2rem', animation: 'fadeUp 0.6s ease both' }}>
          — DevOps Engineer
        </p>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1,
          letterSpacing: '-2px', marginBottom: '1.4rem',
          animation: 'fadeUp 0.6s ease 0.1s both',
        }}>
          Building pipelines<br />
          that <span style={{ color: '#c8f135' }}>never sleep.</span>
        </h1>
        <p style={{
          fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', color: '#888',
          lineHeight: 1.8, maxWidth: '480px', marginBottom: '2rem', fontWeight: 300,
          animation: 'fadeUp 0.6s ease 0.2s both',
        }}>
          I automate infrastructure, ship code faster, and keep systems alive.
          Docker, Kubernetes, Jenkins — all day, every day.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap', animation: 'fadeUp 0.6s ease 0.3s both' }}>
          <a href="#projects" style={{
            background: '#c8f135', color: '#0a0a0a', padding: '0.8rem 1.8rem',
            borderRadius: '4px', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem', cursor: 'none',
          }}>
            View Projects
          </a>
          <a href="#contact" style={{
            border: '1px solid #333', color: '#e8e8e8', padding: '0.8rem 1.8rem',
            borderRadius: '4px', fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '0.9rem', cursor: 'none',
          }}>
            Get in Touch
          </a>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', animation: 'fadeUp 0.6s ease 0.4s both' }}>
          {[['3+', 'Years Exp.'], ['20+', 'Pipelines Built'], ['99.9%', 'Uptime']].map(([num, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#c8f135' }}>{num}</span>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#555' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Terminal */}
      <div style={{ flex: 1, minWidth: '300px', animation: 'fadeUp 0.6s ease 0.5s both' }}>
        <div style={{
          background: '#0f0f0f', border: '1px solid #1e1e1e',
          borderRadius: '10px', overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
        }}>
          <div style={{
            background: '#1a1a1a', padding: '0.8rem 1rem',
            display: 'flex', alignItems: 'center', gap: '6px',
            borderBottom: '1px solid #1e1e1e',
          }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: '#555', marginLeft: '8px' }}>ci-pipeline.sh</span>
          </div>
          <div style={{ padding: '1.4rem', fontFamily: 'DM Mono, monospace', fontSize: '0.82rem', lineHeight: 2, color: '#aaa' }}>
            <p style={{ color: '#555', fontSize: '0.75rem' }}>~/projects/app <span style={{ color: '#c8f135' }}>main</span> $</p>
            <p style={{ color: '#e8e8e8', marginBottom: '4px' }}>bash deploy.sh --env production</p>
            <br />
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <p key={i} style={{ color: '#aaa', display: 'flex', alignItems: 'center' }}>
                <span style={{ color: line.color, marginRight: '10px' }}>{line.icon}</span>
                {line.text}
                {i === visibleLines - 1 && i === terminalLines.length - 1 && (
                  <span style={{ animation: 'blink 1s step-end infinite', color: '#c8f135', marginLeft: '4px' }}>_</span>
                )}
              </p>
            ))}
            {visibleLines < terminalLines.length && (
              <span style={{ animation: 'blink 1s step-end infinite', color: '#c8f135' }}>_</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
