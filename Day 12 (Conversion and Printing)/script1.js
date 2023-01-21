const measureKelvin = function ()
{
    const measurement =
    {
        type: 'Temperature',
        unit: 'Celcius',
        value: (Number)(prompt('Temperature in Celsius:'))
    };
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(`Temperature in kelvin: ${measureKelvin()}K`);