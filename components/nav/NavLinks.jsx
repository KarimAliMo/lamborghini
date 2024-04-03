import ModelsLinks from "@/components/nav/ModelsLinks";
import OwnershipLinks from "@/components/nav/OwnershipLinks";
import MotorsportLinks from "@/components/nav/MotorsportLinks";
import BeyondLink from "@/components/nav/BeyondLink";

// Here the Main links on the top left next to the logo
export default function NavLinks() {
  return (
    <div className=" hidden  lg:flex lg:flex-row lg:gap-6 lg:items-center ">
      <ModelsLinks />
      <BeyondLink />
      <OwnershipLinks />
      <MotorsportLinks />
    </div>
  );
}
