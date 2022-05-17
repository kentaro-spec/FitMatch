import React from "react";

export default function MasterMessage() {
  return (
    <div className="flex items-center mt-4 flex-row-reverse">
      <p className="w-10 ml-3">
        <img src="/images/sheep.png" alt="" />
      </p>
      <p className="bg-blue rounded-xl text-white px-5 py-1">ゲームを始める</p>
    </div>
  );
}
