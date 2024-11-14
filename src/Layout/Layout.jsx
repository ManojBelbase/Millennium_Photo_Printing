import React, { useContext } from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import myContext from "../context/myContext";

const Layout = () => {
  const name = useContext(myContext);
  console.log(name);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-screen-xl">
        <Navbar />
        <div className="md:mx-20 mx-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
