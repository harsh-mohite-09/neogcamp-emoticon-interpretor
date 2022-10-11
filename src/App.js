import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Smiling",
  "😆": "Laughing",
  "😉": "Wink",
  "🥰": "Love",
  "😢": "Crying",
  "😲": "Suprised",
  "😑": "Annoyed",
  "🥱": "Sleepy",
  "✌️": "Peace",
  "😏": "smirking"
};

const list = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function listItemClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Emojis We Know</h3>

      {list.map((item) => {
        return (
          <span
            key={item}
            onClick={() => listItemClickHandler(item)}
            style={{ padding: "5px", fontSize: "2rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
