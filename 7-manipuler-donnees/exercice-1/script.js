// Créez une fonction qui prend deux mots en paramètre
// et vérifie s'ils sont des anagrammes,
// c'est-à-dire s'ils contiennent les mêmes lettres
// dans un ordre différent.
// La fonction doit retourner un booléen : true
// si les mots sont des anagrammes, false sinon

function sontAnagrammes(mot1, mot2) {
    mot1 = mot1.split(``) //divise caratere en tableau
    mot1.sort(); //trie les elements du tableau
    mot1 = mot1.join(``) //joint les elements du tableau

    mot2 = mot2.split(``) //divise caratere en tableau
    mot2.sort(); //trie les elements du tableau
    mot2 = mot2.join(``) //joint les elements du tableau

    if (mot1 === mot2) {  //si mot1 est egal à mot2
        return true //retourne vrai
    } else { //sinon
        return false //retourne faux
    } 
}

console.log(sontAnagrammes('toto', 'titi'))
console.log(sontAnagrammes('chien', 'niche'))
console.log(sontAnagrammes('toto', 'titi'))



function sontAnagrammes(motA, motB) {
    motA = motA.split(``).sort().join(``)
    motB = motB.split(``).sort().join(``)

    if (motA === motB) {  //si motA est egal à motB
        return true //retourne vrai
    } else { //sinon
        return false //retourne faux
    } 
}

console.log(sontAnagrammes('chine', 'niche'))