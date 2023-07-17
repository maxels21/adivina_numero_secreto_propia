const Chance = require('chance');
const readlineSync = require('readline-sync');

const chance = new Chance();

const name = readlineSync.question('Ingrese su nombre: ')
// importamos al modulo cercania 

const { Radar } = require('./cercania');

console.log(`Entonces ${name} Adivina el numero generado por la maquina`);

let number_random = chance.integer({ min: 1, max: 100 });

console.log(`Numero generado aleatoriamente....${number_random}`);


console.log('Intente adivinar el numero generado por la maquina del 1 al 100...')
let number_user = readlineSync.questionInt('Ingrese un numero: ')

if (number_random === number_user) {
    console.log(`Felicitaciones ${name}! Adivino el numero ${number_random}`);
} else {
    while (number_user !== number_random) {
        console.log('ups... no adivino el numero :( ');
        console.log('Intente nuevamente....');
        Radar(number_user, number_random);
        number_user = readlineSync.questionInt('Ingrese un numero: ');
    } console.log(`Felicitaciones ${name}! Adivino el numero ${number_random}`);
}


