"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/Menu/Menu';

export default function Home() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const { query } = router;
    const pageQueryParam = parseInt(query.page) || 1;
    setPage(pageQueryParam);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  );
}

