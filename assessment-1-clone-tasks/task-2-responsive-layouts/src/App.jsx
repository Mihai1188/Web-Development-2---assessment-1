
import './App.css'

// Movie information provided in the assignment assets
const movies = [
  {
    title: 'Who Framed Roger Rabbit (1988)',
    image: '/assets/who-framed-roger-rabbit.jpg',
    genre: 'Comedy',
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    title: 'Hook (1991)',
    image: '/assets/hook.jpg',
    genre: 'Action',
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    title: 'La La Land (2016)',
    image: '/assets/la-la-land.jpg',
    genre: 'Romance',
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    title: 'Hidden Figures (2016)',
    image: '/assets/hidden-figures.jpg',
    genre: 'Drama',
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: 'Palm Springs (2020)',
    image: '/assets/palm-springs.jpg',
    genre: 'Romance',
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    title: 'Barbie (2023)',
    image: '/assets/barbie.jpg',
    genre: 'Comedy',
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
]

// Header containing the website name and navigation
function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="site-logo" href="#home">
          watch.it
        </a>

        <nav className="navigation" aria-label="Movie genres">
          <a href="#action">Action</a>
          <a href="#comedy">Comedy</a>
          <a href="#romance">Romance</a>
          <a href="#drama">Drama</a>
        </nav>

        <button
          className="search-button"
          type="button"
          onClick={() => {
            const search = document.querySelector('#movie-search')
            search?.focus()
          }}
        >
          SEARCH
        </button>
      </div>
    </header>
  )
}

// Reusable card for each movie
function MovieCard({ movie, index }) {
  return (
    <article
      className={`movie-card movie-${index + 1}`}
      id={movie.genre.toLowerCase()}
    >
      <img
        className="movie-poster"
        src={movie.image}
        alt={`${movie.title} movie poster`}
      />

      <div className="movie-details">
        <p className="movie-description">{movie.description}</p>

        <button
          className="watch-button"
          type="button"
          aria-label={`Watch ${movie.title}`}
          onClick={() => alert(`${movie.title} selected!`)}
        >
          WATCH NOW
        </button>
      </div>
    </article>
  )
}

// Main application
function App() {
  return (
    <div id="home">
      <Header />

      <main className="movie-container">
        {movies.map((movie, index) => (
          <MovieCard
            key={movie.title}
            movie={movie}
            index={index}
          />
        ))}
      </main>
    </div>
  )
}

export default App
