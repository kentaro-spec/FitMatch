import React from "react";

export default function Message({ message, userId }) {
  const imageIndex =  Math.ceil(message.users_id / 10) % 6;
  // console.log(imageIndex)
  const iconImages = [
    "/images/sheep.png",
    "/images/azarashi.png",
    "/images/cow.png",
    "/images/kirin.png",
    "/images/monkey.png",
    "/images/tanuki.png",
  ];
  const fileName = iconImages[imageIndex];
  // console.log(fileName);
  const Chat = () => {
    if (userId === message.users_id) {
      return (
        <div className="flex items-center mt-4">
          <div className="w-10 mr-3 flex flex-col">
            <img src={fileName} alt="" />
            <p className="mt-1 text-center text-xxs">{message.user_name}</p>
          </div>
          <p className="w-80 bg-blue rounded-xl text-white px-5 py-1">
            {message.post}
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex items-center mt-4 flex-row-reverse">
          <div className="w-10 ml-3 flex flex-col">
            <img src={fileName} alt="icon" />
            <p className="mt-1 text-center text-xxs">{message.user_name}</p>
          </div>
          <p className="w-80 bg-gray-light rounded-xl text-black px-5 py-1 border-blue border-2">
            {message.post}
          </p>
        </div>
      );
    }
  };
  return (
    <Chat />
    // <div className="flex items-center mt-4">
    //   <p className="w-10 mr-3">
    //     <img src="/images/sheep.png" alt="" />
    //   </p>
    //   <p className="w-80 bg-blue rounded-xl text-white px-5 py-1">{message.post}</p>
    // </div>
  );
}
