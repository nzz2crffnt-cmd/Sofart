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
  email: "ton.email@exemple.com", // ← mets ton adresse email ici
  instagram: "", // ex : "https://instagram.com/ton_compte" (laisse vide pour cacher)
  monnaie: "€",
  aPropos:
    "Je dessine depuis toujours. Chaque dessin est une pièce unique, réalisée à la main. " +
    "Les œuvres sont envoyées soigneusement emballées, avec un petit mot.",
};

const DESSINS = [
  {
    titre: "Le renard rêveur",
    image: "images/renard.svg",
    prix: 45,
    categorie: "Animaux",
    technique: "Crayon et encre",
    format: "A4",
    description: "Un renard qui regarde passer les nuages.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Jardin secret",
    image: "images/jardin.svg",
    prix: 60,
    categorie: "Nature",
    technique: "Aquarelle",
    format: "A4",
    description: "Un coin de jardin au printemps, tout en douceur.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Soleil d'été",
    image: "images/soleil.svg",
    prix: 35,
    categorie: "Nature",
    technique: "Feutres",
    format: "A5",
    description: "La chaleur d'un après-midi d'août.",
    vendu: true,
    lienPaiement: "",
  },
  {
    titre: "Portrait au fusain",
    image: "images/portrait.svg",
    prix: 80,
    categorie: "Portraits",
    technique: "Fusain",
    format: "A3",
    description: "Un visage, quelques traits, beaucoup d'émotion.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "La vague",
    image: "images/vague.svg",
    prix: 50,
    categorie: "Nature",
    technique: "Encre",
    format: "A4",
    description: "Le mouvement de la mer, en quelques lignes.",
    vendu: false,
    lienPaiement: "",
  },
  {
    titre: "Petite ville",
    image: "images/ville.svg",
    prix: 55,
    categorie: "Villes",
    technique: "Crayon de couleur",
    format: "A4",
    description: "Les toits d'une ville imaginaire au coucher du soleil.",
    vendu: false,
    lienPaiement: "",
  },
];
