//Créez une fonction qui prend un mot en paramètre
//et retourne la longueur de ce mot.
//Affichez le résultat pour plusieurs mots différents.

function longueurDuMot(mot) {
  return mot.length;
}

// Test de la fonction avec différents mots
let mot = "Developpeur";
let mot1 = "Franck"


console.log("Longueur de " + mot + " : " + longueurDuMot(mot));
console.log("Longueur de " + mot1 + " : " + longueurDuMot(mot1));