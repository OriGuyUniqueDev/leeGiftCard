import React, { FunctionComponent } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FunctionComponent<MainContainerProps> = ({ children }) => {
  return (
    <main className="container h-screen w-screen flex flex-col justify-between items-center">
      {children}
    </main>
  );
};

export default MainContainer;
