import Nav from '../components/Nav.jsx'

export default function Projects(){
  return (
    <div>
      <Nav/>
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Projets</h2>

        <div className="card" id="topscorers">
          <h3 className="section-title">TopScorers — Discord Bot + FastAPI + Nginx</h3>
          <ul className="list-disc pl-6 space-y-2 subtle">
            <li>Bot Discord déployé sur Kubernetes (namespace <code>topscorers</code>).</li>
            <li>Backend FastAPI (<code>ghcr.io/drokenhorisk/topscorers-backend:latest</code>), génération automatique de <code>/data/dashboard_topscorers.html</code>.</li>
            <li>Frontend Nginx exposé via NodePort/Ingress public.</li>
            <li>GitOps avec Argo CD, images hébergées sur GHCR, rollouts via <code>kubectl rollout restart</code>.</li>
          </ul>
          <div className="mt-3 text-sm">
            <a className="link" href="http://88.184.158.243:50080/" target="_blank" rel="noreferrer">Voir le dashboard public</a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card">
            <h4 className="font-semibold mb-2">CI/CD & IaC</h4>
            <p className="subtle">Pipelines GitLab/GitHub Actions pour build/push, Terraform pour l’infra, Ansible/AWX pour la config.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2">Observabilité</h4>
            <p className="subtle">Dashboards Grafana, métriques Prometheus, logs Elasticsearch.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
