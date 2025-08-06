import React, { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/moive-videos';

export default async function MovieDetail({
  params,
  searchParams
}: {
  params: Promise<{ id: string }>,
  searchParams: Promise<{ region?: string }>
}) {
  const id = (await params).id;

  return (
    <div>
      <Suspense fallback={<h1>Loading Movie info....</h1>}>
        <MovieInfo id={id}/>
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}