import React from "react";
import DashboardList from "./DashboardList";
import Preview from "../Invoice/Preview";
import Invoice from "../invoicecreate/Invoice";
import Tempaltes from "../Templates/Tempaltes";
import InvoiceList from "../InvoiceList/InvoiceList";
import TemplateElement from "../Templates/TemplateElement";

const DashboardCard = () => {
  return (
    <>
      <div className="px-4 flex justify-between  border-black">
        <div>
          <h1 className="text-3xl py-2"> Invoice </h1>
          <h2 className="text-lg py-2 text-[#4C4D4F]"> Invoice List </h2>
        </div>

        <div className="flex items-center">
          <button className="m-auto px-8 py-2 text-sm rounded-lg bg-black text-[#ffffff]">
            {" "}
            Add Discount{" "}
          </button>
        </div>
      </div>

      <div className="Main-DetailContainer   border-black flex flex-col lg:flex-row">
      
        <div className="Invoice py-2 px-1 border-green-500 w-[100%] sm:w-[90%] lg:w-[70%] m-auto  ">  
          <InvoiceList/>
        </div>

        {/* -----------------  invoice ----------- */}

        <div className="Invoiceprint m-auto mt-2 w-[100%]  sm:w-[90%] lg:w-[30%]  border-yellow-700">
          <TemplateElement/>
        </div>

      </div>
    </>
  );
};

export default DashboardCard;
