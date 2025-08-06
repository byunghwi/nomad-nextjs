import { API_URL } from '../app/(home)/page';

const getMovieDetail = async(id: string) => {
  await new Promise((resolve)=> setTimeout(resolve, 3000));
  const movie = await fetch(`${API_URL}/${id}`);
  return movie.json();
}

export default async function MovieInfo({id}: {id:string}) {
  const movie = await getMovieDetail(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}

