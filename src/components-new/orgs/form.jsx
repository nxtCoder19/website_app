import { TextfieldButton } from "../atoms/button";
import { Textfield } from "../atoms/textfield";
import { FaArrowRight } from "react-icons/fa";
import { Content } from "../atoms/content";

export const Form = () => {
  return (
    <div className="mt-20 md:flex">
      <div>
        <Content
          title={"We simplify your Devops"}
          desc={
            "The DevOps partner we need, with developer-friendly features, and scalibility you love."
          }
        />
      </div>
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
        <TextfieldButton label="Proceed" icon={<FaArrowRight />} />
      </div>
    </div>
  );
};
