import { Routes, Route } from "react-router-dom";
import { Home, Movie, SingleMovie, SingleTv, Tv } from "./pages";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/tv" element={<Tv />} />
        <Route exact path="/singlemovie/:id" element={<SingleMovie />} />
      </Routes>
    </>
  );
}

export default App;
