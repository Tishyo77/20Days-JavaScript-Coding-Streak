'use strict';

const game = 
{
    team1: 'Beyern Munich',
    team2: 'Borrussia Dortmund',
    players:
    [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',   
        ],
    ],

    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds:
    {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

for(const [i, element] of game.scored.entries())
    console.log("Goal " + (i+1) + ": " + element);

let s = 0;
const oddsEl = Object.values(game.odds);
for(const element of oddsEl)
    s = s + element;
console.log(`Average: ${s/oddsEl.length}`);

for(const [team, odd] of Object.entries(game.odds))
{
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

