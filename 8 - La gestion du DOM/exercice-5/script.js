// Affichez une image sur votre page.
//Ajoutez un évènement pour qu’au survol de cette image,

let element = document.querySelector('img')

//elle devient floue au passage de la sortie;
element.addEventListener('mouseover', function() {
    element.style.filter = 'blur(10px)';
});

//elle devient net lorsquer la souris quitte l'element
element.addEventListener('mouseout', function() {
    element.style.filter = 'none';
});

//elle s'efface lorsque je click la souris;
element.addEventListener('click', function() {
    element.style.filter = 'opacity(0%)';
});