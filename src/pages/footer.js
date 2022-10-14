import React from "react";
import { GridItemCard } from "../components/gridItem-card";

export const Footer = () => {
  return (
    <div className="container mx-auto-center ml-10 mt-10">
      <div className="flex justify-center">
        <span className="text-5xl font-bold text-center">
          Feel the Advantage of Cloud Native
        </span>
      </div>
      <br />
      <div className="flex justify-center text-gray-500">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu, accumsan proin ridiculus
        </span>
      </div>
      <div className="flex justify-center text-gray-500">
        <span>
          risus porttitor porttitor. Purus, blandit erat penatibus facilisis.
          Leo sagittis donec
        </span>
      </div>
      <div className="container mx-auto pb-24">
        <div className="grid grid-cols-4 my-8 gap-8">
          <GridItemCard label={"Auto Scaling"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
          <GridItemCard label={"Self Healing"} />
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <span className="text-5xl font-bold text-center">
            Start building today and save
          </span>
        </div>
        <div className="flex justify-center">
          <span className="text-5xl font-bold text-center">
            hours from the process.
          </span>
        </div>
        <br />
        <div className="flex justify-center text-gray-500">
          <span>
            Gain access to our complete library of components. Unlimited
            combinations for you to
          </span>
        </div>
        <div className="flex justify-center text-gray-500">
          <span>
            build better products faster. New components and products added
            regularly
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex ">
          <div className="bg-red-200 w-1/3">
            <img src="/images/Frame.svg" alt=""></img>
          </div>
          <div className="border-solid border-2 w-max p-6 border-black rounded-md bg-white text-black">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
