// Exemples de résultats attendus :

// si le mot de passe est correct :

// OK 

// si le mot de passe est incorrect

// Accès interdit

let motdepasse1 = prompt("Mot de passe");
let motdepasseperso = `1234ABC`;

if (motdepasse1 === motdepasseperso) {
    console.log("Mot de passe valide");
} else if (motdepasse1 !== motdepasseperso) {
    console.log("Mot de passe invalide");
}