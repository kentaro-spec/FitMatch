import React, { useEffect, useState } from "react";
import RadioButton from "../components/main/RadioButton";
import StartButton from "../components/main/StartButton";
import SelectSportButton from "../components/main/SelectSportButton";
import MainTitle from "../components/main/MainTitle";
import MainImages from "../components/main/MainImages";
import MainLocation from "../components/main/MainLocation";
import Navbar from "../utilities/Navbar";

export default function Main() {
  const d = new Date();
  const year = d.getFullYear().toString();
  const month = d.getMonth();
  const today = d.getDate();
  const tomorrow = d.getDate();
  const dayaftertomorrow = d.getDate();
  const a = {}
  console.log(year, month, today);
  // useEffect(() => {}, []);

  const [location, setLocation] = useState("");
  const [sport, setSport] = useState(1);
  const [date, setDate] = useState("");

  console.log(location, sport);
  return (
    <>
      <Navbar />
      <MainLocation setLocation={setLocation} />
      <MainImages />
      <MainTitle />
      <SelectSportButton setSport={setSport} />
      <RadioButton />
      <StartButton location={location} />
    </>
  );
}
