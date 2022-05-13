import React from "react";
import Navbar from "../utilities/Navbar";
import SocialLoginButton from "../components/top/SocialLoginButton";

export default function Top() {
  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-blue font-bold text-3xl mt-16 mb-3">
          アプリ名
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
          <SocialLoginButton color="bg-line-color">LINEでログイン</SocialLoginButton>
          <SocialLoginButton color="bg-google-color">Googleでログイン</SocialLoginButton>
          <SocialLoginButton color="bg-mail-color">メールアドレスでログイン</SocialLoginButton>
        </div>
      </div>
    </>
  );
}
