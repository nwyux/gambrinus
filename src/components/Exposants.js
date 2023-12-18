import { NavLink } from "react-router-dom";
import { items } from "./Data";
import { useEffect, useState } from "react";

export default function Exposants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState("Tous");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function cutOffDescription(description) {
    if (description.length > 10) {
      return description.substring(0, 90) + "...";
    } else {
      return description;
    }
  }

  useEffect(() => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  function getItems() {
    if (category === "Tous") {
      return searchResults;
    } else {
      return searchResults.filter((item) => item.category === category);
    }
  }

  return (
    <>
      <div className="h-full flex flex-col gap-4 justify-center m-auto sidebar-transition transition duration-400 ease-in-out">

        <h1 className="text-4xl font-archivo text-center">Les Exposants</h1>
        
            <div className="flex flex-col gap-4 m-auto">
                <div className="flex absolute mt-2 items-center mb-3 ml-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-auto text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
                <input
                type="text"
                placeholder="Rechercher un exposant"
                className="py-2 px-5 mb-3 w-96 leading-tight focus:outline-none bg-blanc border border-noir text-noir rounded-lg block  pl-10 p-2.5 "
                value={searchTerm}
                onChange={handleChange}
                />
                <select className="w-56 m-auto border border-noir rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:border-transparent" onChange={handleCategoryChange}
                value={category}>
                    <option value="Tous">Tous</option>
                    <option value="Brasserie">Brasserie</option>
                    <option value="Producteurs Locaux">Producteurs Locaux</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Boutique">Boutique</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>


        <div className="flex flex-col gap-4">
                {getItems().length > 0 ? (
                    getItems().map((item, index) => (
                        <div
                        key={index}
                        className="flex items-center flex-col md:flex-row gap-4 max-w-xs m-auto md:max-w-4xl border relative overflow-hidden border-noir rounded-lg"
                      >
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
                          <NavLink to={`/exposants/${item.name}`} className="w-20 mb-6 sm:mb-0">
                            <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">
                              Voir plus
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    ))
                ) : (
                    <p className="text-2xl">
                    Aucun exposant ne correspond à votre recherche.
                    </p>
                )}
        </div>
      </div>
    </>
  );
}