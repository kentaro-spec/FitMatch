import React from "react";
import RadioButton from "../components/main/RadioButton";
import StartButton from "../components/main/StartButton";
import SelectSportButton from "../components/main/SelectSportButton";
import MainTitle from "../components/main/MainTitle";
import MainImages from "../components/main/MainImages";
import MainLocation from "../components/main/MainLocation";
import Navbar from "../utilities/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
			<MainLocation />
      <MainImages />
      <MainTitle />
      <SelectSportButton />
			<RadioButton />
      <StartButton />
    </>
  );
}
