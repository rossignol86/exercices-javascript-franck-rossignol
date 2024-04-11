// à l’aide d’une boucle for..of, bouclez sur un tableau de jours
//["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
//et affichez le résultat ci-dessous.

// Résultat dans la console :

//Lundi, des patates
//Mardi, des patates
//Mercredi, des patates
//Jeudi, des patates
//Vendredi, des patates
//Samedi, des patates
//Dimanche, des patates aussi !

let patates = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
console.table(patates);

for (let i = 0; i < patates.length; i++) {
    console.log(patates[i]);
  }