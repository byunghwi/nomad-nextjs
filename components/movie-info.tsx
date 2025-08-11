import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-info.module.css';

export const getMovieDetail = async (id: string) => {
  //await new Promise((resolve)=> setTimeout(resolve, 3000));
  const movie = await fetch(`${API_URL}/${id}`);
  return movie.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieDetail(id);
  return <div className={styles.container}>
    <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
    <div className={styles.info}>
      <h1 className={styles.title}>{movie.title}</h1>
      <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
      <p>{movie.overview}</p>
      <a href={movie.homepage} target={"_blank"}>HomePage &rarr;</a>
    </div>
  </div>;
}

