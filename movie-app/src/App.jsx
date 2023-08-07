import { Routes, Route } from "react-router-dom";
import { Home, Movie, SingleMovie, SinglePeople, Tv } from "./pages";
import Header from "./components/header/header";
import People from "./pages/people";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/tv" element={<Tv />} />
        <Route exact path="/singlemovie/:id" element={<SingleMovie />} />
        <Route exact path="/people" element={<People />} />
        <Route exact path="singlepeople/:id" element={<SinglePeople />} />
      </Routes>
    </>
  );
}

export default App;
