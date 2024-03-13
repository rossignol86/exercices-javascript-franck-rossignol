// Exemples de résultats attendus dans la console :
// Mot de passe valide
// Mot de passe invalide

let motDePasse = parseInt(prompt("Mot de passe"));
let motDePassePerso = 1234;

if (motDePasse === motDePassePerso) {
    console.log("OK");
} else if (motDePasse !== motDePassePerso) {
    console.log("Accès interdit");
}