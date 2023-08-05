import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleMovie() {
  const movie_id = useParams().id;
  const [state, setState] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
        params: { api_key: "eb2d983194d05d9e6255fef268d85856" },
      })
      .then((res) => {
        console/
        // setState(res.data);
      });
  }, {});
  return (
    <div className="container mx-auto ">
      <h1 className="py-7 text-xl font-semibold">Popular Movies</h1>
      <div className=" grid grid-cols-5  ">{state}</div>
    </div>
  );
}

export default SingleMovie;
