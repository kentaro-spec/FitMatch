import React from "react";
import Navbar from "../utilities/Navbar";
import SocialLoginButton from "../components/top/SocialLoginButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Top() {
  const navigate = useNavigate();
  const lineLogin = () => {
    navigate("/main");
    // axios
    //   .get("https://sportskikkake.herokuapp.com/api/line/redirect")
    //   .then((res) => {
    //     console.log(res);
    //     //userのレコードが返ってくる
    //     // if(user.chat_room_id === null){
    //     //   //mainページに飛ばす
    //     // }else{
    //     //   //そのidのチャットルームに飛ばす
    //     // }
    //   });
  };

  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto mt-5">
        <h1 className="text-center text-blue font-bold text-3xl mt-16 mb-3">
          FitMatch!
          {/* Round0 */}
        </h1>
        <p className="text-gray text-center font-semibold text-base mb-5">
          <span className="text-pink">すぐにスポーツ</span>
          をはじめたい人のためのサービス
        </p>
        <div className="mb-20">
          <p className="text-gray text-center">
            スポーツと都合のいい日付、場所を選ぶだけ
          </p>
          <p className="text-gray text-center">
            あなたが声掛けする必要はありません
          </p>
        </div>
        <p className="text-gray text-center mb-3">下記サービスよりログイン</p>
        <div className="mx-auto w-80">
          <SocialLoginButton color="bg-line-color" lineLogin={lineLogin}>
            LINEでログイン
          </SocialLoginButton>
          <SocialLoginButton color="bg-google-color">
            Googleでログイン
          </SocialLoginButton>
          <SocialLoginButton color="bg-mail-color">
            メールアドレスでログイン
          </SocialLoginButton>
        </div>
      </div>
    </>
  );
}
