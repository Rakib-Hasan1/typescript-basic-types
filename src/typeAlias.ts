type User = {
  role: string;
  age: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  subject: string;
};

const user: User = {
  role: "admin",
  age: 24,
  name: {
    firstName: "Rakib",
    lastName: "Hasan",
  },
  gender: "male",
  subject: "BBA",
};

console.log(user);


// Function type alias
type Add = (num1: number, num2: number) => number;

const add: Add = (num1, num2) => num1 + num2;
