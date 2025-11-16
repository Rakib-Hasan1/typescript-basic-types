// dynamically generalize : Generic

type GenericArray<T> = Array<T>;

// const friends: string[] = ["MR X", "MR Y", "MR Z"];
const friends: GenericArray<string> = ["MR X", "MR Y", "MR Z"];

// const rollNumber: number[] = [5, 7, 2, 10];
const rollNumber: GenericArray<number> = [5, 7, 2, 10];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];


type User = { name: string; age: number }


const userList: GenericArray<User> = [
  {
    name: "Mr Rakib",
    age: 24,
  },
  {
    name: "Mr Alif",
    age: 23,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(8);

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<string, string> = ["20", "30"];
const coordinates2: Coordinates<number, number> = [20, 30];
