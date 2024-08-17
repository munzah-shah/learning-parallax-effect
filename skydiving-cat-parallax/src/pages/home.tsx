import React from "react";
import MainContainer from "../components/MainContainer";
import HomeScreen from "../components/HomeScreen";

const Home: React.FC = () => {
  return <MainContainer children={<HomeScreen />}></MainContainer>;
};

export default Home;
