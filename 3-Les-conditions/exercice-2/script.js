// Exemples de résultats attendus dans la console :

// Le nombre 1 est plus grand que le nombre 2

// Le nombre 1 est plus petit que le nombre 2

// Les deux nombres sont égaux

// let nombre1 = 150;
// let nombre2 = 100;

let nombre1 = parseInt(prompt("premier chiffre"));
let nombre2 = parseInt(prompt("deuxieme chiffre"));

if (nombre1 > nombre2) {
    console.log("le nombre 1 est plus grand !");
} else if (nombre1 < nombre2) {
    console.log("le nombre 1 est plus petit !");
} else {
    console.log("les deux nombre sont égaux !");
}


