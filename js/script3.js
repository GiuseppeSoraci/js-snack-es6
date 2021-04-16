// 3rd snack

console.log('Snack 3');

const myArray = ["Paul", "John", "Ringo", "George", "Brian", "Pete"];

let min = parseInt(prompt("Enter a number from 0 to 5"));
while (isNaN(min) || min < 0 || min > myArray.length) {
    min = parseInt(prompt("Enter a number from 0 to 5"));
}

let max = parseInt(prompt("Enter a number from " + min + " to 5"));
while (isNaN(max) || max < min || max > myArray.length) {
    max = parseInt(prompt("Enter a number from " + min + " to 5"));
}

const newFilterArray = myArray.filter((element, index) => {
    return min <= index && max >= index;
});

console.log("Original array: ", myArray);
console.log("Filtered array: ", newFilterArray);



