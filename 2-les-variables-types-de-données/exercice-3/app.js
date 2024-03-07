let a = 1;
let b = 5;

console.log(a);
console.log(b);

// Résultat attendu :

// a => 5 et  b => 1

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log('a is now:', a);
console.log('b is now:', b);

// C'est ce qu'on appelle l'algorithme d'échange XOR