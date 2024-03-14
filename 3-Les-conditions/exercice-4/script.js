// Exemples de résultats attendus :

// si le mot de passe est correct :

// OK 

// si le mot de passe est incorrect

// Accès interdit

        // demande un mp à l'utilisateur
        const motDePasse = prompt('mot de passe');
        const longueurDuMotDePasse = motDePasse.length;

        if (longueurDuMotDePasse >= 5 && longueurDuMotDePasse <= 12) {
            console.log('valide');
        } else {
            console.log('pas valide');
        }