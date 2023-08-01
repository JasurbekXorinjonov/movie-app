import { Route, Routes, Router } from "react-router-dom";
import { Home, Movie, SingleMovie, SingleTv, Tv } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />/
      <Route exact path="/movie" element={<Movie />} />/
      <Route exact path="/tv" element={<Tv />} />/
      <Route exact path="/movie/:id" element={<SingleMovie />} />/
      <Route exact path="/tv/:id" element={<SingleTv />} />/
    </Routes>
  );
}

export default App;
