import InfoAccordeon from "./Accordeon";
import { NavLink } from "react-router-dom";
import { items } from "./Data";
import gambrinus from "../assets/img/gambrinus.png";
import gambritext from "../assets/img/Gambrinus2.png";

export default function Accueil() {

  function randomItem(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const item = items[randomIndex];

    return (
      <div className="flex items-center flex-col md:flex-row gap-4 max-w-xs m-auto md:max-w-4xl border relative overflow-hidden border-noir rounded-lg">
        <div className="md:w-1/2">
          <NavLink to={`/exposants/${item.name}`} className="">
            <img src={item.img} alt={item.name} />
          </NavLink>
        </div>
        <div className="w-5/6 md:w-1/2 gap-2 flex flex-col">
          <h2>{item.name}</h2>
          <h3 className="text-zinc-400">{item.category}</h3>
          <p className="max-w-sm">
            {cutOffDescription(item.description)}
          </p>
          <NavLink
            to={`/exposants/${item.name}`}
            className="w-20 mb-6 sm:mb-0"
          >
            <button className="bg-brown text-blanc p-2 rounded-lg hover:bg-amber-900">
              Voir plus
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  function cutOffDescription(description) {
    if (description.length > 10) {
      return description.substring(0, 90) + "...";
    } else {
      return description;
    }
  }

  return (
    <div className="h-full flex sidebar-transition transition duration-400 ease-in-out mt-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row w-11/12 sm:w-4/6 m-auto gap-4 align-middle items-center">
          <div className="flex justify-center m-auto">
            <img className="w-3/6" src={gambrinus} alt="Gambrinus" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-11/12 sm:w-4/6 m-auto gap-4 align-middle items-center">
          <div className="flex justify-center m-auto">
            <img className="w-3/6" src={gambritext} alt="Gambrinus" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Le salon de la bière de la région des Hauts-de-France
          </p>
        </div>

        <div className="text-center flex justify-center gap-4 mt-4 mb-8">
          <NavLink to="/pricing">
            <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">
              Acheter mes billets
            </button>
          </NavLink>
          <NavLink to="/about">
            <button className="bg-lime-800 text-blanc p-2 rounded-lg hover:bg-vert">
              À propos de nous
            </button>
          </NavLink>
        </div>

        <hr className="w-3/5 bg-noir block h-0.5 mt-4 m-auto" />
        
        <div className="text-center">
          <h1 className="text-2xl font-bold text-noir mt-4">Découvrez l'un de nos exposants</h1>
        </div>

        <div className="flex flex-col gap-4 py-4">
          {randomItem(items)}
        </div>

        <hr className="w-3/5 bg-noir block h-0.5 mt-4 m-auto" />

        <div className="text-center">
          <h1 className="text-2xl font-bold text-noir mt-4">Informations</h1>
        </div>

        <div className="text-center">
          <InfoAccordeon />
        </div>
        
      </div>
    </div>
  );
}
