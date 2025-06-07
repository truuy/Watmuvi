import React from "react";
import MoveUpButton from "../components/MoveUpButton";
import teejImg from "../assets/teej.png";
import "./About.css";

type AboutProps = {
  darkMode?: boolean;
};

const About: React.FC<AboutProps> = ({ darkMode }) => (
  <div className="container py-5" style={{ maxWidth: 700 }}>
    <div className="d-flex flex-column align-items-center mb-4">
      <div className="photo-wrapper">
        <img
          src={teejImg}
          alt="Troy Ulang"
          className="about-photo"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            background: "#eee",
          }}
        />
        <span className="so-handsome-text">so handsome</span>
      </div>
      <h2 className="fw-bold mb-2">Troy Ulang</h2>
      <p
        className={darkMode ? "" : "text-secondary"}
        style={{ color: darkMode ? "#ccc" : undefined, marginBottom: 0 }}
      >
        Full Stack Web Developer
      </p>
      <p
        className={darkMode ? "" : "text-secondary"}
        style={{ color: darkMode ? "#ccc" : undefined }}
      >
        Creator of Watmuvi Finder
      </p>
      <a
        href="https://www.linkedin.com/in/troy-ulang-75a292190"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary mb-3"
        style={{
          background: "#0a66c2",
          borderColor: "#0a66c2",
          color: "#fff",
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
          style={{ marginRight: 8, verticalAlign: "middle" }}
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248-.822 0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zm4.908 8.212h2.4V9.359c0-.215.016-.43.08-.584.176-.43.576-.877 1.248-.877.88 0 1.232.662 1.232 1.634v3.862h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.6 5.6 0 0 1 .016-.025V6.169h-2.4c.03.677 0 7.225 0 7.225z" />
        </svg>
        LinkedIn
      </a>
    </div>
    <div>
      <h4 className="fw-bold mb-3">About This Application</h4>
      <p>
        <strong>Watmuvi Finder</strong> is a modern web application that helps
        you discover, search, and manage your favorite movies. You can search
        for movies by title, browse by genre, and add movies to your personal
        favourites list for quick access.
      </p>
      <h5 className="fw-bold mt-4 mb-2">How the Application Works</h5>
      <ul>
        <li>
          <strong>Search:</strong> Enter a movie title in the search bar to find
          movies. Results are fetched live from the OMDb movie database.
        </li>
        <li>
          <strong>Genres:</strong> Click on any genre button to quickly filter
          movies by that genre.
        </li>
        <li>
          <strong>Favourites:</strong> Click the "Add to Favourites" button on
          any movie card or in the movie details modal to save it to your
          favourites list. You can remove movies from your favourites at any
          time.
        </li>
        <li>
          <strong>Movie Details:</strong> Click on a movie card to view detailed
          information, including poster, plot, cast, director, and more. You can
          also add or remove the movie from your favourites directly in the
          modal.
        </li>
        <li>
          <strong>Mobile Friendly:</strong> The site is fully responsive and
          works great on mobile devices.
        </li>
        <li>
          <strong>Move Up Button:</strong> When you scroll down, a button
          appears in the bottom right to quickly return to the top of the page.
        </li>
        <li>
          <strong>Dark/Light Mode:</strong> Easily switch between dark and light
          themes for comfortable viewing.
        </li>
      </ul>
      <h5 className="fw-bold mt-4 mb-2">Limitations</h5>
      <ul>
        <li>
          <strong>Genre Filtering:</strong> The genre buttons do not always
          filter movies as expected. This is due to limitations of the OMDb
          database, which does not support searching by genre directly. The
          genre filter works by searching the genre name as a title, so results
          may not always match the selected genre.
        </li>
        <li>
          <strong>Year Search:</strong> Searching by year alone is not supported
          by OMDb. You must search by title, and optionally filter by year.
        </li>
        <li>
          <strong>API Data:</strong> The application relies on the OMDb API, so
          the accuracy and completeness of movie data depends on the OMDb
          database.
        </li>
        <li>
          <strong>API Limits:</strong> The OMDb API may have request limits or
          require an API key for extended use.
        </li>
      </ul>
      <h5 className="fw-bold mt-4 mb-2">How the Code Works</h5>
      <ul>
        <li>
          <strong>React & TypeScript:</strong> The app is built using React for
          fast, interactive UI and TypeScript for type safety.
        </li>
        <li>
          <strong>Component-Based:</strong> The UI is split into reusable
          components like <code>MovieCard</code>, <code>MovieModal</code>,
          <code>SearchBar</code>, and <code>MoveUpButton</code>.
        </li>
        <li>
          <strong>API Integration:</strong> Movie data is fetched from the OMDb
          API. When you search or click a movie, the app fetches full details as
          needed.
        </li>
        <li>
          <strong>State Management:</strong> React’s <code>useState</code> and
          <code>useEffect</code> hooks manage UI state, loading, modals, and
          favourites.
        </li>
        <li>
          <strong>Transitions:</strong> Smooth transitions and modals are
          handled with CSS and React state.
        </li>
        <li>
          <strong>Mobile & Accessibility:</strong> Uses Bootstrap and custom CSS
          for responsive design and accessible navigation.
        </li>
      </ul>
      <p className="mt-4">
        If you have any questions or feedback, feel free to reach out!
      </p>
    </div>
    <MoveUpButton darkMode={darkMode} />
  </div>
);

export default About;
