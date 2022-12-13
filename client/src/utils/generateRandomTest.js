/* using the first random 1000 english words to generate a random test */
export const generateRandomTest = (topThousandWords, lines, wordsPerLine) => {
  const randomTest = []
  for (let i = 0; i < lines; i++) {
    let newLine = ""
    for (let j = 0; j < wordsPerLine ; j++) {
      if (j == wordsPerLine - 1) {
        newLine += topThousandWords.topOneThousand[Math.floor(Math.random() * 1000)]
      } else {
        newLine += topThousandWords.topOneThousand[Math.floor(Math.random() * 1000)] + " "
      }
    }
    const randomLine = {
      line: newLine,
      indent: 0,
      right: 0,
      current: 0,
      wrong: 0,
      number: i + 1
    }
    randomTest.push(randomLine)
  }
  return randomTest;
}
