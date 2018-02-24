interface Person {
  name: string;
  age: number;
  weight: number;
  extras?: Array<string>;
  print: () => string;
}

let p: Person = {
  name: "jon",
  age: 10,
  weight: 23,
  extras: [],
  print: () => ""
};
