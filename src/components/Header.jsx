import React, { useEffect, useState } from "react";
const toggleState = !localStorage.dashboardTheme ? true : false;
const Header = () => {
  const [dark, setDark] = useState(toggleState);
  const handleTheme = () => {
    setDark((e) => {
      if (e) {
        // if toggle is going to be light set it in localstorage
        localStorage.setItem("dashboardTheme", "1");
      } else {
        localStorage.removeItem("dashboardTheme");
      }
      return !e;
    });
  };
  const toggleGradient = dark
    ? "dark:bg-gradient-to-r dark:from-siteTheme-toggleDarkFrom dark:to-siteTheme-toggleDarkTo"
    : "";
  useEffect(() => {
    if (localStorage.dashboardTheme) setDark(false);
    // console.log("HOWMANY");
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <header className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold transition-colors  dark:text-siteTheme-whiteTextDark">
          Social Media Dashboard
        </h1>
        <p className=" font-bold  text-siteTheme-grayishBlueTextWhite/60 transition-colors dark:text-siteTheme-blueTextDark">
          Total Followers: 23,004
        </p>
      </div>
      <div className="mb-4 flex items-center justify-between border-t-2 border-siteTheme-toggleWhite pt-8  transition-colors ">
        <strong className="text-siteTheme-grayishBlueTextWhite transition-colors dark:text-siteTheme-blueTextDark">
          Dark Mode
        </strong>
        <div
          onClick={handleTheme}
          className={`relative h-6 w-14 cursor-pointer rounded-full bg-siteTheme-toggleWhite ${toggleGradient} transition-all`}
        >
          <div
            className={`absolute ${
              dark ? "right-8" : "right-1"
            } dark:bg-siteTheme-toggleDark  top-1/2 h-5 w-5 -translate-y-1/2  rounded-full bg-siteTheme-bgWhite transition-all duration-300 dark:bg-siteTheme-bgDark`}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
