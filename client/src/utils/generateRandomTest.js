import topEnglishWords from '../data/top_english_words.json'

/* using the first random 1000 english words to generate a random test */
export const generateRandomTest = (lines, wordsPerLine) => {
  const randomTest = []
  for (let i = 0; i < lines; i++) {
    let newLine = ""
    for (let j = 0; j < wordsPerLine ; j++) {
      if (j == wordsPerLine - 1) {
        newLine += topEnglishWords.topOneThousand[Math.floor(Math.random() * 1000)]
      } else {
        newLine += topEnglishWords.topOneThousand[Math.floor(Math.random() * 1000)] + " "
      }
    }
    const randomLine = {
      content: newLine,
      indent: 0,
      correct_so_far: 0,
      current_idx: 0,
      line_number: i + 1
    }
    randomTest.push(randomLine)
  }
  return randomTest;
}
