import React from 'react';
import img1 from "../../public/assets/facebook.png";
import img2 from "../../public/assets/insta.png";
import img3 from "../../public/assets/x.png";
import img4 from "../../public/assets/gplay.png";
import img5 from "../../public/assets/apple.png";
import Image from 'next/image';
import styles from './page.module.css';  // Importing the CSS module

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMaxWidthContainer}>
        <div className={styles.footerGrid}>
          <div>
            <h3 className={styles.footerSectionTitle}>Jadoo.</h3>
            <p className={styles.footerSectionText}>Book your trip in minutes, get full control for much longer.</p>
          </div>
          <div>
            <h4 className={styles.footerSubheading}>Company</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>About</a>
              <a href="#" className={styles.footerLink}>Careers</a>
              <a href="#" className={styles.footerLink}>Mobile</a>
            </div>
          </div>
          <div>
            <h4 className={styles.footerSubheading}>Contact</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Help/FAQ</a>
              <a href="#" className={styles.footerLink}>Press</a>
              <a href="#" className={styles.footerLink}>Affiliates</a>
            </div>
          </div>
          <div>
            <h4 className={styles.footerSubheading}>More</h4>
            <div className={styles.footerLinks}>
              <a href="#" className={styles.footerLink}>Airline Fees</a>
              <a href="#" className={styles.footerLink}>Airline</a>
              <a href="#" className={styles.footerLink}>Low Fare Tips</a>
            </div>
          </div>
          <div>
            <div className={styles.footerSocialIcons}>
              <a href="#" className={styles.footerSocialIconLink}>
                <Image src={img1} alt='facebook' />
              </a>
              <a href="#" className={styles.footerSocialIconLink}>
                <Image src={img2} alt='insta' />
              </a>
              <a href="#" className={styles.footerSocialIconLink}>
                <Image src={img3} alt='x' />
              </a>
            </div>
            <p className={styles.footerAppDownloadTitle}>Discover our app</p>
            <div className={styles.footerAppIcons}>
              <a href="#">
                <Image src={img4} alt="Google Play" className={styles.footerAppIcon} />
              </a>
              <a href="#">
                <Image src={img5} alt="App Store" className={styles.footerAppIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p className={styles.footerCopyrightText}>All rights reserved @jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
