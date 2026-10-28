import React, { useState, useEffect } from "react";
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
  Shield,
  Trash2,
  PlusCircle,
  ArrowLeft,
  Lock,
} from "lucide-react";

// Default secret passkey for admin access
const ADMIN_SECRET_KEY = "admin123";

const initialMovies = [
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

const initialShowtimes = ["10:30 AM", "1:45 PM", "5:15 PM", "8:30 PM"];

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
  if (row === "G" || row === "H") return 300;
  if (["D", "E", "F"].includes(row)) return 220;
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
  const [moviesList, setMoviesList] = useState(() => {
    try {
      const saved = localStorage.getItem("imovies_admin_movies");
      return saved ? JSON.parse(saved) : initialMovies;
    } catch {
      return initialMovies;
    }
  });

  const [availableShowtimes, setAvailableShowtimes] = useState(() => {
    try {
      const saved = localStorage.getItem("imovies_admin_showtimes");
      return saved ? JSON.parse(saved) : initialShowtimes;
    } catch {
      return initialShowtimes;
    }
  });

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [detailsMovie, setDetailsMovie] = useState(null);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [pendingMovie, setPendingMovie] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [selectedTime, setSelectedTime] = useState(availableShowtimes[1] || "1:45 PM");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");

  const [showBookings, setShowBookings] = useState(false);

  // Global All Bookings (Shared with Admin)
  const [allBookings, setAllBookings] = useState(() => {
    try {
      const saved = localStorage.getItem("imovies_all_bookings");
      return saved
        ? JSON.parse(saved)
        : [
            {
              reference: "BK-1082",
              customerName: "Aman Sharma",
              movieTitle: "Dune: Part Two",
              cinema: "PVR INOX Phoenix Citadel — Indore",
              date: "2026-11-04",
              showtime: "5:15 PM",
              seats: ["F4", "F5"],
              total: 440,
              paymentMethod: "UPI",
              status: "CONFIRMED",
            },
          ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("imovies_admin_movies", JSON.stringify(moviesList));
  }, [moviesList]);

  useEffect(() => {
    localStorage.setItem("imovies_all_bookings", JSON.stringify(allBookings));
  }, [allBookings]);

  useEffect(() => {
    localStorage.setItem("imovies_admin_showtimes", JSON.stringify(availableShowtimes));
  }, [availableShowtimes]);

  // ----------------------------------------------------
  // ADMIN AUTHENTICATION
  // ----------------------------------------------------
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return localStorage.getItem("imovies_admin_auth") === "true";
    } catch {
      return false;
    }
  });
  const [showAdminPasswordModal, setShowAdminPasswordModal] = useState(false);
  const [adminPassInput, setAdminPassInput] = useState("");
  const [adminPassError, setAdminPassError] = useState("");

  const [showAdmin, setShowAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState("bookings");
  const [adminSearch, setAdminSearch] = useState("");
  const [adminStatusFilter, setAdminStatusFilter] = useState("ALL");

  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "Action",
    year: 2026,
    language: "Hindi",
    rating: 8.0,
    duration: "2h 30m",
    poster: "",
    description: "",
  });

  const [newShowTime, setNewShowTime] = useState("");

  function handleOpenAdmin() {
    if (isAdminAuthenticated) {
      setShowAdmin(true);
      setDetailsMovie(null);
    } else {
      setShowAdminPasswordModal(true);
      setAdminPassError("");
      setAdminPassInput("");
    }
  }

  function handleVerifyAdminPass(e) {
    e.preventDefault();
    if (adminPassInput === ADMIN_SECRET_KEY) {
      setIsAdminAuthenticated(true);
      localStorage.setItem("imovies_admin_auth", "true");
      setShowAdminPasswordModal(false);
      setShowAdmin(true);
      setAdminPassInput("");
      setAdminPassError("");
    } else {
      setAdminPassError("Incorrect Admin Security Key. Access Denied.");
    }
  }

  function handleLockAdmin() {
    setIsAdminAuthenticated(false);
    localStorage.removeItem("imovies_admin_auth");
    setShowAdmin(false);
  }

  // ----------------------------------------------------
  // USER AUTHENTICATION & SESSION
  // ----------------------------------------------------
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

  async function loadUserBookings() {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok && result.bookings) {
        setAllBookings((prev) => {
          const combined = [...result.bookings, ...prev];
          const unique = Array.from(new Set(combined.map((a) => a.reference || a._id)))
            .map((id) => combined.find((a) => (a.reference || a._id) === id));
          return unique;
        });
      }
    } catch (err) {
      console.error("Loading bookings failed:", err);
    }
  }

  // When user clicks "My Bookings" in navbar
  function handleOpenMyBookings() {
    if (!loggedIn) {
      setAuthMode("login");
      setAuthError("Please sign in to view your tickets.");
      return;
    }
    setShowBookings(true);
  }

  // Filter ONLY current user's bookings
  const userVisibleBookings = allBookings.filter(
    (b) => loggedIn && b.customerName && b.customerName.toLowerCase() === loggedIn.toLowerCase()
  );

  const total = selectedSeats.reduce(
    (sum, seat) => sum + getSeatPrice(seat),
    0
  );

  const filteredMovies = moviesList.filter((movie) => {
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
    setSelectedTime(availableShowtimes[0] || "1:45 PM");
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
        authMode === "signup" ? "/api/auth/signup" : "/api/auth/login";

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

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

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

      const userName = result.user?.name || authName || "User";
      setLoggedIn(userName);
      localStorage.setItem("imoviesDemoLoggedIn", userName);
      await loadUserBookings();
      setAuthMode("");
      setAuthPassword("");
      setAuthConfirmPassword("");
      setAuthError("");

      if (pendingMovie) {
        startBooking(pendingMovie);
        setPendingMovie(null);
      }
    } catch {
      // Local demo fallback if backend is offline
      const fallbackName = authName.trim() || authEmail.split("@")[0];
      setLoggedIn(fallbackName);
      localStorage.setItem("imoviesDemoLoggedIn", fallbackName);
      setAuthMode("");
      setAuthPassword("");
      setAuthConfirmPassword("");
      setAuthError("");
      if (pendingMovie) {
        startBooking(pendingMovie);
        setPendingMovie(null);
      }
    } finally {
      setAuthLoading(false);
    }
  }

  // LOGOUT (Clears active user tickets and closes modals)
  async function logout() {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (err) {
      console.error("Logout request failed:", err);
    }
    localStorage.removeItem("imoviesDemoLoggedIn");
    setLoggedIn("");
    setShowBookings(false); // Close My Bookings modal
    setPendingMovie(null);
    setAuthPassword("");
    setAuthError("");
  }

  function toggleSeat(seat) {
    setSelectedSeats((old) =>
      old.includes(seat) ? old.filter((s) => s !== seat) : [...old, seat]
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
      customerName: (loggedIn || customerName).trim(),
      movieTitle: selectedMovie.title,
      cinema: selectedCinema,
      date: selectedDate,
      showtime: selectedTime,
      seats: selectedSeats,
      total,
      paymentMethod,
      paymentStatus: "CONFIRMED",
      status: "CONFIRMED",
      reference: "BK-" + Math.floor(1000 + Math.random() * 9000),
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();
      const finalBooking = {
        ...data,
        reference: result?.booking?._id || data.reference,
      };

      setBooking(finalBooking);
      setAllBookings((prev) => [finalBooking, ...prev]);
      setPaymentStep(false);
      setError("");
    } catch {
      setBooking(data);
      setAllBookings((prev) => [data, ...prev]);
      setPaymentStep(false);
      setError("");
    } finally {
      setPaymentLoading(false);
    }
  }

  // ----------------------------------------------------
  // ADMIN ACTIONS
  // ----------------------------------------------------
  function handleAdminCancelTicket(reference) {
    if (!isAdminAuthenticated) return;
    if (window.confirm(`Are you sure you want to cancel booking ${reference}?`)) {
      setAllBookings((prev) =>
        prev.map((b) =>
          b.reference === reference
            ? { ...b, status: "CANCELLED", refundStatus: `Refund ₹${b.total} Initiated` }
            : b
        )
      );
    }
  }

  function handleAddMovieSubmit(e) {
    e.preventDefault();
    if (!isAdminAuthenticated) return;
    if (!newMovie.title || !newMovie.poster) {
      alert("Please enter title and poster URL.");
      return;
    }
    const created = {
      ...newMovie,
      id: Date.now(),
      rating: parseFloat(newMovie.rating) || 8.0,
      year: parseInt(newMovie.year) || 2026,
    };
    setMoviesList([created, ...moviesList]);
    setNewMovie({
      title: "",
      genre: "Action",
      year: 2026,
      language: "Hindi",
      rating: 8.0,
      duration: "2h 30m",
      poster: "",
      description: "",
    });
    alert("Movie added successfully to live website!");
  }

  function handleDeleteMovie(id) {
    if (!isAdminAuthenticated) return;
    if (window.confirm("Are you sure you want to delete this movie?")) {
      setMoviesList(moviesList.filter((m) => m.id !== id));
    }
  }

  function handleAddShowtime(e) {
    e.preventDefault();
    if (!isAdminAuthenticated) return;
    if (!newShowTime.trim()) return;
    if (!availableShowtimes.includes(newShowTime.trim())) {
      setAvailableShowtimes([...availableShowtimes, newShowTime.trim()]);
      setNewShowTime("");
      alert("Showtime added successfully!");
    }
  }

  function handleDeleteShowtime(time) {
    if (!isAdminAuthenticated) return;
    if (availableShowtimes.length <= 1) {
      alert("At least one showtime must remain.");
      return;
    }
    setAvailableShowtimes(availableShowtimes.filter((t) => t !== time));
  }

  const filteredAdminBookings = allBookings.filter((b) => {
    const statusMatch =
      adminStatusFilter === "ALL"
        ? true
        : (b.status || "CONFIRMED") === adminStatusFilter;
    const searchMatch =
      (b.reference || "").toLowerCase().includes(adminSearch.toLowerCase()) ||
      (b.customerName || "").toLowerCase().includes(adminSearch.toLowerCase()) ||
      (b.movieTitle || "").toLowerCase().includes(adminSearch.toLowerCase());
    return statusMatch && searchMatch;
  });

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a
          className="logo"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setShowAdmin(false);
            setDetailsMovie(null);
          }}
        >
          <Film /> IMOVIES
        </a>

        <nav>
          <a
            href="#home"
            onClick={() => {
              setShowAdmin(false);
              setDetailsMovie(null);
            }}
          >
            Home
          </a>
          <a
            href="#movies"
            onClick={() => {
              setShowAdmin(false);
              setDetailsMovie(null);
            }}
          >
            Movies
          </a>
          <a
            href="#about"
            onClick={() => {
              setShowAdmin(false);
              setDetailsMovie(null);
            }}
          >
            About
          </a>

          {/* MY BOOKINGS (Requires user to be logged in) */}
          <button onClick={handleOpenMyBookings}>
            My Bookings
          </button>

          {/* ADMIN GATE BUTTON */}
          <button
            onClick={handleOpenAdmin}
            style={{
              backgroundColor: isAdminAuthenticated ? "#e11d48" : "#27272a",
              color: "#fff",
              border: "1px solid #e11d48",
              padding: "6px 14px",
              borderRadius: "20px",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {isAdminAuthenticated ? <Shield size={14} /> : <Lock size={14} />}
            {isAdminAuthenticated ? "Admin Dashboard" : "Admin Login"}
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
            <button className="nav-button" onClick={() => setAuthMode("login")}>
              Sign In
            </button>
          )}
        </div>
      </header>

      {/* ========================================================================= */}
      {/* ADMIN AUTHENTICATION POPUP */}
      {/* ========================================================================= */}
      {showAdminPasswordModal && (
        <div className="overlay" onClick={() => setShowAdminPasswordModal(false)}>
          <div
            className="booking-dialog auth-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "380px" }}
          >
            <button
              className="close"
              onClick={() => setShowAdminPasswordModal(false)}
            >
              <X />
            </button>

            <div style={{ textAlign: "center", marginBottom: "15px" }}>
              <div
                style={{
                  display: "inline-flex",
                  padding: "12px",
                  backgroundColor: "rgba(225, 29, 72, 0.15)",
                  borderRadius: "50%",
                  color: "#e11d48",
                  marginBottom: "8px",
                }}
              >
                <Lock size={28} />
              </div>
              <h2 style={{ margin: "5px 0" }}>Admin Authorization</h2>
              <p style={{ fontSize: "13px", color: "#a1a1aa", margin: 0 }}>
                This section is restricted to theater administrators only.
              </p>
            </div>

            <form onSubmit={handleVerifyAdminPass}>
              <label className="form-label">
                Enter Admin Security Key
                <input
                  type="password"
                  placeholder="Security Passkey (e.g. admin123)"
                  value={adminPassInput}
                  onChange={(e) => setAdminPassInput(e.target.value)}
                  autoFocus
                  required
                />
              </label>

              {adminPassError && (
                <p className="error" style={{ fontSize: "13px" }}>
                  {adminPassError}
                </p>
              )}

              <button
                className="button"
                type="submit"
                style={{ marginTop: "10px", width: "100%" }}
              >
                Verify & Enter
              </button>
            </form>
            <small style={{ color: "#71717a", textAlign: "center", display: "block", marginTop: "12px" }}>
              Default passkey: <code>admin123</code>
            </small>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADMIN SECTION VIEW (ONLY VISIBLE IF ADMIN IS AUTHENTICATED) */}
      {/* ========================================================================= */}
      {showAdmin && isAdminAuthenticated ? (
        <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
          {/* Admin Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
              borderBottom: "1px solid #27272a",
              paddingBottom: "20px",
              marginBottom: "30px",
            }}
          >
            <div>
              <button
                onClick={() => setShowAdmin(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "8px",
                  fontSize: "14px",
                }}
              >
                <ArrowLeft size={16} /> Back to Movie Site
              </button>
              <h1 style={{ fontSize: "28px", margin: 0, fontWeight: "700" }}>
                Admin Management Console
              </h1>
              <p style={{ color: "#94a3b8", margin: "5px 0 0 0" }}>
                Authorized Admin Session Active
              </p>
            </div>

            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <button
                onClick={() => setAdminTab("bookings")}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: adminTab === "bookings" ? "#e11d48" : "#18181b",
                  color: "#fff",
                }}
              >
                📋 Booking History & Cancellation
              </button>
              <button
                onClick={() => setAdminTab("movies")}
                style={{
                  padding: "10px 18px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  backgroundColor: adminTab === "movies" ? "#e11d48" : "#18181b",
                  color: "#fff",
                }}
              >
                🎬 Movie & Show Management
              </button>
              <button
                onClick={handleLockAdmin}
                style={{
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid #ef4444",
                  backgroundColor: "transparent",
                  color: "#ef4444",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Lock Admin
              </button>
            </div>
          </div>

          {/* TAB 1: BOOKING HISTORY AND CANCELLATION */}
          {adminTab === "bookings" && (
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="text"
                  placeholder="Search by Customer, Movie, or Ref ID..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: "250px",
                    padding: "12px 16px",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "8px",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <select
                  value={adminStatusFilter}
                  onChange={(e) => setAdminStatusFilter(e.target.value)}
                  style={{
                    padding: "12px 16px",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                >
                  <option value="ALL">All Statuses</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>
              </div>

              <div
                style={{
                  overflowX: "auto",
                  backgroundColor: "#121214",
                  border: "1px solid #27272a",
                  borderRadius: "10px",
                }}
              >
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#18181b", color: "#a1a1aa", fontSize: "13px" }}>
                      <th style={{ padding: "16px" }}>Ref ID</th>
                      <th style={{ padding: "16px" }}>Customer</th>
                      <th style={{ padding: "16px" }}>Movie</th>
                      <th style={{ padding: "16px" }}>Cinema & Showtime</th>
                      <th style={{ padding: "16px" }}>Seats</th>
                      <th style={{ padding: "16px" }}>Total</th>
                      <th style={{ padding: "16px" }}>Status</th>
                      <th style={{ padding: "16px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAdminBookings.length === 0 ? (
                      <tr>
                        <td colSpan="8" style={{ textAlign: "center", padding: "30px", color: "#71717a" }}>
                          No bookings found.
                        </td>
                      </tr>
                    ) : (
                      filteredAdminBookings.map((b, idx) => (
                        <tr
                          key={b.reference || idx}
                          style={{
                            borderTop: "1px solid #27272a",
                            fontSize: "14px",
                          }}
                        >
                          <td style={{ padding: "16px", fontWeight: "600" }}>{b.reference}</td>
                          <td style={{ padding: "16px" }}>{b.customerName || "Customer"}</td>
                          <td style={{ padding: "16px" }}>{b.movieTitle}</td>
                          <td style={{ padding: "16px" }}>
                            {b.date} • {b.showtime}
                            <br />
                            <small style={{ color: "#71717a" }}>{b.cinema}</small>
                          </td>
                          <td style={{ padding: "16px" }}>{b.seats?.join(", ") || "-"}</td>
                          <td style={{ padding: "16px", fontWeight: "bold" }}>₹{b.total}</td>
                          <td style={{ padding: "16px" }}>
                            <span
                              style={{
                                padding: "4px 8px",
                                borderRadius: "4px",
                                fontSize: "11px",
                                fontWeight: "700",
                                backgroundColor:
                                  b.status === "CANCELLED" ? "#ef4444" : "#10b981",
                                color: "#fff",
                              }}
                            >
                              {b.status || "CONFIRMED"}
                            </span>
                            {b.refundStatus && (
                              <div style={{ fontSize: "11px", color: "#fbbf24", marginTop: "4px" }}>
                                {b.refundStatus}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: "16px" }}>
                            {b.status !== "CANCELLED" ? (
                              <button
                                onClick={() => handleAdminCancelTicket(b.reference)}
                                style={{
                                  backgroundColor: "#ef4444",
                                  border: "none",
                                  color: "#fff",
                                  padding: "6px 12px",
                                  borderRadius: "6px",
                                  cursor: "pointer",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                Cancel Ticket
                              </button>
                            ) : (
                              <span style={{ color: "#71717a", fontSize: "12px" }}>Cancelled</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: MOVIE & SHOW MANAGEMENT */}
          {adminTab === "movies" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                gap: "30px",
              }}
            >
              {/* Add New Movie */}
              <div
                style={{
                  backgroundColor: "#121214",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #27272a",
                }}
              >
                <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <PlusCircle size={20} color="#e11d48" /> Add Movie to Website
                </h2>
                <form onSubmit={handleAddMovieSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <input
                    type="text"
                    placeholder="Movie Title *"
                    required
                    value={newMovie.title}
                    onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                    style={{
                      padding: "10px 14px",
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "6px",
                      color: "#fff",
                    }}
                  />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <select
                      value={newMovie.genre}
                      onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    >
                      {["Action", "Sci-Fi", "Drama", "Horror", "Comedy", "Bollywood", "Animation", "Thriller", "Romance"].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Duration (e.g. 2h 20m)"
                      value={newMovie.duration}
                      onChange={(e) => setNewMovie({ ...newMovie, duration: e.target.value })}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <input
                      type="number"
                      step="0.1"
                      placeholder="Rating (1-10)"
                      value={newMovie.rating}
                      onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Year (e.g. 2026)"
                      value={newMovie.year}
                      onChange={(e) => setNewMovie({ ...newMovie, year: e.target.value })}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "6px",
                        color: "#fff",
                      }}
                    />
                  </div>

                  <input
                    type="url"
                    placeholder="Poster Image URL *"
                    required
                    value={newMovie.poster}
                    onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
                    style={{
                      padding: "10px 14px",
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "6px",
                      color: "#fff",
                    }}
                  />

                  <textarea
                    rows={3}
                    placeholder="Short Description of the Movie..."
                    value={newMovie.description}
                    onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                    style={{
                      padding: "10px 14px",
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "6px",
                      color: "#fff",
                      resize: "none",
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#e11d48",
                      color: "#fff",
                      border: "none",
                      padding: "12px",
                      borderRadius: "6px",
                      fontWeight: "700",
                      cursor: "pointer",
                      marginTop: "5px",
                    }}
                  >
                    + Add Movie To Catalog
                  </button>
                </form>

                <hr style={{ margin: "25px 0", border: "0.5px solid #27272a" }} />

                {/* Showtimes Management */}
                <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Clock size={20} color="#e11d48" /> Manage Global Showtimes
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                  {availableShowtimes.map((time) => (
                    <span
                      key={time}
                      style={{
                        backgroundColor: "#18181b",
                        border: "1px solid #3f3f46",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {time}
                      <button
                        onClick={() => handleDeleteShowtime(time)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#ef4444",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <form onSubmit={handleAddShowtime} style={{ display: "flex", gap: "10px" }}>
                  <input
                    type="text"
                    placeholder="e.g. 11:45 PM"
                    value={newShowTime}
                    onChange={(e) => setNewShowTime(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      backgroundColor: "#18181b",
                      border: "1px solid #27272a",
                      borderRadius: "6px",
                      color: "#fff",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#27272a",
                      color: "#fff",
                      border: "1px solid #3f3f46",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    + Add Slot
                  </button>
                </form>
              </div>

              {/* Current Movies List */}
              <div
                style={{
                  backgroundColor: "#121214",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #27272a",
                  maxHeight: "850px",
                  overflowY: "auto",
                }}
              >
                <h2 style={{ fontSize: "18px", marginTop: 0, marginBottom: "16px" }}>
                  Current Movies ({moviesList.length})
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {moviesList.map((movie) => (
                    <div
                      key={movie.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#18181b",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #27272a",
                      }}
                    >
                      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <img
                          src={movie.poster}
                          alt={movie.title}
                          style={{
                            width: "42px",
                            height: "60px",
                            objectFit: "cover",
                            borderRadius: "4px",
                          }}
                        />
                        <div>
                          <strong style={{ fontSize: "14px" }}>{movie.title}</strong>
                          <div style={{ fontSize: "12px", color: "#71717a", marginTop: "2px" }}>
                            {movie.genre} • {movie.duration} • ★ {movie.rating}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteMovie(movie.id)}
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid #ef4444",
                          color: "#ef4444",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "12px",
                        }}
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ========================================================================= */
        /* STANDARD CUSTOMER WEBSITE */
        /* ========================================================================= */
        <>
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
                  backgroundImage: `linear-gradient(90deg, rgba(7,9,14,.96), rgba(7,9,14,.45)), url("${moviesList[0]?.poster || ""}")`,
                }}
              >
                <div className="cinema-hero-copy">
                  <span className="eyebrow">
                    YOUR NEXT MOVIE NIGHT STARTS HERE
                  </span>

                  <h1>{moviesList[0]?.title}</h1>
                  <p>{moviesList[0]?.description}</p>

                  <div className="cinema-hero-meta">
                    <span>
                      <Star size={16} fill="currentColor" />
                      {moviesList[0]?.rating}/10
                    </span>
                    <span>{moviesList[0]?.genre}</span>
                    <span>{moviesList[0]?.duration}</span>
                  </div>

                  <button
                    className="button"
                    onClick={() => setDetailsMovie(moviesList[0])}
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
                  {[...moviesList, ...moviesList].map((movie, index) => (
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
        </>
      )}

      {/* SIGN IN / SIGN UP MODAL */}
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

              <button className="button" type="submit" disabled={authLoading}>
                {authLoading
                  ? "Please wait..."
                  : authMode === "signup"
                  ? "Create Account"
                  : "Sign In"}
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

      {/* BOOKING AND SEAT SELECTION MODAL */}
      {selectedMovie && (
        <div className="overlay" onClick={() => setSelectedMovie(null)}>
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

            {!booking ? (
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

                  {["UPI", "Credit / Debit Card", "Cash at Counter"].map(
                    (method) => (
                      <label className="form-label" key={method}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={paymentMethod === method}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />{" "}
                        {method}
                      </label>
                    )
                  )}

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
                    {availableShowtimes.map((time) => (
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
                        {
                          name: "PREMIUM",
                          price: 300,
                          rows: seatRows.filter(({ row }) =>
                            ["G", "H"].includes(row)
                          ),
                        },
                        {
                          name: "GOLD",
                          price: 220,
                          rows: seatRows.filter(({ row }) =>
                            ["D", "E", "F"].includes(row)
                          ),
                        },
                        {
                          name: "STANDARD",
                          price: 180,
                          rows: seatRows.filter(({ row }) =>
                            ["A", "B", "C"].includes(row)
                          ),
                        },
                      ].map((category) => (
                        <div
                          className={`seat-category seat-category-${category.name.toLowerCase()}`}
                          key={category.name}
                        >
                          <div className="seat-category-heading">
                            <span>{category.name}</span>
                            <span>₹{category.price}</span>
                          </div>

                          {category.rows.map(({ row, seats }) => (
                            <div className="cinema-seat-row" key={row}>
                              <span className="seat-row-label">{row}</span>

                              <div className="cinema-seat-group">
                                {seats.map((seat, index) => {
                                  const unavailable =
                                    unavailableSeats.includes(seat);
                                  const chosen = selectedSeats.includes(seat);

                                  return (
                                    <React.Fragment key={seat}>
                                      {index === 5 && (
                                        <span
                                          className="seat-aisle"
                                          aria-hidden="true"
                                        />
                                      )}

                                      <button
                                        type="button"
                                        className={[
                                          "cinema-seat",
                                          `seat-${category.name.toLowerCase()}`,
                                          chosen ? "seat-selected" : "",
                                          unavailable ? "unavailable" : "",
                                        ]
                                          .filter(Boolean)
                                          .join(" ")}
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
              )
            ) : (
              <div className="success">
                <CheckCircle size={48} />
                <h2>Booking confirmed!</h2>
                <p>Your booking was saved successfully.</p>

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
      )}

      {/* MY BOOKINGS DIALOG (ONLY USER'S OWN TICKETS) */}
      {showBookings && (
        <div className="overlay" onClick={() => setShowBookings(false)}>
          <div className="booking-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowBookings(false)}>
              <X />
            </button>

            <button
              className="home-button"
              onClick={() => setShowBookings(false)}
            >
              ← Go to Home Page
            </button>

            <h2>My Bookings ({loggedIn})</h2>

            {userVisibleBookings.length === 0 ? (
              <p>You have no active bookings in this account.</p>
            ) : (
              userVisibleBookings.map((ticket, index) => (
                <div
                  className="booking-summary"
                  key={ticket.reference || index}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ margin: 0 }}>{ticket.movieTitle}</h3>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "bold",
                        backgroundColor:
                          ticket.status === "CANCELLED" ? "#ef4444" : "#10b981",
                        color: "#fff",
                      }}
                    >
                      {ticket.status || "CONFIRMED"}
                    </span>
                  </div>
                  <p>Reference: {ticket.reference}</p>
                  <p>Cinema: {ticket.cinema}</p>
                  <p>Date: {ticket.date}</p>
                  <p>Showtime: {ticket.showtime}</p>
                  <p>Seats: {ticket.seats?.join(", ") || "-"}</p>
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
