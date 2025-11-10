// Object destructuring

const userInfo = {
  name: {
    firstName: "Rakib",
    middleName: "Hasan",
    lastName: "Alif",
  },
  age: 24,
  id: 541,
  gender: "male",
  favouriteColor: "Black",
};

const {
  age,
  name: { firstName: MyName },
  favouriteColor: myFavoriteColor,
} = userInfo;

// console.log(MyName, age, myFavoriteColor);

// Array destructuring

const friends = ["Imran", "Rayhan", "Nayeem", "Kawser", "Hasan"];

const [, , , , e] = friends;

console.log(e);
