import React from "react";

type KeyboardProps = { guessedLetters: string; handleGuess(x,a): string };

function Keyboard({ guessedLetters, handleGuess }: KeyboardProps) {
  return (
    <div className="keyboard">
      {/* //? This is to say that the Array length is 26 ensuring the map method will run 26 times */}
      {/* //? The underscore holds that value of the array at each position, using the index as the second parameter and incrementing it by 1 */}

      {Array.from(Array(26)).map((_, index) => (
        <button
          key={index}
          onClick={() =>
            handleGuess(
              String.fromCharCode(65 + index),
              console.log("INDEX: ", 65 + index)
            )
          }
          disabled={guessedLetters.includes(String.fromCharCode(65 + index))}
        >
          {/* //? Starting at CharCode 65 (which is A) turn each one into a string for the next 26 spaces as stated above */}
          {String.fromCharCode(65 + index)}
        </button>
      ))}

      {/* <div>
        {Array.from(Array(5)).map((x, index) => {
          return console.log(
            "start:",
            String.fromCharCode(65 + index),
            Array.from(Array(5))
          );
        })}
      </div> */}
    </div>
  );
}

export default Keyboard;
