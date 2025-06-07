import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Content from "./pages/Content";
import About from "./pages/About";
import { searchMovies, getMovieById } from "./MoviesAPI";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating?: string;
};

const Genres = [
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Animation",
  "Adventure",
  "Thriller",
  "Fantasy",
];

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState<"search" | "favourites">("search");
  const [darkMode, setDarkMode] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (query: string) => {
    const data = await searchMovies(query);
    if (data.Search) {
      const detailedMovies = await Promise.all(
        data.Search.map(async (movie: Movie) => {
          const details = await getMovieById(movie.imdbID);
          return { ...movie, imdbRating: details.imdbRating };
        })
      );
      setMovies(detailedMovies);
    } else {
      setMovies([]);
    }
  };

  const handleAddFavourite = (movie: Movie) => {
    if (!favourites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavourites([...favourites, movie]);
    }
  };

  const handleRemoveFavourite = (imdbID: string) => {
    setFavourites(favourites.filter((fav) => fav.imdbID !== imdbID));
  };

  useEffect(() => {
    handleSearch("john");
  }, []);

  return (
    <Router>
      <div
        className={
          `container-fluid min-vh-100 py-4 d-flex flex-column align-items-center` +
          (darkMode ? " text-light" : " text-dark")
        }
        style={{ width: "100%", background: darkMode ? "#181818" : "#fff" }}
      >
        {/* NavBar */}
        <div
          className="sticky-top w-100"
          style={{
            background: darkMode ? "#181818" : "#fff",
            maxWidth: 1280,
            top: 0,
            zIndex: 1040,
          }}
        >
          <NavBar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode((d) => !d)}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Content
                movies={movies}
                favourites={favourites}
                activeTab={activeTab}
                darkMode={darkMode}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleSearch={handleSearch}
                handleAddFavourite={handleAddFavourite}
                handleRemoveFavourite={handleRemoveFavourite}
                setActiveTab={setActiveTab}
                Genres={Genres}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer
          className="text-center mt-5 pt-4 border-top w-100"
          style={{
            background: darkMode ? "#181818" : "#fff",
            color: darkMode ? "#aaa" : "#6c757d",
          }}
        >
          <p>Watmuvi: Movie Finder by teejkunedo &copy; 2025 </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
