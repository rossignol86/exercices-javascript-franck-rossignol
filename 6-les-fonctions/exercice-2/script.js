//Écrivez une fonction qui prend en paramètre un prénom.
//La fonction doit retourner “Un pour <prenom>, un pour moi”. 
//Si aucun prénom n'est donné, la fonction doit retourner
//“Un pour toi, un pour moi”.

function proverbe(prenom = `toi`) {
    return `Un pour ${prenom}, un pour moi`
  }
  
// Appel de la fonction proverbe avec le prenom "Franck"
let resultat = proverbe("Franck");
console.log(resultat);

// Appel de la fonction proverbe sans le prenom "Franck"
console.log(proverbe())