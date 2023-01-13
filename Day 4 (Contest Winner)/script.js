koala1 = 109;
koala2  = 95;
koala3 = 106;

dolphin1 = 97;
dolphin2 = 112;
dolphin3 = 101;

averageKoala = (koala1 + koala2 + koala3) / 3;
averageDolphin = (dolphin1 + dolphin2 + dolphin3) / 3;

if(averageDolphin >= 100 && averageDolphin > averageKoala)
    console.log(`Dolphin wins!`);
else if(averageKoala >= 100 && averageKoala > averageDolphin)
    console.log(`Koala wins!`);
else if(averageKoala >= 100 && averageDolphin >= 100 && averageDolphin === averageKoala)
    console.log(`It is a tie!`);
else if(averageDolphin < 100 && averageKoala < 100)
    console.log(`No team wins!`);