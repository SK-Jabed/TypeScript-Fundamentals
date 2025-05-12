function fn(input: string | null): void | null | undefined {}

const fnAgain = (input: string | null): void | null | undefined => {
  const multi = 10 * 10;
  console.log(input, multi);
};