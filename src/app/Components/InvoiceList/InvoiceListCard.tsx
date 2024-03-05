import React from "react";
import PreviewList from "../Invoice/PreviewList";
import Image from "next/image";

const InvoiceListCard = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        
        <div className="border-2 mt-10  w-[100%] sm:w-[99%] lg:w-[50%] bg-[#FFFFFF] lg:shadow-xl m-auto px-2 pt-4 border-gray-300 rounded-xl">
          <div className="py-4 px-2">
            <Image
              src={"/assets/Skinclub.svg"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <div className="divider  py-2 flex justify-center items-center">
            <p className="mx-2 text-[.8rem] sm:text-[.9rem] text-[#4C4D4F] text-start">
              SUMMERY
            </p>
            <hr className="w-[1000px] border" />
          </div>

          <div className="px-2 pt-4 flex justify-between ">
            <p className=" text-[.9rem]"> Dr. Vihang </p>
            <p className=" pr-20 text-[.9rem]"> Jane Doe </p>
            <p> </p>
          </div>

          {/*  */}

          <div className="TableList">
            <PreviewList />
          </div>

          <div className=" border-black py-4 px-4 flex  justify-between">
            <div></div>

            <div className="grid  grid-cols-2 gap-4">
              <div className=" text-[.8rem]">
                <p className="text-end py-1 ">Subtotal:</p>
                <p className="text-end  text-[#777777] py-1">Tax (5%):</p>
                <p className="text-end  text-[#777777] py-1">Discount (10%):</p>
              </div>
              <div className="text-[.8rem] text-end">
                <p className="py-1 ">$540.00</p>
                <p className="py-1  text-[#777777]">$00.00</p>
                <p className="py-1  text-[#777777]">$00.00</p>
              </div>
            </div>
          </div>

          <div className="border-t-2  py-2 " />

          <div className="pb-2 border-black px-4 flex  justify-between">
            <div></div>
            <div className="grid  grid-cols-2 gap-10">
              <div className="text-start text-[.8rem]">
                <p className="py-1 ">total</p>
              </div>
              <div className="text-[.8rem] text-end">
                <p className="py-1 ">$540.00</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 mb-5 bg-[#F8F8F8]">
            <h2 className="text-[.8rem] "> Notes/Terms </h2>
            <p className="text-[.6rem] text-[#777777]">
              Lorem ipsum dolor sit amet. Sit eaque assumenda qui.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default InvoiceListCard;
