const str: string = "Neymar";

// ss bb nn u -> string, symbol, bigint, boolean, undefined, number, null.
// Non-primitive array, object.

let anyVar: number = 1;

let arr: number[] = [1, 2, 3, 4];

export type TObj = {
  name: string;
  age: number;
  education?: {
    institution: "University" | "COllege" | "Diploma" | "School";
    level: string;
  };
};

const obj: TObj = {
  name: "Sheikh Jabed",
  age: 21,
  education: {
    institution: "COllege",
    level: "Undergrad",
  },
};