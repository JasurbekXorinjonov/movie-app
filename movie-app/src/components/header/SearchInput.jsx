import React, { useReducer } from "react";
import axios from "axios";

function searchReducer(state, action) {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, results: action.payload };
    case "SEARCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

function SearchPanel() {
  const [state, dispatch] = useReducer(searchReducer, {
    loading: false,
    results: [],
    error: null,
  });
  const { loading, results, error } = state;

  const handleSearchInputChange = (event) => {
    dispatch({ type: "SEARCH_REQUEST" });
    const searchText = event.target.value;
    axios
      .get(`https://api.themoviedb.org/3/movie/popular=${searchText}`)
      .then((response) =>
        dispatch({ type: "SEARCH_SUCCESS", payload: response.data }),
      )
      .catch((error) => dispatch({ type: "SEARCH_FAILURE", payload: error }));
  };

  return (
    <div>
      <input type="text" onChange={handleSearchInputChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {results.length > 0 && (
        <div>
          <p>Search Results:</p>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchPanel;
