import React from "react";

export default function StartScreen({ questionsAmount, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome To The React Quiz!</h2>
      <h3>{questionsAmount} questions to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
