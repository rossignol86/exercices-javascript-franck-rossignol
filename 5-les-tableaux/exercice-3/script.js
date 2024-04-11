//Créez un tableau contenant tous les jours de la semaine
//sous forme de chaînes de caractères. 
//Affichez ensuite le tableau dans la console,
//grâce à console.table().
//à l’aide d’une boucle for, bouclez sur le tableau pour
//afficher chaque jour de la semaine dans la console
//en utilisant le format : "Le jour X de la semaine est JOUR".

let jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
console.table(jours);

for (let i = 0; i < jours.length; i++) {
    console.log(jours[i]);
  }


for (let i = 0; i < jours.length; i++) {
  console.log(`Le jour ` + (i + 1) + " de la semaine est " + (jours[i]));
}

//DÉFI : Lorsque vous arrivez à "Dimanche" dans votre boucle, affichez :
// "Le jour 7 de la semaine est Dimanche, et le Dimanche c'est Gratuit !"