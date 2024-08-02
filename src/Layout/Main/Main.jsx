import { Outlet } from "react-router-dom";
import Navber from "../../pages/Navbar/Navber";

const Main = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default Main;
