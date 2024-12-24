export const TransformCommaSeparatedStringToStringArray = (
  input: string
): string[] => {
  return input ? JSON.parse(input).split(",") : [];
};
