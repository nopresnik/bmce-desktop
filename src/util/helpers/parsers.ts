export const parseJobNo = (input: string | number) => {
  return input.toString().replace('.', '-');
};
