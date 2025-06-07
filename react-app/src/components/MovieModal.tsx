import React from "react";

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

type MovieModalProps = {
  movie: Movie | null;
  darkMode: boolean;
  onClose: () => void;
  isFavourite: boolean;
  onAddFavourite: (movie: Movie) => void;
  onRemoveFavourite: (imdbID: string) => void;
};

const MovieModal: React.FC<MovieModalProps> = ({
  movie,
  darkMode,
  onClose,
  isFavourite,
  onAddFavourite,
  onRemoveFavourite,
}) => {
  if (!movie) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        background: "rgba(0,0,0,0.6)",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2000,
      }}
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        style={{ pointerEvents: "auto" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`modal-content${darkMode ? " bg-dark text-light" : ""}`}
          style={{ borderRadius: 16 }}
        >
          <div className="modal-body d-flex flex-row">
            <div className="me-4" style={{ minWidth: 200 }}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ width: 200, borderRadius: 8 }}
              />
            </div>
            <div>
              <h4>
                {movie.Title} ({movie.Year})
              </h4>
              <p>
                <strong>IMDB Rating:</strong> {movie.imdbRating || "N/A"}
              </p>
              <p>
                <strong>Genre:</strong> {movie.Genre || "N/A"}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director || "N/A"}
              </p>
              <p>
                <strong>Writer:</strong> {movie.Writer || "N/A"}
              </p>
              <p>
                <strong>Actors:</strong> {movie.Actors || "N/A"}
              </p>
              <p>
                <strong>Language:</strong> {movie.Language || "N/A"}
              </p>
              <p>
                <strong>Box Office:</strong> {movie.BoxOffice || "N/A"}
              </p>
              <p>
                <strong>Plot:</strong> {movie.Plot || "No description available."}
              </p>
              {isFavourite ? (
                <button
                  className="btn btn-danger mt-3"
                  onClick={() => onRemoveFavourite(movie.imdbID)}
                >
                  Remove from Favourites
                </button>
              ) : (
                <button
                  className="btn btn-success mt-3"
                  onClick={() => onAddFavourite(movie)}
                >
                  Add to Favourites
                </button>
              )}
              <button
                className="btn btn-secondary mt-3 ms-2"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;