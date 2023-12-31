import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Movie() {
  const [state, setState] = useState({
    isFatched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "eb2d983194d05d9e6255fef268d85856",
        },
      })
      .then((res) => res)
      .then((data) => {
        setState({
          isFatched: true,
          data: data.data.results,
          error: false,
        });
      });
  }, []);
  // console.log(state.data.title[0]);

  return (
    <div className="container mx-auto ">
      <h1 className="py-7 text-xl font-semibold">Popular Movies</h1>
      <div className=" grid grid-cols-5  ">
        {state?.data?.map((movie) => (
          <Link to={`/singlemovie/${movie.id}`}>
            <div key={movie.id} className="w-[170px] ">
              <img
                className="w-36 rounded-lg"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt=""
              />
              <p className="mt-3">
                {movie.vote_average}
                <FontAwesomeIcon icon={faStar} style={{ color: "#e1d00e" }} />
              </p>
              <p className=" w-36 text-sm font-bold text-black">
                {movie.title}
              </p>
              <p className="text-slate-500">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Movie;
