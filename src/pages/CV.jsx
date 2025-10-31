import Nav from '../components/Nav.jsx'

export default function CV(){
  return (
    <div>
      <Nav/>
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Parcours & CV</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card md:col-span-2" id="experiences">
            <h3 className="section-title">Expériences</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">Alternance Expert DevOps — Tessi Techno</div>
                <div className="subtle">10/2023 — 09/2025</div>
                <p className="mt-1">Reprise d’une app Java de tests automatisés, pipelines GitLab, gestion AWX, scripts Cypress, stack observabilité (Grafana/Prometheus/Elasticsearch), mises à jour Recette & PROD.</p>
              </li>
            </ul>
          </div>

          <div className="card" id="competences">
            <h3 className="section-title">Compétences</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>AWS</li><li>Kubernetes</li><li>Terraform</li><li>Docker</li>
              <li>Ansible</li><li>AWX</li><li>GitLab CI/CD</li><li>Argo CD</li>
              <li>Python</li><li>Bash</li><li>Ruby</li><li>Java</li>
              <li>Grafana</li><li>Prometheus</li><li>Elasticsearch</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <h3 className="section-title">Formations</h3>
            <ul className="space-y-2 text-sm">
              <li>2023–2025 — Expert Systèmes d’Information DevOps (RNCP niv.7), Sup de Vinci Bordeaux</li>
              <li>2023 — Concepteur Développeur d’applications Web (RNCP niv.6), Le Wagon Bordeaux</li>
              <li>2018 — Analyste Programmeur (RNCP niv.5), CESI Bordeaux</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="section-title">Langues</h3>
            <p>Français (natif), Anglais (lecture technique).</p>
          </div>
          <div className="card">
            <h3 className="section-title">Certifications</h3>
            <p>CKA – prévue en 2025.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
