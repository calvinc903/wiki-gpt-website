import './App.css';
import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import OpenAI from "openai";
const API_key = "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";
import FashionGPT from "./components/Demo/FashionGPT";
import welcomeImg from './welcome.png';
import bgImg from './bg.png';
import titleImg from './WikiHowGPT.png';


function App() {
  const [text, setText] = useState("");
  const [input, setInput] = useState('');

  return (
    <div className="app-container">

    <div className="background-image">
        <img src={bgImg} alt="Background" />
    </div>

    <div className="content">
        <div className="title-img">
            <img src={titleImg} alt="Title" />
        </div>


        <div className="label">
            <img className="welcome" src={welcomeImg} alt="Welcome" />
            <div className="message-img">
                <h3>Enter your prompt here! {"(ex: 'Going to skateboard')"}</h3>
                <input placeholder='Enter your wikihow here!' value={input} onChange={(event) => {setInput(event.target.value)}}></input>
                <button onClick={callAPI}>Call API</button>
                <p>{text}</p>
            </div>
        </div>
        <br />
    </div>
  </div>
  );

  async function callAPI() {
    console.log("Calling API");
    const response = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        temperature : 1,
        messages : [{"role" : "user", "content" : "Create a wikiHow Page about this topic: " + input + " using this format: {'Title':'x', 'Synopsis':'y', 'Step 1':'a', 'Step 2': 'b', etc.}"}],
        max_tokens: 1500,
     });
    setText(response.choices[0].message.content);
    console.log("API response recived");
    console.log("Prompt Tokens: " + response.usage.prompt_tokens + "\n" +
    "Completion Tokens:  " + response.usage.completion_tokens + "\n" + 
    "Tokens used: " + response.usage.total_tokens);
  }
}
export default App;
