const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill)
{
    let tip = 0;
    if(bill >= 50)
        tip = 0.15 * bill;
    if(bill > 300)
        tip = 0.2 * bill;
    return tip;
}

const calcAverage = function (arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    console.log(`Average: ${avg}`);
}

for(let i = 0; i < bills.length; i++)
{
    tips.push(calcTip(bills[i]));
    totals.push(tips[i]+bills[i]);
}

console.log(`Bills : ${bills}`);
console.log(`Tips  : ${tips}`);
console.log(`Totals: ${totals}`);

calcAverage(totals);