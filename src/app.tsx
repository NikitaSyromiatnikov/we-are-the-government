import React from "react";
import RootRouter from "./modules/navigation";
import AppWrapper from "./modules/navigation/components/app-wrapper";

const App = () => {
  return (
    <div className="App">
      <AppWrapper>
        <RootRouter />
      </AppWrapper>
    </div>
  );
};

export default App;
