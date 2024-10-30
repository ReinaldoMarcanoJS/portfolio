import { CardPage } from "@/components/dashboard/card";
import { Navbar } from "@/components/navbar/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main className="main-container lg-w-3/4 min-h-[100vh] ">
      <Navbar />
      <div className="w-full h-screen">
        <div className="grid grid-cols-3 m-auto gap-1 p-1 justify-center items-center pt-12 bg-black/10 max-w-[1000px] h-5/6">
          <div className="h-full  shadow-inner grid grid-cols-subgrid rounded-2xl sombra-interior">
            <div className="h-40 w-full grid grid-cols-subgrid  rounded-2xl">
              {/* <p>hola</p> */}
            </div>
          </div>

          <div className="h-full shadow-inner grid col-span-2  sombra-interior rounded-2xl main ">
            <div className="h-40 w-full  rounded-2xl">{/* <p>hola</p> */}</div>
          </div>

          <div className="h-full shadow-inner grid col-span-2 sombra-interior rounded-2xl ">
            <div className="h-40 w-full  rounded-2xl">{/* <p>hola</p> */}</div>
          </div>
          <div className="h-full shadow-inner row-span-2  sombra-interior rounded-2xl ">
            <div className="h-full shadow-inner w-full  rounded-2xl ">
              {/* <p>hola</p> */}
            </div>
          </div>

          <div className="h-full shadow-inner sombra-interior rounded-2xl ">
            <div className="h-40 w-full  rounded-2xl">{/* <p>hola</p> */}</div>
          </div>

          <div className="h-full shadow-inner sombra-interior rounded-2xl ">
            <div className="h-40 w-full  rounded-2xl">{/* <p>hola</p> */}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
