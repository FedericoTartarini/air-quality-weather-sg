import React from "react";
import MapPollution from "../Components/MapPollution";
import { Helmet } from "react-helmet";
import TableIndicesCategories from "../Components/TableIndicesCategories";

function MapPollutionView({ data }) {
  return (
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
}

export default MapPollutionView;
