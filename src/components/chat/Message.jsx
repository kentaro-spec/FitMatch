import React from "react";

export default function Message() {
  return (
    <div className="flex items-center mt-4">
      <p className="w-10 mr-3">
        <img src="/images/sheep.png" alt="" />
      </p>
      <p className="bg-blue rounded-xl text-white px-5 py-1">敗北を知りたい</p>
    </div>
  );
}
