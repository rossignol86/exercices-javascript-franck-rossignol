// Affichez une image sur votre page.
//Ajoutez un évènement pour qu’au survol de cette image,

let element = document.querySelector('img')

element.addEventListener('survol', function(mousemove) {
    console.log('Élément survolé');
});

//elle devienne floue.
//(faite le bien en javascript, pas avec un :hover)