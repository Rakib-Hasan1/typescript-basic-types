//* constraint : strict rules deya


// student must have this information
type StudentMustHave = {
  id: number;
  name: string;
  dateOfBirth: string;
  IsEnrolled: boolean;
};

const addStudentToCourse = <X extends StudentMustHave>(studentInfo: X) => {
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

const student3 = {
  id: 54545,
  name: "Mahfuz",
  hasWatch: true,
  dateOfBirth: "17,10,2001",
  IsEnrolled: true,
};

const result = addStudentToCourse(student3);

console.log(result);
