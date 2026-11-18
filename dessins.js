/* ============================================================
   ✏️  C'EST ICI QUE TU AJOUTES / MODIFIES TES DESSINS
   ============================================================

   Pour ajouter un dessin :
   1. Mets la photo de ton dessin dans le dossier "images/"
      (ex : images/mon-chat.jpg)
   2. Copie un bloc { ... } ci-dessous et change les infos.

   Champs :
   - titre       : le nom du dessin
   - image       : le chemin vers la photo
   - prix        : le prix en euros (juste le nombre)
   - categorie   : ce que tu veux (sert aux filtres en haut de la galerie)
   - technique   : crayon, feutre, aquarelle, numérique...
   - format      : la taille (ex : "A4", "21 x 29,7 cm")
   - description : quelques mots sur le dessin
   - vendu       : true si le dessin est déjà vendu, sinon false
   - lienPaiement: (optionnel) un lien de paiement Stripe / PayPal / SumUp.
                   Si tu le laisses vide "", le bouton "Acheter" ouvre
                   un email de commande pré-rempli à la place.
   ============================================================ */

const REGLAGES = {
  nomArtiste: "Sofart",
  slogan: "Des dessins originaux, faits main, prêts à vivre chez vous.",
  email: "sofana.moussaoui93@gmail.com",
  instagram: "https://instagram.com/sofart195",
  monnaie: "€",
  aPropos:
    "Moi, c'est Sofana. J'ai 31 ans, je vis à Paris et je suis maman d'une petite fille. " +
    "Après des années à griffonner dans les marges, j'ai décidé de me lancer pour de bon dans l'art et la créativité. " +
    "Chaque dessin est une pièce unique, faite à la main avec le cœur, entre deux histoires du soir. " +
    "Les œuvres sont envoyées soigneusement emballées, avec un petit mot.",
};

const DESSINS = [
  {
    titre: "Petit renne de Noël",
    image: "images/renne.jpg",
    prix: 1,
    categorie: "Noël",
    technique: "Aquarelle",
    format: "A4",
    description: "Un petit renne tout doux, avec son écharpe rayée et ses guirlandes lumineuses.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Les courges d'automne",
    image: "images/courges.jpg",
    prix: 1,
    categorie: "Automne",
    technique: "Aquarelle",
    format: "A4",
    description: "Courges et potirons de toutes les couleurs, entourés de feuilles qui virevoltent.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Douceurs d'automne",
    image: "images/automne.jpg",
    prix: 1,
    categorie: "Automne",
    technique: "Aquarelle",
    format: "A4",
    description: "Pot de compote, sachets de thé, maison-citrouille et champignon : tout le cocon de l'automne.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Les teckels en pull",
    image: "images/teckels.jpg",
    prix: 1,
    categorie: "Animaux",
    technique: "Aquarelle",
    format: "A4",
    description: "Une petite troupe de teckels en pull rouge qui part en promenade.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Sorry for being late, I had tajine",
    image: "images/tajine.jpg",
    prix: 1,
    categorie: "Humour",
    technique: "Aquarelle",
    format: "A4",
    description: "Un clin d'œil gourmand : la meilleure excuse pour arriver en retard.",
    vendu: false,
    lienPaiement: "",
  },
];
