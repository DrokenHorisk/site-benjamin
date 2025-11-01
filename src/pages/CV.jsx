import Nav from '../components/Nav.jsx'
import { FaAws, FaDocker, FaPython, FaJava, FaGitlab, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiAnsible } from "react-icons/si";
import { SiTerraform, SiGrafana, SiPrometheus, SiElasticsearch, SiArgo, SiGnubash } from "react-icons/si";

export default function CV() {
  return (
    <div>
      <Nav />
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Parcours & CV</h2>

        {/* ===== EXPÉRIENCES ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card md:col-span-2" id="experiences">
            <h3 className="section-title">Expériences</h3>

            <div className="relative border-l-2 border-blue-500 pl-6 space-y-8 mt-6">
              {/* TESSI */}
              <div className="relative">
                <div className="absolute -left-[38px] bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  💼
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    Alternance Expert DevOps — <span className="text-blue-600">Tessi Techno</span>
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">Octobre 2023 — Septembre 2025</p>
                  <p className="text-gray-700 leading-relaxed">
                    Refonte et automatisation d’environnements internes : reprise d’une application Java de tests automatisés,
                    création de pipelines CI/CD sous GitLab, intégration AWX (Ansible) pour le déploiement,
                    observabilité via la stack <span className="font-medium text-blue-600">Grafana</span> / <span className="font-medium text-yellow-600">Prometheus</span> / <span className="font-medium text-emerald-600">Elasticsearch</span>,
                    et participation aux mises en production.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-1 bg-gray-100 rounded-md">GitLab CI/CD</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">AWX / Ansible</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Cypress</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Grafana</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Prometheus</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Elasticsearch</span>
                  </div>
                </div>
              </div>

              {/* TOPSCORERS */}
              <div className="relative">
                <div className="absolute -left-[38px] bg-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  🧩
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    Projet personnel — <span className="text-blue-600">TopScorers</span>
                  </h4>
                  <p className="text-sm text-gray-500 mb-2">2024 — En cours</p>
                  <p className="text-gray-700 leading-relaxed">
                    Conception d’un écosystème complet (bot Discord + API FastAPI + dashboard web React)
                    déployé sur Kubernetes et piloté par Argo CD. Automatisation du pipeline CI/CD,
                    monitoring Prometheus/Grafana, et hébergement GitOps sur mon serveur personnel.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm">
                    <span className="px-2 py-1 bg-gray-100 rounded-md">FastAPI</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">React</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Kubernetes</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">ArgoCD</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">Docker</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-md">GitHub Actions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== COMPÉTENCES ===== */}
          <div className="card" id="competences">
            <h3 className="section-title">Compétences</h3>

            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="flex flex-col items-center">
                <FaAws className="text-3xl text-yellow-500" />
                <span>AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaDocker className="text-3xl text-sky-500" />
                <span>Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <SiKubernetes className="text-3xl text-blue-500" />
                <span>Kubernetes</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTerraform className="text-3xl text-purple-500" />
                <span>Terraform</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAnsible className="text-3xl text-red-500" />
                <span>Ansible</span>
              </div>
              <div className="flex flex-col items-center">
                <SiArgo className="text-3xl text-rose-500" />
                <span>ArgoCD</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGitlab className="text-3xl text-orange-500" />
                <span>GitLab CI/CD</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGrafana className="text-3xl text-orange-400" />
                <span>Grafana</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPrometheus className="text-3xl text-orange-600" />
                <span>Prometheus</span>
              </div>
              <div className="flex flex-col items-center">
                <SiElasticsearch className="text-3xl text-green-500" />
                <span>Elasticsearch</span>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-3xl text-yellow-400" />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGnubash className="text-3xl text-gray-500" />
                <span>Bash</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-3xl text-red-500" />
                <span>Java</span>
              </div>
              <div className="flex flex-col items-center">
                <FaLinux className="text-3xl text-gray-600" />
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== FORMATIONS / LANGUES / CERTIFS ===== */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <h3 className="section-title">Formations</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold text-blue-600">2023–2025</span> — Expert Systèmes d’Information DevOps, Sup de Vinci Bordeaux</li>
              <li><span className="font-semibold text-blue-600">2023</span> — Concepteur Développeur d’applications Web, Le Wagon Bordeaux</li>
              <li><span className="font-semibold text-blue-600">2018</span> — Analyste Programmeur, CESI Bordeaux</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="section-title">Langues</h3>
            <p className="text-sm text-gray-700">🇫🇷 Français (natif)<br />🇬🇧 Anglais (lecture technique)</p>
          </div>
          <div className="card">
            <h3 className="section-title">Certifications</h3>
            <p className="text-sm text-gray-700">
              🎯 CKA – prévue en 2025<br />
              💡 GitLab Certified Associate – en préparation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
