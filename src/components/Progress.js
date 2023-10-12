import React from "react";

export default function Progress({
  index,
  questionsAmount,
  points,
  maxAmountPoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress
        max={questionsAmount}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1} </strong> / {questionsAmount}
      </p>
      <p>
        <strong>{points}</strong> / {maxAmountPoints}
      </p>
    </header>
  );
}
