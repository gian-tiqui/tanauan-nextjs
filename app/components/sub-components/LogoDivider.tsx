"use client";

import Image from "next/image";

const LogoDivider = () => {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="w-full h-0 my-auto ml-10 border border-blue-950"></div>
      <Image
        src="/logo.png"
        height={100}
        width={150}
        className="sm:h-14 md:h-20 h-14"
        alt="smth"
      />
      <div className="w-full h-0 my-auto mr-10 border border-blue-950"></div>
    </div>
  );
};

export default LogoDivider;
