//* keyof oparator
type RichPeoplesVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "bike";

const user = {
  id: 545,
  name: "Rakib",
  address: {
    city: "Rajshahi",
  },
};

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result1 = getPropertyFromObj(user, "emni");

const product = {
  brand: "HP",
};

const student = {
  id: 545,
  class: "Four",
};

const result1 = getPropertyFromObj(product, "brand");
const result2 = getPropertyFromObj(student, "id");
