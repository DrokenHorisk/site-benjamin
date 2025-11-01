import Nav from '../components/Nav.jsx'
import { FaDiscord, FaDocker, FaGithub, FaServer } from "react-icons/fa";
import { SiKubernetes, SiFastapi, SiNginx, SiGrafana, SiPrometheus, SiElasticsearch, SiPython } from "react-icons/si";

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
            Solution d’analyse des joueurs de hockey suisse : bot Discord (slash commands),
            backend FastAPI qui génère un dashboard HTML, et frontend Nginx qui le sert publiquement.
            Déploiement automatisé sur K3s via GitOps (Argo CD).
          </p>

          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1">Architecture</h4>
              <ul className="list-disc pl-6 subtle space-y-1">
                <li>Bot Discord → scanne le marché & déclenche la génération du dashboard</li>
                <li>Backend FastAPI → produit <code>/data/dashboard_topscorers.html</code></li>
                <li>Frontend Nginx → sert le dashboard (NodePort/Ingress)</li>
                <li>PVC partagé backend/frontend pour persister les fichiers</li>
                <li>GitOps via Argo CD (autosync + self-heal)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Stack & CI/CD</h4>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 rounded-md bg-sky-100 text-sky-800 flex items-center gap-1"><SiFastapi /> FastAPI</span>
                <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 flex items-center gap-1"><SiPython /> Discord.py</span>
                <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-800 flex items-center gap-1"><SiKubernetes /> K3s</span>
                <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 flex items-center gap-1"><FaDocker /> Docker / GHCR</span>
                <span className="px-2 py-1 rounded-md bg-slate-100 text-slate-800 flex items-center gap-1"><FaGithub /> GitHub Actions</span>
                <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 flex items-center gap-1"><SiNginx /> Nginx</span>
                <span className="px-2 py-1 rounded-md bg-amber-100 text-amber-800">PVC</span>
                <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-800 flex items-center gap-1"><SiGrafana /> Grafana</span>
                <span className="px-2 py-1 rounded-md bg-orange-50  text-orange-700 flex items-center gap-1"><SiPrometheus /> Prometheus</span>
                <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 flex items-center gap-1"><SiElasticsearch /> Elasticsearch</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
            <a className="btn" href="https://github.com/DrokenHorisk/topscorers-dashboard" target="_blank" rel="noreferrer">
              Code & K8s manifests
            </a>
            <a className="btn" href="http://88.184.158.243:50080/" target="_blank" rel="noreferrer">
              Dashboard public
            </a>
          </div>

          <div className="mt-4">
            <details className="subtle">
              <summary className="cursor-pointer hover:underline">Fonctionnement détaillé (aligné sur le code du bot)</summary>
              <ol className="list-decimal pl-6 mt-2 space-y-1">
                <li>
                  <b>Poll marché (boucle asynchrone)</b> : le bot interroge périodiquement
                  <code> /api/user/leagues/&lt;league&gt;/transfers</code> (retries + relogin CSRF si besoin),
                  détecte les nouvelles offres et les pousse dans les salons configurés.
                </li>
                <li>
                  <b>Vues interactives</b> : chaque offre a un bouton « Détails » qui affiche un embed
                  (prix, valeur, équipe, position) et peut joindre un mini-graph PNG de l’historique de valeur.
                </li>
                <li>
                  <b>Commandes slash</b> :
                  <code>/scan</code> (scan immédiat du marché),
                  <code>/marche</code> (liste 20 offres),
                  <code>/equipe</code> (sélecteur de manager avec roster complet & valeur d’équipe),
                  <code>/dashboard</code> (déclenche la génération du dashboard et retourne l’URL),
                  <code>/purge</code> (nettoyage des messages du bot).
                </li>
                <li>
                  <b>Génération du dashboard</b> : <code>/dashboard</code> appelle en « fire-and-forget »
                  <code>POST {`{BACKEND_BASE_URL}`}/api/generate</code> (cooldown ~90 s).
                  Si <code>PUBLIC_DASHBOARD_URL</code> est défini, le bot renvoie directement l’URL publique
                  (racine du frontend) ; sinon, fallback sur <code>{`{BACKEND_BASE_URL}`}/api/dashboard</code>.
                </li>
                <li>
                  <b>Stockage & exposition</b> : le backend écrit <code>dashboard_topscorers.html</code> dans un PVC partagé ;
                  le frontend Nginx sert toujours la dernière version. Un CronJob régénère périodiquement.
                </li>
              </ol>
            </details>
          </div>
        </div>

        {/* AUTRES PROJETS */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card">
            <h4 className="font-semibold mb-2">CI/CD & IaC</h4>
            <p className="subtle">Pipelines GitHub Actions pour build/push d’images (GHCR), déploiement GitOps (Argo CD), IaC K8s YAML.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold mb-2">Observabilité</h4>
            <p className="subtle">Dashboards Grafana, métriques Prometheus, logs Elasticsearch pour le suivi du bot et du backend.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
