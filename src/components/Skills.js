import React from 'react';

const skills = [
  { icon: '🐳', name: 'Docker', desc: 'Containerising apps for consistent, portable deployments across all environments.' },
  { icon: '☸️', name: 'Kubernetes', desc: 'Orchestrating containers at scale with auto-scaling, rolling updates, and self-healing.' },
  { icon: '🔧', name: 'Jenkins', desc: 'Building end-to-end CI/CD pipelines that test, build, and deploy automatically.' },
  { icon: '🐙', name: 'GitHub Actions', desc: 'Automating workflows directly in GitHub for fast, developer-friendly CI/CD.' },
  { icon: '🌍', name: 'Terraform', desc: 'Infrastructure as Code — provisioning cloud resources reliably and repeatably.' },
  { icon: '📊', name: 'Prometheus & Grafana', desc: 'Monitoring metrics and visualising system health with real-time dashboards.' },
  { icon: '☁️', name: 'AWS', desc: 'Deploying scalable cloud infrastructure using EC2, EKS, S3, RDS and more.' },
  { icon: '🐧', name: 'Linux', desc: 'Deep familiarity with Linux systems, shell scripting, and server administration.' },
  { icon: '🅰️', name: 'Ansible', desc: 'Automating configuration management and application deployment across servers.' },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#c8f135', display: 'block', marginBottom: '0.6rem' }}>
          02 / Skills
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-1.5px', marginBottom: '0.6rem' }}>
          Tools I work with
        </h2>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.84rem', color: '#555', fontWeight: 300 }}>
          The stack I use to build, ship, and monitor production systems.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{
              background: '#111', border: '1px solid #1e1e1e',
              borderRadius: '8px', padding: '1.8rem',
              transition: 'border-color 0.2s, background 0.2s', cursor: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#c8f13550'; e.currentTarget.style.background = '#141414'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e1e'; e.currentTarget.style.background = '#111'; }}
          >
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{skill.icon}</span>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: '#e8e8e8' }}>
              {skill.name}
            </h3>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#555', lineHeight: 1.7, fontWeight: 300 }}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
