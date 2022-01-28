import type { ReactNode } from "react";

export enum RoutePath {
  HOME = "/",
}

export interface AppWrapperProps {
  children: ReactNode;
}
