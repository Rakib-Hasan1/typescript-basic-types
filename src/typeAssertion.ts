let anything: any;

anything = "Rakib";

const kgToGramConverter = (
  input: string | number
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [convertedToNum] = input.split(" ");
    return Number(convertedToNum) * 1000;
  }
};

const result1 = kgToGramConverter(5) as number;
console.log({ result1 });
const result2 = kgToGramConverter("10 KG") as string;
console.log({ result2 });

type CustomError = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomError).message);
}
