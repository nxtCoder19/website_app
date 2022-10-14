import React from "react";
import { TiFolder } from "react-icons/ti";

export const GridItemCard = (props) => {
  return (
    <div>
      <div className="border-solid border-2 w-max p-6 border-grey rounded-md bg-white text-black">
        <div className="bg-blue-500 rounded-full p-5 w-min">
          <TiFolder />
        </div>
        <div className="mt-10">
          <span className="text-xl font-bold">{props.label}</span>
        </div>
      </div>
    </div>
  );
};
