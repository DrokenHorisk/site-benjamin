import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <div className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Expert DevOps & Builder
            <span className="text-accent"> — Benjamin Barillot</span>
          </h1>
          <p className="mt-4 subtle">
            Infra Cloud, Kubernetes, CI/CD, Observabilité. J’aime concevoir des pipelines robustes, automatiser et livrer vite et bien.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/projets" className="btn">Voir mes projets</Link>
            <Link to="/cv" className="btn bg-accent">Parcours & CV</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="card">
          <h3 className="text-xl font-semibold mb-2">Stack de prédilection</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            <li>Docker</li><li>Kubernetes</li><li>Terraform</li><li>AWS</li>
            <li>GitLab CI</li><li>Argo CD</li><li>Grafana</li><li>Prometheus</li>
            <li>Elasticsearch</li><li>Python / Bash</li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
