import { CardSection, AboutSection, GridCardSection } from "../atoms/about";
import { TiTick } from "react-icons/ti";
import { TiFolder } from "react-icons/ti";
import { Content } from "../atoms/content";
import { ContactButton } from "../atoms/button";

export const Details = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-20">
        <Content title={"KloudLite is an automated DevOps console."} />
      </div>

      <div className="flex justify-center">
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
      <hr />

      <div className="flex justify-center">
        <AboutSection
          sno={"2"}
          title={"Cost effective"}
          desc={
            "KloudLite is a cost-effective, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          }
          img={"/images/Group 416.svg"}
          icon={<TiTick />}
        />
      </div>
      <hr />

      <div className="flex justify-center">
        <AboutSection
          sno={"3"}
          title={"cloud ignoistic"}
          desc={
            "KloudLite is a cost-effective, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
          }
          img={"/images/Group 405.svg"}
          icon={<TiTick />}
        />
      </div>
      <hr />

      <div className="mt-12"></div>
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

      <div className="m-5 gap-1 mt-20 flex justify-center">
        <div className="grid grid-cols-2 md:flex">
          <img src="/images/Frame 458.svg" alt=""></img>
          <img src="/images/Frame 458.svg" alt=""></img>
          <img src="/images/Frame 401.svg" alt=""></img>
          <img src="/images/Frame 458(1).svg" alt=""></img>
          <img src="/images/Frame 401(1).svg" alt=""></img>
          <img src="/images/Frame 458(2).svg" alt=""></img>
        </div>
      </div>

      <div className="mt-20">
        <Content
          title={"Feel the Advantage of Cloud Native"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu, accumsan proin ridiculus risus porttitor porttitor. Purus, blandit erat penatibus facilisis. Leo sagittis donec "
          }
        />
      </div>

      <div className="mt-12"></div>

      <div className="md:grid grid-cols-4">
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

      <div className="mt-10">
        <Content
          title={"Let’s Connect"}
          color={"gray-500"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu, accumsan proin ridiculus risus porttitor porttitor. Purus, blandit erat penatibus facilisis. Leo sagittis donec "
          }
        />

        <ContactButton icon={<TiFolder />} label={"+91 9901509003"} />
      </div>
    </div>
  );
};
