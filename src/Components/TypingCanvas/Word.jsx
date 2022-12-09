import Letter from "./Letter";


const Word = ({ word }) => {
  return (
    <div className="word flex">
      {
        word.split('').map((l) => {
          return (
            <Letter letter={l} />
          )
        })
      }
    </div>
  )

}

export default Word;
