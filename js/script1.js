/*
1° Snack
Creare un array di oggetti
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore
*/
console.log("Snack1");

const bike1 = {
    name: "BMX",
    peso: 10,
}
const bike2 = {
    name: "Mountain Bike",
    peso: 14,
}
const bike3 = {
    name: "Electric Bike",
    peso: 20,
}
const bikes = [
    bike1,
    bike2,
    bike3
];

let lessWeightIndex = 0;
for(let i = 0; i < bikes.length; i++){
    if(bikes[i].peso < bikes[lessWeightIndex].peso){
        lessWeightIndex = i;
    }
}
console.log("The bike with the least weight is: ", bikes[lessWeightIndex]);

