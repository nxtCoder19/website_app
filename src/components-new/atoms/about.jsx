export const AboutSection = ({ sno, title, desc, img, icon }) => {
  return (
    <div className="gap-1 m-5">
      <div className="md:flex">
        <div>
          <div className="flex font-bold">
            <span className="bg-blue-900 outline outline-offset-4 outline-gray-200 rounded-full text-white text-md px-3 py-1.5">
              {sno}
            </span>
            <span className="ml-4 font-bold place-self-center">{title}</span>
          </div>

          <div className="md:w-2/3">
            <div className="mt-4">
              <span className="content-center">{desc}</span>
            </div>
          </div>

          <div>
            <div className="flex mt-5">
              <div>
                <div className="bg-sky-700 border-2 rounded-full text-white">
                  {icon}
                </div>
              </div>
              <span className="ml-2">
                Break dependencies between Devops & <br /> Developers
              </span>
            </div>
          </div>

          <div>
            <div className="flex mt-2">
              <div>
                <div className="bg-sky-700 border-2 rounded-full text-white">
                  {icon}
                </div>
              </div>
              <span className="ml-2">
                Break dependencies between Devops & <br /> Developers
              </span>
            </div>
          </div>

          <div>
            <div className="flex mt-2">
              <div>
                <div className="bg-sky-700 border-2 rounded-full text-white">
                  {icon}
                </div>
              </div>
              <span className="ml-3">
                Break dependencies between Devops & <br /> Developers
              </span>
            </div>
          </div>

          <div>
            <div className="flex mt-2">
              <div>
                <div className="bg-sky-700 border-2 rounded-full text-white">
                  {icon}
                </div>
              </div>
              <span className="ml-2">
                Break dependencies between Devops & <br /> Developers
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <img src={img} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export const CardSection = ({ color, icon, title, desc }) => {
  return (
    <div className="mt-9">
      <div className="flex justify-center">
        <div
          className={`${color} items-center rounded-md p-5 text-4xl text-white`}
        >
          {icon}
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="font-bold text-l">{title}</span>
      </div>
      <div className="md:flex justify-center">
        <div className=" text-center mt-2 text-grey-500 md:w-1/2">
          <span>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export const GridCardSection = ({ icon, title, color }) => {
  return (
    <div className="m-5 gap-1 mt-7">
      <div className="border-solid border px-7 py-7 border-grey rounded-lg">
        <div className={`${color} rounded-full p-5 text-3xl text-white w-min`}>
          {icon}
        </div>
        <div className="mt-6">
          <span className="text-xl font-bold">{title}</span>
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
