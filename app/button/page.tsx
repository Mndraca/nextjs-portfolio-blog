"use client";

import React, { FC } from "react";

interface ButtonProps {
  handleClick: (event: React.FormEvent) => void;
}

const Button: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <>
      <button
        id="button"
        className="border border-transparent bg-gradient-to-br from-rose-300 via-rose-400 to-rose-300 text-black w-full  ml-16 sm:w-1/2 rounded-full shadow-2xl shadow-rose-700 transition h-8 hover:opacity-75 mt-8 font-bold"
        onClick={handleClick}
      >
        Submit
      </button>
    </>
  );
};

export default Button;
