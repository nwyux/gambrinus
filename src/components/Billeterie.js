import { useEffect } from "react";
import { X } from "lucide-react";
import QR from "../assets/img/frame.png";

export default function Billeterie() {
  let count = 473;

  function countDown() {
    count--;
    document.querySelector(".count").innerHTML = count;
  }

  useEffect(() => {
    

    const modal = document.querySelector(".modal");
    const modalContainer = document.querySelector(".modal-container");
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target === modalContainer) {
        modal.classList.add("hidden");
      }
    });
  }, []);

  function modal() {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".modal").classList.add("flex");

    countDown();
  }

  return (
    <div className="h-full flex sidebar-transition transition duration-400 ease-in-out mt-5">
      <div className="modal fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center hidden bg-noir bg-opacity-50">
        <div className="modal-container bg-blanc w-11/12 sm:max-w-2xl rounded mx-auto shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">QR Code d'entrée</p>
              <div className="modal-close cursor-pointer z-50">
                <button
                  onClick={() =>
                    document.querySelector(".modal").classList.add("hidden")
                  }
                  className="text-zinc-700 hover:text-zinc-400"
                >
                  <X />
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="border border-noir rounded"
                src={QR}
                alt="QR Code"
              />
            </div>
            <div className="flex justify-start mt-2">
              <a href={QR} download>
                <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">
                  Télécharger
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-noir">Billeterie</h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 underline underline-offset-4">
            Nombres de billets disponibles : <span className="count">{count}</span>/500.
          </p>
        </div>

        <div className="h-full flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-center text-blanc border border-noir p-6 w-8/12 md:w-5/12 rounded-lg gap-2">
              <h3 className="billet text-xl sm:text-2xl font-bold text-noir mt-4">
                Entrée simple
              </h3>
              <ul className="text-md sm:text-lg text-gray-600 text-left mt-4 list-disc xl:w-5/6">
                <li>Accés au salon et aux exposants</li>
                <li>Participation aux événements sur place</li>
                <li>Dégustations diverses et variées</li>
              </ul>
              <div className="flex items-center justify-center mt-4 gap-4">
                <p className="text-2xl text-right text-gray-600">Gratuit</p>
                <button
                  // onClick={modal}
                  className="btn bg-gray-600 cursor-not-allowed line-through	 text-blanc px-2 py-2 rounded-lg hover:bg-zinc-700"
                >
                  Acheter
                </button>
              </div>
            </div>

            <div className="text-center relative text-blanc border border-noir p-6 w-8/12 md:w-5/12 rounded-lg gap-2">
              <h2 className="bg-noir rounded-t absolute top-0 left-0 py-1 w-full">
                OFFRE EXCLUSIVE INTERNET
              </h2>
              <h3 className="billet text-xl sm:text-2xl font-bold text-noir mt-4">
                Pass Dégustation
              </h3>
              <ul className="text-md sm:text-lg text-gray-600 text-left mt-4 list-disc">
                <li>Les avantages de l'entrée gratuite</li>
                <li>3 dégustations de bière artisanale offertes</li>
                <li>Un écocup exclusif du Gambrinus</li>
              </ul>
              <div className="flex items-center justify-center mt-4 gap-4">
                <p className="text-2xl text-right text-gray-600">6€</p>
                <button
                  onClick={modal}
                  className="btn bg-noir text-blanc px-2 py-2 rounded-lg hover:bg-zinc-700"
                >
                  Acheter
                </button>
              </div>
            </div>

            <div className="text-center relative text-blanc border border-noir p-6 w-8/12 md:w-5/12 rounded-lg gap-2">
              <h2 className="bg-noir rounded-t absolute top-0 left-0 py-1 w-full">
                SUR PLACE
              </h2>
              <h3 className="billet text-xl sm:text-2xl font-bold text-noir mt-4">
                Pass Dégustation
              </h3>
              <ul className="text-md sm:text-lg text-gray-600 text-left mt-4 list-disc">
                <li>Les avantages de l'entrée gratuite</li>
                <li>3 dégustations de bière artisanale offertes</li>
                <li>Un écocup exclusif du Gambrinus</li>
              </ul>
              <div className="flex items-center justify-center mt-4 gap-4">
                <p className="text-2xl text-right text-gray-600">7€</p>
                <button
                  onClick={modal}
                  className="btn bg-gray-600 text-blanc px-2 py-2 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Acheter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
