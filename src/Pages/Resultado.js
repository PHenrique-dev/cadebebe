import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CartList } from "../Helpers/CatList";
import "../Styles/Catalogo.css"

const searchURL = "kkk";
const apiKey = "kkkk";
function Resultado() {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    };
    useEffect(() =>{
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
        getSearchMovies(searchWithQueryURL)
    }, [query])

    return(
        <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <CartList key={movie.id} movie={movie} />)}
      </div>
    </div>
    )
}

export default Resultado;