// Exemple de déroulement :

// "Veuillez entrer le mot de passe :"

// Si incorrect, résultat attendu dans la console : 
// Mot de passe incorrect, essayez à nouveau.

// Si correct, résultat attendu dans la console : 
// Accès autorisé.

const motDePassePerso = '1234';
const motDePasse = prompt('Veuillez entrer le mot de passe :');

if (motDePasse === motDePassePerso) {
    console.log('OK');
} else {
    alert('Accès interdit');
}

