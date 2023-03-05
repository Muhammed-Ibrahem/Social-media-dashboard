const Stats = ({
  brand,
  statType,
  actionsNum,
  followRate,
  arrow,
  downRate,
}) => {
  const rateColor = downRate
    ? "text-primary-brightRed"
    : "text-primary-limeGreen";
  return (
    <article className="space-y-5 rounded  bg-siteTheme-bgCardWhite p-4 transition-colors  dark:bg-siteTheme-bgCardDark">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-siteTheme-grayishBlueTextWhite transition-colors dark:text-siteTheme-blueTextDark">
          {statType}
        </h3>
        <img src={brand} alt="" />
      </div>
      <div className="flex items-center justify-between">
        <strong className="text-3xl transition-colors dark:text-siteTheme-whiteTextDark">
          {actionsNum}
        </strong>
        <span className="flex items-center gap-1 ">
          <img src={arrow} alt="" />
          <span className={`text-sm font-medium ${rateColor} `}>
            {followRate}%
          </span>
        </span>
      </div>
    </article>
  );
};

export default Stats;
