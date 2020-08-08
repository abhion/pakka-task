import React from "react";

const ProgressBar = (props) => {
  const { wordsListLength } = props;
  const progressStyle = {
    width: "0%",
  };

  const widthPercent = (wordsListLength / 5) * 100 + "%";

  progressStyle.width = widthPercent;

  return (
    <div className="progressBarWrapper">
      <div className="progressWidth" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
