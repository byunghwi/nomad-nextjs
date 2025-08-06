import { Metadata } from 'next';
import Link from 'next/link';

const metadata: Metadata = {
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
      <div>
        <h1>Home Page !</h1>
      </div>
      <div>{movies.map(movie =>
        (<li key={movie.id}><Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>)
      )}</div>
    </>
  );
}