"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState('');

  useEffect(() => {
    const { query } = router;
    const pageQueryParam = parseInt(query.page) || 1;
    const catQueryParam = query.cat || '';
    setPage(pageQueryParam);
    setCat(catQueryParam);
  }, [router.query]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
