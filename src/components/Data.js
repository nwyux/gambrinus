import img1 from '../assets/img/gueules_noires.jpg';

import img2 from '../assets/img/domaine_helant.jpg';

import img3 from '../assets/img/mr_biltong.jpg';

import img4 from '../assets/img/brasserie_lawe.jpeg';

export const items = [

    {
        id: 1,
        category: "Brasserie",
        brand : "Belbeke",
        name: "La Brasserie Belbeke",
        description: "La Brasserie Belbeke est une brasserie artisanale située à Lorgies. Elle propose plusieurs bières : blonde, brune, ambrée, blanche, IPA, etc.",
        lieu: "Lorgies",
        img: img1,
        videos: "https://www.youtube.com/embed/koEDcDQnXag",
    },
    {
        id: 2,
        category: "Producteurs Locaux",
        brand : "Domaine Hélant",
        name: "Le Domaine D'Hélant",
        description: "Le Domaine D'Helant est un domaine viticole situé à Oignies. Il propose plusieurs vins : blanc, rouge, rosé, pétillant, etc.",
        lieu: "Oignies",
        img: img2,
        // otherImgs: [
        //     af1_1,
        //     af1_2,
        // ],
        // videos: "https://www.youtube.com/embed/koEDcDQnXag",
    },
    {
        id: 3,
        category: "Producteurs Locaux",
        brand : "Monsieur Biltong",
        name: "Monsieur Biltong",
        description: "Monsieur Biltong est un artisan boucher qui a décidé de se lancer dans la fabrication de Biltong, une viande séchée d'origine sud-africaine. Il propose plusieurs saveurs : nature, poivre, piment, ail et fines herbes. Il propose également des saucissons de boeuf et de porc.",
        lieu: "Oignies",
        img: img3,
        // otherImgs: [
        //     af1_1,
        //     af1_2,
        // ],
        videos: "https://www.youtube.com/embed/koEDcDQnXag",
    },
    {
        id: 4,
        category: "Brasserie",
        brand : "Brasserie de la Lawe",
        name: "Brasserie de la Lawe",
        description: "La Brasserie de la Lawe est une brasserie artisanale située à La Couture. Elle propose plusieurs bières : blonde, brune, ambrée, blanche, IPA, etc.",
        lieu: "La Couture",
        img: img4,
        // otherImgs: [
        //     af1_1,
        //     af1_2,
        // ],
        videos: "https://www.youtube.com/embed/koEDcDQnXag",
    },
]