import React, { useEffect, useState } from "react";
import LineChartPollutants from "../Components/LineChartPollutants";
import TableIndicesCategories from "../Components/TableIndicesCategories";
import { ClosestStation } from "../Functions/Utils";
import Loader from "../Components/Loader";
import DropDown from "../Components/DropDown";
import { Helmet } from "react-helmet";

function ChartsView({ data, locationUser }) {
  // todo also add temperature and relative humidity chart
  const [stationName, setStationName] = useState(false);

  useEffect(() => {
    if (locationUser.data && data.data) {
      setStationName(ClosestStation(data.data, locationUser.data).name);
    }
  }, [data.data, locationUser.data]);

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

  if (data.loading || locationUser.loading) {
    content = <Loader />;
  }

  if (locationUser.data && data.data) {
    if (data.data.items.length !== 0 && stationName) {
      content = (
        <div className="container mx-auto">
          <Helmet>
            <title>Historical pollution data</title>
            <meta
              name="description"
              content="This page shows you the concentrations, over the last 24 hours, of the major outdoor
      pollutants: Particulate matter (PM10 and PM2.5), Ozone (O3), Nitrogen Oxide (NOx), Sulfur Oxide (SOx) and Carbon
      Monoxide in Singapore."
            />
          </Helmet>
          <div className="flex justify-center content-center">
            <p className="py-2 mr-2">Pollution last 24-h. Station:</p>
            <DropDown
              selected={stationName}
              listItems={["north", "south", "central", "east", "west"]}
              setValue={setStationName}
            />
          </div>
          <LineChartPollutants
            data={data}
            pollutants={[
              "pm10_sub_index",
              "pm25_sub_index",
              "no2_one_hour_max",
            ]}
            stationName={stationName}
            footNote={[
              "* computed on 24-hour average Particulate Matter (PM) 10 reading (µg/m3)",
              "** computed on 24-hour average Particulate Matter (PM) 2.5 reading (µg/m3)",
            ]}
          />
          <LineChartPollutants
            data={data}
            pollutants={["o3_sub_index", "co_sub_index", "so2_sub_index"]}
            stationName={stationName}
            footNote={[
              "* computed based on 8-hour average Ozone reading (µg/m3)",
              "** computed on 8-hour average Carbon Monoxide (CO) reading(mg/m3)",
              "*** computed on 24-hour average Sulphur Dioxide (SO2) reading (µg/m3)",
            ]}
          />
          <TableIndicesCategories index={"Sub-Index value"} />
        </div>
      );
    } else {
      content = (
        <div className="flex justify-center content-center">
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

export default ChartsView;
