import { useEffect, useState } from "react";

export function useGetClosestStation(props) {
  const [station, setStation] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    console.log("Getting closest stattion");
  }, [props]);
  return station;
}
