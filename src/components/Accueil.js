import React from 'react'

export default function Accueil() {
  return (
    <div className="h-full flex sidebar-transition transition duration-400 ease-in-out mt-5">
        <div className="flex flex-col w-full">
            <div className="text-center">
            <h1 className="text-3xl font-bold text-noir">Accueil</h1>
            </div>
            <div className="text-center">
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">Le salon de la bière de la région de Saint-Brieuc</p>
            </div>
        </div>

    </div>
  )
}
