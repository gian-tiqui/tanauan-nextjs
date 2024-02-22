"use client";

import SquareUpdates from "./SquareUpdates";

export interface Updates {
  val: number;
  title: string;
  unit: string | undefined;
}

const StatusUpdates = () => {
  const updates: Updates[] = [
    {
      title: "Registered Business",
      val: 3667,
      unit: undefined,
    },
    {
      title: "Household",
      val: 60000,
      unit: undefined,
    },
    {
      title: "Population",
      val: 193936,
      unit: undefined,
    },
    {
      title: "Land Area",
      val: 10987.43,
      unit: "Hectares",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-5 mt-10 text-center sm:mt-20 sm:pt-7 md:mt-32 md:pt-10 pb-7 sm:pb-10 md:pb-20 bg-slate-950">
      <p className="text-lg font-bold text-white sm:text-xl md:text-2xl">
        Status Updates as of 2023
      </p>
      <div className="flex flex-wrap mt-16 text-white sm:flex-wrap">
        {updates.map((update, index) => (
          <SquareUpdates {...update} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StatusUpdates;
