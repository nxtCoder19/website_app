import classNames from "classnames";


export const Textfield = ({label, placeholder, icon})=>{
  return <div className={"flex flex-col"}>
    <label className={classNames("font-semibold","text-sms")}>{label}</label>
    <input placeholder={placeholder} className={classNames("text-color-grey-400","text-2xl")} />
  </div>
}
