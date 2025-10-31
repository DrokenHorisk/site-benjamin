import Nav from '../components/Nav.jsx'

export default function Hockey(){
  return (
    <div>
      <Nav/>
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-6">Hockey — Lausanne HC</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="section-title">Pourquoi le LHC ?</h3>
            <p className="subtle">Intensité, ambiance, et une culture du jeu tournée vers l’offensive. Quelques notes personnelles et coups de cœur. c'est une histoire d'amour que t'aimes autant que tu détestes, qui te fait vivre plus de tempête émotionnelle qu'un couple</p>
          </div>
          <div className="card">
            <h3 className="section-title">Focus joueur : Drake Caggiula</h3>
            <p className="subtle">Ailier combatif et créatif, capable d’impacter le forecheck et le powerplay. Un profil qui incarne l’énergie du club.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
