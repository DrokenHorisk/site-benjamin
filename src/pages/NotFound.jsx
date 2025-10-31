import Nav from '../components/Nav.jsx'
import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <div>
      <Nav/>
      <div className="container py-24 text-center">
        <h2 className="text-4xl font-bold">404</h2>
        <p className="subtle mt-2">La page demandée n’existe pas.</p>
        <Link to="/" className="btn mt-6">Retour à l’accueil</Link>
      </div>
    </div>
  )
}
