import Nav from '../components/Nav.jsx'
import { FaAws, FaDocker, FaPython, FaJava, FaGitlab, FaLinux } from "react-icons/fa";
import { SiKubernetes, SiAnsible } from "react-icons/si";
import { SiTerraform, SiGrafana, SiPrometheus, SiElasticsearch, SiArgocd, SiBash } from "react-icons/si";

export default function CV() {
  return (
    <div>
      <Nav />
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Parcours & CV</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card md:col-span-2" id="experiences">
            <h3 className="section-title">Expériences</h3>
            <ul className="space-y-4">
              <li>
                <div className="font-semibold">Alternance Expert DevOps — Tessi Techno</div>
                <div className="subtle">10/2023 — 09/2025</div>
                <p className="mt-1">
                  Reprise d’une app Java de tests automatisés, pipelines GitLab, gestion AWX,
                  scripts Cypress, stack observabilité (Grafana/Prometheus/Elasticsearch),
                  mises à jour Recette & PROD.
                </p>
              </li>
            </ul>
          </div>

          {/* COMPÉTENCES AVEC ICONES */}
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
                <SiArgocd className="text-3xl text-rose-500" />
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
                <SiBash className="text-3xl text-gray-500" />
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

        {/* FORMATIONS / LANGUES / CERTIFS */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="card">
            <h3 className="section-title">Formations</h3>
            <ul className="space-y-2 text-sm">
              <li>2023–2025 — Expert Systèmes d’Information DevOps, Sup de Vinci Bordeaux</li>
              <li>2023 — Concepteur Développeur d’applications Web, Le Wagon Bordeaux</li>
              <li>2018 — Analyste Programmeur, CESI Bordeaux</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="section-title">Langues</h3>
            <p>Français (natif), Anglais (lecture technique)</p>
          </div>
          <div className="card">
            <h3 className="section-title">Certifications</h3>
            <p>CKA – prévue en 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
