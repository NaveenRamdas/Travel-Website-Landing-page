import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import subText from "../../public/category-assets/text.svg";
import img1 from "../../public/category-assets/img1.svg";
import img2 from "../../public/category-assets/img2.svg";
import img3 from "../../public/category-assets/img3.svg";
import img4 from "../../public/category-assets/img4.svg";

function Category() {
  const cardData = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicker longer admire do barton vanity itself do in it.",
      img: img1,
    },
    {
      title: "Best Flights",
      description: "Engrossed listening Part gate sell they west hard for the.",
      img: img2,
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening",
      img: img3,
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers.",
      img: img4,
    },
  ];

  const Card = ({ item }) => {
    return (
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image src={item.img} alt={item.title} width={80} height={80} />
        </div>
        <div className={styles.cardTitle}>{item.title}</div>
        <div className={styles.cardDescription}>{item.description}</div>
      </div>
    );
  };

  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryTitle}>CATEGORY</div>
      <div className={styles.subText}>
        <Image src={subText} alt="text" width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}  />
      </div>
      <div className={styles.cardsContainer}>
        {cardData.map((i, index) => (
          <Card item={i} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Category;
