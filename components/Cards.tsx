import React from "react";
import { Card } from "./Card";

const cardsarray = [
  "Reports of Hindutva extremist aggression",
  "Flash Floods in Pakistan have Left Millions Displaced",
  "Press Release: #VisitMyMosque Open Day 2022",
  "PRESS RELEASE: UYGHUR MUSLIMS",
];

export const Cards = () => {
  return (
    <>
      <h2 className="flex justify-center m-12 text-3xl font-bold underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 dark:text-white">
        News
      </h2>

      <article className="flex flex-wrap justify-center gap-5 mb-20">
        {cardsarray.map((title) => (
          <Card title={title} />
        ))}
      </article>
    </>
  );
};
