import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getMovieById } from "../MoviesAPI";
import "./Content.css";
import SearchBar from "../components/SearchBar";
import MoveUpButton from "../components/MoveUpButton";

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  imdbRating?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  BoxOffice?: string;
};

type ContentProps = {
  movies: Movie[];
  favourites: Movie[];
  activeTab: "search" | "favourites";
  darkMode: boolean;
  searchInput: string;
  setSearchInput: (v: string) => void;
  handleSearch: (query: string, type: "title" | "year") => void;
  handleAddFavourite: (movie: Movie) => void;
  handleRemoveFavourite: (imdbID: string) => void;
  setActiveTab: (tab: "search" | "favourites") => void;
  Genres: string[];
};

const Content: React.FC<ContentProps> = ({
  movies,
  favourites,
  activeTab,
  darkMode,
  searchInput,
  setSearchInput,
  handleSearch,
  handleAddFavourite,
  handleRemoveFavourite,
  setActiveTab,
  Genres,
}) => {
  const [modalMovie, setModalMovie] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCardClick = async (movie: { imdbID: string }) => {
    const fullDetails = await getMovieById(movie.imdbID);
    setModalMovie(fullDetails);
  };

  const handleSearchWithLoading = async (query: string) => {
    setLoading(true);
    await handleSearch(query, "title");
    setLoading(false);
  };

  return (
    <div
      className="mx-auto w-100"
      style={{
        maxWidth: 1280,
        background: darkMode ? "#181818" : "#fff",
        overflow: "hidden",
      }}
    >
      <div
        className="px-4 pb-4"
        style={{ background: darkMode ? "#181818" : "#fff" }}
      >
        <header
          className="text-center mb-4 mt-5 mb-5"
          style={{ background: darkMode ? "#181818" : "#fff" }}
        >
          <h1 className="fw-bold">🎬 Watmuvi Finder</h1>
          <p className={darkMode ? "text-light" : "text-muted"}>
            Discover your favorite movies, explore genres, and find new
            releases.
          </p>
        </header>
        <div className="mb-4 text-center">
          {Genres.map((genre) => (
            <button
              key={genre}
              className={`btn mx-1 mb-2 ${
                darkMode ? "btn-outline-light" : "btn-outline-dark"
              }`}
              onClick={() => handleSearch(genre, "title")}
            >
              {genre}
            </button>
          ))}
        </div>
        <div className="mb-5"></div>
        <ul
          className="nav nav-tabs mb-3 justify-content-center"
          style={{ background: darkMode ? "#181818" : "#fff" }}
        >
          <li className="nav-item">
            <button
              className={
                `nav-link px-4` +
                (activeTab === "search"
                  ? darkMode
                    ? " fw-bold border-0 border-top border-start border-end border-3 rounded-top"
                    : " fw-bold border-0 border-top border-start border-end border-3 rounded-top active-light"
                  : " border-0") +
                (darkMode ? " text-light" : " text-dark")
              }
              style={{
                fontWeight: activeTab === "search" ? "bold" : undefined,
                background:
                  activeTab === "search" && !darkMode
                    ? "#f8f9fa"
                    : darkMode
                    ? "#181818"
                    : undefined,
                borderColor: darkMode ? "#444" : "#dee2e6",
                borderBottomColor:
                  activeTab === "search" && !darkMode ? "#fff" : undefined,
              }}
              onClick={() => setActiveTab("search")}
            >
              Search
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                `nav-link px-4` +
                (activeTab === "favourites"
                  ? darkMode
                    ? " fw-bold border-0 border-top border-start border-end border-3 rounded-top"
                    : " fw-bold border-0 border-top border-start border-end border-3 rounded-top active-light"
                  : " border-0") +
                (darkMode ? " text-light" : " text-dark")
              }
              style={{
                fontWeight: activeTab === "favourites" ? "bold" : undefined,
                background:
                  activeTab === "favourites" && !darkMode
                    ? "#f8f9fa"
                    : darkMode
                    ? "#181818"
                    : undefined,
                borderColor: darkMode ? "#444" : "#dee2e6",
                borderBottomColor:
                  activeTab === "favourites" && !darkMode ? "#fff" : undefined,
              }}
              onClick={() => setActiveTab("favourites")}
            >
              Favourites
            </button>
          </li>
        </ul>
        <div
          className="tab-content"
          style={{ background: darkMode ? "#181818" : "#fff" }}
        >
          <div
            className={`tab-pane fade ${
              activeTab === "search" ? "show active" : ""
            }`}
            style={{
              borderBottom: "none",
              background: darkMode ? "#181818" : "#fff",
            }}
          >
            <div className="mt-4"></div>
            <SearchBar
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              onSearch={handleSearchWithLoading}
              darkMode={darkMode}
            />
            <main>
              {loading ? (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: 200 }}
                >
                  <div
                    className="spinner-border"
                    role="status"
                    style={{
                      width: 48,
                      height: 48,
                      color: darkMode ? "#fff" : "#222",
                    }}
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="row justify-content-center">
                  {movies.map((movie) => {
                    const isFavourite = favourites.some(
                      (fav) => fav.imdbID === movie.imdbID
                    );
                    return (
                      <div
                        className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                        key={movie.imdbID}
                      >
                        <div
                          className="movie-card-zoom w-100"
                          onClick={() => handleCardClick(movie)}
                          style={{ cursor: "pointer" }}
                        >
                          <MovieCard
                            movie={{
                              title: movie.Title,
                              year: movie.Year,
                              poster: movie.Poster,
                              rating: movie.imdbRating,
                            }}
                            darkMode={darkMode}
                            action={
                              isFavourite ? (
                                <button
                                  className="btn btn-sm btn-secondary w-100"
                                  disabled
                                >
                                  Added to Favourites
                                </button>
                              ) : (
                                <button
                                  className="btn btn-sm btn-outline-success w-100"
                                  onClick={(e) => {
                                    e.stopPropagation(); // Prevents card click
                                    handleAddFavourite(movie);
                                  }}
                                >
                                  Add to Favourites
                                </button>
                              )
                            }
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "favourites" ? "show active" : ""
            }`}
            style={{
              borderBottom: "none",
              background: darkMode ? "#181818" : "#fff",
            }}
          >
            <div className="mt-4"></div>
            <main>
              <div className="row justify-content-center">
                {favourites.length === 0 ? (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                    <div
                      className={`card h-100 d-flex flex-column${
                        darkMode ? " bg-secondary text-light border-light" : ""
                      }`}
                      style={{ width: "18rem", minHeight: "28rem" }}
                    >
                      <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <span
                          role="img"
                          aria-label="star"
                          style={{ fontSize: "2rem" }}
                        >
                          ⭐
                        </span>
                        <h5 className="card-title mt-3 mb-2 text-center">
                          Add a favorite!
                        </h5>
                        <p
                          className={`card-text text-center${
                            darkMode ? " text-light" : " text-muted"
                          }`}
                        >
                          Your favorite movies will appear here.
                          <br />
                          Go to Search and add some!
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  favourites.map((movie) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center"
                      key={movie.imdbID}
                    >
                      <div
                        className="movie-card-zoom w-100"
                        onClick={() => handleCardClick(movie)}
                        style={{ cursor: "pointer" }}
                      >
                        <MovieCard
                          movie={{
                            title: movie.Title,
                            year: movie.Year,
                            poster: movie.Poster,
                            rating: movie.imdbRating,
                          }}
                          darkMode={darkMode}
                          action={
                            <button
                              className="btn btn-sm btn-outline-danger w-100"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevents card click
                                handleRemoveFavourite(movie.imdbID);
                              }}
                            >
                              Remove
                            </button>
                          }
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
      {modalMovie && (
        <MovieModal
          movie={modalMovie}
          darkMode={darkMode}
          onClose={() => setModalMovie(null)}
          isFavourite={!!favourites.find((f) => f.imdbID === modalMovie.imdbID)}
          onAddFavourite={handleAddFavourite}
          onRemoveFavourite={handleRemoveFavourite}
        />
      )}
      <MoveUpButton darkMode={darkMode} />
    </div>
  );
};

export default Content;
