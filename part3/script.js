let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (salary in this) {
      sum += this(salary);
    }
    console.log(sum);
  },
  enumerable: false,
});

Object.defineProperty(salaries, "addSalaries", {
  set(property) {
    for (let item of property) {
      let newItem = item.split(": ");

      if (!salaries.hasOwnProperty(newItem[0])) {
        salaries[newItem[0]] = parseInt(newItem[1]);
      }
    }
    return salaries;
  },
  enumerable: false,
});

salaries.addSalaries = ["manager: 800"];

console.log(salaries);
