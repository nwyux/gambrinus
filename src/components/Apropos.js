import React from 'react'

export default function Apropos() {
  return (
    <div className="h-full flex sidebar-transition transition duration-400 ease-in-out mt-5">
      <div className="flex flex-col w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-noir">À propos</h1>
        </div>
        <div className="text-center w-11/12 sm:w-4/6 m-auto">
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-justify">
            Le Gambrinus Fest est un festival de bière et de produits artisanaux prenant place chaque année depuis 3 ans, destiné à la population locale de Béthune et des alentours.
            Dans ce festival, les brasseurs et producteurs locaux ont l’opportunité de présenter et de mettre en vente leurs créations, le tout dans une ambiance familiale et conviviale.
          </p>
        </div>
      </div>
    </div>
  )
}
