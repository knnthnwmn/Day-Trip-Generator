"use strict"

let randomTripArray = [];


let destinations =["Austin", "Dallas", "Niagra Falls", "New York City", "Houston"];
let restaurants = ["Outback Steak House", "Pappadeaux Seafood Kitchen", "Benihana Japanese Steakhouse", "Whiskey Cake", "Mignon" ];
let transportation = ["Lyft", "plane", "train", "boat", "personal transportation"];
let entertainment = [" go bowling", " play pool", "visit a sports bar", "go to a night club", "visit a theme parks"];


function randomTripsGenerator(randomArray) {
    return randomArray[Math.floor(Math.random() * randomArray.length)]
}

function itineraryGenerator(itineraryArray, index, itemArray) {
    itineraryArray[index] = randomTripsGenerator(itemArray)
}

itineraryGenerator(randomTripArray, 0, destinations);
itineraryGenerator(randomTripArray, 1, restaurants);
itineraryGenerator(randomTripArray, 2, transportation);
itineraryGenerator(randomTripArray, 3, entertainment);


let userInput = '';
let randomTripGenerator = '';

while (userInput !=6) {
    randomTripGenerator = "You are traveling to" + " " + randomTripArray[0] + ", " + "while there you will be eating at" + " " + randomTripArray[1] + ", " + "your transportation method will be by" + " " + randomTripArray[2] + ", " + 
    "and your entertainment for the day is to " + " " + randomTripArray[3];
    alert(randomTripGenerator);
    
    let userInput = prompt( "are you happy with results?");




}

console.log(randomTripArray);



