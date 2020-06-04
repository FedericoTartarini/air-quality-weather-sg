import React from "react";

function TopImage(props) {
  return (
    <div className="container mx-auto flex px-5 py-24 items-center justify-center">
      <img
        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      ></img>
    </div>
  );
}

export default TopImage;
