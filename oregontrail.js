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

console.log(makeWagon(5));
// hunt(traveler)
// 50% chance to increase the traveler's food by 100 (successful hunt), and 50% to increase it by 0 (unsuccessful hunt).

// Input: some traveler's object
// Output: Boolean (hunt success?) 

function hunt(traveler) {
    if (Math.random() > 0.50) {
        traveler.amount = traveler.amount + 100;
        return true;
    }
    else {
        return false;
    }
}

let newoutput = hunt(Jebediah);
console.log(newoutput);
console.log(Jebediah);

// eat(traveler)
// Consumes 20 of the traveler's food. If the traveler doesn't have 20 food, the traveler is no longer healthy.

// join(wagon, traveler)
// Add the traveler to the wagon if there is space. If there is not enough capacity, don't add them.

// quarantine(wagon)
// Return true if there is at least one unhealthy person in the wagon. Return false if not.

// food(wagon)
// Return the total amount of food among all occupants of the wagon.








