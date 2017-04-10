// JavaScript Objects Homework

function makeTraveler (amount, name, isHealthy) {
    let traveler = [];
    return {
        amount: amount,
        name: name,
        isHealthy: true,
    }
}

let output = {
    individuals: [
        makeTraveler(5, 'Ezekiel', true),
        makeTraveler(7, 'Jebediah', false),
        makeTraveler(4, 'Sarah', true),
        makeTraveler(6, 'Mary', false),
        makeTraveler(11, 'Hezekiah', true),
    ],

};

console.log(output.individuals[1])






/*
function makeWagon ( ) {

}
*/