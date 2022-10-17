import { TextfieldButton } from "../atoms/button";
import { Textfield } from "../atoms/textfield";
import { FaArrowRight } from "react-icons/fa";

export const Form = () => {
  return (
    <div>
      <Textfield
        label={"Full Name"}
        placeholder={"Text Field"}
        icon={({ color }) => <FaArrowRight color={color} />}
      ></Textfield>
      <Textfield
        label={"Company"}
        placeholder={"Text Field"}
        icon={({ color }) => <FaArrowRight color={color} />}
      ></Textfield>
      <Textfield
        label={"Email"}
        placeholder={"Text Field"}
        icon={({ color }) => <FaArrowRight color={color} />}
        // icon={<CBox></CBox>}
      ></Textfield>
      <Textfield
        label={"Mobile"}
        placeholder={"Text Field"}
        icon={({ color }) => <FaArrowRight color={color} />}
      ></Textfield>
      <TextfieldButton label="Proceed" />
    </div>
  );
};
