// Logique de la boutique — normalement tu n'as pas besoin de modifier ce fichier.
// Tes dessins et réglages se trouvent dans "dessins.js".

(function () {
  const $ = (id) => document.getElementById(id);
  const R = REGLAGES;
  const prixTexte = (n) => `${n.toLocaleString("fr-FR")} ${R.monnaie}`;
  DESSINS.forEach((d, i) => (d.id = i));

  // ---------- Textes ----------
  document.title = `${R.nomArtiste} — Dessins originaux à vendre`;
  $("logo").textContent = R.nomArtiste;
  $("heroTitre").textContent = R.nomArtiste;
  $("nomPied").textContent = R.nomArtiste;
  $("slogan").textContent = R.slogan;
  $("texteApropos").textContent = R.aPropos;
  $("annee").textContent = new Date().getFullYear();
  $("lienEmail").href = `mailto:${R.email}`;
  if (R.instagram) $("lienInsta").href = R.instagram;
  else $("lienInsta").remove();

  // ---------- Panier (sauvegardé dans le navigateur) ----------
  let panier = [];
  try { panier = JSON.parse(localStorage.getItem("panier-sofart")) || []; } catch (e) {}
  panier = panier.filter((id) => DESSINS[id] && !DESSINS[id].vendu);
  const sauver = () => { try { localStorage.setItem("panier-sofart", JSON.stringify(panier)); } catch (e) {} };

  function majPanier() {
    $("compteur").textContent = panier.length;
    const liste = $("panierListe");
    liste.innerHTML = "";
    if (!panier.length) {
      liste.innerHTML = '<li class="panier-vide">Ton panier est vide.</li>';
    }
    panier.forEach((id) => {
      const d = DESSINS[id];
      const li = document.createElement("li");
      li.innerHTML = `<img alt=""><div><div class="nom"></div><button class="retirer">Retirer</button></div><div class="carte-prix"></div>`;
      li.querySelector("img").src = d.image;
      li.querySelector(".nom").textContent = d.titre;
      li.querySelector(".carte-prix").textContent = prixTexte(d.prix);
      li.querySelector(".retirer").onclick = () => { panier = panier.filter((x) => x !== id); sauver(); majPanier(); };
      liste.appendChild(li);
    });
    const total = panier.reduce((s, id) => s + DESSINS[id].prix, 0);
    $("panierTotal").textContent = prixTexte(total);
    $("btnCommander").disabled = !panier.length;
  }

  function ajouterAuPanier(d) {
    if (!panier.includes(d.id)) { panier.push(d.id); sauver(); majPanier(); }
    toast(`« ${d.titre} » ajouté au panier`);
  }

  function ouvrirPanier(ouvrir) {
    $("panier").classList.toggle("ouvert", ouvrir);
    $("panier").setAttribute("aria-hidden", !ouvrir);
    $("voile").classList.toggle("visible", ouvrir);
  }
  $("btnPanier").onclick = () => ouvrirPanier(true);
  $("fermerPanier").onclick = () => ouvrirPanier(false);
  $("voile").onclick = () => ouvrirPanier(false);

  function emailCommande(dessins) {
    const total = dessins.reduce((s, d) => s + d.prix, 0);
    const lignes = dessins.map((d) => `- ${d.titre} (${d.format}) : ${prixTexte(d.prix)}`).join("\n");
    const sujet = `Commande ${R.nomArtiste} — ${dessins.length > 1 ? dessins.length + " dessins" : dessins[0].titre}`;
    const corps =
      `Bonjour,\n\nJe souhaite acheter :\n${lignes}\n\nTotal : ${prixTexte(total)}\n\n` +
      `Mon nom :\nMon adresse de livraison :\n\nMerci !`;
    window.location.href = `mailto:${R.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
  }
  $("btnCommander").onclick = () => emailCommande(panier.map((id) => DESSINS[id]));

  // ---------- Filtres ----------
  let filtre = "Tous";
  const categories = ["Tous", ...new Set(DESSINS.map((d) => d.categorie).filter(Boolean)), "Disponibles"];
  categories.forEach((c) => {
    const b = document.createElement("button");
    b.textContent = c;
    b.onclick = () => { filtre = c; afficherGalerie(); };
    $("filtres").appendChild(b);
  });

  // ---------- Galerie ----------
  function afficherGalerie() {
    [...$("filtres").children].forEach((b) => b.classList.toggle("actif", b.textContent === filtre));
    const grille = $("grille");
    grille.innerHTML = "";
    DESSINS.filter((d) =>
      filtre === "Tous" ? true : filtre === "Disponibles" ? !d.vendu : d.categorie === filtre
    ).forEach((d) => {
      const carte = document.createElement("button");
      carte.className = "carte" + (d.vendu ? " vendu" : "");
      carte.innerHTML = `
        <div class="carte-image"><img loading="lazy" alt="">${d.vendu ? '<span class="badge">Vendu</span>' : ""}</div>
        <div class="carte-corps"><div><h3></h3><p class="meta"></p></div><span class="carte-prix"></span></div>`;
      carte.querySelector("img").src = d.image;
      carte.querySelector("img").alt = d.titre;
      carte.querySelector("h3").textContent = d.titre;
      carte.querySelector(".meta").textContent = [d.technique, d.format].filter(Boolean).join(" · ");
      carte.querySelector(".carte-prix").textContent = prixTexte(d.prix);
      carte.onclick = () => ouvrirDetail(d);
      grille.appendChild(carte);
    });
  }

  // ---------- Détail ----------
  function ouvrirDetail(d) {
    $("mImage").src = d.image;
    $("mImage").alt = d.titre;
    $("mTitre").textContent = d.titre;
    $("mCategorie").textContent = d.categorie || "";
    $("mPrix").textContent = d.vendu ? "Vendu" : prixTexte(d.prix);
    $("mDescription").textContent = d.description || "";
    $("mTechnique").textContent = d.technique || "—";
    $("mFormat").textContent = d.format || "—";

    const actions = $("mActions");
    actions.innerHTML = "";
    if (d.vendu) {
      const b = document.createElement("a");
      b.className = "btn btn-contour";
      b.textContent = "Demander un dessin similaire";
      b.href = `mailto:${R.email}?subject=${encodeURIComponent("Dessin similaire à « " + d.titre + " »")}`;
      actions.appendChild(b);
    } else {
      const acheter = document.createElement(d.lienPaiement ? "a" : "button");
      acheter.className = "btn btn-plein";
      acheter.textContent = `Acheter — ${prixTexte(d.prix)}`;
      if (d.lienPaiement) { acheter.href = d.lienPaiement; acheter.target = "_blank"; acheter.rel = "noopener"; }
      else acheter.onclick = () => emailCommande([d]);
      const ajouter = document.createElement("button");
      ajouter.className = "btn btn-contour";
      ajouter.textContent = "Ajouter au panier";
      ajouter.onclick = () => { ajouterAuPanier(d); $("modale").close(); };
      actions.append(acheter, ajouter);
    }
    $("modale").showModal();
  }
  $("modale").addEventListener("click", (e) => {
    if (e.target === $("modale") || e.target.hasAttribute("data-fermer")) $("modale").close();
  });

  // ---------- Petit message ----------
  let minuteur;
  function toast(msg) {
    $("toast").textContent = msg;
    $("toast").classList.add("visible");
    clearTimeout(minuteur);
    minuteur = setTimeout(() => $("toast").classList.remove("visible"), 2500);
  }

  afficherGalerie();
  majPanier();
})();
