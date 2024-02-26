"use client";

import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

interface ComponentNavs {
  componentId: string;
  componentTitle: string;
}

interface RouteMaps {
  path: string;
  content: string;
}

const routeMapsTop: RouteMaps[] = [
  {
    path: "/",
    content: "HOME",
  },
  {
    path: "/city",
    content: "THE CITY",
  },
  {
    path: "/tourism",
    content: "TOURISM",
  },
  {
    path: "/careers",
    content: "CAREERS",
  },
];

const routeMapsBottom: RouteMaps[] = [
  {
    path: "/government",
    content: "Government",
  },
  {
    path: "city-transactions",
    content: "City Transactions",
  },
  {
    path: "business",
    content: "Business",
  },
  {
    path: "transparency-report",
    content: "Transparency Report",
  },
  {
    path: "news-events",
    content: "News & Events",
  },
  {
    path: "departments",
    content: "Departments",
  },
  {
    path: "online-services",
    content: "Online Services",
  },
];

const componentIds: ComponentNavs[] = [
  {
    componentId: "#news-carousel",
    componentTitle: "News",
  },
  {
    componentId: "#public-services",
    componentTitle: "Public Services",
  },
  {
    componentId: "#mobile-app",
    componentTitle: "Mobile Application",
  },
  {
    componentId: "#cgtv",
    componentTitle: "CGTV",
  },
  {
    componentId: "#status-updates",
    componentTitle: "Status Updates",
  },
  {
    componentId: "#city-highlights",
    componentTitle: "City Highlights",
  },
];

const Navbar = () => {
  const [searchTxt, setSearchTxt] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchClass, setSearchClass] = useState<boolean>(true);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTxt(e.target.value);
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarAnimation = useSpring({
    transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
  });

  const showSuggestions = () => {
    setShowSuggestion(!showSuggestion);
    setSearchClass(!searchClass);
  };

  const handleMoveTo = (componentId: string) => {
    window.location.href = componentId;
    setShowSuggestion(!showSuggestion);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestion(false);
        setSearchClass(true);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white">
      <div className="hidden sm:relative md:relative lg:relative sm:hidden md:block lg:block">
        <div className="flex justify-between py-2">
          <div className="flex">
            <Image
              className="mx-5 my-auto lg:text-lg hover:underline text-sm text-white"
              src="/logo.png"
              width={50}
              height={100}
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
              alt="Logo"
            />
            <h2 className="my-auto text-2xl">TANAUAN</h2>
          </div>
          <div className="flex justify-between">
            {routeMapsTop.map((routeMap, index) => (
              <Link
                key={index}
                href={routeMap.path}
                className="mx-5 my-auto lg:text-lg hover:underline text-sm text-white"
                style={{ color: "#786649" }}
              >
                {routeMap.content}
              </Link>
            ))}
          </div>
          <div className="pr-5 my-auto" ref={inputRef}>
            <input
              type="text"
              className={
                searchClass
                  ? "h-6 max-w-xs px-3 my-auto border rounded-md"
                  : "h-6 max-w-xs px-3 my-auto border rounded-t-md"
              }
              placeholder="Search..."
              style={{ borderColor: "#023F78" }}
              onChange={handleSearchTextChange}
              value={searchTxt}
              onClick={showSuggestions}
            />

            {showSuggestion && (
              <div className="absolute z-50 flex flex-col border border-black">
                {componentIds.map((obj, index) => (
                  <a
                    className="w-48 px-3 bg-white border-dark"
                    key={index}
                    onClick={() => handleMoveTo(obj.componentId)}
                  >
                    {obj.componentTitle}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div
          className="flex justify-center py-2"
          style={{ backgroundColor: "#023F78" }}
        >
          <div className="flex justify-between">
            {routeMapsBottom.map((routeMap, index) => (
              <Link
                key={index}
                href={routeMap.path}
                className="mx-5 my-auto text-white lg:text-lg hover:underline text-sm"
              >
                {routeMap.content}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* mobile screen */}

      <div className="block sm:block md:hidden lg:hidden">
        <div className="flex justify-between flex-1 py-2">
          <div className="flex items-center flex-1">
            <Image
              src="/logo.png"
              alt="Logo"
              className="w-16 h-13"
              width={100}
              height={100}
              onContextMenu={(e) => e.preventDefault()}
            />
            <h2 className="text-sm font-bold">TANAUAN</h2>
          </div>
          <div className="flex justify-center">
            <div className="container mx-auto my-auto">
              <input
                type="text"
                className="h-6 max-w-xs px-3 my-auto ml-8 border border-black rounded-md w-28"
                placeholder="Search..."
                onChange={handleSearchTextChange}
                value={searchTxt}
              />
            </div>
          </div>
          <div
            className="flex items-center justify-end flex-1"
            onClick={handleToggleSidebar}
          >
            <Image
              onClick={handleToggleSidebar}
              width={100}
              height={50}
              onContextMenu={(e) => e.preventDefault()}
              src="https://cdn-icons-png.flaticon.com/128/4254/4254068.png"
              className="w-10 h-8 px-2 py-1 mr-8 font-bold text-white border border-black rounded"
              alt="hi"
            />
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <animated.div
          className="fixed inset-y-0 left-0 z-50 w-36 bg-slate-900 md:hidden lg:hidden"
          style={sidebarAnimation}
        >
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center py-2 bg-white">
              <Image
                src="/logo.png"
                className="w-16 h-13"
                alt="Logo"
                width={100}
                height={50}
                onContextMenu={(e) => e.preventDefault()}
              />
              <h2 className="text-sm font-bold">TANAUAN</h2>
            </div>
            <div
              className="flex justify-end mt-3"
              onClick={handleToggleSidebar}
            >
              <p className="px-2 mr-4 font-bold text-white border rounded">x</p>
            </div>
            {routeMapsTop.map((routeMap, index) => (
              <Link
                key={index}
                href={routeMap.path}
                className="mx-5 my-auto lg:text-lg hover:underline text-sm text-white"
              >
                {routeMap.content}
              </Link>
            ))}
            <hr className="mx-3 my-2 bg-white" />
            {routeMapsBottom.map((routeMap, index) => (
              <Link
                key={index}
                href={routeMap.path}
                className="mx-5 my-auto lg:text-lg hover:underline text-white text-sm"
              >
                {routeMap.content}
              </Link>
            ))}
          </div>
        </animated.div>
      )}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 w-screen h-screen bg-black opacity-70"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
