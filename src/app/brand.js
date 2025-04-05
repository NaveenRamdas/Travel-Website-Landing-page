import React from "react";
import img1 from "../../public/brands-assets/img1.svg";
import img2 from "../../public/brands-assets/img2.svg";
import img3 from "../../public/brands-assets/img3.svg";
import img4 from "../../public/brands-assets/img4.svg";
import img5 from "../../public/brands-assets/img5.svg";
import Image from "next/image";
import styles from "./page.module.css";  

function Brand() {
  const brandsImg = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
  ];

  const BrandCard = ({ item }) => {
    return (
      <div className={styles.brandCard}>
        <Image
          src={item.img}
          alt="brand-img"
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 350px"
          className={styles.brandImage}  // Apply the class here
        />
      </div>
    );
  };

  return (
    <div className={styles.brandContainer}>
      {brandsImg.map((item, index) => (
        <BrandCard item={item} key={index} />
      ))}
    </div>
  );
}

export default Brand;
