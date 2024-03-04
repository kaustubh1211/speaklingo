import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
export default function () {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  const IsActive = (path) => {
    const location = useLocation();
    return location.path == path;
  };
  return (
    <div className="navbar   ">
      <nav class="bg-gray-100 ">
        <div class="max-w-6xl mx-auto px-4">
          <div class="flex justify-between">
            <div class="flex space-x-4">
              <div>
                <a
                  href="#"
                  class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <svg
                    class="h-6 w-6 mr-1 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <Link to="/Home">
                    <span class="font-bold">SpeakLingo</span>
                  </Link>
                </a>
              </div>

              <div class="hidden md:flex items-center space-x-1">
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Features
                </a>
                <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Pricing
                </a>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="" class="py-5 px-3">
                Login
              </a>
              <a
                href=""
                class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            <div class="md:hidden flex items-center">
              <button class="mobile-menu-button">
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="mobile-menu hidden md:hidden">
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>

      <div className="flex h-screen     ">
        {isSidebarVisible && (
          <div className="w-28 md:w-64 bg-gray-100 border-r   ">
            <div className="p-4 border-b top-20">
              <a href=" " className="text-blue-500"></a>
            </div>
            <Link
              to="/English"
              className="text-blue-500"
              style={IsActive("/English") ? { color: "red" } : null}
            >
              <div className="p-4 border-b  hover:bg-slate-300"> Level 1</div>
            </Link>

            <Link
              to="/English/Elevel2"
              className="text-blue-500 "
              style={IsActive("/English/Elevel2") ? { color: "red" } : null}
            >
              <div className="p-4 border-b hover:bg-slate-300"> Level 2</div>
            </Link>
            <div className="p-4 border-b">
              <a href=" " className="text-blue-500 ">
                Level 3
              </a>
            </div>
            <div className="p-4 border-b">
              <a href=" " className="text-blue-500">
                Level 4
              </a>
            </div>
            <div className="p-4 border-b">
              <a href=" " className="text-blue-500">
                Level 5
              </a>
            </div>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="  p-4  left-1 bg-blue-500 text-white   "
        >
          {isSidebarVisible ? "<" : ">"}
        </button>
      </div>
    </div>
  );
}
