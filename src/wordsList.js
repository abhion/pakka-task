import React from "react";

const WordsList = (props) => {
  const { wordsList } = props;

  const wordsListElements = wordsList.map((word, i) => {
    return (
      <li className="listItem" key={i}>
        <span className="wordWrapper">{word}</span>
        <span className="wordLengthWrapper">{word.length}</span>
      </li>
    );
  });
  return <ul className="listWrapper">{wordsListElements}</ul>;
};

export default WordsList;
