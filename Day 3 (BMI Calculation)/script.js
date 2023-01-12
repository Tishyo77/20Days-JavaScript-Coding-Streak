let markHeight = 1.75;
let johnHeight = 1.66;

let markMass = 60;
let johnMass = 52;

let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

let markHigherBMI = markBMI > johnBMI

console.log("Mark's BMI: ", markBMI);
console.log("John's BMI: ", johnBMI);

if(markBMI > johnBMI)
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
else
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);