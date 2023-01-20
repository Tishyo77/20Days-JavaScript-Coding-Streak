const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 9, 5];
const temperatures2 = ['error', -8, 5, 23, 9, -5, -10, 6,'error', 4, 11];

const mergeArr = function (arr1, arr2)
{
    return arr1.concat(arr2);
}

const calcTempAmp = function (temps1, temps2)
{
    const allTemp = mergeArr(temps1, temps2);
    let max = allTemp[0];
    let min = allTemp[0];
    for(let i = 0; i < allTemp.length; i++)
    {
        if(allTemp[i] !== 'error' && allTemp[i] > max)
            max = allTemp[i];
        if(allTemp[i] !== 'error' && allTemp[i] < min)
            min = allTemp[i];
    }
    const amp = max - min;
    console.log(`Amplitude: ${amp}`);
}

calcTempAmp(temperatures1, temperatures2);