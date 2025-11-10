//* nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log(`From DB: All User`);
  }
};

getUser(null);

//* unknown

const discoutedPrice = (price: unknown) => {
  if (typeof price === "number") {
    const discount = price * 0.1;
    console.log(discount);
  } else if (typeof price === "string") {
    const [discount] = price.split(" ");
    console.log(Number(discount) * 0.1);
  } else {
    console.log("Wrong Input");
  }
};

// discoutedPrice(100);
// discoutedPrice("100 TK");
// discoutedPrice(null);

//* void

const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error....");
