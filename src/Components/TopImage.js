import React from "react";
import goodDayImg from "../Static/Images/good-day.jpg";

function TopImage(props) {
  return (
    <div className="container mx-auto flex px-5 py-5 items-center justify-center">
      <img
        // className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        className="h-48 w-full rounded object-cover"
        alt="hero"
        src={goodDayImg}
      ></img>
    </div>
  );
}

export default TopImage;
