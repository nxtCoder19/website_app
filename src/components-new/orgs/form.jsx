import { TextfieldButton } from "../atoms/button";
import { Textfield } from "../atoms/textfield";
import { FaArrowRight } from "react-icons/fa";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

export const Form = () => {
  return (
    <div className="md:flex justify-between container mx-auto px-8">
      <div className="md:place-self-center">
        <div className="">
          <div>
            <span className="text-7xl font-bold text-white">
              We simplify <br /> your Devops
            </span>
          </div>
          <div className="mt-10">
            <span className="text-white text-xl">
              The DevOps partner you need,
              <br /> with developer-friendly features,
              <br /> and scalability you love.
            </span>
          </div>
        </div>
      </div>
      <div className="md:border border-solid bg-white rounded-lg w-[28rem] py-12 px-10">
        <div>
          <div className="">
            <span className="text-3xl font-bold">Join our private beta</span>
          </div>
          <div className="mt-6"></div>
          <Textfield
            label={"Full Name"}
            placeholder={"Text Field"}
            icon={<AiOutlineContacts />}
          ></Textfield>
          <div className="mt-3"></div>
          <Textfield
            label={"Company"}
            placeholder={"Text Field"}
            icon={<FaArrowRight />}
          ></Textfield>
          <div className="mt-3"></div>
          <Textfield
            label={"Email"}
            placeholder={"Text Field"}
            icon={<AiOutlineMail />}
          ></Textfield>
          <div className="mt-3"></div>
          <Textfield
            label={"Mobile"}
            placeholder={"Text Field"}
            icon={<FaPhone />}
          ></Textfield>
          <TextfieldButton label="Proceed" icon={<FaArrowRight />} />
        </div>
      </div>
    </div>
  );
};
