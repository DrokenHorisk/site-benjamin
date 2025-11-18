import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";

const API_BASE = import.meta.env.VITE_TOPS_API_URL || "";

// Petit badge "statut TopScorers" relié à ton backend
function TopscorersLiveBadge() {
  const [status, setStatus] = useState("idle"); // idle | online | offline | error

  useEffect(() => {
    if (!API_BASE) {
      // Pas d'URL d’API → on indique simplement "non configuré"
      setStatus("offline");
      return;
    }

    let cancelled = false;

    async function checkOnce() {
      try {
        // On teste juste si le backend répond, sans dépendre d’un format exact
        const res = await fetch(`${API_BASE}/api/dashboard`, {
          method: "HEAD",
        }).catch(() => null);

        if (cancelled) return;

        if (res && res.ok) {
          setStatus("online");
        } else {
          setStatus("offline");
        }
      } catch (e) {
        if (!cancelled) {
          setStatus("error");
        }
      }
    }

    checkOnce();
    const id = setInterval(checkOnce, 60_000); // refresh toutes les 60s

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  let label = "Statut inconnu";
  let dotClass = "bg-gray-400";
  let textClass = "text-gray-700";

  if (status === "online") {
    label = "Dashboard TopScorers en ligne";
    dotClass = "bg-emerald-500";
    textClass = "text-emerald-700";
  } else if (status === "offline") {
    label = API_BASE
      ? "Backend TopScorers injoignable"
      : "Backend non configuré sur le CV";
    dotClass = "bg-red-500";
    textClass = "text-red-700";
  } else if (status === "error") {
    label = "Erreur de vérification du statut";
    dotClass = "bg-orange-500";
    textClass = "text-orange-700";
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-xs">
      <span className={`w-2 h-2 rounded-full ${dotClass}`}></span>
      <span className={textClass}>{label}</span>
    </div>
  );
}

export default function Hockey() {
  return (
    <div>
      <Nav />
      <div className="container py-12 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Hockey & Lausanne HC</h2>
            <p className="subtle max-w-2xl">
              Le hockey pour moi, ce n’est pas juste un sport : c’est un mix
              d’adrénaline, de stats, et de loyauté un peu irrationnelle pour
              le Lausanne HC.
            </p>
          </div>
          <TopscorersLiveBadge />
        </header>

        {/* Bloc "Pourquoi le LHC" + Drake Caggiula */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="section-title">Pourquoi le LHC ?</h3>
            <p className="subtle">
              Intensité, ambiance, et une culture du jeu tournée vers
              l’offensive. C’est une histoire d&apos;amour que tu aimes autant
              que tu détestes, qui te fait vivre plus de tempêtes émotionnelles
              qu&apos;un couple : séries de victoires, défaites incompréhensibles,
              remontadas improbables… mais au final tu reviens toujours.
            </p>
          </div>

          <div className="card">
            <h3 className="section-title">Focus joueur : Drake Caggiula</h3>
            <p className="subtle">
              Ailier combatif et créatif, capable d’impacter le forecheck, de
              provoquer en zone offensive et d’être dangereux sur le powerplay.
              C&apos;est typiquement le joueur &quot;énergie&quot; que j&apos;adore :
              intensité constante, intelligence de jeu, et un style qui colle
              parfaitement à l’identité que j’attends du LHC.
            </p>
          </div>
        </div>

        {/* Bloc National League + lien vers ton dashboard */}
        <section className="card">
          <h3 className="section-title">National League & data</h3>
          <p className="subtle mb-3">
            Je suis la National League autant par les matchs que par les
            données : évolution des valeurs de joueurs, dynamiques de marché,
            et impact des performances sur les équipes de type fantasy.
          </p>
          <p className="subtle mb-3">
            C’est ce qui m&apos;a amené à construire{" "}
            <span className="font-semibold">TopScorers</span> : un bot Discord +
            un backend analytique qui récupèrent les données de TopScorers.ch,
            calculent des métriques (momentum, MV 90j, valeur d’équipe, etc.) et
            génèrent un dashboard HTML mis à jour automatiquement sur mon
            cluster Kubernetes.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 rounded-md bg-sky-100 text-sky-800">
              Discord bot (Python)
            </span>
            <span className="px-2 py-1 rounded-md bg-emerald-100 text-emerald-800">
              FastAPI backend
            </span>
            <span className="px-2 py-1 rounded-md bg-indigo-100 text-indigo-800">
              Kubernetes (K3s)
            </span>
            <span className="px-2 py-1 rounded-md bg-amber-100 text-amber-800">
              GitOps / Argo CD
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              className="btn"
              href="http://88.184.158.243:50080/"
              target="_blank"
              rel="noreferrer"
            >
              Voir le dashboard TopScorers
            </a>
            <a
              className="link"
              href="https://github.com/DrokenHorisk/topscorers-dashboard"
              target="_blank"
              rel="noreferrer"
            >
              Code & manifestes Kubernetes
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
