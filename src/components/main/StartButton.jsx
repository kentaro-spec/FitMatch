import React from "react";

export default function StartButton({ gameStart }) {
  return (
    <div className="text-center m-10">
      <button
        onClick={gameStart}
        className="text-2xl bg-pink text-white px-6 py-3 font-semibold rounded-2xl shadow-lg"
      >
        スポーツを始める
      </button>
    </div>
  );
}
