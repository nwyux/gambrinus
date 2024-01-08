import { NavLink } from "react-router-dom"

export default function Notfound() {
  return (
    <div className="min-h-full h-96 flex flex-col gap-4 justify-center m-auto sidebar-transition transition duration-400 ease-in-out">
      <div className="flex flex-col gap-4 m-auto">
        <h1 className="text-4xl font-archivo text-center">Oups</h1>
        <p className="text-xl text-center">La page que vous cherchez n'existe pas.</p>
        <NavLink to="/" className="m-auto">
          <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">Retourner à l'accueil</button>
        </NavLink>
      </div>
    </div>
  )
}
