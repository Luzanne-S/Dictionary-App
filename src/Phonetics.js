import React from "react";
import "./Meaning.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <div className="text">{props.phonetic.text}</div>

      <br />
      <br />
      <audio src={props.phonetic.audio} controls></audio>
    </div>
  );
}
