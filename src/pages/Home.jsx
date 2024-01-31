import React from "react";
import ProfileImage from "../components/ProfileImage";
import ProfileHeading from "../components/ProfileHeading";
import Dummy from "../components/Dummy";
import Card from "../components/Card";
import SingleProduct from "../components/SingleProduct";

const Home = () => {
  return (
    <div className="flex flex-col gap-x-14">
      <ProfileImage />
      <ProfileHeading />
      <Dummy />
      <Card />
      <SingleProduct/>
    </div>
  );
};

export default Home;
