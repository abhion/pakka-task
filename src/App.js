import React, { useState } from "react";
import "./App.css";
import WordsList from "./wordsList";
import ProgressBar from "./progressBar";

function App() {
  const [wordsList, setWordsList] = useState([]);
  const [newWord, setNewWord] = useState("");

  const handleLetterClick = (clickedLetter) => {
    setNewWord((previousValue) =>
      !previousValue.length
        ? clickedLetter.toUpperCase()
        : previousValue + clickedLetter
    );
  };

  const handleNewWordBtnClick = () => {
    setWordsList((prevWordList) => [...prevWordList, newWord]);
    setNewWord("");
  };

  return (
    <div className="App">
      <div className="appWrapper">
        <header>
          <div className="logoWrapper">
            <img
              className="logo"
              src="http://pakkaprofile.com/assets/images/logo.png"
              alt="logo"
            />
          </div>
          <h3>Give me Five</h3>
          <ProgressBar wordsListLength={wordsList.length} />
        </header>
        <div className="letterBtnsWrapper">
          <div className="topRow btnWrapperRow">
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("p")}
            >
              P
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("l")}
            >
              L
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("p")}
            >
              P
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("t")}
            >
              T
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("s")}
            >
              S
            </button>
          </div>
          <div className="bottomRow btnWrapperRow">
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("a")}
            >
              A
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("c")}
            >
              C
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("e")}
            >
              E
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("h")}
            >
              H
            </button>
            <button
              className="letterBtn"
              onClick={() => handleLetterClick("d")}
            >
              D
            </button>
          </div>
        </div>
        <div className="newWordWrapper">
          <h3 className="newWord">{newWord}</h3>
          {newWord && wordsList.length !== 5 ? (
            <button className="newWordBtn" onClick={handleNewWordBtnClick}>
              Add to list
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="wordsListWrapper">
          <WordsList wordsList={wordsList} />
        </div>
      </div>
    </div>
  );
}

export default App;
