import React from "react";
import { TiFolder } from "react-icons/ti";

export const Card = (props) => {
  return (
    <div className="flex border-solid border-2 w-max p-4 border-black rounded-md bg-white text-black">
      <div className="bg-blue-500 border-2 rounded-full p-5">
        <TiFolder />
      </div>
      <div className="ml-2 mt-2">
        <span>{props.name}</span>
        <br />
        <span>{props.num}</span>
      </div>
    </div>
  );
};
