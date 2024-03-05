import React from "react";
import InvoiceListCard from "./InvoiceListCard";

const InvoiceList = () => {
  return (
    <>
      <div className="rounded-lg  lg:bg-[#FFFFFF] lg:shadow-xl  py-2  border-yellow-500 ">
      
        <div className="Temple-heading px-2 lg:px-4 py-2  text-sm flex flex-col gap-5">
          <div>
            <p> Edit Invoice</p>
          </div>
          <div>
            <p className="text-[#4C4D4F]"> custom Invoice layout editing  </p>
          </div>
        </div>
        
        {/* ================ */}

        <div className="border-t-2 mt-5" />

        <div className="Templates">
            <InvoiceListCard/>
        </div>

        <div className=" lg:mt-[19.5%]" />
        {/*  */}
      </div>
    </>
  );
};

export default InvoiceList;
