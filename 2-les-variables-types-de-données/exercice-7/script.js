// let somme = 10 * 2;
// console.log(somme);

// Résultat attendu pour 10 et 2, dans la console :
// 10 x 2 = 20; fait
// 10 - 2 = 8; fait
// 10 + 2 = 12; fait
// 10 / 2 = 5; fait
// 10 exposant 2 = 100; fait

let a = prompt("premier chiffre");
a = parseInt(a)
let b = prompt("deuxieme chiffre");
b = parseInt(b)
// on récuper des strings (chaine de caractères) :
// je les transformes en number parseInt :


let quotient = a / b;
console.log(quotient);
let message4 =`${a} / ${b} = ${quotient}`;
console.log(message4)

let produit = a * b;
console.log(produit);
let message2 = `${a} x ${b} = ${produit}`;
console.log(message2)

let difference = a - b;
console.log(difference);
let message3 = `${a} - ${b} = ${difference}`
console.log(message3)

let somme = a + b;
console.log(somme);
let message1 = `${a} + ${b} = ${somme}`;
console.log(message1)

