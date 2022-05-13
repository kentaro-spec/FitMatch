import React, { useEffect, useState } from "react";
import Navbar from "../utilities/Navbar";
import Location from "../components/chat/Location";
import PostChatBar from "../components/chat/PostChatBar";
import Message from "../components/chat/Message";
import axios from "axios";

export default function Chat() {
  // console.log(data)
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/readStaticJson")
      .then((res) => {
        setLocation(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="border-blue border-2 py-2 flex justify-between mb-5">
        <p className="w-6 ml-2">
          <img src="/images/sheep.png" alt="" />
        </p>
        <p className="font-bold text-blue mr-3">開催準備中</p>
      </div>
      {/* 開催場所を取得する */}
      <div className="flex overflow-x-auto">
        {location.map((item, index) => {
          return <Location key={index} item={item} index={index} />;
        })}
      </div>
      <div className="mx-auto w-11/12 mt-5">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <PostChatBar />
    </div>
  );
}
