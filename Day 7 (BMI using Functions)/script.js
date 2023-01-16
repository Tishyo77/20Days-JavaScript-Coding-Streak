const markDetes = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const johnDetes = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

markDetes.calcBMI();
johnDetes.calcBMI();

if (johnDetes.BMI > markDetes.BMI)
  console.log(
    `${johnDetes.fullName}'s BMI (${johnDetes.BMI}) is higher than ${markDetes.fullName}'s BMI (${markDetes.BMI})`
  );
else
  console.log(
    `${markDetes.fullName}'s BMI (${markDetes.BMI}) is higher than ${johnDetes.fullName}'s BMI (${johnDetes.BMI})`
  );
