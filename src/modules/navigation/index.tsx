import { Route, Routes } from "react-router-dom";

import Home from "../home";

import { RoutePath } from "./types";

const RootRouter = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={Home} />
    </Routes>
  );
};

export default RootRouter;
