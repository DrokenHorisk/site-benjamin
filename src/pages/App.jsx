import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import { Link } from 'react-router-dom'

export default function App(){
  return (
    <div>
      <Nav/>
      <Hero/>
      <section className="container pb-16 grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="section-title">TopScorers</h3>
          <p className="subtle">
            Bot Discord + backend FastAPI + frontend Nginx, déployés sur Kubernetes, pilotés via Argo CD. Dashboard généré automatiquement.
          </p>
          <Link className="link mt-3 inline-block" to="/projets#topscorers">Détails du projet →</Link>
        </div>
        <div className="card">
          <h3 className="section-title">CI/CD & IaC</h3>
          <p className="subtle">Pipelines GitLab, GitHub Actions, Terraform pour l’infra, AWX/Ansible pour l’automatisation.</p>
          <Link className="link mt-3 inline-block" to="/cv#competences">Voir compétences →</Link>
        </div>
        <div className="card">
          <h3 className="section-title">Hockey 🇨🇭</h3>
          <p className="subtle">Fan du Lausanne HC. Focus sur Drake Caggiula et l’intensité de la National League.</p>
          <Link className="link mt-3 inline-block" to="/hockey">Lausanne & Caggiula →</Link>
        </div>
      </section>
      <footer className="container py-10 subtle text-sm">
        © {new Date().getFullYear()} Benjamin Barillot — Site personnel.
      </footer>
    </div>
  )
}
