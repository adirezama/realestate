import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import Barbar from "../components/navbar/barbar";
import SearchBar from "../components/searchbar/SearchBar";
import Content from "../components/content/Content";
import Sidebar from "../components/navbar/sidebar";
import Modal from "../components/Modal";

export default function AdminDashboard() {
  // Logic for navbar
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const handleButtonClick = () => {
    if (sidebarRef.current) {
      setIsOpen(!isOpen);
      if (isOpen) {
        sidebarRef.current.classList.remove("w-40");
        sidebarRef.current.classList.add("w-20");
      } else {
        sidebarRef.current.classList.remove("w-20");
        sidebarRef.current.classList.add("w-40");
      }
    }
  };
  //--------------------------------------------------------
  return (
    <div className="flex ">
      <Sidebar />
      <div className="mx-auto  md:my-5 md:mx-4 w-full ">
        <div className="flex flex-col mx-4 my-2 justify-between gap-5">
          <SearchBar />
          <div className="flex flex-col gap-y-5">
            <div className=" bg-gray-200 border border-gray-300 shadow rounded-md p-4 h-fit max-w-xs w-full ">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-gray-200 border border-gray-300 shadow rounded-md p-4 h-fit max-w-xs w-full ">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
