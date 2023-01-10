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

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

