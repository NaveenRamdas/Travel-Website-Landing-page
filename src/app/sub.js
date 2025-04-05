import React from "react";
import img1 from "../../public/assets/sub.png";
import img2 from "../../public/assets/send.png";
import img3 from "../../public/assets/email.png";
import Image from "next/image";
import styles from "./page.module.css";  // Importing the CSS module

function Sub() {
  return (
    <div className={styles.subContainer}>
      <div className={styles.subBgContainer}>
        <Image src={img1} width={0} height={0}   alt="img"
          sizes="(max-width: 768px) 100vw, 550px"
          style={{ width: "100%", height: "100%" }} />
        
        {/* Send Icon */}
        <div className={styles.subSendIcon}>
          <Image src={img2} width={0} height={0} alt="send"  sizes="(max-width: 768px) 100vw, 550px"
          style={{ width: "100%", height: "100%" }}  />
        </div>

        {/* Main Title */}
        <div className={styles.subTitle}>
          <div>Subscribe to get information, latest news and other interesting offers about Jadoo</div>
       

          {/* Email Input and Subscribe Button */}
          <div className={styles.subInputContainer}>
            {/* Email Input */}
            <div className={styles.subEmailInputContainer}>
              <Image 
                src={img3} 
                alt="mail" 
                style={{ position: "absolute", left: 10, top: 12, width: 24, height: 24 }} 
              />
              <input 
                className={styles.subEmailInput} 
                placeholder="Your email" 
              />
            </div>

            {/* Subscribe Button */}
            <div className={styles.subSubscribeButton}>
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub;
