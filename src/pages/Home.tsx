import React from "react";
import ProfileImage from "../components/ProfileImage";
import ProfileHeading from "../components/ProfileHeading";
import InvoiceForm from "../components/InvoiceForm";

const Home = () => {
  return (
    <div className="flex flex-col gap-x-14">
      <ProfileImage image={""} />
      <ProfileHeading />
      {/* <Dummy />
      <Card />
      <SingleProduct/> */}
      <InvoiceForm />
    </div>
  );
};

export default Home;
