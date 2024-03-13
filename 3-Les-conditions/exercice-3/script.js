// Exemples de résultats attendus dans la console :
// Mot de passe valide
// Mot de passe invalide

let motdepasse1 = prompt("Mot de passe");
let motdepasseperso = `1234ABC`;

if (motdepasse1 === motdepasseperso) {
    console.log("Mot de passe valide");
} else if (motdepasse1 !== motdepasseperso) {
    console.log("Mot de passe invalide");
}