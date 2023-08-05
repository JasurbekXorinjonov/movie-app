import { Link } from "react-router-dom";

function LeftHeader() {
  return (
    <div>
      <ul className="flex items-center font-semibold text-white">
        <Link to={"/"} className=" mr-2 text-2xl font-semibold text-blue-300">
          T M D B
        </Link>
        <div className="mr-5 mt-1 h-5 w-12 rounded-3xl bg-blue-400"></div>
        <li className="pr-5">
          <Link to={"/movie"}>Movies</Link>
        </li>
        <li className="pr-5">
          <Link to={"/tv"}>Tv Shows</Link>
        </li>
        <li className="pr-5">
          <Link>Pople</Link>
        </li>
        <li className="pr-5">
          <Link>More</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftHeader;
