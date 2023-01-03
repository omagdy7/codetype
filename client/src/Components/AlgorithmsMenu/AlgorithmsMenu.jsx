const AlgorithmsMenu = ({ onRandomEnglishTestClick, onRandomCodeSnippetClick }) => {
  return (
    <div className="btn-group btn-group-vertical mb-auto mt-auto w-1/5 h-[30vh] sm:w-1/3 md:w-1/4 lg:w-1/5">
      <button className="btn btn-lg text-black btn-outline bg-cyan-700 border-2 sm:text-lg md:text-xl lg:text-2xl" onClick={onRandomEnglishTestClick} >English words</button>
      <button className="btn btn-lg text-black btn-outline bg-cyan-700 border-2 sm:text-lg md:text-xl lg:text-2xl" onClick={onRandomCodeSnippetClick} >Code Snippets</button>
      <button className="btn btn-lg text-black btn-outline bg-cyan-700 border-2 sm:text-lg md:text-xl lg:text-2xl" onClick={onRandomCodeSnippetClick} >My Races</button>
    </div>
  )
}

export default AlgorithmsMenu;

