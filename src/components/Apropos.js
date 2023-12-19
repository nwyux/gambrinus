import prog from "../assets/img/grambrinus-prog.png";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function Apropos() {

  useEffect(() => {
    const modal = document.querySelector(".modal");
        const modalContainer = document.querySelector(".modal-container");
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target === modalContainer) {
                modal.classList.add("hidden");
            }
        });
  },[])

  function modal() {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".modal").classList.add("flex");
}

  return (
    <div className="h-full flex sidebar-transition transition duration-400 ease-in-out mt-5">
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center hidden bg-noir bg-opacity-50 mt-5">
        <div className="modal-container bg-blanc w-11/12 sm:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Programme</p>
              <div className="modal-close cursor-pointer z-50">
                <button onClick={() => document.querySelector(".modal").classList.add("hidden")} className="text-zinc-700 hover:text-zinc-400">
                  <X />
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="border border-noir rounded"
                src={prog}
                alt="Programme"
              />
            </div>
            <div className="flex justify-start mt-2">
              <a href={prog} download>
                <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">
                  Télécharger
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-noir">À propos du Gambrinus</h1>
        </div>
        <div className="text-center flex flex-col sm:flex-row w-11/12 sm:w-4/6 m-auto gap-4 mt-4 align-middle items-center">
          <p className="text-xl sm:w-1/2 text-gray-600 mt-4 text-justify">
            Le Gambrinus Fest est un festival de bière et de produits artisanaux
            prenant place chaque année depuis 3 ans, destiné à la population
            locale de Béthune et des alentours. Dans ce festival, les brasseurs
            et producteurs locaux ont l’opportunité de présenter et de mettre en
            vente leurs créations, le tout dans une ambiance familiale et
            conviviale.
            <br />
            <strong>Salle Olof Palme à Béthune.</strong>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.6528646467673!2d2.624613351743304!3d50.522025509230374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd234541fc4279%3A0xd9695a68d1083ae6!2sSalle%20Olof%20Palme!5e0!3m2!1sen!2sfr!4v1702892171912!5m2!1sen!2sfr"
            width="400"
            height="250"
            title="Salle Olof Palme à Béthune"
            allowfullscreen="yes"
            referrerpolicy="no-referrer-when-downgrade"
            className="overflow-hidden border-0"
          ></iframe>
        </div>
        <div className="text-center flex flex-col-reverse sm:flex-row w-11/12 sm:w-4/6 m-auto gap-4 mt-4 align-middle items-center">
          <div className="text-center">
            <button
              onClick={modal}
            >
          <img src={prog} alt="" className="w-12/12" />
            </button>
          </div>
          <div className="text-center">
          <h3 className="text-xl font-bold text-gray-600 mt-4 text-justify">
            La programmation du festival.
          </h3>
          <p className="text-xl sm:w-10/12 text-gray-600 mt-4 text-justify">
          Intronisations par la Ghilde des Eswards Cervoisiers, Expositions, Jeux d’antan, Tégestophile, Fabricant de sous-bock personnalisés, Démonstrations de brassage, Restauration régionale…
          Festivités autour du célèbre Géant Gambrinus, le patron des brasseurs.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
