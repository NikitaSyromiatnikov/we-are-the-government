import { BrowserRouter as Router } from "react-router-dom";
import type { AppWrapperProps } from "../types";

const AppWrapper = ({ children }: AppWrapperProps) => {
  return <Router>{children}</Router>;
};

export default AppWrapper;
