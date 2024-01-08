import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gambri from "../assets/img/gambri.png";
import gambritext from "../assets/img/gambritext.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    const handleMouseDown = (event) => {
      closeMenu(event);
    };
  

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [showMenu]);

  const closeMenuOnClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className="bg-blanc text-noir py-4 px-4  sm:px-0 border-b-2 border-noir items-center sticky top-0 left-0 right-0 z-10">
        <div className="hidden container bg-blanc mx-auto md:flex justify-between align-middle items-center">
          <Link to="/" className="text-3xl font-archivo flex">
            <img
              className="w-1/12"
              src={gambri}
              alt="Gambrinus"
            />
          </Link>
          <ul className="flex text-noir lg:gap-12 font-alata items-center">
            <li className="mr-6">
              <NavLink
                to="/"
                className="text-noir hover:underline"
              >
                Accueil
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/pricing"
                className="text-noir hover:underline"
              >
                Billeterie
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/about"
                className="text-noir hover:underline"
              >
                À propos
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/exposants"
                className="text-noir hover:underline"
              >
                Exposants
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="container mx-auto md:hidden flex justify-between items-center relative">
          <div className="text-noir">
            <Link to="/" className="text-3xl font-archivo">
            <img
              className="w-1/12"
              src={gambri}
              alt="Gambrinus"
            />
            </Link>
          </div>
          <button className="text-3xl font-bold" onClick={toggleMenu}>
            {showMenu ? <X /> : <Menu />}
          </button>

          <div
            ref={menuRef}
            className={`${
              showMenu ? "translate-x-0" : "translate-x-full"
            } fixed top-0 right-0 h-full font-alata bg-blanc text-noir w-3/5 max-w-xs flex flex-col justify-center items-center p-6 gap-4 transition-transform duration-200`}
          >
            <button
              className="absolute top-5 right-5 text-3xl font-bold"
              onClick={toggleMenu}
            >
              <X />
            </button>

            <NavLink
              to="/"
              className="text-noir hover:underline"
              onClick={closeMenuOnClick}
            >
              Accueil
            </NavLink>
            <hr className="w-3/5 bg-noir block h-0.5" />
            <NavLink
              to="/pricing"
              className="text-noir hover:underline"
              onClick={closeMenuOnClick}
            >
              Billeterie
            </NavLink>
            <hr className="w-3/5 bg-noir block h-0.5" />
            <NavLink
              to="/about"
              className="text-noir hover:underline"
              onClick={closeMenuOnClick}
            >
              À propos
            </NavLink>
            <hr className="w-3/5 bg-noir block h-0.5" />
            <NavLink
              to="/exposants"
              className="text-noir hover:underline"
              onClick={closeMenuOnClick}
            >
              Exposants
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}