import Image from "next/image";
import React from "react";
import { BsPrinter } from "react-icons/bs";
// import PreviewList from "./PreviewList";
import { FiEdit3 } from "react-icons/fi";
import PreviewList from "../Invoice/PreviewList";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TemplateElementlist } from "./TemplateElementlist";

const TemplateElement = () => {
  return (
    <>
      <div
        className="rounded-lg  bg-[#FFFFFF] 
      shadow-xl px-2 sm:px-8 lg:px-2 py-4 "
      >
        <div className="flex  pb-6 justify-between">
          <div className="flex items-center">
            <div className="p-1 px-2  rounded-lg flex items-center">
              Template Elements
            </div>
          </div>
       
        </div>

        <div className="border-2 px-2 pt-4 border-gray-300 rounded-xl">
          <div className=" px-2 lg:px-2 py-2 flex justify-between">
            <div className="flex items-center">
              <div className="bg-[#F8F8F8] p-2 px-2 rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="Search by patient name"
                  className="placeholder-gray-500 lg:pr-20 text-[.6rem] bg-transparent outline-none flex-1"
                />
                <div className="h-5 w-[.1rem] bg-gray-400 mx-2"></div>
                <CiSearch />
              </div>
            </div>
            <div className="flex  items-center">
              <button className=" text-[#4C4D4F] text-[.6rem] px-2  py-2 rounded-lg mr-2">
                <RxCross2 className="text-2xl" />
              </button>
            </div>
          </div>

          {/*  */}

          <div className="TableList">
            {/* <PreviewList /> */}
             <TemplateElementlist/>
          </div>
        </div>
         


        {/*  */}

        <div
          className=" py-10  lg:mt-[53%] flex
         gap-5  flex-col lg:flex-row items-center "
        >
          <button
            className="border-2 bg-[#FFFFFF] px-20 lg:px-12 rounded-full text-sm 
          text-[#000000] py-4 lg:py-2 text-center font-normal m-auto"
          >
            Save
          </button>
          <button
            className=" bg-black px-14  lg:px-6 rounded-full text-sm 
          text-[#ffffff] py-4 lg:py-2 text-center font-normal m-auto"
          >
            Save & Send
          </button>
        </div>
      </div>
    </>
  );
};

export default TemplateElement;
