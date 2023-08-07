import axios from "axios";
import React, { useEffect, useState } from "react";

const useFatchedData = (url) => {
  const [data, setdata] = useState({
    isFatched: false,
    data: {},
    error: false,
  });

  useEffect(() => {
    axios
      .get(url, {
        params: {
          api_key: "eb2d983194d05d9e6255fef268d85856",
        },
      })
      .then((res) => {
        setdata({
          isFatched: true,
          data: res.data,
          error: false,
        });
      })
      .catch((err) => {
        setdata({
          isFatched: true,
          data: [],
          error: err,
        });
      });
  }, [url]);
  return data;
};

export default useFatchedData;
