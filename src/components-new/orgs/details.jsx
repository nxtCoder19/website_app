import { CardSection, FirstSection, GridCardSection } from "../atoms/about";
import { TiTick } from "react-icons/ti";
import { TiFolder } from "react-icons/ti";

export const Details = () => {
  return (
    <div>
      <FirstSection
        sno={"1"}
        title={"Simple"}
        desc={
          "KloudLite is a simple, developer-friendly console that helps you manage your DevOps tools and infrastructure."
        }
        img={"/images/Rectangle 53.svg"}
        icon={<TiTick />}
      />
      <hr />

      <FirstSection
        sno={"2"}
        title={"Cost effective"}
        desc={
          "KloudLite is a cost-effective, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        }
        img={"/images/Group 414.svg"}
        icon={<TiTick />}
      />
      <hr />

      <FirstSection
        sno={"3"}
        title={"cloud ignoistic"}
        desc={
          "KloudLite is a cloud agnostic, Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Suspendisse eu, accumsan proin ridiculus risus porttitor porttitor. Purus, blandit erat penatibus facilisis."
        }
        img={"/images/Group 405.svg"}
        icon={<TiTick />}
      />
      <hr />

      <div className="mt-12"></div>
      <CardSection
        icon={<TiFolder />}
        color={"bg-blue-500"}
        title={"DevOps will work smarter"}
        desc={"Management console, CI & CD will save time & effort for DevOps"}
      />

      <CardSection
        icon={<TiFolder />}
        color={"bg-teal-600"}
        title={"DevOps will work smarter"}
        desc={"Management console, CI & CD will save time & effort for DevOps"}
      />

      <CardSection
        icon={<TiFolder />}
        color={"bg-sky-500"}
        title={"DevOps will work smarter"}
        desc={"Management console, CI & CD will save time & effort for DevOps"}
      />

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
    </div>
  );
};
