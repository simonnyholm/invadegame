import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="">
      <Navigation />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
