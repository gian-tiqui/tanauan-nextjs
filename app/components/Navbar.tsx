import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex my-auto">
            <Image src={""} width={50} height={30} alt={"Tanauan City"} />
            <h1 className="text-xl">TANAUAN</h1>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-10 text-yellow-900">
          <Link className="hover:underline" href={"/"}>
            HOME
          </Link>
          <Link className="hover:underline" href={"/city"}>
            THE CITY
          </Link>
          <Link className="hover:underline" href={"/tourism"}>
            TOURISM
          </Link>
          <Link className="hover:underline" href={"/careers"}>
            CAREERS
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <input
            className="h-8 w-44 pl-5 rounded border border-black"
            placeholder="search"
          />
        </div>
      </div>
      <div className="flex justify-center gap-20 py-1 bg-blue-700">
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
        <Link className="hover:underline" href={"/"}>
          Test
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
