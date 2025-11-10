// Function
// Arrow function, normal function

function addNormal(num1: number, num2: number): number {
  const sum = num1 + num2;
  return sum;
}

addNormal(10, 12);

const addArrow = (num1: number, num2: number): number => {
  const sum = num1 + num2;
  return sum;
};

addArrow(15, 30);

// Object => function => method

const poorUser = {
  name: "Rakib",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

poorUser.addBalance(15000);

const arr: number[] = [1, 2, 4, 8, 9, 10];

const swrArr = arr.map((elm: number): number => elm * elm);
