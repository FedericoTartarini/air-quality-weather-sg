import React from "react";
import MapPollution from "../Components/MapPollution";
import { Helmet } from "react-helmet";
import TableIndicesCategories from "../Components/TableIndicesCategories";
import Loader from "../Components/Loader";

function MapPollutionView({ data }) {
  let content = "";

  if (data.error) {
    content = (
      <div className="flex justify-center content-center">
        <p className="p-5">
          Sorry. data.gov.sg is under maintenance and we could not download the
          data to generate the plots. Please try again later.
        </p>
      </div>
    );
  }

  if (data.loading) {
    content = <Loader />;
  }

  if (data.data) {
    if (data.data.items.length !== 0) {
      content = (
        <div>
          <Helmet>
            <title>Map of pollutants in Singapore</title>
            <meta
              name="description"
              content="This page shows the main pollutants sub-indices and the PSI value across five locations in Singapore"
            />
          </Helmet>
          <MapPollution data={data} />
          <TableIndicesCategories index={"PSI value"} />
        </div>
      );
    } else {
      content = (
        <div className="flex justify-center content-center p-5">
          <p className="p-5">
            Sorry. data.gov.sg is under maintenance and we could not download
            the data to generate the plots. Please try again later.
          </p>
        </div>
      );
    }
  }

  return content;
}

export default MapPollutionView;
