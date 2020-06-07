import React from "react";
import Loader from "./Loader";
import { GetLatestReading } from "../Functions/Utils";

function MajorPollutants({ data }) {
  let content = null;

  if (data.error) {
    content = (
      <div>
        <div className="bg-blue-300 mb-2 p-3">
          If you see this error. Please remember to create your own{" "}
          <a href="https://mockapi.io/">mock API</a>.
        </div>
        <div className="bg-red-300 p-3">
          There was an error please refresh or try again later.
        </div>
      </div>
    );
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (data.data) {
    const lastReading = GetLatestReading("west", data.data);

    content = (
      <div>
        {/*<h1 className="text-2xl font-bold mb-3">*/}
        {/*  {data.}*/}
        {/*</h1>*/}
        {/*<div>*/}
        {/*  <img*/}
        {/*      src={product.data.images[0].imageUrl}*/}
        {/*      alt={product.data.name}*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="font-bold text-xl mb-3">*/}
        {/*  $ {product.data.price}*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  {product.data.description}*/}
        {/*</div>*/}
        {lastReading.co_eight_hour_max}
      </div>
    );
  }

  return <div className="container mx-auto">{content}</div>;
}

export default MajorPollutants;
