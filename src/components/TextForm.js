import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase" + text);
    let UpText = text.toUpperCase();
    setText(UpText);
  };

  const handleLowClick = () => {
    let UpText = text.toLowerCase();
    setText(UpText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`Copied "${text}" to clipboard`);
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  const handleClearClick = () => {
    let UpText = "";
    setText(UpText);
  };

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const handleCapitalisedClick = () => {
    let textArr = text.split(" ");
    let capitalisedTextArr = textArr.map((element) => {
      if (element.length > 0) {
        return element[0].toUpperCase() + element.slice(1);
      } else {
        return element;
      }
    });
    setText(capitalisedTextArr.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            placeholder="ENTER THE TEXT HERE:"
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
          style={{
            backgroundColor: "#4a6fa5",
            color: "white",
            borderColor: "#3b5988",
          }}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLowClick}
          style={{
            backgroundColor: "#4a6fa5",
            color: "white",
            borderColor: "#3b5988",
          }}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
          style={{
            backgroundColor: "#4a6fa5",
            color: "white",
            borderColor: "#3b5988",
          }}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCapitalisedClick}
          style={{
            backgroundColor: "#4a6fa5",
            color: "white",
            borderColor: "#3b5988",
          }}
        >
          Capitalise Case
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={copyToClipboard}
          style={{
            backgroundColor: "#4a6fa5",
            color: "white",
            borderColor: "#3b5988",
          }}
        >
          Copy Text to Clipboard
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <p>
          {countWords(text)} words and {text.length} characters
        </p>
        <p>{0.5 * countWords(text)} seconds needed to read</p>
        <h2>Preview</h2>
      </div>
    </>
  );
}
