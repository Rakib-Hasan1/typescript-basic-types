//* polymorphism

class Person {
  getSleep() {
    console.log("I am a happy person. I sleep for 10 hours");
  }
}

class Student extends Person {
  getSleep() {
    console.log("I am a student. I sleep for 8 hours");
  }
}

class NextLevelDeveloper extends Person {
  getSleep() {
    console.log("I am a Next Level Developer. I sleep for 7 hours");
  }
}

const getSleepingHours = (param: Person) => {
  param.getSleep();
};

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person3);

// to get shap
class Shap {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shap {
  // area = PI*r*r
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shap {
  // area = height*width
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shap) => {
  console.log(param.getArea());
};

const shap1 = new Shap();
const shap2 = new Circle(10);
const shap3 = new Rectangle(10,20);

getArea(shap3)


