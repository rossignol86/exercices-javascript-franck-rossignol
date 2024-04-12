//Écrivez une fonction qui prend en paramètre un prénom.
//La fonction doit retourner “Un pour <prenom>, un pour moi”. 
//Si aucun prénom n'est donné, la fonction doit retourner
//“Un pour toi, un pour moi”.

function proverbe(prenom) {
    console.log("Un pour " + prenom + ", un pour moi");
  }
  
// Appel de la fonction proverbe avec le prenom "Franck"
proverbe("Franck");

// Appel de la fonction proverbe sans le prenom "Franck"
proverbe();