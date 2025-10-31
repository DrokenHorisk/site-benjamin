import { NavLink } from 'react-router-dom'

export default function Nav(){
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-dark/70 border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <div className="font-bold">Benjamin<span className="text-accent">.</span>DevOps</div>
        <div className="flex gap-6 text-sm md:text-base">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/projets">Projets</NavLink>
          <NavLink to="/hockey">Hockey</NavLink>
        </div>
      </div>
    </nav>
  )
}
