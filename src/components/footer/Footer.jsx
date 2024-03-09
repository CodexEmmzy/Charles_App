import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.jpg" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>CharlesBlog</h1>
        </div>
        <p className={styles.desc}>
        Welcome to Charles' Blog, your ultimate destination for inspiration, 
        knowledge, and exploration. Dive into a diverse array of topics ranging 
        from travel and culture to food and fashion. With engaging stories, insightful articles, 
        and innovative ideas, our blog invites you to embark on a journey of discovery and personal growth. 
        Whether you're seeking practical tips, thought-provoking insights, or simply a moment of inspiration, 
        Charles' Blog offers something for everyone. Join our vibrant community 
        and unlock a world of endless possibilities. 
        Start exploring today and let your imagination soar!
        </p>
        <div className={styles.icons}>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
