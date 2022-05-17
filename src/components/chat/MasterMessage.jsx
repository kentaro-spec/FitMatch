import React, { useEffect } from "react";

export default function MasterMessage() {
  const [message, setMessage] = React.useState("6人集まるとチャットが開始されます。");
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    const text = [
      "上記の場所はあくまで提案です。よければ参考にしてください。",
      "人数が集まったら、場所・時間を決めてね。",
      "楽しんでください！",
    ];
    const timer = setTimeout(() => {
      if (counter === text.length) {
        return;
      }
      setMessage(text[counter]);
      setCounter(counter + 1);
    }, 2000);
    //クリーンアップ
    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return (
    <div className="flex items-center mt-4 flex-row-reverse">
      <div className="w-10 ml-3">
        <img src="/images/master.png" alt="" />
        <p className="mt-1 text-center text-xxs">運営</p>
      </div>
      <p className="bg-blue rounded-xl text-white px-5 py-1 w-80">{message}</p>
    </div>
  );
}
