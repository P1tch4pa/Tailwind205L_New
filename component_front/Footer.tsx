"use client";

import { Badge } from "@/components/tailgrids/core/badge";
import { Facebook, Twitter } from "@tailgrids/icons";
import Link from "next/link";

export default function Footer() {
  return (
    /* con */
    <>
      <div className=" flex justify-center mt-2 ">
        <Badge className="mt-5 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-medium  text-blue-600  ring-blue-100">
          68077310 นางสาวพิชชาภา สุวรรณะ
        </Badge>
      </div>
      {/* /* contacts */}
      <div className="mt-2">
        <div className="flex justify-center gap-6">
          <Link href="#">
            <Facebook className="text-blue-700" />
          </Link>

          <div className="border-l-2 border-gray-300"></div>
          <Link href="https://github.com/P1tch4pa" target="_blank" rel="noopener noreferrer">
            <Badge className="bg-transparent">
              <img src="github.svg" alt="logo" className="h-6 w-6" /> 
              
            </Badge>
          </Link>
        </div>

      </div>
    </>
  );
}
