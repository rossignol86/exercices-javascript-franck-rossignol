// Exemples de résultats attendus dans la console :
// Mot de passe valide
// Mot de passe invalide

const motDePassePerso = '1234';
const motDePasse = prompt('mot de passe');

if (motDePasse === motDePassePerso) {
    console.log('OK');
} else {
    alert('Accès interdit');
}