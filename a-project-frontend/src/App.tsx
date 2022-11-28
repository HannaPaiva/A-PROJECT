import { useCallback, useState } from "react"
import { Tweet } from "./components/tweet"
function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 4',
    'Tweet 5',
    'Tweet 6',
  ])

  function createTweet(){
    setTweets([...tweets,'Tweet 7'])
  }

  return (
    <div className="App" >
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      })}

      <button 
       onClick={createTweet}
        style={{
        background: ' #8257e6',
        border:0,
        padding: '6px 12px',
        color: ' #FFF',
       }}>Adicionar proximo tweet
       </button>
    </div>
  )
}

export default App
