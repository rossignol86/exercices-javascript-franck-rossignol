//Créez un fonction createTag(tagName, content),
//qui prend en paramètre un nom de balise, et un contenu.
//Cette retourne un élément html.
//Testez votre fonction pour créer des éléments et
//les ajouter au DOM.

function createTag(tagName, content) {
    const element = document.createElement(tagName);
    element.innerText = content;
    return element;
}


//Test de la fonction en créant un paragraphe et un titre et en les ajoutant au DOM
const paragraph = createTag('p', 'Ceci est un paragraphe créé avec JavaScript.');
const heading = createTag('h1', 'Titre créé dynamiquement');

console.log(paragraph, heading);