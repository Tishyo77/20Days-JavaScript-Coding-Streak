'use strict';

function describeCountry(country, population, capitalCity)
{
    return `${country} has ${population} people and its capital city is ${capitalCity}`;
}

let india = describeCountry('India', 1300000000, 'Delhi');
let finland = describeCountry('Finland', 6000000, 'Helsinki');
let china = describeCountry('China', 1400000000, 'Beijing');

console.log(india);
console.log(finland);
console.log(china);

function percentageOfWorld1(population)
{
    return population/7900000000 * 100;
}

const percentageOfWorld2 = function (population)
{
    return population/7900000000 * 100;
}

const percentageOfWorld3 = population => population/7900000000 * 100;

console.log(percentageOfWorld1(1300000000) + '%');
console.log(percentageOfWorld2(1300000000) + '%');
console.log(percentageOfWorld3(1300000000) + '%');

const describePopulation = function (country, population)
{
    return `${country} has ${population} people, which is about ${percentageOfWorld3(population)}% of the world`;
}

console.log(describePopulation('China', 1400000000));
console.log(describePopulation('India', 1300000000));
console.log(describePopulation('Finland', 6000000));

const populations = new Array(1400000000, 1300000000, 6000000, 11000000);

if(populations.length === 4)
    console.log(true);
else
    console.log(false);

const percentages = new Array(percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3]));

console.log(populations);
console.log(percentages);

let neighbours = new Array('Pakistan', 'Bangladesh', 'Nepal', 'Bhutan', 'Afghanistan', 'Myanmar');

console.log(neighbours);

neighbours.push('Utopia');
neighbours.pop();

if(!neighbours.includes('Germany'))
    console.log('Probably not a central European country :D');

neighbours[neighbours.indexOf('Myanmar')] = 'Sri Lanka';

console.log(neighbours);

const myCountry = 
{
    country: 'India',
    capital: 'New Delhi',
    language: 'Bengali',
    population: 1300000000,
    neighbours: ['Pakistan', 'Bangladesh', 'Nepal', 'Bhutan', 'Afghanistan', 'Myanmar'],

    describe: function ()
    {
        console.log(`${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function ()
    {
        return this.neighbours.length === 0 ? true : false;
    }
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2000000;
myCountry['population'] -= 2000000;
myCountry.describe();

console.log(`Country is an island? ${myCountry.checkIsland()}`);