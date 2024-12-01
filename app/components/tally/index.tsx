"use client";

import React from "react";

type Props = { x: string };

export default function Tally({}: Props) {
  function popup() {
    alert("POPPED UP");
  }
  return (
    <section>
      <button onClick={() => popup()}>CLICK</button>
      <svg
        width="116"
        height="83"
        viewBox="0 0 116 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="62"
          y="1"
          width="16"
          height="81"
          fill="#262626"
          stroke="#D9D9D9"
          strokeWidth="2"
        />
        <rect
          x="84"
          y="1"
          width="16"
          height="81"
          fill="#262626"
          stroke="#D9D9D9"
          strokeWidth="2"
        />
        <rect
          x="39"
          width="16"
          height="83"
          fill="#D9D9D9"
          stroke="#D9D9D9"
          strokeWidth="2"
        />
        <rect
          x="17"
          width="16"
          height="83"
          fill="#D9D9D9"
          stroke="#D9D9D9"
          strokeWidth="2"
        />
        <rect
          x="-0.202157"
          y="1.29096"
          width="16"
          height="121.442"
          transform="matrix(0.646867 0.762603 -0.849024 0.528354 105.829 3.39585)"
          fill="#262626"
          stroke="#D9D9D9"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
}
