import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
     
     <nav class="fixed top-0 left-0 w-full z-50">
       <Navbar  />
</nav>
    

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;