// JavaScript Objects Homework

function makeTraveler (name) {
    let traveler = [];
    return {
        name: name,
        amount: Math.floor(Math.random() * 100),
        isHealthy: true,
    }
}

let Jebediah = makeTraveler('Hezekiah');
console.log(Jebediah); 

function makeWagon (capacity) {
    let wagon = [];
    return {
        capacity: capacity,
        passengers: [],
    }
}

let wagon1 = makeWagon(5);
console.log (wagon1);











