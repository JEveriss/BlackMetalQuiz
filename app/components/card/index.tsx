"use client";

import { MouseEvent, useState } from "react";

type Props = { x: number };
import styles from "./card.module.css";

import data from "../../data/data.json";
import { Logo } from "./logo";

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Card({}: Props) {
  //   const ButtonComponent = () => {
  //     return <button onClick={handleMouseEvent}>CLICK</button>;
  // };

  const [RandomNumber, setRandomNumber] = useState(1);

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const result = randomIntFromInterval(1, 22);
    console.log(result);
    return setRandomNumber(result)
  };

  const tempData = [data[RandomNumber]];
  return (
    <div className={styles.card_wrapper}>
      {tempData.map((item) => {
        return (
          <>
            <div className={styles.card_image}>
              <Logo key={item?.ID} imageID={item?.ID} />
            </div>
            <h1 className={styles.card_title}>{item?.Name}</h1>
            <span>
              <h3 className={styles.card_text}>
                {item?.City}, {item?.Country}
                <a href={item?.Link}>link</a>
              </h3>
            </span>
          </>
        );
      })}
      <button onClick={handleMouseEvent}>CKICK </button>
    </div>
  );
}
