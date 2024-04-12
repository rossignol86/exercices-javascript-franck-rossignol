//Créez quatre fonctions distinctes pour l'addition,
//la soustraction, la multiplication et la division. 
//Chaque fonction doit vérifier si les arguments a et b
//sont bien définis et sont des nombres;
//si ce n'est pas le cas, retournez "paramètres incorrects".
//Sinon, effectuez l'opération correspondante et retournez
//le résultat.

//addition(a, b)

function addition(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      console.log ("paramètres incorrects");}
}
const resultat = addition(15, 30);
console.log(resultat);



function soustraction(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  } else {
    console.log ("paramètres incorrects");}
}
const resultat2 = soustraction (15, 30);
console.log(resultat2);



function multiplication(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  } else {
    console.log ("paramètres incorrects");}
}
const resultat3 = multiplication("a", 30);
console.log(resultat3);



function division(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a / b;
  } else {
    console.log ("paramètres incorrects");}
}
const resultat4 = division(150, 30);
console.log(resultat4);