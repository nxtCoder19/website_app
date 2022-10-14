import React from "react";
import { TiTick } from "react-icons/ti";
import { Card } from "./card";

export const About = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex">
            <div>
              <span className="bg-blue-900 py-1 rounded-full text-sm px-2">
                1
              </span>
            </div>
            <div>
              <span className="ml-6 font-bold">Simple</span>
              <br />
              <div className="ml-6 mt-4">
                <span className="content-center">
                  KloudLite is a simple, developer-friendly
                  <br />
                  console that helps you manage your DevOps <br /> tools and
                  infrastructure.
                </span>
              </div>

              <div className="flex ml-6 mt-4">
                <div>
                  <div className="bg-blue-500 border-2 rounded-full">
                    <TiTick />
                  </div>
                </div>
                <span className="ml-2">
                  Break dependencies between Devops & <br /> Developers
                </span>
              </div>

              <div className="flex ml-6 mt-4">
                <div>
                  <div className="bg-blue-500 border-2 rounded-full">
                    <TiTick />
                  </div>
                </div>
                <span className="ml-2">
                  Develop, build & deploy with confidence
                </span>
              </div>

              <div className="flex ml-6 mt-4">
                <div>
                  <div className="bg-blue-500 border-2 rounded-full">
                    <TiTick />
                  </div>
                </div>
                <span className="ml-2">Automation</span>
              </div>
              <div className="flex ml-6 mt-4">
                <div>
                  <div className="bg-blue-500 border-2 rounded-full">
                    <TiTick />
                  </div>
                </div>
                <span className="ml-2">Fit into existing infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img src="/images/Rectangle 53.svg" alt=""></img>
          <div className="absolute left-0 right-0 top-0 bottom-0">
            <Card name={"Total Project"} num={"12"} />
          </div>

          <div className="absolute left-4 bottom-3">
            <Card name={"Total Memory usage"} num={"30,000MB"} />
          </div>

          <div className="absolute right-2 bottom-3 top-5">
            <Card name={"Total CPU usage"} num={"40,000i"} />
          </div>
        </div>
      </div>

      {/* cost effective component */}

      <div className="flex justify-between mt-20 mb-20">
        <div>
          <div className="relative">
            <img src="/images/Group 414.svg" alt=""></img>
            <div className="absolute left-0 right-0 top-0 bottom-0">
              <img src="/images/Frame 414.svg" alt=""></img>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <span className="bg-blue-900 py-1 rounded-full text-sm px-2">
              2
            </span>
          </div>
          <div>
            <span className="ml-6 font-bold">Cost effective</span>
            <br />
            <div className="ml-6 mt-4">
              <span className="content-center">
                KloudLite is a cost-effective, Lorem ipsum dolor
                <br />
                sit amet, consectetur adipiscing elit, sed do
                <br /> eiusmod tempor incididunt ut.
              </span>
            </div>
            <div className="flex ml-6 mt-4">
              <div>
                <div className="bg-blue-500 border-2 rounded-full">
                  <TiTick />
                </div>
              </div>
              <span className="ml-2">
                Spot Instances are generally 70% Cheaper
              </span>
            </div>
            <div className="flex ml-6 mt-4">
              <div>
                <div className="bg-blue-500 border-2 rounded-full">
                  <TiTick />
                </div>
              </div>
              <span className="ml-2">
                Reserved Instance are generally 90% <br /> Cheaper
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* cloud ignoistic */}

      <div className="relative flex justify-between">
        <div className="mt-20">
          <div className="flex">
            <div>
              <span className="bg-blue-900 py-1 rounded-full text-sm px-2">
                3
              </span>
            </div>
            <div>
              <span className="ml-6 font-bold">cloud ignoistic</span>
              <br />
              <div className="ml-6 mt-4">
                <span className="content-center">
                  KloudLite is a cloud agnostic, Lorem ipsum <br />
                  dolor sit amet, consectetur adipiscing elit.
                  <br /> Suspendisse eu, accumsan proin ridiculus risus
                  <br /> porttitor porttitor. Purus, blandit erat <br />
                  penatibus facilisis.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src="/images/Group 405.svg" alt=""></img>
        </div>
      </div>
    </div>
  );
};
