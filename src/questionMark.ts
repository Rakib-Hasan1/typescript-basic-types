//* ? : Ternary Oparator : decision making
//* ?? : nullish colealescing oparator
//* ?.optional chaining

const isEligibleForMarriage = (age: number) => {
  //*      = ? Ternary Oparator : decision making

  //   if (age >= 21) {
  //     return "Your are eligible to marry her";
  //   } else {
  //     return "Get out";
  //   }

  const result = age >= 21 ? "Your are eligible to marry her" : "Get Out !";
  return result;
};

// console.log(isEligibleForMarriage(20));

//*      = ?? : nullish colealescing oparator (only works on null or undefined)

const userTheme = undefined;

const selectedTheme = userTheme ?? "Light theme";

// console.log(selectedTheme);

//* ?.optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: number;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode;

console.log(postalCode);
