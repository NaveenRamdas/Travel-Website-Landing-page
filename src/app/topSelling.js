import React from "react";
import Image from "next/image";
import styles from "./page.module.css"; // Importing the CSS file
import subSellingText from "../../public/topselling-assets/text.svg";
import img1 from "../../public/topselling-assets/img1.jpg";
import img2 from "../../public/topselling-assets/img2.jpg";
import img3 from "../../public/topselling-assets/img3.jpg";
import img4 from "../../public/topselling-assets/img4.svg";

function TopSelling() {
  const cardData = [
    {
      title: "Roman, Italy",
      count: "$5.42k",
      img: img1,
      day: "10 Days Trip",
    },
    {
      title: "London, UK",
      count: "$4.2k",
      img: img2,
      day: "12 Days Trip",
    },
    {
      title: "Full Europe",
      count: "$15k",
      img: img3,
      day: "28 Days Trip",
    },
  ];

  const SellingCard = ({ item }) => {
    return (
      <div className={styles.sellingCard}>
        <div className={styles.sellingCardImage}>
          <Image
            src={item.img}
            alt={item.title}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 350px"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className={styles.sellingCardDetails}>
          <div className={styles.sellingCardTitle}>{item.title}</div>
          <div className={styles.sellingCardPrice}>{item.count}</div>
        </div>
        <div className={styles.sellingCardFooter}>
          <Image src={img4} width={25} height={20} alt="send" />
          {item.day}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.topSellingContainer}>
      <div className={styles.topSellingHeader}>Top Selling</div>
      <div className={styles.subText}>
        <Image src={subSellingText} width={0}
            height={0}
            alt="text"
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}/>
      </div>
      <div className={styles.cardsContainer}>
        {cardData.map((i, index) => (
          <SellingCard item={i} key={index} />
        ))}
      </div>
    </div>
  );
}

export default TopSelling;
