import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function StartButton({location}) {
	const navigate = useNavigate();

  const queries = {
    userId: 4,
    sports: 4,
    date: "2022-05-09",
    location: location,
  };
  const gameStart = () => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/matching", {
        params: queries,
      })
      .then((res) => {
				const user = res.data.user;
        const userId = user.id
				const roomId = res.data.room.id;
				// const locked = res.data.room.locked;
				navigate(`/chat/${roomId}`,{ state: { userId } });
				// navigate(`/chat/${roomId}`);
      });
  };
  return (
    <div className="text-center m-10">
      <button onClick={gameStart} className="text-2xl bg-pink text-white px-6 py-3 font-semibold rounded-2xl shadow-lg">
        スポーツを始める
      </button>
    </div>
  );
}
