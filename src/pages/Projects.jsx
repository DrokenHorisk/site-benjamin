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
          <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
            🏒 TopScorers — Dashboard & Bot Discord pour le hockey suisse
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>TopScorers</strong> est une solution complète d’analyse et de suivi des performances des joueurs de hockey suisses.
            Elle combine un <span className="font-medium">bot Discord interactif</span>, un <span className="font-medium">backend analytique FastAPI</span>,
            et un <span className="font-medium">dashboard web dynamique</span> déployé automatiquement sur un cluster Kubernetes via Argo CD.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Bloc gauche - aperçu rapide */}
            <div className="md:col-span-2 space-y-6">
              {/* ARCHITECTURE */}
              <div>
                <h4 className="text-lg font-semibold mb-2">⚙️ Architecture générale</h4>
                <p className="subtle mb-2">
                  Le projet repose sur une architecture en 3 composants communicants :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
                  <li><b>Discord Bot</b> — Interagit avec les utilisateurs via des commandes <code>/scan</code>, <code>/dashboard</code>, etc.</li>
                  <li><b>Backend FastAPI</b> — Calcule les statistiques, génère le dashboard HTML et expose les endpoints REST.</li>
                  <li><b>Frontend Nginx</b> — Sert la dernière version du dashboard sur le port public.</li>
                </ul>
              </div>

              {/* STACK */}
              <div>
                <h4 className="text-lg font-semibold mb-2">🧱 Stack technique</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                  <span className="px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 flex items-center gap-1"><SiPython /> Python 3.11</span>
                  <span className="px-2 py-1 rounded-md bg-sky-100 text-sky-800 flex items-center gap-1"><FaDiscord /> Discord.py</span>
                  <span className="px-2 py-1 rounded-md bg-teal-100 text-teal-800 flex items-center gap-1"><SiFastapi /> FastAPI</span>
                  <span className="px-2 py-1 rounded-md bg-gray-100 text-gray-800 flex items-center gap-1"><SiNginx /> Nginx</span>
                  <span className="px-2 py-1 rounded-md bg-blue-100 text-blue-800 flex items-center gap-1"><SiKubernetes /> Kubernetes (K3s)</span>
                  <span className="px-2 py-1 rounded-md bg-rose-100 text-rose-800 flex items-center gap-1"><SiArgo /> Argo CD</span>
                  <span className="px-2 py-1 rounded-md bg-orange-100 text-orange-800 flex items-center gap-1"><FaDocker /> Docker</span>
                  <span className="px-2 py-1 rounded-md bg-gray-200 text-gray-800 flex items-center gap-1"><FaGithub /> GHCR</span>
                  <span className="px-2 py-1 rounded-md bg-green-100 text-green-800 flex items-center gap-1"><SiGrafana /> Grafana</span>
                  <span className="px-2 py-1 rounded-md bg-yellow-100 text-yellow-800 flex items-center gap-1"><SiPrometheus /> Prometheus</span>
                  <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800 flex items-center gap-1"><SiElasticsearch /> Elasticsearch</span>
                </div>
              </div>

              {/* DEPLOIEMENT */}
              <div>
                <h4 className="text-lg font-semibold mb-2">🚀 Déploiement GitOps</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Les images Docker sont construites via <b>Makefile</b>, poussées sur <b>GitHub Container Registry</b>, 
                  puis déployées automatiquement par <b>Argo CD</b> sur un cluster <b>K3s</b> hébergé sur un NUC Debian 12.
                  <br />La synchronisation se fait en continu depuis le dépôt <code>ark-gitops</code>.
                </p>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-700">
                  <li>3 Deployments : bot, backend, frontend</li>
                  <li>1 CronJob : régénération automatique du dashboard</li>
                  <li>1 PVC partagé entre backend et frontend</li>
                  <li>1 NodePort public exposé sur <code>:50080</code></li>
                </ul>
              </div>

              {/* DEMO */}
              <div className="mt-4">
                <a href="http://88.184.158.243:50080/" target="_blank" rel="noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  🌍 Voir la démo publique
                </a>
              </div>
            </div>

            {/* Bloc droite - résumé visuel */}
            <div className="card bg-gray-50 border border-gray-200 text-sm space-y-4">
              <h4 className="font-semibold text-gray-800">📦 Composants Docker</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li><b>Bot :</b> ghcr.io/drokenhorisk/topscorers-discord-bot</li>
                <li><b>Backend :</b> ghcr.io/drokenhorisk/topscorers-backend</li>
                <li><b>Frontend :</b> ghcr.io/drokenhorisk/topscorers-frontend</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mt-4">🧠 Objectifs pédagogiques</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Automatisation GitOps complète (build → push → deploy)</li>
                <li>Orchestration multi-service sur Kubernetes</li>
                <li>CI/CD avec Argo CD et Makefile</li>
                <li>Monitoring avec Prometheus & Grafana</li>
              </ul>

              <h4 className="font-semibold text-gray-800 mt-4">👤 Auteur</h4>
              <p className="text-gray-700">
                <b>Droken Horisk</b><br />
                DevOps Engineer & Hockey Enthusiast 🇨🇭<br />
                <span className="text-sm text-gray-500">Fan du Lausanne HC 🏒</span>
              </p>
            </div>
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
