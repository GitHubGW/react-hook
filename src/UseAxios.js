import { useState } from "react";
import axios from "axios";

const UseAxios = () => {
  const API_URL = "https://yts.mx/api/v2/list_movies.json";
  const [state, setState] = useState({
    movies: [],
    loading: true,
    error: null,
  });

  const handleApi = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(API_URL);
      setState({
        movies,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setState({
        loading: false,
        error: "Can't get Movie Data!",
      });
    }
  };

  return (
    <>
      <h2>✅ UseAxios</h2>
      <button onClick={handleApi}>🚀 Fetch</button>
      {state?.movies?.map((movie) => (
        <div key={movie?.id}>
          <img src={movie?.medium_cover_image} alt={movie?.title} />
          <h4>{movie?.title}</h4>
        </div>
      ))}
    </>
  );
};

export default UseAxios;
