interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface WithoutBrandWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const poorDeveloper: Developer<
  WithoutBrandWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "Mr poor",
  salary: 20,
  device: {
    brand: "Lenovo",
    model: "A21",
    releaseYear: "2010",
  },
  smartWatch: {
    heartRate: "150",
    stopWatch: true,
  },
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr Rich",
  salary: 100,
  device: {
    brand: "HP",
    model: "X34",
    releaseYear: "2050",
  },
  smartWatch: {
    heartRate: "150",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
  bike: null,
};

const add = (num1: number, num2: number = 5) => {
  const result = num1 + num2;
  return result;
};

console.log(add(50));
