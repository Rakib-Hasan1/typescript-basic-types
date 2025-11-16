//* Generic Function

// const creatArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(225);
const arrObject = createArrayWithGeneric({
  id: 123,
  name: "Next Level",
});

// console.log(arrString, arrNumber, arrObject);

// tuple

const createArrayWithTouple = (num1: string, num2: string) => [num1, num2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Rakib", true);
const res2 = createArrayTupleWithGeneric(45545, { name: "Rakib" });

//

const addStudentToCourse = <X>(studentInfo: X) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Rakib",
  hasPen: true,
};

const student2 = {
  id: 6456,
  name: "Mezba",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);

console.log(result);
