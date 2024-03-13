// Exemples de résultats attendus :

// si le mot de passe est correct :

// OK 

// si le mot de passe est incorrect

// Accès interdit

let motdepasse1 = parseInt(prompt("Mot de passe"));
let motdepasseperso = 1234;

if (motdepasse1 === motdepasseperso) {
    console.log("Mot de passe valide");
} else if (motdepasse1 !== motdepasseperso) {
    console.log("Mot de passe invalide");
}