import Nav from '../components/Nav.jsx'
import { FaDiscord, FaDocker, FaGithub, FaServer } from "react-icons/fa";
import { SiKubernetes, SiFastapi, SiNginx, SiArgo, SiGrafana, SiPrometheus, SiElasticsearch, SiPython } from "react-icons/si";
export default function Projects() {
  return (
    <div>
      <Nav />
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>

        {/* ==== PROJET TOPSCORERS ==== */}
        <div className="card" id="topscorers">
          <h3 className="section-title flex items-center gap-2">
            TopScorers — Discord Bot + FastAPI + Nginx
            <span className="ml-2 inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> En prod (K3s)
            </span>
          </h3>

          <p className="subtle">
            Solution d’analyse des joueurs de hockey suisse : bot Discord (slash commands), backend FastAPI qui génère
            un dashboard HTML, et frontend Nginx qui le sert publiquement. Le tout est déployé automatiquement sur K3s via Argo CD.
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Architecture</h4>
              <ul className="list-disc pl-6 subtle space-y-1">
                <li>Bot Discord → déclenche la génération du dashboard</li>
                <li>Backend FastAPI → produit <code>/data/dashboard_topscorers.html</code></li>
                <li>Frontend Nginx → sert le dashboard (NodePort/Ingress)</li>
                <li>PVC partagé backend/frontend pour persister les fichiers</li>
                <li>GitOps via Argo CD (autosync + self-heal)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Stack & CI/CD</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 rounded-md bg-sky-100 text-sky-800">FastAPI</span>
                <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-800">Discord.py</span>
                <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-800">Kubernetes (K3s)</span>
                <span className="px-2 py-1 rounded-md bg-rose-100 text-rose-800">Argo CD</span>
                <span className="px-2 py-1 rounded-md bg-amber-100 text-amber-800">Docker / GHCR</span>
                <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800">GitHub Actions</span>
                <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-800">PVC</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-3 gap-2 text-sm">
            <a className="btn" href="https://github.com/DrokenHorisk/topscorers-dashboard" target="_blank" rel="noreferrer">
              Code & K8s manifests
            </a>
            <a className="btn" href="http://88.184.158.243:50080/" target="_blank" rel="noreferrer">
              Dashboard public
            </a>
            <a className="btn" href="http://88.184.158.243:30080/" target="_blank" rel="noreferrer">
              Argo CD (cluster local)
            </a>
          </div>

          <div className="mt-4">
            <details className="subtle">
              <summary className="cursor-pointer hover:underline">Fonctionnement détaillé (bot → backend → frontend)</summary>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li><code>/dashboard</code> sur Discord → le bot appelle le backend (<code>POST /api/dashboard</code>).</li>
                <li>Le backend calcule et génère <code>dashboard_topscorers.html</code> dans le PVC.</li>
                <li>Le frontend Nginx sert automatiquement le dernier HTML généré.</li>
                <li>Un CronJob régénère périodiquement le dashboard.</li>
              </ol>
            </details>
          </div>
        </div>


        {/* AUTRES PROJETS */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
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
  );
}
