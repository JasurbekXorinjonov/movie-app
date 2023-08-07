import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleMovie() {
  const [movie, setMovie] = useState({
    loading: true,
  });
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
        params: { api_key: "eb2d983194d05d9e6255fef268d85856" },
      })
      .then((res) => {
        setMovie({ ...res.data, loading: false });
      });
  }, []);

  const movie_id = useParams().id;
  console.log(movie);
  const bgUrl = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
  };

  const bgImg = {
    backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1), calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 50%, rgba(31.5, 31.5, 52.5, 0.84) 100%)`,
  };

  // const runtime = {`movie.runtime`}
  // function taqqoslash(runtime) {
  //   let soatlar = Math.floor(runtime / 60)
  //   let minQoldi = runtime % 60

  //   return soatlar + "h:" + (minQoldi < 10 ? "0" : "") + minQoldi
  // }
  // const natija = taqqoslash(runtime)

  https: return (
    <div
      style={bgUrl}
      className="  mt-10 h-[500px] w-full bg-cover bg-no-repeat "
    >
      <div className="h-full w-full bg-gradient-to-tl" style={bgImg}>
        <div className="container z-auto mx-auto flex py-5">
          <img
            className=" w-96 rounded-lg"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt=""
          />
          <div className="ml-8 w-full py-14 text-white">
            <div className="flex items-center">
              <h2 className="mr-2 text-4xl font-semibold">{movie.title}</h2>
              <p className="text-4xl">
                ({new Date(movie.release_date).getFullYear()})
              </p>
            </div>
            <div className="flex items-center ">
              <p className="mr-1">{movie.release_date}.</p>
              {movie.genres?.map((genre) => (
                <span>{genre.name}, </span>
              ))}
              <span className="ml-1">{movie.runtime}.min</span>
            </div>
            <div>
              <h2 className="mt-3 flex h-12 w-12 items-center justify-center rounded-[50%] border ">
                {Math.floor(movie.vote_average * 10)}%{" "}
              </h2>
              <p className="py-3 opacity-70">{movie.tagline}</p>
              <h3 className="font-bold">Obzor</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
