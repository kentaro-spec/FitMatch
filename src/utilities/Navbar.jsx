import React from "react";

export default function Navbar({roomName}) {
  return (
    <div className="bg-blue flex">
      <p className="text-white w-28 pl-1">
        <img src="/images/fitMatch.png" alt="" />
      </p>
      {roomName && <p className="text-white text-base self-center ml-3 font-semibold w-64">{roomName}</p>}
    </div>
  );
}
