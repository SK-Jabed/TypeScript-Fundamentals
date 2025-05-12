const str: string = "Neymar";

// SS BB NN U ==> String, Symbol, Bigint, Boolean, Number, Null, Undefined
// Non-primitive ==> Array, Object.

let anyVar: number = 1;

let arr: number[] = [1, 2, 3, 4];

export type TObj = {
  name: string;
  age: number;
  education?: {
    institution: "University" | "College" | "Diploma" | "School";
    level: string;
  };
};

const obj: TObj = {
  name: "Sheikh Jabed",
  age: 21,
  education: {
    institution: "College",
    level: "Undergrad",
  },
};