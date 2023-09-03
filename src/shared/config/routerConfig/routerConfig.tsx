import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

export enum RoutePath {
  MAIN = "/",
  ABOUT = "/about",
}

export const routerConfig: RouteProps[] = [
  { path: RoutePath.MAIN, element: <MainPage /> },
  { path: RoutePath.ABOUT, element: <AboutPage /> },
];
