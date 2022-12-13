/* gets the total chars of the provided tets */
export const getTotalChars = (test) => {
  let totChars = 0;
  test.forEach(element => {
    totChars += element.line.length
  });
  return totChars
}
