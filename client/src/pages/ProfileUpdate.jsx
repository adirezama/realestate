import FormRegister from "../components/form/FormRegister";
import Sidebar from "../components/navbar/sidebar";

export default function ProfileUpdate() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="mx-auto md:my-8 md:mx-4 w-full ">
        <div className="">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
