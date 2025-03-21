import React from "react";

export default function ServicesCTA() {
  return (
    <div className='w-full flex gap-16 flex-col py-16 items-center justify-center'>
      <h2 className='w-9/12 text-center text-6xl text-secondary-typo font-DM mb-2'>
        Find the Support You Deserve
      </h2>
      <button className='w-56 h-14 rounded-3xl bg-primary-green text-primary-purple text-xl font-semibold font-DM hover:text-white hover:bg-primary-purple'>
        Start Today
      </button>
    </div>
  );
}
