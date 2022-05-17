import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../utilities/Navbar";
import Location from "../components/chat/Location";
import PostChatBar from "../components/chat/PostChatBar";
import Message from "../components/chat/Message";
import MasterMessage from "../components/chat/MasterMessage";
import axios from "axios";
import MemberListNav from "../components/chat/MemberListNav";

export default function Chat() {
  // const { roomId } = useParams();
  const location = useLocation();
  const { userId } = location.state;
  //提供場所の提示
  const [localLocation, setLocalLocation] = useState([]);

  const [locked, setLocked] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const iconImages = [
    "/images/azarashi.png",
    "/images/cow.png",
    "/images/kirin.png",
    "/images/monkey.png",
    "/images/tanuki.png",
  ];

  console.log(users, posts);

  useEffect(() => {
    getMap();
    getData();
    // const interval = setInterval(() => {
    //   getData();
    // }, 5000);
    // return () => {
    //   // clean up
    //   clearInterval(interval);
    // };
  }, []);

  //開催場所を取得する関数
  const getMap = () => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/readStaticJson")
      .then((res) => {
        setLocalLocation(res.data);
      });
  };
  //chat_roomsのidを渡して、chat_roomsに紐づいた情報が返ってくる関数
  const getData = () => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/getchat", {
        params: { chat_rooms_id: 14 },
      })
      .then((res) => {
        const { data } = res;
        const locked = data.locked;
        const posts = data.post;
        const users = data.users;
        setLocked(locked);
        setUsers(users);
        setPosts(posts);
      });
  };
  //メッセージを送る関数
  const postMessage = (postContent) => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/postchat", {
        params: { userId: 14, post: postContent },
      })
      .then((res) => {
        console.log(res);
      });
  };
  const stub = {
    users: [
      {
        id: 1,
        name: "\u3057\u3070\u305f\u3042",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "U18ae2342ea3fa41e5chogehogessaswera",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 2,
        name: "\u3050\u306c\u3048\u3070",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "c928892d",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 3,
        name: "\u307e\u3053\u306a\u308b",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "ecee7cc3",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 4,
        name: "\u3071\u3048\u3048\u3044",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "bb908239",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 5,
        name: "\u3042\u3046\u3048\u3044",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "b6899a36",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 6,
        name: "\u3055\u304b\u304c\u307f",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "39c1fe28",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 7,
        name: "\u3055\u304b\u304c\u307f",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "39c1fe28",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 8,
        name: "\u3055\u304b\u304c\u307f",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "39c1fe28",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 9,
        name: "\u3055\u304b\u304c\u307f",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "39c1fe28",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
      {
        id: 10,
        name: "\u3055\u304b\u304c\u307f",
        location: null,
        sports: null,
        email: null,
        email_verified_at: null,
        password: null,
        line_user_id: "39c1fe28",
        remember_token: null,
        created_at: null,
        updated_at: null,
        chat_rooms_id: 14,
      },
    ],
    locked: 0,
    post: [
      {
        id: 4,
        users_id: 1,
        user_name: "ああああ",
        post: "\u30b9\u30dd\u30c3\u30c1\u30e3\u304c\u3044\u3044\u3068\u601d\u3046\u3002\u55b6\u696d\u6642\u9593\u304c\u9650\u5b9a\u3055\u308c\u3066\u3044\u308b\u5e02\u6c11\u4f53\u80b2\u9928\u3092\u9078\u3076\u4eba\u306e\u610f\u5473\u304c\u5206\u304b\u3089\u306a\u3044",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:18:33",
        updated_at: "2022-05-14 12:18:33",
      },
      {
        id: 14,
        users_id: 2,
        user_name: "いいいい",
        post: "\u3044\u3084\u3069\u3046\u8003\u3048\u3066\u3082\u5e02\u6c11\u4f53\u80b2\u9928\u306e\u307b\u3046\u304c\u30b3\u30b9\u30d1\u3044\u3044\u3060\u308d\u3001\u30de\u30b8\u3067\u982d\u308f\u308b\u3044\u306a",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:19:12",
        updated_at: "2022-05-14 12:19:12",
      },
      {
        id: 24,
        users_id: 3,
        user_name: "うううう",

        post: "\u982d\u60aa\u3044\u306e\u306f\u304a\u524d\u3060\u30ab\u30b9\u3000\u4e8c\u5ea6\u3068\u30b3\u30e1\u30f3\u30c8\u3059\u3093\u306a\u30ad\u30c3\u30ba",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:19:51",
        updated_at: "2022-05-14 12:19:51",
      },
      {
        id: 34,
        users_id: 4,
        user_name: "ええええ",

        post: "\u52e2\u3044\u3060\u3051\u3067\u7684\u3092\u5f97\u305f\u3053\u3068\u3072\u3068\u3064\u3082\u8a00\u3048\u3066\u306a\u304f\u3066\u8349",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:20:39",
        updated_at: "2022-05-14 12:20:39",
      },
      {
        id: 44,
        users_id: 5,
        user_name: "おおおお",

        post: "\u6b63\u3057\u304f\u306f\u7684\u3092\u300c\u5f97\u305f\u300d\u3058\u3083\u306a\u304f\u3066\u300c\u5c04\u305f\u306a\u3093\u3067\u3059\u304c\uff57\u300d\u3000\u65e5\u672c\u8a9e\u308f\u304b\u308a\u307e\u3059\u304b\uff1f\u5c0f\u5b66\u751f\u306b\u306f\u307e\u3060\u65e9\u3044\u3088\u306d\uff01\u3054\u3081\u3093\u3054\u3081\u3093\uff01",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:20:57",
        updated_at: "2022-05-14 12:20:57",
      },
      {
        id: 54,
        users_id: 1,
        user_name: "ああああ",

        post: "\u7684\u3092\u5f97\u308b\u3067\u3082\u3042\u3063\u3066\u308b\u3093\u3060\u304c\uff57\uff57\uff57\u3000\u5c0f\u5b66\u751f\u306f\u304a\u524d\u3060\u308d\uff1f",
        chat_rooms_id: 14,
        created_at: "2022-05-14 12:21:19",
        updated_at: "2022-05-14 12:21:19",
      },
    ],
  };
  return (
    <div>
      <Navbar />
      {/* users */}
      <MemberListNav locked={locked} users={users} /> 
      {/* 開催場所を表示するコンポーネント */}
      <div className="flex overflow-x-auto">
        {localLocation.map((item, index) => {
          return <Location key={index} item={item} index={index} />;
        })}
      </div>
      {/* ユーザーのコメントを表示するコンポーネント */}
      <div className="mx-auto w-11/12 mt-5">
        {locked ? (
          <MasterMessage />
        ) : (
          <div className="h-72 overflow-y-auto">
            {posts.map((post, index) => {
              return <Message key={index} message={post} userId={userId} />;
            })}
          </div>
        )}
      </div>
      <PostChatBar locked={locked} postMessage={postMessage} />
    </div>
  );
}
