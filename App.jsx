
import React, { useState } from "react";
import "./imovies-redesign.css";
import {
  Film,
  Search,
  Star,
  Ticket,
  Clock,
  X,
  CheckCircle,
  MapPin,
  CalendarDays,
  Armchair,
} from "lucide-react";

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    year: 2024,
    language: "English",
    rating: 8.8,
    duration: "2h 46m",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    description:
      "Paul Atreides joins Chani and the Fremen on a journey of revenge and destiny across Arrakis.",
  },
  {
    id: 2,
    title: "Interstellar",
    genre: "Drama",
    year: 2014,
    language: "English",
    rating: 8.7,
    duration: "2h 49m",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    description:
      "Explorers travel beyond this galaxy to discover a new home for humanity.",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "Horror",
    year: 2013,
    language: "English",
    rating: 7.5,
    duration: "1h 52m",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    description:
      "Paranormal investigators help a family experiencing disturbing events in their farmhouse.",
  },
  {
    id: 4,
    title: "The Batman",
    genre: "Action",
    year: 2022,
    language: "English",
    rating: 7.8,
    duration: "2h 56m",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description:
      "Batman investigates mysterious crimes throughout Gotham City.",
  },
  {
    id: 5,
    title: "Inside Out 2",
    genre: "Animation",
    year: 2024,
    language: "English",
    rating: 7.6,
    duration: "1h 36m",
    poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    description:
      "Riley enters her teenage years with a new set of emotions.",
  },
  {
    id: 6,
    title: "Top Gun: Maverick",
    genre: "Action",
    year: 2022,
    language: "English",
    rating: 8.2,
    duration: "2h 10m",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    description:
      "An experienced Navy pilot trains a new generation of elite aviators.",
  },
  {
    id: 8,
    title: "PK",
    genre: "Bollywood",
    year: 2014,
    language: "Hindi",
    rating: 8.1,
    duration: "2h 33m",
    poster: "https://image.tmdb.org/t/p/w500/z2x2Y4tncefsIU7h82gmUM5vnBJ.jpg",
    description:
      "An unusual stranger questions human beliefs in a humorous journey.",
  },
  {
    id: 9,
    title: "Lagaan",
    genre: "Bollywood",
    year: 2001,
    language: "Hindi",
    rating: 8.1,
    duration: "3h 44m",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXzitOJtpznooRBrxFfkSHSo5rjOH-8rTAPrpUiiuUy11F24fcNj9zXj8&s=10",
    description:
      "Villagers challenge British officers to a cricket match.",
  },
  {
    id: 11,
    title: "Drishyam:The Conclusion",
    genre: "Thriller",
    year: 2026,
    language: "Hindi",
    rating: 8.0,
    duration: "2h 40m",
    poster: "https://cdn.district.in/movies-assets/images/cinema/Drishyam-3-poster-647a0f50-37e7-11f1-840e-63804c65ce25.jpg",
    description:
      "Explore the next chapter in the Drishyam mystery. Release details should be verified before publishing.",
  },
  {
    id: 10,
    title: "Chhichhore",
    genre: "Bollywood",
    year: 2019,
    language: "Hindi",
    rating: 7.6,
    duration: "2h 26m",
    poster: "https://image.tmdb.org/t/p/w500/cGDPQtQ5igtPMt3oJ6BCAor6dFp.jpg",
    description:
      "College friends reflect on their student years, friendship, and success.",
  },
  
  {
    id: 12,
    title: "3 Idiots",
    genre: "Comedy",
    year: 2009,
    language: "Hindi",
    rating: 8.4,
    duration: "2h 50m",
    poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    description: "Three engineering students discover friendship, ambition, and the meaning of success."
  },
  {
    id: 13,
    title: "12th Fail",
    genre: "Drama",
    year: 2023,
    language: "Hindi",
    rating: 8.8,
    duration: "2h 27m",
    poster: "https://a.ltrbxd.com/resized/film-poster/1/0/4/9/2/0/6/1049206-12th-fail-0-600-0-900-crop.jpg?v=93f36b0cf3",
    description: "A young man overcomes obstacles while preparing for the civil services examination."
  },
  {
  id: 14,
  title: "Phir Hera Pheri",
  genre: "Comedy",
  year: 2006,
  language: "Hindi",
  rating: 7.2,
  duration: "2h 33m",
  poster: "https://m.media-amazon.com/images/S/pv-target-images/94e4e6e69edac08ca69ffce8a45d08464f8044f844433cebaeaf5cb9d3261937.jpg",
  description: "Raju, Shyam, and Baburao get caught up in another hilarious adventure involving money and mistaken decisions."
},
  {
    id: 15,
    title: "The Nun",
    genre: "Horror",
    year: 2018,
    language: "English",
    rating: 5.3,
    duration: "1h 36m",
    poster: "https://i.pinimg.com/736x/1c/3b/c3/1c3bc329279d7bf0341b9484d3d439a9.jpg",
    description: "A priest and a novice investigate mysterious events at a Romanian abbey."
  },
  {
    id: 16,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    language: "English",
    rating: 8.4,
    duration: "3h 1m",
    poster: "https://m.media-amazon.com/images/I/91-UCbbhoiL._AC_SY741_.jpg",
    description: "The Avengers attempt to reverse a devastating loss and save the universe."
  },
  {
    id: 17,
    title: "Titanic",
    genre: "Romance",
    year: 1997,
    language: "English",
    rating: 7.9,
    duration: "3h 14m",
    poster: "https://i.etsystatic.com/41716657/r/il/e7ba82/4791244285/il_fullxfull.4791244285_ozi8.jpg",
    description: "A romance unfolds aboard the Titanic during its ill-fated maiden voyage."
  },
  {
  id: 18,
  title: "Inception",
  genre: "Sci-Fi",
  year: 2010,
  language: "English",
  rating: 8.8,
  duration: "2h 28m",
  poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  description: "A skilled thief enters people's dreams to steal secrets and attempts an almost impossible mission."
},
{
  id: 19,
  title: "Chak De! India",
  genre: "Drama",
  year: 2007,
  language: "Hindi",
  rating: 8.1,
  duration: "2h 33m",
  poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Chak_De%21_India.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
  description: "A former hockey player coaches India's women's hockey team as they fight to prove themselves."
},

];

const showtimes = ["10:30 AM", "1:45 PM", "5:15 PM", "8:30 PM"];

const cinemas = [
  "PVR Treasure Island — South Tukoganj",
  "INOX C21 Mall — A.B. Road",
  "PVR INOX Phoenix Citadel — Indore",
  "INOX Nexus Indore Central — R.N.T. Marg",
];

const seatRows = Array.from({ length: 8 }, (_, rowIndex) => ({
  row: String.fromCharCode(65 + rowIndex),
  seats: Array.from(
    { length: 10 },
    (_, seatIndex) =>
      `${String.fromCharCode(65 + rowIndex)}${seatIndex + 1}`
  ),
}));

const unavailableSeats = [
  "A3", "A4", "B6", "B7", "C2", "C8",
  "D5", "E4", "F1", "F2", "G7", "H9",
];


function getSeatPrice(seat) {
  const row = seat.charAt(0);

  // Premium: back rows
  if (row === "G" || row === "H") return 300;

  // Gold: middle rows
  if (["D", "E", "F"].includes(row)) return 220;

  // Standard: front rows
  return 180;
}


function MoviePoster({ movie, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className={`poster-image-wrap ${className}`}>
      {!imageFailed ? (
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="poster-fallback">
          <Film size={34} />
          <span>{movie.title}</span>
          <small>IMOVIES</small>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [detailsMovie, setDetailsMovie] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [pendingMovie, setPendingMovie] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [selectedTime, setSelectedTime] = useState(showtimes[1]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [booking, setBooking] = useState(null);
const [error, setError] = useState("");

const [showBookings, setShowBookings] = useState(false);
const [myBookings, setMyBookings] = useState([]);

async function loadMyBookings() {
  try {
    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        credentials: "include",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Could not load bookings.");
    }

    setMyBookings(result.bookings || []);
  } catch (err) {
    console.error("Loading bookings failed:", err);
  }
}

const [paymentMethod, setPaymentMethod] = useState("");
const [paymentStep, setPaymentStep] = useState(false);
const [paymentLoading, setPaymentLoading] = useState(false);

  const [authMode, setAuthMode] = useState("");
const [authEmail, setAuthEmail] = useState("");
const [authPassword, setAuthPassword] = useState("");
const [authName, setAuthName] = useState("");
const [authConfirmPassword, setAuthConfirmPassword] = useState("");
const [authError, setAuthError] = useState("");
const [authLoading, setAuthLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    try {
      return localStorage.getItem("imoviesDemoLoggedIn") || "";
    } catch {
      return "";
    }
  });

  const total = selectedSeats.reduce(
    (sum, seat) => sum + getSeatPrice(seat),
    0
  );

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre = genre === "All" || movie.genre === genre;
    return matchesSearch && matchesGenre;
  });

  function startBooking(movie) {
    setSelectedMovie(movie);
    setSelectedCinema("");
    setSelectedDate(new Date().toLocaleDateString("en-CA"));
    setSelectedTime(showtimes[1]);
    setSelectedSeats([]);
    setCustomerName(loggedIn);
    setBooking(null);
    setError("");
    setPaymentStep(false);
setPaymentMethod("");
setPaymentLoading(false);
  }

  function openBooking(movie) {
    if (!loggedIn) {
      setPendingMovie(movie);
      setAuthMode("login");
      setError("");
      return;
    }

    startBooking(movie);
  }

  
async function handleAuth(e) {
  e.preventDefault();
  setAuthError("");

  if (!/^[^\s@]+@gmail\.com$/i.test(authEmail.trim())) {
    setAuthError("Please enter a valid email address.");
    return;
  }

  if (authMode === "signup") {
    if (!authName.trim()) {
      setAuthError("Please enter your name.");
      return;
    }

    if (authPassword.length < 8) {
      setAuthError("Password must be at least 8 characters.");
      return;
    }

    if (authPassword !== authConfirmPassword) {
      setAuthError("Passwords do not match.");
      return;
    }
  }

  setAuthLoading(true);

  try {
    const endpoint =
      authMode === "signup"
        ? "/api/auth/signup"
        : "/api/auth/login";

    const payload =
      authMode === "signup"
        ? {
            name: authName.trim(),
            email: authEmail.trim(),
            password: authPassword,
            confirmPassword: authConfirmPassword,
          }
        : {
            email: authEmail.trim(),
            password: authPassword,
          };

    const response = await fetch(
      `http://localhost:5000${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Authentication failed.");
    }

    if (authMode === "signup") {
      setAuthMode("login");
      setAuthPassword("");
      setAuthConfirmPassword("");
      setAuthError("");
      alert("Account created successfully! Please sign in.");
      return;
    }

    setLoggedIn(result.user.name);
    await loadMyBookings();
    setAuthMode("");
    setAuthPassword("");
    setAuthConfirmPassword("");
    setAuthError("");

    if (pendingMovie) {
      startBooking(pendingMovie);
      setPendingMovie(null);
    }
  } catch (err) {
    setAuthError(
      err.message === "Failed to fetch"
        ? "Cannot connect to the server. Check your backend."
        : err.message
    );
  } finally {
    setAuthLoading(false);
  }
}

async function logout() {
  try {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (err) {
    console.error("Logout request failed:", err);
  }

  setLoggedIn("");
  setPendingMovie(null);
  setAuthPassword("");
  setAuthError("");
}


  function toggleSeat(seat) {
    setSelectedSeats((old) =>
      old.includes(seat)
        ? old.filter((s) => s !== seat)
        : [...old, seat]
    );
  }

  
async function confirmBooking() {
  setError("");

  if (
    !customerName.trim() ||
    !selectedCinema ||
    !selectedDate ||
    !selectedTime ||
    selectedSeats.length === 0
  ) {
    setError("Please complete all booking details and select seats.");
    setPaymentStep(false);
    return;
  }

  if (!paymentMethod) {
    setError("Please select a payment method.");
    return;
  }

  setPaymentLoading(true);

  const data = {
    customerName: customerName.trim(),
    movieTitle: selectedMovie.title,
    cinema: selectedCinema,
    date: selectedDate,
    showtime: selectedTime,
    seats: selectedSeats,
    total,
    paymentMethod,
    paymentStatus: "DEMO",
  };

  try {
    const response = await fetch(
      "http://localhost:5000/api/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Booking failed.");
    }

    const confirmedBooking = {
      ...data,
      reference: result.booking?._id || "Confirmed",
    };

    setBooking(confirmedBooking);
    setMyBookings((previous) => [
      confirmedBooking,
      ...previous,
    ]);
    setPaymentStep(false);
    setError("");
  } catch (err) {
    setError(
      err.message === "Failed to fetch"
        ? "Cannot connect to the backend. Check that the backend and MongoDB are running."
        : err.message || "Could not save the booking."
    );
  } finally {
    setPaymentLoading(false);
  }
}

  return (
    <div className="app">
      
<header className="navbar">
  <a className="logo" href="#home">
    <Film /> IMOVIES
  </a>

  <nav>
    <a href="#home">Home</a>
    <a href="#movies">Movies</a>
    <a href="#about">About</a>
    <button onClick={() => setShowBookings(true)}>
  My Bookings
</button>
  </nav>

  <div className="nav-auth">
    {loggedIn ? (
      <>
        <span>Hi, {loggedIn}!</span>
        <button className="nav-button" onClick={logout}>
          Log Out
        </button>
      </>
    ) : (
      <button
        className="nav-button"
        onClick={() => setAuthMode("login")}
      >
        Sign In
      </button>
    )}
  </div>
</header>

      {detailsMovie ? (
        <div className="movie-details-page">
          <div
            className="details-backdrop"
            style={{
              backgroundImage: `url("${detailsMovie.poster}")`,
            }}
            aria-hidden="true"
          />

          <div className="details-page-content">
            <button
              className="back-button"
              onClick={() => setDetailsMovie(null)}
            >
              ← Back to Movies
            </button>

            <div className="movie-details-layout">
              <div className="details-poster">
                <MoviePoster movie={detailsMovie} />
              </div>

              <div className="details-content">
                <span className="eyebrow">NOW SHOWING ON IMOVIES</span>
                <h1>{detailsMovie.title}</h1>

                <div className="details-rating">
                  <Star size={19} fill="#ffc84b" color="#ffc84b" />
                  <strong>{detailsMovie.rating}</strong>
                  <span>/ 10</span>
                </div>

                <div className="details-tags">
                  <span>{detailsMovie.genre}</span>
                  <span>{detailsMovie.year}</span>
                  <span>{detailsMovie.duration}</span>
                  <span>{detailsMovie.language}</span>
                </div>

                <h3>About the movie</h3>
                <p className="details-description">
                  {detailsMovie.description}
                </p>

                <div className="details-actions">
                  <button
                    className="button"
                    onClick={() => openBooking(detailsMovie)}
                  >
                    <Ticket size={18} /> Book Tickets →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <section
            className="hero cinema-hero"
            id="home"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(7,9,14,.96), rgba(7,9,14,.45)), url("${movies[0].poster}")`,
            }}
          >
            <div className="cinema-hero-copy">
              <span className="eyebrow">
                YOUR NEXT MOVIE NIGHT STARTS HERE
              </span>

              <h1>{movies[0].title}</h1>
              <p>{movies[0].description}</p>

              <div className="cinema-hero-meta">
                <span>
                  <Star size={16} fill="currentColor" />
                  {movies[0].rating}/10
                </span>
                <span>{movies[0].genre}</span>
                <span>{movies[0].duration}</span>
              </div>

              <button
                className="button"
                onClick={() => setDetailsMovie(movies[0])}
              >
                View movie details →
              </button>
            </div>

            <div className="cinema-hero-dots" aria-hidden="true">
              <span className="active" />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>

          <section className="legacy-marquee">
            <div className="marquee-track">
              {[...movies, ...movies].map((movie, index) => (
                <button
                  className="marquee-poster"
                  key={`${movie.id}-${index}`}
                  onClick={() => setDetailsMovie(movie)}
                  aria-label={`View ${movie.title}`}
                >
                  <MoviePoster movie={movie} />
                  <span>{movie.title}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="movies-section" id="movies">
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE BIG SCREEN IS CALLING</span>
                <h2>
                  Now Showing<span className="accent">.</span>
                </h2>
                <p>Choose your favourite movie and book your seats.</p>
              </div>

              <label className="search-box">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search movies..."
                />
              </label>
            </div>

            <div className="filters">
             
{[
  "All",
  "Sci-Fi",
  "Action",
  "Animation",
  "Drama",
  "Horror",
  "Thriller",
  "Bollywood",
  "Comedy",
  "Romance",
].map((g) => (

                <button
                  key={g}
                  className={genre === g ? "active" : ""}
                  onClick={() => setGenre(g)}
                >
                  {g}
                </button>
              ))}

              <span>{filteredMovies.length} MOVIES</span>
            </div>

            <div className="movie-grid">
              {filteredMovies.map((movie) => (
                <article className="movie-card" key={movie.id}>
                  <button
                    className="poster"
                    onClick={() => setDetailsMovie(movie)}
                    aria-label={`View details for ${movie.title}`}
                  >
                    <MoviePoster movie={movie} />

                    <span className="rating">
                      <Star size={14} fill="currentColor" />
                      {movie.rating}
                    </span>

                    <span className="poster-hover">VIEW DETAILS ↗</span>
                  </button>

                  <div className="movie-info">
                    <div className="movie-meta">
                      {movie.genre}
                      <span>
                        <Clock size={13} />
                        {movie.duration}
                      </span>
                    </div>

                    <h3>{movie.title}</h3>

                    <button
                      className="text-button"
                      onClick={() => setDetailsMovie(movie)}
                    >
                      View details →
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredMovies.length === 0 && (
              <p>No movies found. Try another search or filter.</p>
            )}
          </section>

          <section className="about" id="about">
            <div>
              <span className="eyebrow">THE IMOVIES EXPERIENCE</span>
              <h2>
                Less planning.
                <br />
                <em>More movie magic.</em>
              </h2>
              <p>
                Discover movies, choose your seats, and prepare for the big
                screen.
              </p>
            </div>

            <a className="button" href="#movies">
              Find your movie →
            </a>
          </section>

          <footer>
            <a className="logo" href="#home">
              <Film /> IMOVIES
            </a>
            <span>Made for the love of cinema.</span>
            <span>© 2026 IMovies · Student project</span>
          </footer>
        </>
      )}

      {/* SIGN IN / SIGN UP */}
      {authMode && (
        <div className="overlay" onClick={() => setAuthMode("")}>
          <div
            className="booking-dialog auth-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setAuthMode("")}
              aria-label="Close sign in"
            >
              <X />
            </button>

            <h2>
              {authMode === "signup" ? "Create account" : "Welcome back"}
            </h2>

            <form onSubmit={handleAuth}>
              {authMode === "signup" && (
                <label className="form-label">
                  Your name
                  <input
                    value={authName}
                    onChange={(e) => setAuthName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </label>
              )}
<label className="form-label">
  Email
  <input
    type="email"
    value={authEmail}
    onChange={(e) => setAuthEmail(e.target.value)}
    placeholder="Enter your Gmail address"
    autoComplete="off"
    required
  />
  {authEmail && !/^[^\s@]+@gmail\.com$/i.test(authEmail) && (
    <span className="email-error">
      Please enter a valid email address.
    </span>
  )}
</label>

              <label className="form-label">
                Password
                <input
                  type="password"
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </label>
              {authMode === "signup" && (
  <label className="form-label">
    Confirm password
    <input
      type="password"
      value={authConfirmPassword}
      onChange={(e) => setAuthConfirmPassword(e.target.value)}
      placeholder="Confirm your password"
      autoComplete="new-password"
      required
    />
  </label>
)}
{authError && (
  <p className="error" role="alert">
    {authError}
  </p>
)}

              <button className="button" type="submit">
                {authMode === "signup" ? "Create Account" : "Sign In"}
              </button>
            </form>

            <p>
              {authMode === "signup"
                ? "Already have an account?"
                : "New to IMovies?"}{" "}
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setAuthMode(authMode === "signup" ? "login" : "signup");
                  setAuthError("");
                }}
              >
                {authMode === "signup" ? "Sign In" : "Create account"}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* BOOKING AND SEAT SELECTION */}
      {selectedMovie && (
        <div
          className="overlay"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="booking-dialog booking-movie-dialog"
            style={{
              "--booking-backdrop": `url("${selectedMovie.poster}")`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close booking"
            >
              <X />
            </button>

            {!booking ?

  paymentStep ? (
    <div className="payment-screen">
      <button
        className="back-button"
        onClick={() => setPaymentStep(false)}
      >
        ← Back to seats
      </button>

      <h2>Choose Payment Method</h2>
      <p>Movie: {selectedMovie.title}</p>
      <p>Seats: {selectedSeats.join(", ")}</p>
      <h3>Total: ₹{total}</h3>

      {["UPI", "Credit / Debit Card", "Cash at Counter"].map((method) => (
        <label className="form-label" key={method}>
          <input
            type="radio"
            name="paymentMethod"
            value={method}
            checked={paymentMethod === method}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          {" "}{method}
        </label>
      ))}

      <p className="muted">
        Demo payment only. No real payment will occur.
      </p>

      {error && <p className="error">{error}</p>}

      <button
        className="button"
        disabled={!paymentMethod || paymentLoading}
        onClick={confirmBooking}
      >
        {paymentLoading ? "Processing..." : "Pay & Confirm Booking"}
      </button>
    </div>
  ) : (
    <>
      
                <div className="dialog-heading">
                  <MoviePoster movie={selectedMovie} />

                  <div>
                    <span className="eyebrow">YOUR MOVIE NIGHT</span>
                    <h2>{selectedMovie.title}</h2>
                    <p>
                      {selectedMovie.genre} · {selectedMovie.duration}
                    </p>
                    <b className="accent">★ {selectedMovie.rating}</b>
                  </div>
                </div>

                <label className="form-label">
                  Your name
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </label>

                <label className="form-label">
                  <MapPin size={15} /> Choose cinema in Indore
                  <select
                    value={selectedCinema}
                    onChange={(e) => setSelectedCinema(e.target.value)}
                    required
                  >
                    <option value="">Select a cinema</option>
                    {cinemas.map((cinema) => (
                      <option key={cinema} value={cinema}>
                        {cinema}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="form-label">
                  <CalendarDays size={15} /> Choose date
                  <input
                    type="date"
                    value={selectedDate}
                    min={new Date().toLocaleDateString("en-CA")}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </label>

                <label className="form-label">Choose showtime</label>

                <div className="times">
                  {showtimes.map((time) => (
                    <button
                      type="button"
                      key={time}
                      disabled={!selectedCinema || !selectedDate}
                      className={selectedTime === time ? "time-active" : ""}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {!selectedCinema && (
                  <p className="muted">
                    Select a cinema to continue choosing your showtime.
                  </p>
                )}

                <div className="seat-heading">
                  <label className="form-label">
                    <Armchair size={16} /> Choose seats
                  </label>
                  <span>₹180–₹300 / seat</span>
                </div>

                <div className="cinema-seat-layout">
                  <div className="cinema-screen">
                    <div className="screen-glow" />
                    <span>SCREEN</span>
                  </div>

                  <div className="seat-category-labels">
                    <span>PREMIUM · ₹300</span>
                    <span>GOLD · ₹220</span>
                    <span>STANDARD · ₹180</span>
                  </div>

                  
<div className="cinema-seat-rows">
  {[
    { name: "PREMIUM", price: 300, rows: seatRows.filter(({ row }) => ["G", "H"].includes(row)) },
    { name: "GOLD", price: 220, rows: seatRows.filter(({ row }) => ["D", "E", "F"].includes(row)) },
    { name: "STANDARD", price: 180, rows: seatRows.filter(({ row }) => ["A", "B", "C"].includes(row)) },
  ].map((category) => (
    <div className={`seat-category seat-category-${category.name.toLowerCase()}`} key={category.name}>
      <div className="seat-category-heading">
        <span>{category.name}</span>
        <span>₹{category.price}</span>
      </div>

      {category.rows.map(({ row, seats }) => (
        <div className="cinema-seat-row" key={row}>
          <span className="seat-row-label">{row}</span>

          <div className="cinema-seat-group">
            {seats.map((seat, index) => {
              const unavailable = unavailableSeats.includes(seat);
              const chosen = selectedSeats.includes(seat);

              return (
                <React.Fragment key={seat}>
                  {index === 5 && (
                    <span className="seat-aisle" aria-hidden="true" />
                  )}

                  <button
                    type="button"
                    className={[
                      "cinema-seat",
                      `seat-${category.name.toLowerCase()}`,
                      chosen ? "seat-selected" : "",
                      unavailable ? "unavailable" : "",
                    ].filter(Boolean).join(" ")}
                    disabled={unavailable}
                    onClick={() => toggleSeat(seat)}
                    aria-label={`Seat ${seat}, ${category.name}, ₹${category.price}`}
                  >
                    {seat.slice(1)}
                  </button>
                </React.Fragment>
              );
            })}
          </div>

          <span className="seat-row-label">{row}</span>
        </div>
      ))}
    </div>
  ))}
</div>


                  <div className="cinema-seat-legend">
                    <span>
                      <i className="legend-seat available-seat" />
                      Available
                    </span>
                    <span>
                      <i className="legend-seat selected-seat" />
                      Selected
                    </span>
                    <span>
                      <i className="legend-seat booked-seat" />
                      Unavailable
                    </span>
                  </div>
                </div>

                <div className="checkout">
                  <div>
                    <small>Total amount</small>
                    <b>₹{total}</b>
                    <small>{selectedSeats.length} seat(s)</small>
                  </div>

                  <button
  className="button"
  onClick={() => {
    setError("");
    setPaymentMethod("");
    setPaymentStep(true);
  }}
>
  Confirm booking →
</button>
                </div>

                {error && <p className="error">{error}</p>}
</>
) : (
  <div className="success">
                <CheckCircle size={48} />
                <h2>Booking confirmed!</h2>
                <p>Your booking was saved to MongoDB.</p>

                <div className="booking-summary">
                  <p>
                    Reference <b>{booking.reference}</b>
                  </p>
                  <p>
                    Movie <b>{booking.movieTitle}</b>
                  </p>
                  <p>
                    Cinema <b>{booking.cinema}</b>
                  </p>
                  <p>
                    Date <b>{booking.date}</b>
                  </p>
                  <p>
                    Showtime <b>{booking.showtime}</b>
                  </p>
                  <p>
                    Seats <b>{booking.seats.join(", ")}</b>
                  </p>
                  <p>
                    Total <b>₹{booking.total}</b>
                  </p>
                  <p>
  Payment method <b>{booking.paymentMethod}</b>
</p>
<p>
  Payment status <b>Demo only</b>
</p>
                </div>

                <button
                  className="button"
                  onClick={() => setSelectedMovie(null)}
                >
                  Done ✓
                </button>
              </div>
            )}
          </div>
        </div>
      )}{showBookings && (
  <div
    className="overlay"
    onClick={() => setShowBookings(false)}
  >
    <div
      className="booking-dialog"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close"
        onClick={() => setShowBookings(false)}
      >
        <X />
      </button>

      <button
        className="home-button"
        onClick={() => setShowBookings(false)}
      >
        ← Go to Home Page
      </button>

      {/* Keep the rest of your existing My Bookings code here */}

            {myBookings.length === 0 ? (
              <p>No tickets in this session yet.</p>
            ) : (
              myBookings.map((ticket, index) => (
                <div
                  className="booking-summary"
                  key={ticket.reference || index}
                >
                  <h3>{ticket.movieTitle}</h3>
                  <p>Reference: {ticket.reference}</p>
                  <p>Cinema: {ticket.cinema}</p>
                  <p>Date: {ticket.date}</p>
                  <p>Showtime: {ticket.showtime}</p>
                  <p>Seats: {ticket.seats.join(", ")}</p>
                  <p>Payment: {ticket.paymentMethod} (demo)</p>
                  <p>Total: ₹{ticket.total}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
