import React from "react";

const barangays: string[] = [
  "Altura Bata",
  "Altura Matanda",
  "Altura-South",
  "Ambulong",
  "Bañadero",
  "Bagbag",
  "Bagumbayan",
  "Balele",
  "Banjo East (Bungkalot)",
  "Banjo West (Banjo Laurel)",
  "Bilog-bilog",
  "Boot",
  "Cale",
  "Darasa",
  "Gonzales",
  "Hidalgo",
  "Janopol",
  "Janopol Oriental",
  "Laurel",
  "Luyos",
  "Mabini",
  "Malaking Pulo",
  "Maria Paz",
  "Maugat",
  "Montaña (Ik-ik)",
  "Natatas",
  "Pagaspas (Balokbalok)",
  "Pantay Matanda",
  "Pantay Bata",
  "Poblacion Barangay 1",
  "Poblacion Barangay 2",
  "Poblacion Barangay 3",
  "Poblacion Barangay 4",
  "Poblacion Barangay 5",
  "Poblacion Barangay 6",
  "Poblacion Barangay 7",
  "Sala",
  "Sambat",
  "San Jose",
  "Santol (Doña Jacoba Garcia)",
  "Santor",
  "Sulpoc",
  "Suplang",
  "Talaga",
  "Tinurik",
  "Trapiche",
  "Ulango",
  "Wawa",
];

const City = () => {
  return (
    <div className="flex flex-wrap gap-10 p-5">
      {barangays.map((barangay, index) => (
        <div
          className="h-32 w-52 border text-center pt-5 font-bold"
          key={index}
        >
          {barangay}
        </div>
      ))}
    </div>
  );
};

export default City;
