import React, { Suspense } from 'react';
import MovieInfo, { getMovieDetail } from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export async function generateMetadata({params} : {params: Promise<{ id: string }>}){
  const id = (await params).id;
  const movie = await getMovieDetail(id);
  return {
    title: movie.title
  }
}

export default async function MovieDetail({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>,
  searchParams: Promise<{ region?: string }>
}) {
  const id = (await params).id;
  // await new Promise((resolve)=> setTimeout(resolve, 5000));

  return (
    <div>
      <Suspense fallback={<h1>fallback  111....</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>fallback  222...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}