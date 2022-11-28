import { Tweet } from "./components/Tweet";
import "./App.css";
import { useState } from "react";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])
function createTweet(){
setTweets([...tweets, 'Tweet']);
}
  

  return (
    <div className="App">
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      }
        )}
    
    
      <button onClick={createTweet}
      style = {{
        backgroundColor: '#8257e6',
        border: 0,
        padding: '6px 12px',
        color: "#FFF"
      }}
      > Adicionar Tweet</button>
    </div>
  );
}

export default App;
