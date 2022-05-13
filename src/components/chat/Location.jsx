import React from "react";

export default function Location({ item }) {
  return (
    <div className="border-blue border-2 mx-1 w-36">
      <a href={item.website} target="_blank">
        <p className="h-24">
          <img className="h-full w-full object-cover" src={item.image} alt="" />
        </p>
        <div className="p-1">
          <p className="text-xs font-semibold">{item.name}</p>
          {/* <p>{item.address}</p> */}
          {/* <p>{item.time}</p> */}
          {/* <p>{item.phoneNumber}</p> */}
        </div>
      </a>
    </div>
  );
}
