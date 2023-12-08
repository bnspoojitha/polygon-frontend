import React from "react";
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";


const TopNavbar = () => {


  return (
<div>

<div className="sticky top-0 z-30 flex h-20 w-full justify-center mb-4 bg-white shadow-lg shadow-[#f5f5f5]">
      <div className="w-full h-20 px-4 flex justify-between items-center text-sm">
        <div className="hidden md:block flex-1">
          <Link
            href="/deploymentConsole"
            className={`btn-navbar mx-6}`}
          >
            Deployment Console
          </Link>
        </div>
      </div>
      <Link
      to="/"
      className="mr-6"
      style={{marginTop: '10px'}}
      >
      <IoMdLogOut style={{ fontSize: '50px' }} />
      </Link>
    </div>
    </div>
  );
};
export default TopNavbar;