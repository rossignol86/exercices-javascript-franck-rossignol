// Dans votre HTML :
// 1 - creer un header (element HTML)
// - creer un element footer (element HTML)
//console.log("coucou")


// Dans votre Javascript :
// 2 - creer un element html h1
let nouveauTitreH1 = document.createElement("h1");

// 3 - modifier la taille de votre h1 (50px)
nouveauTitreH1.style.fontSize = "50px";

// 4 - changer la couleur du h1
nouveauTitreH1.style.color = "green";

// 5 - Ajouter un texte dans votre h1
nouveauTitreH1.innerText = "Nouveau titre";

// 6 - Ajouter votre element H1 => dans votre element Header
let baliseHeader = document.querySelector('header');
baliseHeader.appendChild(nouveauTitreH1);

// 7 - Supprimer votre element footer
let baliseFooter = document.querySelector('footer');
baliseFooter.remove();