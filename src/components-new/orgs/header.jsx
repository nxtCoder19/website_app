import Logo from "../logo";
import {Button} from "../atoms/button";
import classNames from "classnames";

export const Header = ()=>{
  return <div className={"flex"}>
    <div className={classNames(
      "container","mx-auto","flex","justify-between", "py-6"
    )}>
      <Logo />
      <Button label="Login to your account" color="primary" />
    </div>

  </div>
}
