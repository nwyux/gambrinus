import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import offtour from "../assets/img/officetourismejpg.jpeg";
import hdf from "../assets/img/hdf.png";

export default function Footer() {
  return (
    <div className="App static left-0 w-full bottom-0 mt-24">
      <footer className="bg-blanc border-t-2 border-noir text-noir p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-lg font-bold">Gambrinus'Fest</p>
              <p className="text-sm">Copyright © 2023. Tous droits réservés.</p>
            </div>
            <div>
              <ul className="flex space-x-4 mb-4 sm:mb-0">
                <li>
                  <NavLink to="/" className="text-noir hover:underline">
                    Accueil
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pricing" className="text-noir hover:underline">
                    Billeterie
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" className="text-noir hover:underline">
                    À propos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/exposants" className="text-noir hover:underline">
                    Exposants
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex space-x-4 items-center">
              <p className="">Partenaires :</p>
              <img
                className="w-15 h-10"
                src={offtour}
                alt="Office de tourisme"
              />
              <img className="w-15 h-10" src={hdf} alt="Hauts-de-France" />
            </div>
            <div className="flex space-x-4 items-center">
              <a
                href="mailto:gambrinus@gmail.com"
                className="text-gray-400 hover:text-red-500"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
