import React from "react";
const Brand = ({
  borderColor,
  brand,
  brandAlt,
  username,
  arrow,
  followers,
  newFollowers,
  downRate,
}) => {
  console.log(borderColor);
  const followersRateColor = downRate
    ? "text-primary-brightRed"
    : "text-primary-limeGreen";
  return (
    <article
      className={`relative flex flex-col items-center justify-center space-y-3 rounded before:absolute before:inset-0 before:block before:h-1 before:w-full ${borderColor} overflow-hidden bg-siteTheme-bgCardWhite p-6 transition-colors dark:bg-siteTheme-bgCardDark`}
    >
      <div className="flex items-center gap-2">
        <img src={brand} alt={brandAlt} />
        <span className="text-siteTheme-grayishBlueTextWhite transition-colors dark:text-siteTheme-blueTextDark">
          {username}
        </span>
      </div>
      <div className="text-center">
        <strong className="text-5xl transition-colors dark:text-siteTheme-whiteTextDark">
          {followers}
        </strong>
        <p className="uppercase tracking-[0.150rem] text-siteTheme-grayishBlueTextWhite transition-colors dark:text-siteTheme-blueTextDark">
          followers
        </p>
      </div>
      <div className="flex items-center gap-1 font-medium">
        <img src={arrow} alt="" />
        <span className={followersRateColor}>{newFollowers} Today</span>
      </div>
    </article>
  );
};

export default Brand;
