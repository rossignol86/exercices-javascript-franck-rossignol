//A partir d’un tableau qui contient une liste d’animaux,
//afficher les séparés par une virgule,
//mais dans le sens inverse et en majuscules
//(⚠️ regardez bien l’exemple).
//const mots = [
//    "chat",
//    "chien",
//    "oiseau",
//    "poisson",
//    "souris",
//    "lapin",
//   "tortue",
//    "poule"
//];

// Résultat attendu :

const mots = [
    "chat",
    "chien",
    "oiseau",
    "poisson",
    "souris",
    "lapin",
    "tortue",
    "poule"
];
//afficher dans le sens inverse et en majuscules
//animaux.reverse().join();

mots.reverse()

let motsJoints = mots.join(`, `)

let resultatFinal = motsJoints.toUpperCase()

console.table(resultatFinal)
