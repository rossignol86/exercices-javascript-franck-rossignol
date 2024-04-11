//Créez un tableau contenant plusieurs couleurs.
//Affichez la longueur du tableau dans la console,
//puis ajoutez deux couleurs supplémentaires et
//affichez à nouveau la longueur pour voir le changement.

let couleurs = ["bleu", "blanc", "rouge"]
console.table(couleurs);

console.log(couleurs.length);

couleurs[3] = "vert";
couleurs[4] = "orange";
console.table(couleurs);

console.log(couleurs.length);