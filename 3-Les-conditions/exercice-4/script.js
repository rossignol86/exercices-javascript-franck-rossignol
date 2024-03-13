// Exemples de résultats attendus :

// si le mot de passe est correct :

// OK 

// si le mot de passe est incorrect

// Accès interdit

let motDePasse = prompt("Mot de passe");
let motDePassePerso = `1234ABC`;

if (motDePasse === motDePassePerso) {
    console.log("Mot de passe valide");
} else if (motDePasse !== motDePassePerso) {
    console.log("Mot de passe invalide");
}