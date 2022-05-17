import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import RadioButton from "../components/main/RadioButton";
import StartButton from "../components/main/StartButton";
import SelectSportButton from "../components/main/SelectSportButton";
import MainTitle from "../components/main/MainTitle";
import MainImages from "../components/main/MainImages";
import MainLocation from "../components/main/MainLocation";
import Navbar from "../utilities/Navbar";
import axios from "axios";

export default function Main() {
  const navigate = useNavigate();
  // date: 日付オブジェクト
  // format: 書式フォーマット
  const formatDate = (date, format) => {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
    return format;
  };

  //本日
  const date = new Date();
  const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  const dayaftertomorrow = new Date(date.getTime() + 48 * 60 * 60 * 1000);

  const todayDate = formatDate(date, "yyyy-MM-dd");
  const tomorrowDate = formatDate(tomorrow, "yyyy-MM-dd");
  const dayaftertomorrowDate = formatDate(dayaftertomorrow, "yyyy-MM-dd");

  // console.log(formatDate(date, "yyyyMMdd")); // "20170102"
  // console.log(formatDate(date, "yyyyMMddHHmmssSSS")); // "20170102030405006"
  // console.log(formatDate(date, "yyyy/MM/dd")); // "2017/01/02"
  // console.log(formatDate(date, "yyyy-MM-dd")); // "2017-01-02"
  // console.log(formatDate(date, "HH:mm")); // "03:04"
  // console.log(formatDate(date, "HH:mm:ss:SSS")); // "03:04:05:006"

  const [location, setLocation] = useState("");
  const [sportId, setSportId] = useState(4);
  const [dateState, setDateState] = useState(todayDate);

  useEffect(() => {
    changeDate(dateState);
  }, [dateState]);

  const changeDate = (dateState) => {
    if (dateState === "today") {
      setDateState(todayDate);
    } else if (dateState === "tomorrow") {
      setDateState(tomorrowDate);
    } else if (dateState === "day-after-tomorrow") {
      setDateState(dayaftertomorrowDate);
    }
  };

  const queries = {
    userId: 4,
    sports: sportId,
    date: dateState,
    location: location,
  };

  const gameStart = () => {
    axios
      .get("https://sportskikkake.herokuapp.com/api/matching", {
        params: queries,
      })
      .then((res) => {
        const user = res.data.user;
        const userId = user.id;
        const roomId = res.data.room.id;
        // const locked = res.data.room.locked;
        navigate(`/chat/${roomId}`, { state: { userId } });
        // navigate(`/chat/${roomId}`);
      });
  };
  return (
    <>
      <Navbar />
      <MainLocation setLocation={setLocation} />
      <MainImages />
      <MainTitle />
      <SelectSportButton setSport={setSportId} />
      <RadioButton
        todayDate={todayDate}
        tomorrowDate={tomorrowDate}
        dayaftertomorrowDate={dayaftertomorrowDate}
        setDateState={setDateState}
      />
      <StartButton gameStart={gameStart} />
    </>
  );
}
