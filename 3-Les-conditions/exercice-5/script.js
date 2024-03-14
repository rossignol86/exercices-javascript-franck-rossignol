// Résultat attendu dans la console :
// pour une note < 12 'Pas de mention'
// Pour 12 et + 'Passable'
// Pour 14 et + 'Bien'
// Pour 16 et + 'Très bien'
// Pour 18 et + 'Excellent'
// Pour 20 'Extraordinaire'

const note = parseInt(prompt('votre note'));

if (note >= 20) {
    console.log('Extraordinaire');
} else if (note >= 18) {
    console.log('Excellent');
} else if (note >= 16) {
    console.log('Très bien');
} else if (note >= 14) {
    console.log('Bien');
} else if (note >= 12) {
    console.log('Passable');
} else {
    console.log('Pas de mention');
}