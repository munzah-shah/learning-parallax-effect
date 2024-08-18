import MainButton from "./Button";
import { navigationMenu } from "../utils/navigationMenu";

const HomeScreen = () => {
  return (
    <div className="home-screen-container">
      <h1>Parallax Practice Web App</h1>
      <p>
        Welcome! This app contains a bunch of examples (with different
        difficulty levels) that I have used to learn parallax effects and
        transitions in React. This repo uses React Spring library for using
        parallax components.
        <br /> <br />
        To explore the projects, select from below or explore the main
        navigation menu, Cheers!
      </p>
      <div className="main-buttons-container">
        {navigationMenu.map((item, index) => (
          <MainButton name={item?.name} path={item?.path} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
