import { Metadata } from 'next';
import Movie from '../../components/movie';
import styles from '../../styles/home.module.css'


export const metadata: Metadata = {
  title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {

  const data = await fetch(API_URL);
  const json = await data.json();
  return json;
}

export default async function Homepage() {
  const movies = await getMovies();

  return (
    <>
      <div className={styles.container}>{movies.map(movie =>
        (<Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path}/>)
      )}</div>
    </>
  );
}