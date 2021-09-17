import React, {useState, useEffect, useRef} from 'react'
import randomWords from 'random-words'
const NUMB_OF_WORDS = 200;
const SECONDS = 60;

function App() {
  const [words, setWords] = useState([])
  const [countDown, setCountDown] = useState(SECONDS)
  const [currInput, setCurrInput] = useState("")
  const [currWordIndex, setCurrWordIndex] = useState(0)
  const [currCharIndex, setCurrCharIndex] = useState(-1)
  const [currChar, setCurrChar] = useState("")
  const [correct, setCorrect] = useState(0)
  const [inCorrect, setInCorrect] = useState(0)
  const [status, setStatus] = useState("waiting")

  useEffect(() => {
    setWords(generateWords())
  }, [])

  const generateWords = () => {
    return new Array(NUMB_OF_WORDS).fill(null).map(()=> randomWords())
  }

  const start = () => {
    if(status === "finished"){
      setWords(generateWords())
      setCurrWordIndex(0)
      setCorrect(0)
      setInCorrect(0)
      setCurrCharIndex(-1)
      setCurrChar("")
    }


    if(status !== "started"){
      setStatus("started")
      let interval = setInterval(() => {
      setCountDown((prevCountDown)=>{
        if(prevCountDown === 0){
          clearInterval(interval)
          setStatus("finished")
          setCurrInput("")
          return SECONDS
        } else{
          return prevCountDown - 1
        }
        })
      }, 1000);
    }
  }
  const handleKeyDown = ({keyCode, key}) => {
    // space bar
    if(keyCode === 32){
      checkMatch()
      setCurrInput("")
      setCurrWordIndex(currWordIndex + 1)
      setCurrCharIndex(-1)
      //backspace
    } else if (keyCode === 8){
      setCurrCharIndex(currCharIndex - 1)
      setCurrChar("")
    }
    else{
      setCurrCharIndex(currCharIndex + 1)
      setCurrChar(key)
    }
  }

  const checkMatch = () => {
    const wordToCompare = words[currWordIndex]
    const doesItMatch = wordToCompare === currInput.trim()
    if(doesItMatch){
      setCorrect(correct + 1)
    } else{
      setInCorrect(inCorrect + 1)
    }
  }

  const getCharClass = (wordIdx, charIdx, char) => {
    if(wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== "finished"){
      if (char === currChar){
      return "has-background-success"
    } else {
      return 'has-background-danger'
    }
    } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
        return 'has-background-danger'
    }
    
    else{
      return ""
    }
  }

  return (
    <div className="App">
      <div className="section">
        <div className="is-size-1 has-text-centered has-text-primary">
          <h2>{countDown}</h2>
        </div>
      </div>
      <div className="contol is-expanded section">
        <input type="text" disabled={status === "finished"} className="input" onKeyDown={handleKeyDown} value={currInput} onChange={(e)=>setCurrInput(e.target.value)} onClick={start}/>
      </div>
      
      
      {status === "started" && (
        <div className="section">
        <div className="card">
          <div className="card-content">
            <div className="content">
              {words.map((word, i)=>(
              <span key={i}>
                <span>
                  {word.split("").map((char,idx)=>(
                    <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                  )) }
                </span>
                <span> </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {status === "finished" && (
        <div className="section">
        <div className="columns">
          <div className="column has-text-centered"><p className="is-size-5">Слов в минуту:</p>
          <p className="has-text-primary is-size-1">
            {correct}
          </p>
          </div>
          <div className="column has-text-centered">
            <div className="is-size-5">Точность:</div>
            <p className="has-text-info is-size-1">
              {Math.round((correct / (correct + inCorrect)) * 100)} %
            </p>
          </div>
        </div>
      </div>
      )}
      
      
    </div>
  );
}

export default App;
