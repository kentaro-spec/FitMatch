import React from "react";

export default function MemberListNav({ locked, users }) {
  const setIcon = (userId) => {
    const imageIndex = userId % 5;
    const iconImages = [
      "/images/azarashi.png",
      "/images/cow.png",
      "/images/kirin.png",
      "/images/monkey.png",
      "/images/tanuki.png",
    ];
    const fileName = iconImages[imageIndex];
    return fileName;
  };
  return (
    <div className="border-blue border-2 py-2 flex justify-between mb-5">
      <div className="flex flex-wrap w-72">
        {users.map((user, index) => {
          const iconUrl = setIcon(user.id);
          return (
            <p key={index} className="w-6 mx-2 mb-1">
              <img  src={iconUrl} alt="" />
            </p>
          );
        })}
      </div>
      {locked ? (
        <p className="font-bold text-blue mr-3 text-sm">開催準備中</p>
      ) : (
        <p className="font-bold text-blue mr-3 text-sm">開催決定</p>
      )}
    </div>
  );
}
