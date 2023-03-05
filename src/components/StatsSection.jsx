import React from "react";
import Stats from "./stats";
import { imgs } from "../assets/icons";
const statsList = [
  {
    id: "1",
    brand: imgs.facebook,
    statType: "Page Views",
    actionsNum: 87,
    followRate: 3,
    arrow: imgs.UP,
  },
  {
    id: "2",
    brand: imgs.facebook,
    statType: "Page Views",
    actionsNum: 52,
    followRate: 2,
    arrow: imgs.DOWN,
    downRate: true,
  },
  {
    id: "3",
    brand: imgs.instagram,
    statType: "Likes",
    actionsNum: 5462,
    followRate: 2257,
    arrow: imgs.UP,
  },
  {
    id: "4",
    brand: imgs.instagram,
    statType: "Profile Views",
    actionsNum: "52k",
    followRate: 1375,
    arrow: imgs.UP,
  },
  {
    id: "5",
    brand: imgs.twitter,
    statType: "Retweets",
    actionsNum: 117,
    followRate: 303,
    arrow: imgs.UP,
  },
  {
    id: "6",
    brand: imgs.twitter,
    statType: "Likes",
    actionsNum: 507,
    followRate: 553,
    arrow: imgs.UP,
  },
  {
    id: "7",
    brand: imgs.youtube,
    statType: "Likes",
    actionsNum: 107,
    followRate: 19,
    arrow: imgs.DOWN,
    downRate: true,
  },
  {
    id: "8",
    brand: imgs.youtube,
    statType: "Total Views",
    actionsNum: 1407,
    followRate: 12,
    arrow: imgs.DOWN,
    downRate: true,
  },
];
const StatsSection = () => {
  return (
    <section className="container mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
      {statsList.map((e) => {
        return <Stats key={e.id} {...e} />;
      })}
    </section>
  );
};

export default StatsSection;
