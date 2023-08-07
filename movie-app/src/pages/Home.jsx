import SearchHeader from "../components/header/SearchHeader";
import Header from "../components/header/header";
import MainMovie from "../components/main/MainMovie";
import Tv from "./Tv";

function Home() {
  return (
    <>
      <SearchHeader />
      <MainMovie />
      <Tv />
      {/* <Movie /> */}
    </>
  );
}

export default Home;
