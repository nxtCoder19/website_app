import classNames from "classnames";

export const Button = ({ onClick, label, type, color }) => {
  return (
    <button
      className={classNames(
        "px-4",
        "py-2.5",
        "rounded-md",
        
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

export const TextfieldButton = ({ onClick, label, type, color }) => {
  return (
    <div className="mx-4 mb-10 mt-10">
      <button
        className="place-content-center bg-blue-500 text-white 
      rounded-md w-full px-4 py-2 hover:bg-blue-700"
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};
