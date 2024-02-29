import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Confetti from "react-confetti";
export default function Elevel2() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isCorrect, setIsCorrect] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  // speech check code
  const word = [
    "THIS IS HOUSE",
    "MY NAME IS RAJ",
    "MY CAR IS BIG",
    "RAHUL IS BAD BOY",
  ];
  const [currentLetter, setCurrentLetter] = useState(0);

  var speakLetter = transcript.trim().toUpperCase();
  const currentword = word[currentLetter];
  const handleSpeak = () => {
    SpeechRecognition.startListening();

  };

  const checkValue = () => {
    const audioElement = new Audio();
    if (currentword === speakLetter) {
      audioElement.src = "/audio/correct-6033.mp3";
      setIsCorrect(true);
    } else {
      audioElement.src = "/audio/buzzer-15-187758.mp3";
      setIsCorrect(false);
    }
    audioElement.play();
  };

  const handleNextLetter = () => {
    setCurrentLetter((prevIndex) => (prevIndex + 1) % word.length);
    resetTranscript();
    setIsCorrect(false);
  };

  return (
    <div className="english-data">
      <div className=" flex  flex-col mx-0 items-center justify-center  bg-gray-200 ">
        <h1 className="text-3xl   font-bold mb-4">Speak the word</h1>
        <div className="mb-4">
          {isCorrect ? (
            
            <Confetti width={"500px"} height={"2000px"}   />
          ) : (
            ""
          )}
          {/* <p>Speak the word:</p> */}
          <h1 className="text-center text-4xl font-bold">{currentword}</h1>
        </div>
        <div className="">
          <button
            onClick={handleSpeak}
            className="bg-blue-500 text-white p-2  mb-2 rounded-md shadow-md shadow-blue-700 "
          >
            Speak
          </button>
        </div>
        <h1>You speak letter:</h1>
        {listening ? <h1 className="text-2xl">Listening...</h1> : ""}
        <h1
          className="text-5xl"
          style={{ color: isCorrect ? "green" : "red " }}
        >
          {speakLetter}
        </h1>
        <div className="flex  mt-32 a ">
          <button
            onClick={handleNextLetter}
            className="bg-green-500 text-white p-5  rounded-md shadow-md shadow-green-700 font-bold "
          >
            Next
          </button>

          {speakLetter == "" ? (
            <button
              disabled
              className={
                "bg-[#cccccc] text-[#a6a6a6] p-5 ml-96 rounded-md font-bold shadow-md shadow-[#888686] hover:cursor-not-allowed "
              }
            >
              Check
            </button>
          ) : (
            <button
              onClick={checkValue}
              className={
                "bg-green-500 text-white p-5 ml-96 rounded-md font-bold shadow-md shadow-green-700   "
              }
            >
              Check{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
