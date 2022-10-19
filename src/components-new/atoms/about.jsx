export const AboutSection = ({ sno, title, desc, img, icon }) => {
  return (
    <div>
      <div className="md:flex">
        <div className="flex place-self-center flex-col items-start w-[30rem]">
          <div className="flex font-bold">
            <span className="bg-blue-900 outline outline-offset-4 outline-gray-200 rounded-full text-white text-md px-3 py-1.5">
              {sno}
            </span>
            <span className="ml-5 font-bold text-2xl place-self-center">
              {title}
            </span>
          </div>

          <div className="ml-14 text-gray-500 text-lg">
            <div>
              <div className="mt-4">
                <span className="content-center ">{desc}</span>
              </div>
            </div>

            <div>
              <div className="flex mt-5 items-start">
                <div className="bg-sky-700 border-2 rounded-full text-white mt-1">
                  {icon}
                </div>
                <span className="ml-2">
                  Break dependencies between Devops & Developers
                </span>
              </div>
            </div>

            <div>
              <div className="flex flex-row items-start mt-2">
                <div className="bg-sky-700 border-2 rounded-full text-white mt-1">
                  {icon}
                </div>
                <span className="ml-2">
                  Develop, build & deploy with confidence
                </span>
              </div>
            </div>

            <div>
              <div className="flex mt-2 items-start">
                <div>
                  <div className="bg-sky-700 border-2 mt-1 rounded-full text-white">
                    {icon}
                  </div>
                </div>
                <span className="ml-3">Automation</span>
              </div>
            </div>

            <div>
              <div className="flex mt-2">
                <div>
                  <div className="bg-sky-700 mt-1 border-2 rounded-full text-white">
                    {icon}
                  </div>
                </div>
                <span className="ml-2">Fit into existing infrastructure</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export const AboutSecondSection = ({ sno, title, desc, img, icon }) => {
  return (
    <div>
      <div className="md:flex flex-row-reverse">
        <div className="flex flex-col place-self-center items-start w-[30rem]">
          <div className="flex font-bold">
            <span className="bg-blue-900 outline outline-offset-4 outline-gray-200 rounded-full text-white text-md px-3 py-1.5">
              {sno}
            </span>
            <span className="ml-5 font-bold text-2xl place-self-center">
              {title}
            </span>
          </div>

          <div className="ml-14 text-gray-500 text-lg">
            <div>
              <div className="mt-4">
                <span className="content-center ">{desc}</span>
              </div>
            </div>

            <div>
              <div className="flex mt-5 items-start">
                <div>
                  <div className="bg-sky-700 border-2 rounded-full mt-1 text-white">
                    {icon}
                  </div>
                </div>
                <span className="ml-2">
                  Spot Instances are generally 70% Cheaper
                </span>
              </div>
            </div>

            <div>
              <div className="flex mt-2 items-start">
                <div>
                  <div className="bg-sky-700 border-2 rounded-full mt-1 text-white">
                    {icon}
                  </div>
                </div>
                <span className="ml-2">
                  Reserved Instance are generally 90% Cheaper
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export const CardSection = ({ color, icon, title, desc }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div
          className={`${color} items-center rounded-2xl w-24 h-24 text-5xl text-white font-bold flex justify-center`}
        >
          {icon}
        </div>
      </div>
      <div className="text-center mt-10">
        <span className="font-bold text-xl">{title}</span>
      </div>
      <div className="md:flex justify-center">
        <div className=" text-center mt-2 text-gray-500 text-lg md:w-2/3">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export const GridCardSection = ({ icon, title, color }) => {
  return (
    <div>
      <div className="border-solid border w-72 h-64 border-grey rounded-lg">
        <div className="ml-10 mt-10">
          <div
            className={`${color} rounded-full p-5 text-4xl text-white w-min`}
          >
            {icon}
          </div>
          <div className="mt-7">
            <span className="text-lg font-bold">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FooterCardSection = ({ color, icon }) => {
  return (
    <div className="mt-9 md:mt-0">
      <div>
        <div
          className={`${color} items-center rounded-md p-2 text-4xl text-black mr-3.5`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
