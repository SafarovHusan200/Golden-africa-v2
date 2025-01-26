import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <>
      <header className="py-9 absolute z-30 top-0 left-0 w-full">
        <div className="container">
          <Navbar />
        </div>
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer></footer>
    </>
  );
};

export default Layout;
