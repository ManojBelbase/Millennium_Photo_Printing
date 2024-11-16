import React from "react";
import { MdArrowBack } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import CertificateData from "./CertificateData";
import Certificates from "./Certificates";
const CertificateContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="my-2 bg-secondary border-accent border p-4 shadow-md ">
      <div className="flex items-center justify-between mb-3">
        {/* Back button */}
        <button
          className="px-2 py-[6px] bg-secondary border border-accent rounded-sm inline-flex items-center gap-2 md:gap-3 shadow-md hover:shadow-accent"
          onClick={() => navigate("/")}
        >
          <MdArrowBack className="text-2xl" />
          <span>Back</span>
        </button>
      </div>
      <div>
        <h1 className="font-medium  text-xl mb-4">Choose Design</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {CertificateData.map((item, i) => (
          <Certificates key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CertificateContainer;
