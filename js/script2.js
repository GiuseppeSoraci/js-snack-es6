// 2nd snack

console.log('Snack 2');

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const teams = [
    {
        name: "PSG",
        points: 0,
        fouls: 0
    },
    {
        name: "Chelsea",
        points: 0,
        fouls: 0
    },
    {
        name: "Real Madrid",
        points: 0,
        fouls: 0
    },
    {
        name: "Manchester City",
        points: 0,
        fouls: 0
    },
]

let updatedTeams = [...teams];
for (let i = 0; i < updatedTeams.length; i++) {
    updatedTeams[i].points = randomNumber(0, 100);
    updatedTeams[i].fouls = randomNumber(0, 100);
}

console.table('Results', updatedTeams);

let newArrayResults = [];

for (let i = 0; i < updatedTeams.length; i++) {
    newArrayResults.push({
        name: updatedTeams[i].name,
        fouls: updatedTeams[i].fouls
    })
}

console.table('New results', newArrayResults);