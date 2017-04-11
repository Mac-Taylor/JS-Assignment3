// JavaScript Objects Homework | OREGON TRAIL GAME 

function makeTraveler (name) {
    return {
        name: name,
        amount: Math.floor(Math.random() * 100),
        isHealthy: true,
    }
} 

let Hezekiah = makeTraveler('Jebediah');
console.log(Jebediah); 

function makeWagon (capacity) {
    return {
        capacity: capacity,
        passengers: [],
    }
} 

let wagon1 = makeWagon(5);
console.log (wagon1);  

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
console.log(Hezekiah); 











