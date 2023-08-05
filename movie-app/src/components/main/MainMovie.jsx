import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import ButtonComponent from "./MainBtn";
import { Link } from "react-router-dom";

function MainMovie() {
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
  console.log(state.data);

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="flex items-center py-7">
        <h1 className="mr-5 text-2xl font-bold text-black">Trending</h1>
        <ButtonComponent />
      </div>
      <div className=" flex overflow-auto ">
        {state?.data?.map((movie) => (
          <Link to={`/singlemovie/${movie.id}`}>
            <div key={movie.id} className="w-[170px] shrink-0">
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

export default MainMovie;
