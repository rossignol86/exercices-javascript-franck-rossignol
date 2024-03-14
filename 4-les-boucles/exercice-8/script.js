// Exemple de déroulement :

// Votre nombre secret est 7 par exemple.

// L'utilisateur saisit 5, résultat attendu dans la console : 
// Trop petit

// L'utilisateur saisit 9, résultat attendu dans la console : 
// Trop grand

// L'utilisateur saisit 7, résultat attendu dans la console : 
// Félicitations, vous avez trouvé !


let nombreSecret = '7';
let proposition = prompt("Veuillez saisir un chiffre");

while (nombreSecret < proposition) {
    proposition = prompt("Trop petit");
}
    if (nombreSecret > proposition) {
        proposition = prompt("Trop grand");
}
console.log("Félicitations, vous avez trouvé !");