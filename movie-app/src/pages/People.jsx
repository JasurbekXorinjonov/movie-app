import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function People() {
  const [state, setState] = useState({
    isFatched: false,
    data: [],
    error: false,
  });
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/person/popular", {
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
    <div className="container mx-auto ">
      <h1 className="py-7 text-xl font-semibold">Popular People</h1>
      <div className=" grid grid-cols-5  ">
        {state?.data?.map((movie) => (
          <Link to={`/singlepeople/${movie.id}`}>
            <div key={movie.id} className="w-[170px] ">
              <img
                className="w-36 rounded-lg"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.profile_path}`}
                alt=""
              />

              <p className=" w-36 text-sm font-bold text-black">{movie.name}</p>
              <p className="text-slate-500">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default People;
