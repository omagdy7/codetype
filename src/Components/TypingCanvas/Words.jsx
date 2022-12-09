import Word from "./Word";

const Words = ({ words }) => {
  return (
    <div className="words flex gap-x-1">
      {
        words.map((word) => {
          return (
              <Word word={word} />
          )
        })
      }
    </div>
  )

}

export default Words;
