import { CardPage } from "@/components/dashboard/card";
import { Navbar } from "@/components/navbar/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main className="min-h-[100vh] main-container ">
      <Navbar />

      <div className="grid grid-cols-3 gap-1 p-1 justify-center items-center pt-12 bg-black/10 ">
        <div className="h-full  shadow-inner grid grid-cols-subgrid rounded-2xl sombra-interior">
          <div className="h-40 w-full grid grid-cols-subgrid  rounded-2xl">
            {/* <p>hola</p> */}
          </div>
        </div>

        <div className="h-full shadow-inner grid col-span-2  sombra-interior rounded-2xl main ">
          <div className="h-40 w-full  rounded-2xl">
            {/* <p>hola</p> */}
          </div>
        </div>

        <div className="h-full shadow-inner grid col-span-2 sombra-interior rounded-2xl ">
          <div className="h-40 w-full  rounded-2xl">
            {/* <p>hola</p> */}
          </div>
        </div>
        <div className="h-full shadow-inner row-span-2  sombra-interior rounded-2xl ">
          <div className="h-full shadow-inner w-full  rounded-2xl ">
            {/* <p>hola</p> */}
          </div>
        </div>

        <div className="h-full shadow-inner sombra-interior rounded-2xl ">
          <div className="h-40 w-full  rounded-2xl">
            {/* <p>hola</p> */}
          </div>
        </div>

        <div className="h-full shadow-inner sombra-interior rounded-2xl ">
          <div className="h-40 w-full  rounded-2xl">
            {/* <p>hola</p> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
