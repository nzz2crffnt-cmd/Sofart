# Sofart — ma boutique de dessins

Un petit site simple pour montrer et vendre tes dessins. Pas besoin de serveur ni de base de données : ce sont juste des fichiers HTML/CSS/JS.

## Voir le site sur ton ordi

Double-clique sur `index.html`, il s'ouvre dans ton navigateur.

## Ajouter / modifier tes dessins

Tout se passe dans **`dessins.js`** :

1. Mets la photo de ton dessin dans le dossier `images/` (ex : `images/mon-chat.jpg`).
2. Dans `dessins.js`, copie un bloc `{ ... }` et change le titre, le prix, l'image, etc.
3. Quand un dessin est vendu, mets `vendu: true` → il affiche « Vendu » et ne peut plus être acheté.

Les dessins d'exemple (`images/*.svg`) sont là pour montrer à quoi ça ressemble : remplace-les par tes vrais dessins.

En haut de `dessins.js`, change aussi les **réglages** : ton nom d'artiste, ton email, ton Instagram, le texte « À propos ».

> Astuce photo : prends tes dessins en photo à la lumière du jour, bien à plat, au format portrait.

## Comment les gens paient ?

Deux façons, au choix pour chaque dessin :

- **Par email (par défaut)** : le bouton « Acheter » ou « Commander » ouvre un email pré-rempli vers toi avec le dessin, le prix, et la place pour l'adresse. Tu réponds ensuite avec un lien de paiement (PayPal, Lydia, virement…).
- **Paiement direct en ligne** : crée un « lien de paiement » sur [Stripe](https://stripe.com/fr/payments/payment-links), [PayPal](https://www.paypal.com) ou [SumUp](https://sumup.fr), puis colle-le dans `lienPaiement: "https://..."` du dessin. Le bouton « Acheter » enverra directement vers la page de paiement.

> ⚠️ Si tu es mineur(e), il faut l'accord d'un parent pour ouvrir un compte de paiement.

## Mettre le site en ligne gratuitement (GitHub Pages)

1. Sur GitHub, va dans le dépôt → **Settings** → **Pages**.
2. Dans « Branch », choisis la branche (ex : `main`) et le dossier `/ (root)`, puis **Save**.
3. Après une minute, ton site est en ligne à une adresse du type `https://ton-pseudo.github.io/Sofart/`.

## Les fichiers

| Fichier | À quoi il sert |
|---|---|
| `dessins.js` | **Tes dessins et réglages** (le seul à modifier normalement) |
| `index.html` | La structure de la page |
| `style.css` | Les couleurs et la mise en page |
| `script.js` | Galerie, filtres, panier, commande |
| `images/` | Les photos de tes dessins |
