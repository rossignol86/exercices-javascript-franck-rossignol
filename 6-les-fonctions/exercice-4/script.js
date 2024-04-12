//Créez un fonction qui demande une confirmation à l’utilisateur
//(confirm()) avec le message : “Avez vous les droits pour accéder
//aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut
//être dangereux.”. 
//Si l’utilisateur accepte, afficher une alerte dans la console
//avec le code de votre choix (ex : 1234). 
//Sinon affichez “vous n’avez pas les droits !!” dans la console.

function check() {
    let estAutorise = confirm("Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.");
    if(estAutorise){
        alert(`1234`)
    } else {
        alert('vous n’avez pas les droits !!')
    }
    
    console.log('estAutorise');
}

check()

//const motDePassePerso = '1234';
//const motDePasse = confirm('Avez vous les droits pour accéder aux codes nucléaires ? Soyez honnête s’il vous plait, cela peut être dangereux.');

//if (motDePasse === motDePassePerso) {
//    console.log('vous n’avez pas les droits !!');
//} else {
//    alert('vous n’avez pas les droits !!');
//}