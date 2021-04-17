// 4th snack

console.log("4th snack");

const clothes = [
    {
        name: "Fendi",
        type: "T-shirt",
        color: "red",
    },
    {
        name: "Ray-Ban",
        type: "Glasses",
        color: "black",
    },
    {
        name: "Jordan",
        type: "Shoes",
        color: "black",
    },
    {
        name: "Dior",
        type: "Handbag",
        color: "pink",
    },
];


//2
clothes.forEach( (element) => {

    element.price = randNumber(10,50);
});

console.log(clothes);

/********************
* FUNCTIONS
********************/

function randNumber(min, max) {
    return Math.floor(Math.random()* (max - min) + 1) + min;
}