import React from "react";
import styles from "./movies.module.scss";
import post from "../../../../assets/wp4926059 1.png";
import Icon from "../../../../assets/Icon.png";
// F:\BookShow\Bookshow\src\assets\wp4926059 1.png
const movieData = Array(10).fill({
  title: "Alita Battle Angel 4k 2019 Movies",
  year: 2018,
  genre: "Action, Adventure",
  duration: "2h 8m",
  rating: 4.5,
  poster: post,
});

function Movies() {
  return (
    <section className={styles.moviesSection}>
      <div className={styles.header}>
        <h2>Now Showing</h2>
        <a href="#">View All →</a>
      </div>

      <div className={styles.grid}>
        {movieData.map((movie, i) => (
          <div key={i} className={styles.card}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{`${movie.year} - ${movie.genre} - ${movie.duration}`}</p>
            <div className={styles.cardFooter}>
              <button>Buy Ticket</button>
              <span>
                <img src={Icon} alt="icon" style={{ paddingTop: "10px" ,width: "15px", height: "15px"}}></img>
                {movie.rating}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.showMore}>
        <button>Show more</button>
      </div>
    </section>
  );
}

export default Movies;
