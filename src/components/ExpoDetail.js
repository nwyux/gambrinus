import { items } from "./Data"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ExpoDetail() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const newItem = items.find((item) => item.name === id);
        setItem(newItem);
    }, [id]);

  return (
    <>
        <div className="h-full flex sidebar-transition transition duration-400 ease-in-out">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
                    <div className="w-1/2">
                        <img src={item.img} alt={item.name} />
                    </div>
                    <div className="w-1/2">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}