"use client";

import { useContext, useRef } from "react";
import mayorImgPath from "../../../assets/tanauanmayor.png";
import Image from "next/image";

const MayorImage = () => {
  const imgRef = useRef(mayorImgPath);

  return (
    <div>
      {/* larger screens */}
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="relative flex justify-center md:relative md:left-32 md:bottom-20 md:w-72 lg:w-96">
          <Image
            src={imgRef.current}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80"
            alt="Mayor Image"
          />
        </div>
      </div>
      {/* mobile screens */}
      <div className="block sm:block md:hidden lg:hidden">
        <div className="relative flex justify-center top-20 mlx-auto md:relative md:left-40 md:bottom-44 md:w-72 lg:w-96">
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={imgRef.current}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80"
            alt="Mayor Image"
          />
        </div>
      </div>
    </div>
  );
};

export default MayorImage;
