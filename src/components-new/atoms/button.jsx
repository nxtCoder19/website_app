import classNames from "classnames";

export const Button = ({onClick, label, type, color})=>{
  return <button
    className={classNames("px-4", "py-2.5", "rounded-md", "text-base", "transition-all",{
      "bg-blue-600 hover:bg-blue-700": color === "primary",
      "text-white": color === "primary",
    })}
    type={type}
    onClick={onClick}
  >{label}</button>
}

export const LinkButton = ({href, label})=>{
  return <a href={href}>{label}</a>
}
