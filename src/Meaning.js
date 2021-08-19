import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definition" key={index}>
            <p>{definition.definition}</p>
            <em>Example: {definition.example}</em>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      ;
    </div>
  );
}
