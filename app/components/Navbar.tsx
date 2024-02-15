import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between h-16 border">
        <div className="flex-1">
          <div className="flex my-auto">
            <Image src={""} className="h-10 w-10" alt={"Tanauan City"} />
            <h1 className="text-xl">TANAUAN</h1>
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-10 text-yellow-900">
          <Link className="hover:underline" href={"gian"}>
            HOME
          </Link>
          <Link className="hover:underline" href={"gian"}>
            THE CITY
          </Link>
          <Link className="hover:underline" href={"gian"}>
            TOURISM
          </Link>
          <Link className="hover:underline" href={"gian"}>
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
    </nav>
  );
};

export default Navbar;
