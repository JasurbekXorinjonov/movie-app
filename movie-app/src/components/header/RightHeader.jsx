import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBell,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function RightHeader() {
  return (
    <div className=" flex items-center">
      <FontAwesomeIcon icon={faPlus} size="xl" style={{ color: "#ffff" }} />
      <button className="mx-8 border px-1 text-white">EN</button>
      <FontAwesomeIcon icon={faBell} style={{ color: "#ffff" }} />
      <FontAwesomeIcon
        className="mx-8"
        icon={faUser}
        style={{ color: "#ffff" }}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        style={{ color: "#174697" }}
        size="xl"
      />
    </div>
  );
}

export default RightHeader;
