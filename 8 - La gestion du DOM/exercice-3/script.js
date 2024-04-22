// Créez un bouton qui, lorsqu'il est cliqué,
//change la couleur de fond de la page (du <body>).
//Centrez le bouton au milieu de la page
//(horizontalement et verticalement).

console.log("salut l'artiste");

let button = document.querySelector('.changecouleur');


button.addEventListener('click', function () {
    let body = document.querySelector('body')
    body.style.background = 'black'
})






//couleurFond.style.backgroundColor = "blue";