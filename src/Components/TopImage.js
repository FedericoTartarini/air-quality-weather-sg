import React from "react";
import goodDayImg from "../Static/Images/good-day.jpg";

function TopImage(props) {
  return (
    <div className="container mx-auto flex items-center justify-center shadow-lg">
      {/* todo change image as a function of the time of the day and pollution */}
      <img
        // className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        className="h-48 w-full rounded object-cover"
        alt="hero"
        src={goodDayImg}
      />
    </div>
  );
}

export default TopImage;