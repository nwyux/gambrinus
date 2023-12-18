import { items } from "./Data"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function ExpoDetail() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const newItem = items.find((item) => item.name === id);
        setItem(newItem);

        const modal = document.querySelector(".modal");
        const modalContainer = document.querySelector(".modal-container");
        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target === modalContainer) {
                modal.classList.add("hidden");
            }
        });
    }, [id]);

    function modal() {
        document.querySelector(".modal").classList.remove("hidden");
        document.querySelector(".modal").classList.add("flex");
    }
    

  return (
    <>
        <div className="h-full flex justify-center">
            <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center hidden bg-noir bg-opacity-50">
                <div className="modal-container bg-blanc w-11/12 sm:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 text-left px-6">
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold">{item.name}</p>
                            <div className="modal-close cursor-pointer z-50">
                                <button onClick={() => document.querySelector(".modal").classList.add("hidden")} className="text-zinc-700 hover:text-zinc-400">
                                    <X />
                                </button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img className="border border-noir rounded" src={item.img} alt={item.name} />
                        </div>
                        <div className="flex justify-start mt-2">
                            <a href={item.img} download>
                                <button className="bg-noir text-blanc p-2 rounded-lg hover:bg-zinc-700">Télécharger</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 max-w-4xl items-center sm:mt-1">
                    <div className="sm:w-4/6">
                        <button onClick={modal}>
                        <img className="border border-noir rounded" src={item.img} alt={item.name} />
                        </button>
                    </div>
                    <div className="sm:w-4/6 gap-2 flex flex-col">
                    <div className="items-start">
                        <NavLink to="/exposants" className="flex flex-row text-noir hover:underline w-20"> <ArrowLeft /> Retour</NavLink>
                    </div>
                          <h2 className="text-xl font-medium">{item.name}</h2>
                          <h3 className="text-zinc-400">{item.category}</h3>
                          <h4 className="text-zinc-700">Situé(e) à : <a href={"https://www.google.com/maps/place/"+item.lieu} target="_blank" rel="noreferrer" className="underline">{item.lieu}</a></h4>
                          <p className="max-w-sm sm:max-w-lg">{item.description}</p>
                    </div>
                    {item.videos && (
                        <div className="w-11/12 sm:w-4/6 gap-2 flex flex-col">
                            <hr className="w-full border-zinc-700" />
                            <h2 className="text-xl font-medium">L'interview de {item.name} :</h2>
                            <iframe
                            title={item.name}
                            className="w-full h-96"
                            src={item.videos}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="allowfullscreen"
                            ></iframe>
                    </div>
                    )
                        }
                </div>
            </div>
        </div>
    </>
  )
}