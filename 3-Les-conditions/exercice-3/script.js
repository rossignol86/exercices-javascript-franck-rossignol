// Exemples de résultats attendus dans la console :
// Mot de passe valide
// Mot de passe invalide

let motdepasse1 = prompt("Mot de passe");
let motdepasseperso = `1234ABC`;

if (motdepasse1 === motdepasseperso) {
    console.log("OK");
} else if (motdepasse1 !== motdepasseperso) {
    console.log("Accès interdit");
}