import React from "react";
import Head from "next/head";
import Image from "next/image";
export default function login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="px-20 ">
        <div className="flex w-full min-h-screen">
          <div className="space-y-5">
            <nav className="flex gap-20 py-5 items-center mb-20">
              <h1 className="font-bold text-lg text-rose-500">Quoters</h1>
              <a href="#" className="font-light text-sm text-gray-500">
                Registrasi
              </a>
            </nav>
            <div className="flex gap-2 ">
              <div className="py-2 px-7 rounded-full border-2 border-rose-500"></div>
              <div className="py-2 px-5 rounded-full border-2 border-rose-500"></div>
              <div className="py-2 px-3 rounded-full border-2 border-rose-500"></div>
            </div>
            <h3 className="text-sm uppercase text-gray-400 font-semibold">
              “JADILAH MUTIARA BAGI BANYAK ORANG”
            </h3>
            <h1 className="font-bold text-4xl">MASUK KE QUOTERS</h1>
            <h6 className="text-xs ">
              Belum punya akun?{" "}
              <span className="text-rose-400">Registrasi</span>
            </h6>
            <div className="w-10/12 space-y-5">
              <input
                className="bg-[#BEC9FF29] placeholder:text-sm py-3 px-2 rounded-[15px] w-full ring-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-300 "
                type="text"
                placeholder="Username"
              />
              <input
                className="bg-[#BEC9FF29] placeholder:text-sm py-3 px-2 rounded-[15px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white focus:shadow-md focus:shadow-blue-300"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
              <button className="py-2 px-10 rounded-full text-white text-sm float-right bg-red-500 shadow-lg shadow-red-200">
                Masuk
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -z-50 h-screen">
        <Image
          src={`/images/login.webp`}
          width={1000}
          height={1000}
          alt={`photo profile`}
          loading="lazy"
          className="object-cover h-screen  relative "
          quality={100}
        />
      </div>
    </>
  );
}
