import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
// import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-[#032541]">
        <div className="container mx-auto flex justify-between  p-4">
          <LeftHeader />
          <RightHeader />
        </div>
      </div>
    </>
  );
}

export default Header;
