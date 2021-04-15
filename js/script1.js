// 1st snack

console.log("Snack1");

const bike1 = {
    name: "BMX",
    weight: 10,
}
const bike2 = {
    name: "Mountain Bike",
    weight: 14,
}
const bike3 = {
    name: "Electric Bike",
    weight: 20,
}
const bikes = [
    bike1,
    bike2,
    bike3
];

let lessWeightIndex = 0;
for(let i = 0; i < bikes.length; i++){
    if(bikes[i].weight < bikes[lessWeightIndex].weight){
        lessWeightIndex = i;
    }
}
console.log("The bike with the least weight is: ", bikes[lessWeightIndex]);

