import React from "react";
import Brand from "./brand";
import { imgs } from "../assets/icons";
const brandsData = [
  {
    id: "1",
    borderColor: "before:bg-brands-facebook",
    username: "@Muhammed",
    brandAlt: "facebook icon image",
    brand: imgs.facebook,
    arrow: imgs.UP,
    followers: 1987,
    newFollowers: 12,
  },
  {
    id: "2",
    borderColor: "before:bg-brands-twitter",
    username: "@sukaar",
    brandAlt: "twitter icon image",
    brand: imgs.twitter,
    arrow: imgs.UP,
    followers: 1044,
    newFollowers: 99,
  },
  {
    id: "3",
    borderColor:
      "before:bg-gradient-to-r before:from-brands-instaFrom before:to-brands-instaTo",
    username: "@sukaar",
    brand: imgs.instagram,
    arrow: imgs.UP,
    followers: "11k",
    newFollowers: 1099,
  },
  {
    id: "4",
    borderColor: "before:bg-brands-youtube",
    username: "Muhammed",
    brand: imgs.youtube,
    arrow: imgs.DOWN,
    followers: 8239,
    newFollowers: 144,
    downRate: true,
  },
];

const BrandsSection = () => {
  return (
    <section className="container mx-auto mb-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {brandsData.map((e) => {
        return <Brand key={e.id} {...e} />;
      })}
    </section>
  );
};

export default BrandsSection;
