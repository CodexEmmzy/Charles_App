import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Charles' Blog</b>
      </h1>
      <h3>
      Embark on a journey through captivating stories, insightful articles, 
      and innovative ideas on Charles' Blog. From technology to lifestyle, 
      travel to personal development, there's something for everyone. 
      Start exploring today and discover a treasure trove of inspiration!      
      </h3>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Embracing Simplicity: Finding Joy in Minimalism</h1>
          <p className={styles.postDesc}>
          In a world filled with noise and clutter, embracing simplicity can be a breath of fresh air. 
          Minimalism isn't just about decluttering our physical spaces; 
          it's a mindset that encourages us to focus on what truly matters in life. 
          By simplifying our surroundings, we create room for clarity, peace, and fulfillment. 
          From adopting a minimalist wardrobe to downsizing our possessions, each step towards 
          simplicity brings us closer to a life of intentionality and contentment.
          In today's fast-paced world, finding moments of peace and serenity can seem like a challenge. 
          However, practicing mindfulness offers a powerful antidote to the chaos around us. 
          By tuning into the present moment with curiosity and non-judgment, we cultivate a deeper sense 
          of awareness and connection to ourselves and the world around us. 
          </p>
          {/* <button className={styles.button}>Read More</button> */}
        </div>
      </div>
    </div>
  );
};

export default Featured;
