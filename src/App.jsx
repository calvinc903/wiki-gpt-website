import './App.css';
import { useState, useEffect } from 'react';
import OpenAI from "openai";
const API_key = "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";

const openai = new OpenAI({
  dangerouslyAllowBrowser : 'true',
  apiKey : API_key,
});



function App() {
  const [text, setText] = useState("");
  const [input, setInput] = useState('');

  return (
    <div>
      <input placeholder='Enter your wikihow here!' value={input} onChange={(event) => {setInput(event.target.value)}}></input>
      <button onClick={callAPI}>Call API</button>
      <p>{text}</p>
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
