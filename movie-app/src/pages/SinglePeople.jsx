import axios from "axios";
import { useEffect, useState } from "react";

function SinglePeople() {
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

  // const know = {"state.data.known_for"}
  // https://www.themoviedb.org/t/p/w300_and_h450_bestv2/a1T5Smn7sCEtV8NHvTa5WaxgOML.jpg
  return (
    <div>
      {state?.data?.map((movie) => (
        <div key={movie.id} className="w-[170px] ">
          <img
            className="w-36 rounded-lg"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <h1>{movie.known_for.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default SinglePeople;
