import React from "react";

export default function MainLocation({setLocation}) {

  const eventHandler = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div className="flex justify-end mt-5 mb-5 mr-3">
      <div className="w-9 mr-3">
        <img src="/images/bx_map-pin.png" alt="" />
      </div>
      <div className="inline-block relative">
        <select onChange={eventHandler} className="text-blue block appearance-none w-full bg-gray-light border border-blue font-semibold hover:border-gray-500 px-4 py-2 pr-12 rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline">
          <option>現在地から選択</option>
          <option value="大阪市">大阪</option>
          <option value="東京都">東京</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <img className="h-6 w-6" src="/images/selecticon.png" alt="" />
        </div>
      </div>
    </div>
  );
}
