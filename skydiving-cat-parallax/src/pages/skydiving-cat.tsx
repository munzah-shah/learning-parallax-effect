import React from "react";
import MainContainer from "../components/MainContainer";
import SkyDivingCatScreen from "../components/SkyDivingCatScreen";

const SkyDivingCat: React.FC = () => {
  return <MainContainer children={<SkyDivingCatScreen />}></MainContainer>;
};

export default SkyDivingCat;
