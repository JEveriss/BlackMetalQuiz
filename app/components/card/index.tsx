"use client";

import { MouseEvent, useState } from "react";
import React from "react";
type Props = { x: number };
import styles from "./card.module.css";

import data from "../../data/data.json";
import { Logo } from "./logo";
import Keyboard from "../keyboard";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Card({}: Props) {
  const [RandomNumber, setRandomNumber] = useState(1);
  const [word, setWord] = useState("");
  const [firstName, setFirstName] = useState("");
  const [mistakes, setMistakes] = useState(0);
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = randomIntFromInterval(1, data.length);
    return setRandomNumber(result);
  };

  const handleGuess = (guessedLetter: string) => {
    // console.log("HERE: ",[...guessedLetters].push(guessedLetter))
    if (!guessedLetters.includes(guessedLetter)) {
      setGuessedLetters([...guessedLetters, guessedLetter]);
      if (!word.includes(guessedLetter)) {
        setMistakes(mistakes + 1);
      }
    }
  };

  const tempData = [data[RandomNumber]];
  console.log("guessedLetters: ", guessedLetters, "data: ", tempData[0]);
  return (
    <div className={styles.card_wrapper}>
      {tempData.map((item) => {
        return (
          <div key={item?.ID}>
            <Logo imageID={item?.ID} name={item?.Name} />
            <h1 className={styles.card_title}>{item?.Name}</h1>

            <div className="word-display">
              {tempData[0].Name.toUpperCase().split("").map((letter, index) => (
                <span key={index} className="letter">
                  {guessedLetters.includes(letter) ? (
                    <span style={{ textDecoration: "underline" }}>
                      {letter}
                    </span>
                  ) : (
                    <span> _ </span>
                  )}
                </span>
              ))}
            </div>
            
            <span>
              <h3 className={styles.card_text}>
                {item?.City}, {item?.Country}
                <a href={item?.Link} target="_blank">
                  Listen {"➡️"}
                </a>
              </h3>
            </span>
          </div>
        );
      })}
      <Keyboard
        handleGuess={handleGuess}
        guessedLetters={guessedLetters}
      ></Keyboard>
      <button onClick={handleMouseEvent}>CLICK </button>
      {/* <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          maxLength={1}
          minLength={1}
        />

        <input
          type="submit"
          onClick={() => handleGuess(firstName.toUpperCase())}
          value="Submit Guess"
        />
      </div> */}
      <p>{guessedLetters}</p>
    </div>
  );
}
