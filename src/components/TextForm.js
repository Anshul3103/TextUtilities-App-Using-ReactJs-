import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUppercase = () => {
    if (text === text.toUpperCase()) {
      setText(text.toLowerCase());
      props.showAlert("Converted to Lower case", "success");
    } else {
      setText(text.toUpperCase());
      props.showAlert("Converted to Upper case", "success");
    }
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const ReverseIt = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords;

    setText(newText);
    props.showAlert("Text is reversed", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor:
                props.mode === "light"
                  ? "white"
                  : props.mode === "red"
                  ? "#ba3232"
                  : props.mode === "blue"
                  ? "#444a87"
                  : props.mode === "green"
                  ? "#3c7d3e"
                  : props.mode === "purple"
                  ? "#6c3380"
                  : "blue",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          style={{
            backgroundColor:
              props.mode === "light"
                ? "#db3030"
                : props.mode === "red"
                ? "#db3030"
                : props.mode === "blue"
                ? "#284ba8"
                : props.mode === "green"
                ? "#279121"
                : props.mode === "purple"
                ? "#8427a3"
                : "blue",
          }}
          disabled={text.length === 0}
          className="btn mx-1 my-1"
          onClick={handleUppercase}
        >
          Convert to uppercase and back to Lower case
        </button>
        <button
          disabled={text.length === 0}
          style={{
            backgroundColor:
              props.mode === "light"
                ? "#db3030"
                : props.mode === "red"
                ? "#db3030"
                : props.mode === "blue"
                ? "#284ba8"
                : props.mode === "green"
                ? "#279121"
                : props.mode === "purple"
                ? "#8427a3"
                : "blue",
          }}
          className="btn mx-1 my-1"
          onClick={() => {
            setText("");
            props.showAlert("Text Cleared !!!", "success");
          }}
        >
          Clear Text
        </button>
        <button
          style={{
            backgroundColor:
              props.mode === "light"
                ? "#db3030"
                : props.mode === "red"
                ? "#db3030"
                : props.mode === "blue"
                ? "#284ba8"
                : props.mode === "green"
                ? "#279121"
                : props.mode === "purple"
                ? "#8427a3"
                : "blue",
          }}
          disabled={text.length === 0}
          className="btn mx-1 my-1"
          onClick={handleSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          style={{
            backgroundColor:
              props.mode === "light"
                ? "#db3030"
                : props.mode === "red"
                ? "#db3030"
                : props.mode === "blue"
                ? "#284ba8"
                : props.mode === "green"
                ? "#279121"
                : props.mode === "purple"
                ? "#8427a3"
                : "blue",
          }}
          disabled={text.length === 0}
          className="btn mx-1 my-1"
          onClick={ReverseIt}
        >
          Reverse Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
