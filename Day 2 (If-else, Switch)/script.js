const country = "India";
const continent = "Asia";
let population = 1393400000;
const isIsland = false;
const language = "Bengali";

console.log("Country: ", country);
console.log("Continent: ", continent);
console.log("Population: ", population);
console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);
console.log("Half population: ", population/2);

population++;
console.log("Population: ", population);

let finlandPop = 6000000;
console.log("Population greater than Finland? ", population > finlandPop);

let averagePop = 33000000;
console.log("Population lesser than average population? ", population < averagePop);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description); 

if(population > averagePop)
    console.log(`${country}'s population is above average`);
else
    console.log(`${country}'s population is ${averagePop - population} below average`);

let numNeighbours = prompt(`How many neighbour countries does your country have?`);

if(numNeighbours == 1)
    console.log(`Only 1 border! (loose)`);
else if(numNeighbours === 1)
    console.log(`Only 1 border! (strict)`);
else if(numNeighbours > 1)
    console.log(`More than 1 border`);
else
    console.log(`No borders`);

if(language === 'English' && population < 50000000 && isIsland != true)
    console.log(`You should live in ${country}`);
else
    console.log(`${country} does not meet your criteria :(`);

switch(language)
{
    case 'Chinese':
    case 'Mandarin':
        console.log(`Most number of native speakers!`);
    break;
    case 'Spanish':
        console.log(`2nd place in number of native speakers!`);
    break;
    case 'English':
        console.log(`3rd place`);
    break;
    case `Hindi`:
        console.log(`Number 4`);
    break;
    case `Arabic`:
        console.log(`5th most spoken language`);
    break;
    default:
        console.log(`Great language too :D`);
}

console.log(`${country}'s population is ${population > averagePop ? 'above' : 'below'} average`);

