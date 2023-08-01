import { Link } from "react-router-dom";

function LeftHeader() {
  return (
    <div className="container ">
      <ul className="flex">
        <li>
          <Link to={"/movie"}>Movies</Link>
        </li>
        <li>
          <Link to={"/tv"}>Tv Shows</Link>
        </li>
        <li>
          <Link>Pople</Link>
        </li>
        <li>
          <Link>More</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftHeader;
