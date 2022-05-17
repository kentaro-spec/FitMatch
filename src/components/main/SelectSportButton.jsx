import React from "react";

export default function SelectSportButton({setSport}) {

  const eventHandler = (e) => {
    setSport(e.target.value)
  }

  return (
    <div className="text-center m-8">
      <div className="inline-block relative">
        <select onChange={eventHandler} className="text-blue text-xl block appearance-none w-full bg-gray-light border-2 border-blue font-bold hover:border-gray-500 px-10 py-3 pr-16 rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="4">バスケットボール</option>
          <option value="5">サッカー</option>
          <option value="6">野球</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <img className="h-10 w-10" src="/images/selecticon.png" alt="" />
        </div>
      </div>
    </div>
  );
}
