const printForecast = function (arr)
{
    let op = '...';
    for(let i = 0; i < arr.length; i++)
    {
        op = `${op} ${arr[i]} C in ${i+1} days ...`;
    }
    console.log(op);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);