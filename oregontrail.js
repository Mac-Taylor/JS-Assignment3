// JavaScript Objects Homework | OREGON TRAIL GAME 

// makeTraveler(name)
// Create a new traveler object with the specified name, a random amount of food, and isHealthy = true. This should be very similar to makeCar from today's notes.

function makeTraveler(name) {
    return {
        name: name,
        foodamount: Math.floor(Math.random() * 100),
        isHealthy: true,
    }
}

console.log(makeTraveler('Jebediah')); // returns traveler object with name: 'jebediah', foodamount: (number), and boolean healthy property.

// DONE.

// makeWagon(capacity)
// Create a new wagon with an empty passenger list and the specified capacity. This should be very similar to makeLot from today's notes.

function makeWagon(capacity) {
    return {
        capacity: capacity,
        passengers: [],
    }
}

console.log(makeWagon(5)); // returns wagon object with capacity of number passed through as an argument and an empty array of passengers.

// hunt(traveler)
// 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

let Jebediah = { foodamount: 50, isHealthy: true, }
function hunt(traveler) {
    if (Math.random() > 0.50) {
        traveler.foodamount = traveler.foodamount + 100;
        return true;
    }
    else {
        return false;
    }
}

console.log(hunt(Jebediah)); // returns 'true' or 'false' based on the success of the hunt when a 
// traveler object is passed through the function

// DONE.

// eat(traveler)
// Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

let George = { foodamount: 50, isHealthy: true, }
let Sarah = { foodamount: 30, isHealthy: true, }

function eat(traveler) {
    traveler.foodamount = traveler.foodamount - 20;
    if (traveler.foodamount < 20) {
        traveler.isHealthy = false;
    }
    return traveler;
}

console.log(eat(George)); // returns George object with 30 food and isHealthy = true
console.log(eat(Sarah)); // returns Sarah object with 10 food and isHealthy = false

// DONE.

// join(wagon, traveler)
// Add the traveler to the wagon if there is space. If there is not enough capacity, don't add them.

let wagon1 = { capacity: 8, passengers: [], };
let Ann = { name: 'Ann', foodamount: 30, isHealthy: true, };

function join(wagon, traveler) {
    let passengers = wagon.passengers;
    if (wagon.capacity > passengers.length) {
        passengers.push(traveler);
        wagon.capacity = wagon.capacity - 1;
    } else {
        return 'No more room in the wagon!'
    }
    return wagon;
};

console.log(join(wagon1, Ann)); // returns wagon object with remaining capacity and array of traveler objects
// unless the wagon is full, in which case function tells you there is no more room in the wagon.

// DONE.

// quarantine(wagon)
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

function quarantine(wagon) {
    
}

// food(wagon)
// Return the total amount of food among all occupants of the wagon.








