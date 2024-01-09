import React, { useState } from "react";
import { ArrowLeft, ArrowDown } from "lucide-react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto py-3">
      <div
        className="border-b border-gray-200 p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg">{title}</h3>
          {isOpen ? (
            <span className="transform rotate-0 transition-transform">
              <ArrowDown />
            </span>
          ) : (
            <span className="transform rotate-180 transition-transform">
              <ArrowLeft />
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 border-b border-gray-200">
          <p className="text-md text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
};

const InfoAccordeon = () => {
  return (
    <div className="flex flex-col justify-center items-center text-justify">
      <AccordionItem
        title="Qu'est-ce que le Gambrinus Fest ?"
        content="Le Gambrinus Fest est un festival de bières artisanales annuel dont la 3ème édition à eu lieu les 11 et 12 novembre 2023.
        Chaque année, le Gambrinus Fest devient le point de rencontre privilégié des passionnés de bières artisanales. Les brasseurs locaux ont l'opportunité de présenter leurs créations, tandis que les producteurs locaux partagent leurs produits artisanaux, créant ainsi une expérience gustative riche dans une ambiance conviviale et familiale.
        Le gambrinus fest célèbre également un partenariat annuel des plus festif avec l'association Les Amis de la Bière. Cette collaboration permet d’enrichir l'expérience des visiteurs en proposant une exposition dont le but est d'assurer la promotion de la bière authentique. 
        “Les Amis de la Bière proposent également des jeux anciens dans une ambiance familiale. 
        "
      />
      <AccordionItem
        title="Les objectifs de la prochaine édition !"
        content="Pour l’édition 2024, le festival à plusieurs objectifs, le premier étant de fidéliser la base solide de visiteurs des éditions précédentes.
         Avoir des visiteurs récurrents permettrait à l'événement de consolider son ambiance familiale. 
         Pour atteindre cet objectif notre rôle sera de mettre une communication efficace pour faciliter le parcours des potentiels visiteurs et de leur permettre de trouver facilement les informations qui les intéresse concernant l'événement.
        Le second objectif, qui est indirectement en lien avec le premier, vise à améliorer l'identité visuelle du festival. Cette démarche est stratégique car elle contribue directement à la pérennité et à la reconnaissance du festival sur le long terme. En travaillant sur l'identité visuelle, le festival cherche à créer une image distinctive, mémorable et cohérente qui s'ancre dans la mémoire des participants, des partenaires et du public en général."
      />
      <AccordionItem
        title="Nos exposants !"
        content="Les exposants sont des brasseurs et des producteurs locaux. Ils sont sélectionnés par l'association Les Amis de la Bière.
        L'association Les Amis de la Bière est une association de passionnés de bières artisanales. Elle a pour but de promouvoir la bière authentique et de partager leur passion avec le plus grand nombre.
        "
      />
      <AccordionItem
        title="Les Amis de la Bière"
        content="Les Amis de la bière, fondés en 1986 par des passionnés, regroupent plus de 500 membres principalement du Nord-Pas-de-Calais. Ils participent à des visites de musées et des conventions dédiées à la bière, tout en travaillant à la création d'un musée régional de la bière pour exposer des pièces de collection. Les membres, qu'ils soient anciens brasseurs, historiens de la bière ou brasseurs amateurs, partagent une passion commune pour cet univers. L'association soutient la Ghilde des Eswards Cervoisiers, une confrérie représentative du monde brassicole dans divers événements. L'adhésion à cette confrérie nécessite une contribution publique à la promotion de la bière, telle que l'organisation du Gambrinus Fest. Les Amis de la bière sont des partenaires essentiels de cet événement, mettant en avant la bière de Noël. Le président, M. Vincent Caruso, partage avec enthousiasme l'histoire de l'association et son engagement lors des manifestations, en particulier celles liées aux bières de Noël. L'avenir de l'association implique des apparitions publiques et une participation continue aux événements tels que le Gambrinus Fest pour élargir la communauté de la Ghilde des Eswards Cervoisiers."
      />
    </div>
  );
};

export default InfoAccordeon;
