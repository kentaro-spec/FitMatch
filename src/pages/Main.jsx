import React from "react";
import RadioButton from "../components/main/RadioButton";

export default function Main() {
  return (
    <>
      <div className="bg-blue mb-5">
        <p className="text-white text-2xl p-4">AppName</p>
      </div>
      <div className="flex justify-end mb-5 mr-3">
        <div className="w-9 mr-3">
          <img src="/images/bx_map-pin.png" alt="" />
        </div>
        <div className="inline-block relative">
          <select className="text-blue block appearance-none w-full bg-gray-light border border-blue font-semibold hover:border-gray-500 px-4 py-2 pr-12 rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>現在地から選択</option>
            <option>大阪</option>
            <option>東京</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img className="h-6 w-6" src="/images/selecticon.png" alt="" />
          </div>
        </div>
      </div>
      <div className=" w-11/12 mx-auto mb-5">
        <div className="flex">
          <div>
            <img src="/images/yoga.png" alt="yoga" />
          </div>
          <div>
            <img src="/images/basket.png" alt="basket" />
          </div>
        </div>
      </div>
      <div className=" w-4/5 mx-auto">
        <h1 className="font-bold text-xl text-gray text-center">
          <span className="text-pink font-bold text-2xl">すぐにスポーツ</span>
          をはじめたい人
        </h1>
        <p className="font-bold text-xl text-gray text-center">
          のためのサービス
        </p>
      </div>
      <div className="text-center m-8">
        <div className="inline-block relative">
          <select className="text-blue text-xl block appearance-none w-full bg-gray-light border-2 border-blue font-bold hover:border-gray-500 px-10 py-3 pr-16 rounded-3xl shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>バスケットボール</option>
            <option>サッカー</option>
            <option>野球</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <img className="h-10 w-10" src="/images/selecticon.png" alt="" />
          </div>
        </div>
      </div>
			<RadioButton />
      <div className="text-center">
        <button className="text-xl bg-pink text-white px-5 py-3 font-bold rounded-2xl shadow-lg">
          スポーツを始める
        </button>
      </div>
    </>
  );
}
