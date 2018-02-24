function makeFullName(firstName: string, lastName: string = "NA"): any {
  return firstName + ", " + lastName;
}

makeFullName("bala");

const makeFullName1 = (firstName: string, lastName: string): string => {
  return firstName + "," + lastName;
};

let search: (a: string) => string;

function mySearch(a: string): string {
  return "";
}

search = mySearch;
