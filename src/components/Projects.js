import React from 'react';

const projects = [
  {
    num: '01',
    title: 'CI/CD Pipeline for Node.js App',
    desc: 'Full end-to-end pipeline with automated testing, Docker image builds, and SSH deployment triggered on every GitHub push via Jenkins.',
    tags: ['Jenkins', 'Docker', 'Node.js', 'GitHub'],
    link: '#',
  },
  {
    num: '02',
    title: 'K8s Cluster on AWS EKS',
    desc: 'Production-ready Kubernetes cluster on AWS EKS using Terraform and Helm charts with auto-scaling, ingress, and namespace isolation.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'Helm'],
    link: '#',
  },
  {
    num: '03',
    title: 'Full Monitoring Stack',
    desc: 'Prometheus scraping app metrics, Grafana dashboards for visibility, and Alertmanager sending Slack alerts on threshold breaches.',
    tags: ['Prometheus', 'Grafana', 'Alertmanager', 'Slack'],
    link: '#',
  },
  {
    num: '04',
    title: 'Infrastructure as Code',
    desc: 'Modular Terraform setup for provisioning VPC, EC2, RDS, and S3 across dev, staging, and production environments on AWS.',
    tags: ['Terraform', 'AWS', 'IaC', 'Ansible'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 2.5rem', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid #1e1e1e' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#c8f135', display: 'block', marginBottom: '0.6rem' }}>
          03 / Projects
        </span>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', letterSpacing: '-1.5px', marginBottom: '0.6rem' }}>
          Things I've built
        </h2>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.84rem', color: '#555', fontWeight: 300 }}>
          Real-world DevOps projects covering the full software delivery lifecycle.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1rem' }}>
        {projects.map((p) => (
          <div
            key={p.num}
            style={{
              background: '#111', border: '1px solid #1e1e1e', borderRadius: '8px',
              padding: '2rem', transition: 'border-color 0.2s', cursor: 'none',
              display: 'flex', flexDirection: 'column', gap: '1rem',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#c8f13550'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: '#333' }}>{p.num}</span>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#888',
                    border: '1px solid #222', padding: '2px 8px', borderRadius: '3px', background: '#0a0a0a',
                  }}>{t}</span>
                ))}
              </div>
            </div>
            <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#e8e8e8', lineHeight: 1.3 }}>
              {p.title}
            </h3>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#555', lineHeight: 1.8, fontWeight: 300, flex: 1 }}>
              {p.desc}
            </p>
            <a
              href={p.link}
              style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: '#555', transition: 'color 0.2s', cursor: 'none' }}
              onMouseEnter={e => e.target.style.color = '#c8f135'}
              onMouseLeave={e => e.target.style.color = '#555'}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
