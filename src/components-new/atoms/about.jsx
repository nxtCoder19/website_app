export const FirstSection = ({ sno, title, desc, img, icon }) => {
  return (
    <div className="gap-1 m-5">
      <div className="flex font-bold">
        <span className="bg-blue-900 outline outline-offset-4 outline-gray-200 rounded-full text-white text-md px-2.5 py-1.5">
          {sno}
        </span>
        <span className="ml-4 font-bold place-self-center">{title}</span>
      </div>

      <div>
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

      <div className="mt-5">
        <img src={img} alt=""></img>
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
      <div className="text-center mt-2 text-grey-500">
        <span>{desc}</span>
      </div>
    </div>
  );
};

export const GridCardSection = ({ icon, title, color }) => {
  return (
    <div className="flex justify-center mt-7">
      <div className="border-solid border-2 px-12 py-4 border-grey rounded-md">
        <div className={`${color} rounded-full p-5 w-min`}>{icon}</div>
        <div className="mt-10">
          <span className="text-xl font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};
