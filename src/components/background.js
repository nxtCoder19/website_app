import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TextfieldComponent } from "./textfield-component";

export const Background = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between text-white">
        <div>
          <div>
            <span className="text-5xl">
              We simplify <br /> your Devops
            </span>
          </div>
          <div className="mt-6">
            <span>
              The DevOps partner you need,
              <br /> with developer-friendly features,
              <br /> and scalability you love.
            </span>
          </div>
        </div>
        <div className="border-solid border-2 border-black p-8 rounded-md bg-white text-black">
          <span className="text-xl">Join our private beta</span>
          <br />
          <TextfieldComponent name={"Full Name"} />
          <TextfieldComponent name={"Company"} />
          <TextfieldComponent name={"Email"} />
          <TextfieldComponent name={"Mobile No"} />
          <div>
            <button className="place-content-center bg-blue-500 flex text-white py-1 px-4 mb-4 mt-4 rounded-md w-full">
              Proceed <FaArrowRight className="mt-1 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
