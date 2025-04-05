import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import subEasyText from "../../public/easy-assets/text.svg";

import img2 from "../../public/easy-assets/img2.svg";
import img3 from "../../public/easy-assets/img3.svg";
import img4 from "../../public/easy-assets/img4.svg";
import img5 from "../../public/easy-assets/img5.svg";

function Easy() {
  const data = [
    {
      title: "Choose Destination",
      text: "Loren ipsum dolor sit amet, consectetur adipiscing elit, Urna totot tempus,",
      img: img2,
    },
    {
      title: "Make Payment",
      text: "Loren ipsum dolor sit amet, consectetur adipiscing elit, Urna totot tempus,",
      img: img3,
    },
    {
      title: "Reach Airport on Selected Date",
      text: "Loren ipsum dolor sit amet, consectetur adipiscing elit, Urna totot tempus,",
      img: img4,
    },
  ];

  const KeysCard = ({ item }) => {
    return (
      <div className={styles.easycard}>
        <div>
          <Image src={item.img} width={0} height={0} alt={item.img} />
        </div>
        <div>
          <div className={styles.easycardtext}>{item.title}</div>
          <div className={styles.easycarddescription}>{item.text}</div>
        </div>
      </div>
    );
  };

  const EasyComponent = () => {
    return (
      <div className={styles.easycomponent}>
        <div className={styles.easycomponentheader}>
          <Image src={img5} alt="Trip to Greece" width={0} height={0}
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}  />
        </div>
        <div style={{ padding: "15px" }}>
          <h5 className={styles.easycomponenttitle}>Trip To Greece</h5>
          <p className={styles.easycomponentsubtitle}>
            14-29 June | by Robbin Jo
          </p>
          <div className={styles.easycomponenticons}>
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ fontSize: "1rem", color: "#777" }}>🌿</span>
              <span style={{ fontSize: "1rem", color: "#777" }}>🗺️</span>
              <span style={{ fontSize: "1rem", color: "#777" }}>✈️</span>
            </div>
          </div>
          <div className={styles.easycomponentfooter}>
            <p className={styles.easycomponentfootertext}>
              <span style={{ marginRight: "4px" }}>🏢</span> 24 people going
            </p>
            <span className={styles.easycomponentfooterheart}>💙</span>
          </div>
        </div>

        <div className={styles.easycomponentongoing}>
          <Image
            src={img2}
            alt="Trip to Rome"
            width={40}
            height={40}
            className={styles.easycomponentongoingimg}
          />
          <div className={styles.easycomponentongoingtext}>
            <p className={styles.easycomponentongoingstatus}>Ongoing</p>
            <h6 className={styles.easycomponentongoingtitle}>Trip to Rome</h6>
            <p className={styles.easycomponentongoingstatus}>40% completed</p>
            <div className={styles.easyprogressbar}>
              <div></div>
            </div>
          </div>
        </div>

        <div className={styles.easyMobcomponentongoing}>
          <Image
            src={img2}
            alt="Trip to Rome"
            width={0}
            height={0}
            className={styles.easycomponentongoingimg}
          />
          <div className={styles.easycomponentongoingtext}>
            <p className={styles.easycomponentongoingstatus}>Ongoing</p>
            <h6 className={styles.easycomponentongoingtitle}>Trip to Rome</h6>
            <p className={styles.easycomponentongoingstatus}>40% completed</p>
            <div className={styles.easyprogressbar}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.easycontainer}>
      <div className={styles.easyleft}>
        <div className={styles.easytext}>Easy and Fast</div>
        <div className={styles.easytextsub}>
          <Image
            src={subEasyText}
            width={0}
            height={0}
            alt="img"
            sizes="(max-width: 768px) 100vw, 550px"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {data?.map((item, index) => (
          <KeysCard item={item} key={index} />
        ))}
      </div>
      <div className={styles.easyComp}>
        <EasyComponent />
      </div>
    </div>
  );
}

export default Easy;
