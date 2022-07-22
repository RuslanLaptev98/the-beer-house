const shortenString = (str: string, max: number) => {
  if (str.length <= max) return str;
  return str.slice(0, max).concat('...');
};

export default shortenString;
