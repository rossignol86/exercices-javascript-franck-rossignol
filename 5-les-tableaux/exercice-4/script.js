// À l'aide d'une boucle for, réalisez les tâches suivantes :
// Remplissez un tableau vide avec les 10 premiers nombres, puis affichez
//"Les dix premiers nombres sont : 1, 2, 3, 4, 5, 6, 7, 8, 9, 10".
//2. Remplissez un deuxième tableau vide avec les 10 premiers nombres pairs,
//puis affichez "Les dix premiers nombres pairs sont : 2, 4, 6, 8, 10, 12, 14, 16, 18, 20".

let tableau = [ ];
console.table(tableau);

for (let i = 1; i < 11; i++) {
// i dans le tableau
    tableau.push(i);
 //console.log(i);
}
console.log(tableau)
console.log(`Les dix premiers nombres sont : ${tableau}`);




let tableauPaire = [ ];
console.table(tableauPaire);
for (var i = 2; i <= 20; i += 2) {
    tableauPaire.push(i);
}
console.log(tableauPaire)
console.log(`Les dix premiers nombres pairs sont : ${tableauPaire}`);




let tableauImpaire = [ ];
console.table(tableauImpaire);
for (var i = 1; i <= 20; i += 2) {
    tableauImpaire.push(i);
}
console.log(tableauImpaire)
console.log(`Les dix premiers nombres impairs sont : ${tableauImpaire}`);