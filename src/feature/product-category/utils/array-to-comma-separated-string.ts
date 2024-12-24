export const TransformArrayToCommaSeparatedString = (
  input: string[]
): string => {
  let output = "";
  input.forEach((item, index) => {
    if (index != input.length - 1) output += item + ",";
    else output += item;
  });
  //   console.log(output);
  return JSON.stringify(output);
};
