/*in this file we are creating MyFlashCard when user is on this page he/she will be able to see all their flashcard generated
by them in the shape of flashcardui using map function  */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashcardUI";

const MyFlashCard = () => {
  const navigate = useNavigate(); // to return the impretive method to change the location

  const flashcard = useSelector((state) => state.flashcard.flashcards); // getting state from store

  const [showAll, setShowAll] = useState(false);

  const showLimit = !showAll ? 6 : flashcard.length; // setting showlimit of cards on the page

  return (
    <section className="flex flex-col mt-16">
      {/*if the length of flashcard is greater than 0 it will show all flashcard 
      else it will show message to create flashcard  */}
      {flashcard.length > 0 ? (
        <div>
          <div className="flex flex-wrap">
            {flashcard.slice(0, showLimit).map(({ card }, i) => (
              <FlashcardUI key={i} flashcard={card} />
            ))}
          </div>
          <div className="flex justify-end mr-10">
            <button
              className="w-16 mt-1 font-bold text-lg text-red-500 outline-none border-none active:outline-none active:border-none"
              onClick={() => setShowAll(!showAll)}
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center bg-cyan-100 shadow-lg p-10">
          <h1 className="font-semibold text-2xl text-white-900">
           Currently No Flashcard is avaliable to show , Please Go to
            <span
              className="text-pink-800 cursor-pointer"
              onClick={() => navigate("/")}
            >
              --CREATE FLASHCARD--
            </span>
            to Create New Flashcard
          </h1>
        </div>
      )}
    </section>
  );
};

export default MyFlashCard;