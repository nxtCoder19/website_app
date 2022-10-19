import classNames from "classnames";

export const Button = ({ onClick, label, type, color }) => {
  return (
    <button
      className={classNames(
        "px-4",
        "py-2.5",
        "rounded-md",
        "w-max",

        "transition-all",
        {
          "bg-blue-600 hover:bg-blue-700": color === "primary",
          "text-white": color === "primary",
        }
      )}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export const LinkButton = ({ href, label }) => {
  return <a href={href}>{label}</a>;
};

export const TextfieldButton = ({ onClick, label, type, color, icon }) => {
  return (
    <div className="mt-10">
      <button
        className=" bg-blue-600 text-white 
      rounded-md w-full px-4 py-3 hover:bg-blue-700"
        type={type}
        onClick={onClick}
      >
        <div className="flex justify-center">
          {label}
          <span className="py-1 px-2">{icon}</span>
        </div>
      </button>
    </div>
  );
};

export const ContactButton = ({ type, onClick, label, icon }) => {
  return (
    <div className="md:flex justify-center">
      <div className="mt-10">
        <button
          className=" bg-blue-600 text-white text-xl font-bold
      rounded-md w-full px-8 py-4 hover:bg-blue-700"
          type={type}
          onClick={onClick}
        >
          <div className="flex justify-center">
            <span className="py-1 px-2 text-sm font-bold md:text-xl">
              {icon}
            </span>
            {label}
          </div>
        </button>
      </div>
    </div>
  );
};
