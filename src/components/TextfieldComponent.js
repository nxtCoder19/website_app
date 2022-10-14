import React from "react";

export const TextfieldComponent = (props) => {
  return (
    <div className="mt-4">
      <span className="text-lg">{props.name}</span>
      <br></br>
      <input
        className="mt-1 border-2 px-3 py-1.5"
        placeholder="Text Field"
        name=""
        autoFocus={true}
      ></input>
    </div>
  );
};
