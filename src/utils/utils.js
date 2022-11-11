// const reversedIndexOf = (str, num) => {
//   const { length } = this;
//   const ind = str.indexOf(num);
//   if (ind === -1) {
//     return -1;
//   }
//   return length - ind - 1;
// };

export const parseNote = (str) => {
  const spaceind = str.indexOf(" ");
  const rightArrow = str.indexOf(">");

  return str.slice(spaceind + 1, rightArrow);
};
