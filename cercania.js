const Radar = (num_user, num_random) => {  
    if (num_user > num_random) {
        console.log('El numero elegido esta por encima...');
    } else if (num_user < num_random) {
        console.log('El numero elegido esta por debajo...');
    }
};


// funciones que quiero exportar
module.exports = { Radar };