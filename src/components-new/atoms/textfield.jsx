import classNames from "classnames";
import React from "react";
import { useState } from "react";

export const Textfield = ({ label, placeholder, icon }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div className={"flex flex-col gap-1 m-5"}>
      <label
        className={classNames("text-sm", "font-bold", {
          "text-blue-500": focused,
        })}
      >
        {label}
      </label>
      <div
        className={classNames("flex border rounded-md max-w justify-between", {
          "border-blue-500": focused,
          "border-gray-200": !focused,
        })}
      >
        <input
          onFocus={() => {
            console.log("focused");
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholder={placeholder}
          className={classNames(
            "text-color-grey-400 outline-none focus:border-blue-500 w-full",
            "text-xl",
            "px-4",
            "py-1.5",
            "rounded-md"
          )}
        />

        <div className={`place-self-center px-4`}>
          {icon && icon({ color: focused ? "blue" : "grey-200" })}
          {/* {icon && <icon color={focused ? "blue" : "red"} />} */}
        </div>
      </div>
    </div>
  );
};
