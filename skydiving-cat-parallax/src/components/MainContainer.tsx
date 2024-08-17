import React from "react";

type MainContainerProps = {
  children: React.ReactElement;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className="main-container">{children}</div>;
};

export default MainContainer;
