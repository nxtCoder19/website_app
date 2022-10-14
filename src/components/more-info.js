import React from "react";
import { TiFolder } from "react-icons/ti";

export const MoreInfo = () => {
  return (
    <div className="mb-10 ml-60">
      <div className="flex ">
        <div className="mr-10">
          <div className="flex justify-center">
            <div className="bg-blue-500 rounded-md p-5 w-max">
              <TiFolder />
            </div>
          </div>
          <div className="mt-5">
            <span className="font-bold text-l">DevOps will work smarter</span>
            <br />
            <span>
              Management console, CI & CD will
              <br /> save time & effort for DevOps
            </span>
          </div>
        </div>

        <div className="mr-10">
          <div className="flex justify-center">
            <div className="bg-blue-500 rounded-md p-5 w-max">
              <TiFolder />
            </div>
          </div>
          <div className="mt-5">
            <span className="font-bold text-l">
              Developers will ship faster
            </span>
            <br />
            <span>
              Dev Tools will help developers <br /> build and deploy with ease.
            </span>
          </div>
        </div>

        <div>
          <div className="flex justify-center">
            <div className="bg-blue-500 rounded-md p-5 w-max">
              <TiFolder />
            </div>
          </div>
          <div className="mt-5">
            <span className="font-bold text-l">Company will save more</span>
            <br />
            <span>
              Cost optimisation will save
              <br /> more than 70-80% on infra <br />
              cost.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
