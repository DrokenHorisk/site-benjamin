import Nav from '../components/Nav.jsx'

export default function Hockey() {
  return (
    <div>
      <Nav />
      <div className="container py-12">
        <h2 className="text-3xl font-bold mb-2 text-center">Hockey & Lausanne HC</h2>
        <p className="subtle text-center max-w-2xl mx-auto">
          Le hockey, ce n’est pas juste un sport pour moi : c’est un mix de bruit, de glace, de tensions
          et de moments complètement irrationnels qui te retournent plus que certaines relations.
        </p>

        {/* Intro LHC + Caggiula */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card">
            <h3 className="section-title">Pourquoi le LHC ?</h3>
            <p className="subtle">
              Intensité, ambiance, et une culture du jeu tournée vers l’offensive. C’est une histoire
              d’amour que tu adores autant que tu détestes : le genre de club qui te fait vivre plus de
              tempêtes émotionnelles qu’un couple, mais pour lequel tu reviens toujours.
            </p>
            <ul className="list-disc pl-6 mt-3 subtle space-y-1 text-sm">
              <li>Une patinoire où tu sens la pression monter à chaque powerplay.</li>
              <li>Un public capable de passer de la frustration totale à l’euphorie en 10 secondes.</li>
              <li>Un club qui, même quand il t’énerve, reste « ton » club.</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="section-title">Focus joueur : Drake Caggiula</h3>
            <p className="subtle">
              Ailier combatif et créatif, capable d’impacter le forecheck, le powerplay et le momentum
              d’un match en une présence sur la glace. Pas forcément le joueur le plus flashy, mais
              celui qui change le ton d’une partie par son énergie.
            </p>
            <ul className="list-disc pl-6 mt-3 subtle space-y-1 text-sm">
              <li>Jeu sans palet intelligent et énorme volume de patinage.</li>
              <li>Capable de provoquer des turnovers importants en zone offensive.</li>
              <li>Profil parfait pour un club qui veut jouer agressif et ne jamais reculer.</li>
            </ul>
          </div>
        </div>

        {/* Ce que le hockey m’apporte au boulot */}
        <div className="card mt-8">
          <h3 className="section-title">Ce que le hockey m’a appris (et que je réutilise en DevOps)</h3>
          <div className="grid md:grid-cols-2 gap-4 subtle text-sm">
            <div>
              <h4 className="font-semibold mb-1">Lecture du jeu & stats</h4>
              <p>
                Suivre une saison, c’est analyser des séries, des tendances, des détails de jeu…
                Exactement comme suivre un système en prod : tu regardes les métriques, tu observes
                les variations, tu essaies de comprendre le « pourquoi » derrière les chiffres.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Travail d’équipe & communication</h4>
              <p>
                Que ce soit en tribune avec d’autres fans ou dans un vestiaire, le hockey te rappelle
                qu’on ne gagne jamais seul. En DevOps, c’est pareil : si le dev, l’ops et le métier ne
                se parlent pas, le système finit toujours par le montrer.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Gestion de la pression</h4>
              <p>
                Fin de match serrée, prolongations, tirs au but… Tu apprends à encaisser les émotions
                sans paniquer. Utile quand tu dois intervenir sur une prod en panne à 23h avec tout le
                monde qui attend une solution.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Rituels & discipline</h4>
              <p>
                Comme un joueur prépare son match, j’aime préparer mon environnement : scripts, outils,
                dashboards prêts. Moins de magie, plus de méthode — et ça, le hockey te le rappelle
                à chaque erreur de concentration.
              </p>
            </div>
          </div>
        </div>

        {/* Bloc plus perso / matchday */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="card">
            <h3 className="section-title">Un soir de match type</h3>
            <ol className="list-decimal pl-6 subtle space-y-1 text-sm">
              <li>Check rapide des compos, stats et forme du moment.</li>
              <li>Montée de tension pendant l’échauffement et l’hymne.</li>
              <li>Commentaires à chaud (trop à chaud) sur les sorties de zone ratées.</li>
              <li>Analyse post-match : ce qui a marché, ce qui était catastrophique.</li>
            </ol>
            <p className="subtle mt-2">
              Oui, même pour un simple match, je finis par faire de la mini analyse comme sur une
              stack de monitoring.
            </p>
          </div>

          <div className="card">
            <h3 className="section-title">Et si on parle hockey en entretien ?</h3>
            <p className="subtle text-sm">
              Si tu es recruteur·se et que tu es arrivé·e jusque-là : je suis toujours partant pour
              parler alignement, forecheck, ou gestion de l’overload en zone offensive… et faire le
              parallèle avec la gestion de charge d’un cluster Kubernetes.
            </p>
            <p className="subtle text-sm mt-2">
              En résumé : le hockey, c’est mon terrain de jeu émotionnel. DevOps, c’est celui où je
              mets la même énergie, mais avec des pods, des pipelines et un peu moins de patins.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
