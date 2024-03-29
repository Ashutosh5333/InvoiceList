import { InvoiceList } from "@/app/context";
import Image from "next/image";
import React from "react";

export const TemplateElementlist = () => {
  return (
    <>
      <div className=" py-8 border-black grid grid-cols-2 gap-2">
        {InvoiceList.length > 0 &&
          InvoiceList.map((el, i) => {
            return (
              <div key={i} className="px-2">
                <div className="border-2 rounded py-2 sm:py-6  lg:py-2 px-4  lg:px-6 flex flex-col gap-0 border-[#babbbe]">
                  <Image
                    src={el.Image}
                    width={50}
                    height={50}
                    alt="logo"
                    className="m-auto"
                  />
                  <p className="text-center text-[#4C4D4F] text-sm">
                    {" "}
                    {el.title}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
