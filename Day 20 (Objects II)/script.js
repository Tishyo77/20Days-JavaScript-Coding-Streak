const gameEvent = new Map
([
    [17, '⚽ GOAL'],
    [36, '🔃 Substitute'],
    [47, '⚽ GOAL'],
    [61, '🔃 Substitute'],
    [64, '🟡 Yellow Card'],
    [69, '🔴 Red Card'],
    [70, '🔃 Substitute'],
    [72, '🔃 Substitute'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🟡 Yellow Card'],
]);

const events = [...new Set(gameEvent.values())];
console.log(events);
gameEvent.delete(64);
console.log(`An event happened, on average, every ${90/gameEvent.size} minutes`);

for(let [key, value] of gameEvent)
    console.log(`${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`);