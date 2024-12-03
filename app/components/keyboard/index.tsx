import React from "react";

type Props = {handleGuess: any, guessedLetters: string[]};

function Keyboard({handleGuess, guessedLetters}: Props) {
  return (
    <div className="keyboard">
      {Array.from(Array(26)).map((_, index) => (
        <button
          key={index}
          onClick={() =>
            handleGuess(
              String.fromCharCode(65 + index)
            )
          }
          disabled={guessedLetters.includes(String.fromCharCode(65 + index))}
        >
          {String.fromCharCode(65 + index)}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
