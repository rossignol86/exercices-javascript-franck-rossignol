// Exemple de déroulement :

// "Veuillez entrer le mot de passe :"

// Si incorrect, résultat attendu dans la console : 
// Mot de passe incorrect, essayez à nouveau.

// Si correct, résultat attendu dans la console : 
// Accès autorisé.

let motDePasse = '1234';
let proposition = prompt("Veuillez entrer le mot de passe :");

while (motDePasse !== proposition) {
    proposition = prompt("Mot de passe incorrect, essayez à nouveau.");
}
console.log("Accès autorisé.");