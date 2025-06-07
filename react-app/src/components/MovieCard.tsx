type MovieCardProps = {
  movie: {
    title: string;
    year: string;
    poster: string;
    rating?: string;
  };
  darkMode?: boolean;
  action?: React.ReactNode;
};

function MovieCard({ movie, darkMode, action }: MovieCardProps) {
  return (
    <div
      className={`card h-100 d-flex flex-column${
        darkMode ? " bg-dark text-light border-light" : ""
      }`}
      style={{ width: "18rem", minHeight: "28rem" }}
    >
      {movie.poster && movie.poster !== "N/A" ? (
        <img
          src={movie.poster}
          className="card-img-top"
          alt={`${movie.title} poster`}
          style={{ height: "350px", objectFit: "cover" }}
        />
      ) : (
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
            className={`card-text text-center text-muted${
              darkMode ? " text-light" : ""
            }`}
          >
            Your favorite movies will appear here.
            <br />
            Go to Search and add some!
          </p>
        </div>
      )}
      <div className="card-body d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text mb-2">Year: {movie.year}</p>
          <span className="badge bg-warning text-dark">
            ⭐ {movie.rating ? movie.rating : "N/A"}
          </span>
        </div>
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
}

export default MovieCard;
