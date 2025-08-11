"use client"

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

// Movie 정보를 담는 인터페이스 정의
interface MovieInfo {
  id: string;    // 영화의 고유 ID
  title: string; // 영화 제목
  poster_path: string;
}
export default function Movie({ id, title, poster_path }: MovieInfo) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}