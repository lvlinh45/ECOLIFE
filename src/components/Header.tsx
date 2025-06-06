import type { FC } from "react";
import { Outlet } from "react-router-dom";

const Header: FC = () => {
  return (
    <>
      <header className="w-full bg-white text-green-400 py-6 border-gray-400 border-b px-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://i.ibb.co/cc7Gf4hZ/logo-ecovip-b-n-ch-nh-t.png"
              alt="Logo"
              className="h-12"
            />
            <h1 className="text-3xl font-bold">ECO GUIDE</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Tìm chuyến đi tiếp theo của bạn"
              className="px-4 py-2 rounded-lg border bg-white text-gray-800 w-64"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
              Tìm kiếm
            </button>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
