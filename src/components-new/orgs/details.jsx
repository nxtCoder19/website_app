import {
  CardSection,
  AboutSection,
  GridCardSection,
  AboutSecondSection,
} from "../atoms/about";
import { TiTick } from "react-icons/ti";
import { TiFolder } from "react-icons/ti";
import { Content } from "../atoms/content";
import { ContactButton } from "../atoms/button";

export const Details = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mt-28">
        <Content title={"KloudLite is an automated DevOps console."} />
      </div>

      <div className="mt-12">
        <AboutSection
          sno={"1"}
          title={"Simple"}
          desc={
            "KloudLite is a simple, developer-friendly console that helps you manage your DevOps tools and infrastructure."
          }
          img={"/images/Group 411.svg"}
          icon={<TiTick />}
        />
      </div>
      <div className="mt-14">
        <hr />
      </div>

      <div className="mt-14">
        <AboutSecondSection
          sno={"2"}
          title={"Cost effective"}
          desc={
            "KloudLite is a cost-effective, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          }
          img={"/images/Group 415ce.svg"}
          icon={<TiTick />}
        />
      </div>
      <div className="mt-14">
        <hr />
      </div>

      <div className="mt-12">
        <AboutSection
          sno={"3"}
          title={"cloud ignoistic"}
          desc={
            "KloudLite is a cloud agnostic, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu, accumsan proin ridiculus risus porttitor porttitor. Purus, blandit erat penatibus facilisis."
          }
          img={"/images/Group 405.svg"}
          icon={<TiTick />}
          //imgSize={"w-1/3"}
        />
      </div>

      <div className="mt-24"></div>
      <div className="md:flex">
        <CardSection
          icon={<TiFolder />}
          color={"bg-blue-500"}
          title={"DevOps will work smarter"}
          desc={
            "Management console, CI & CD will save time & effort for DevOps"
          }
        />

        <CardSection
          icon={<TiFolder />}
          color={"bg-teal-600"}
          title={"DevOps will work smarter"}
          desc={
            "Management console, CI & CD will save time & effort for DevOps"
          }
        />

        <CardSection
          icon={<TiFolder />}
          color={"bg-sky-500"}
          title={"DevOps will work smarter"}
          desc={
            "Management console, CI & CD will save time & effort for DevOps"
          }
        />
      </div>

      <div className="mt-24 flex">
        <div className="grid grid-cols-2 md:flex">
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 458.svg" alt=""></img>
          </div>
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 458.svg" alt=""></img>
          </div>
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 401.svg" alt=""></img>
          </div>
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 458(1).svg" alt=""></img>
          </div>
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 401(1).svg" alt=""></img>
          </div>
          <div className="hover:bg-gray-100 md:ml-10">
            <img src="/images/Frame 458(2).svg" alt=""></img>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center mt-28">
        <div className="text-center">
          <span className="text-5xl font-bold">
            Feel the Advantage of Cloud Native
          </span>
          <br />
          <div className="mt-4">
            <span className="text-lg text-gray-500">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse eu, accumsan proin ridiculus"
            </span>
            <br />
            <span className="text-lg text-gray-500">
              risus porttitor porttitor. Purus, blandit erat penatibus
              facilisis. Leo sagittis donec"
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12"></div>

      <div className="md:grid grid-cols-4 gap-8">
        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-blue-500"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Self Healing"}
          color={"bg-red-500"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-sky-500"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-blue-700"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-teal-500"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-sky-500"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-blue-700"}
        />

        <GridCardSection
          icon={<TiFolder />}
          title={"Auto Scaling"}
          color={"bg-teal-500"}
        />
      </div>

      <div className="mt-28">
        <div className="md:flex justify-center mt-28">
          <div className="text-center">
            <span className="text-5xl font-bold">
              Start building today and save <br /> hours from the process.
            </span>
            <br />
            <div className="mt-4">
              <span className="text-lg text-gray-500">
                "Gain access to our complete library of components. Unlimited
                combinations for you to <br /> build better products faster. New
                components and products added regularly"
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-24 mt-16">
          <div>
            <div>
              <img src="/images/Frame.svg" alt=""></img>
            </div>
            <div className="mt-20 flex justify-center">
              <img src="/images/Frame 521.svg" alt=""></img>
            </div>
          </div>
          <div>
            <div className="border border-solid bg-indigo-900 rounded-tr-3xl rounded-xl md:px-8 md:py-40">
              <button className="text-white bg-blue-600 px-5 py-3 rounded-full font-bold">
                1 CPU + 2GB Ram
              </button>
              <div className="mt-7 px-2">
                <span className="font-bold text-white text-4xl">$15</span>
              </div>
              <div className="px-2 mt-7">
                <span className="text-white">
                  A in a ipsum fusce faucibus. Ac <br /> augue pulvinar nullam
                  in non id. At.
                </span>
              </div>
            </div>
            <div className="mt-4">
              <img src="/images/Group 426.svg" alt=""></img>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="md:flex justify-center mt-28">
          <div className="text-center">
            <span className="text-5xl font-bold">Let’s Connect</span>
            <br />
            <div className="mt-4">
              <span className="text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse eu, accumsan proin ridiculus <br /> risus porttitor
                porttitor. Purus, blandit erat penatibus facilisis. Leo sagittis
                donec "
              </span>
            </div>
          </div>
        </div>

        {/* <Content
          title={"Let’s Connect"}
          color={"gray-500"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu, accumsan proin ridiculus risus porttitor porttitor. Purus, blandit erat penatibus facilisis. Leo sagittis donec "
          }
        /> */}

        <ContactButton icon={<TiFolder />} label={"+91 9901509003"} />
      </div>
    </div>
  );
};
