//* maped types

//* map

const numbersArr: number[] = [1, 5, 6, 8, 9];
const stringsArr: string[] = ["1", "5", "6", "8", "9"];

const mapInNumbersOfArr = numbersArr.map((num) => num.toString());

console.log(mapInNumbersOfArr);

type AreaOfNum = {
  height: string;
};

type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 40,
};
