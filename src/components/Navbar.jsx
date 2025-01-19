import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`px-12 py-8 fixed top-0 w-full h-26 z-[999]  ${isScrolled ? "bg-main" : "bg-[linear-gradient] backdrop-blur"}`}>
      <div className="flex px-3 items-center justify-between">
        <div className=" flex items-center gap-x-6 cursor-pointer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" className="h-10  mr-6" />
          <span className="text-xl">homepage</span>
          <span className="text-xl">series</span>
          <span className="text-xl">movies</span>
          <span className="text-xl normal-case">New and Popular </span>
          <span className="text-xl">My list </span>
        </div>
        <div className="flex items-center pr-14 gap-x-5">
          <Search sx={{ fontSize: "1.7rem" }} className="cursor-pointer" /> <span className="text-xl ">KID</span>
          <Notifications sx={{ fontSize: "1.7rem" }} className="cursor-pointer" />
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-10 h-10 rounded-lg object-cover cursor-pointer"
          />
          <div className="group">
            <ArrowDropDown className="cursor-pointer" />
            <div className="hidden group-hover:flex flex-col bg-main p-4 gap-y-2 rounded-lg absolute cursor-pointer ">
              <span className="text-xl ">settings</span>
              <span className="text-xl ">logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
