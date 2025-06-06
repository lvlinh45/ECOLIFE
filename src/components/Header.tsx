import type { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full bg-white text-green-400 py-6 border-gray-400 border-b px-5">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="https://i.ibb.co/cc7Gf4hZ/logo-ecovip-b-n-ch-nh-t.png"
              alt="Logo"
              className="h-12"
            />
            <h1 className="text-3xl font-bold">ECO GUIDE</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center w-full sm:w-64">
              <input
                type="text"
                placeholder="Tìm chuyến đi tiếp theo..."
                className="px-4 py-2 rounded-lg border bg-white text-gray-800 w-full pr-10 border-green-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
