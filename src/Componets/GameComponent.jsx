// import { SignalWifiStatusbarConnectedNoInternet4Outlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "../index.css";
import "../Style/modal.css";
function GameComponent(props) {
  let WordsArray_orginal = [
    "CAT",
    "DOG",
    "GOAT",
    "COW",
    "ELEPHANT",
    "TIGER",
    "LION",
    "GIRAFFE",
    "LEOPARD",
    "BISHIR",
  ];

  const WordsArray = WordsArray_orginal.map((data) => {
    let shuffleWord = "";
    let arr = data.split("");
    // console.log(arr);
    console.log("Lenght: " + arr.length);
    let i = 0;
    let arrayLen = arr.length;
    while (i < arrayLen) {
      //   console.log(arr.length);
      let randomIndex = Math.floor(Math.random() * arr.length);
      while (i == 0 && randomIndex == 0) {
        randomIndex = Math.floor(Math.random() * arr.length);
      }

      console.log(Math.random);
      shuffleWord = shuffleWord + arr[randomIndex];
      arr.splice(randomIndex, 1);
      i++;
    }
    console.log(shuffleWord);
    return shuffleWord;
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(WordsArray[selectedIndex]);
  const [prevBtnDisabled, setprevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [point, setPoint] = useState(0);
  const [maxSelectedIndex, setMaxSelectedIndex] = useState(0);
  const [name, setName] = useState("");
  const [result, setResult] = useState();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const chekTheResult = () => {
    if (
      inputValue.toUpperCase() ===
        WordsArray_orginal[selectedIndex].toUpperCase() &&
      selectedIndex === maxSelectedIndex
    )
      setPoint(point + 1);
    //console.log(inputValue, selectedWord, maxSelectedIndex);
    setResult({
      CorrectWord: WordsArray_orginal[selectedIndex].toUpperCase(),
      Answer: inputValue,
    });

    toggleModal();

    setMaxSelectedIndex(maxSelectedIndex + 1);
    setInputValue("");
  };

  const nextButtonPress = () => {
    setSelectedIndex(selectedIndex + 1);
  };

  useEffect(() => {
    setSelectedWord(WordsArray[selectedIndex]);

    if (selectedIndex === WordsArray.length - 1) {
      setNextBtnDisabled(true);
    } else {
      if (nextBtnDisabled === true) {
        setNextBtnDisabled(false);
      }
      if (prevBtnDisabled === true) setprevBtnDisabled(false);
    }
    if (selectedIndex === 0) {
      setprevBtnDisabled(true);
      return;
    } else {
      if (nextBtnDisabled === true) {
        setNextBtnDisabled(false);
      }
      if (prevBtnDisabled === true) setprevBtnDisabled(false);
    }
  }, [selectedIndex]);

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Result</h2>
            <p>{`Correct Word: ${result.CorrectWord}`}</p>
            <p>{`Your Answer: ${result.Answer}`}</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <h1>Word Game</h1> */}

        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <p>Your Word: </p>
        <p style={{ fontSize: "24", fontWeight: "bold" }}>
          {selectedWord.split("").join(" ")}
        </p>
        <form
          action=""
          onSubmit={(ev) => {
            ev.preventDefault();
            chekTheResult();

            if (selectedIndex != WordsArray.length - 1) nextButtonPress();
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <div>
            <button type="submit">Next</button>
            <button
              //disabled={prevBtnDisabled}
              onClick={(e) => {
                e.preventDefault();
                setSelectedIndex(0);
                setPoint(0);
                setMaxSelectedIndex(0);
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <br />

        <h2>{`Hai ${name}`} </h2>
        <h2>{`Your Point: ${point} out of ${WordsArray.length}`}</h2>
      </div>
    </>
  );
}
export default GameComponent;
