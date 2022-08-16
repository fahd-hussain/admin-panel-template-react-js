import { FC } from "react";
import {
  IndexRouteProps,
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

type LayoutProps = PathRouteProps & LayoutRouteProps & IndexRouteProps;

const Layout: FC<LayoutProps> = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
