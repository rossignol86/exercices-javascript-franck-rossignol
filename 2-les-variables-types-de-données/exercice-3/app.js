let a = 1;
let b = 5;

console.log(a);
console.log(b);

// Résultat attendu :

// a => 5 et  b => 1

// création d'une nouvelle variable C contenant la variable a
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


