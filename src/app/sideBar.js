// components/Sidebar.js
import React from "react";
import styles from "./page.module.css"; // Define your sidebar styles here
import Link from "next/link";
import downArrow from "../../public/assets/downarrow.svg";
import Image from "next/image";

const Sidebar = ({ headerName, closeSidebar }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.closeButton} onClick={closeSidebar}>
        &times; {/* This is the close "X" */}
      </div>
      <div className={styles.sidebarLinks}>
        {headerName.map((item, index) => (
          <div key={index} className={styles.sidebarLink}>
            <Link href={`/`}>{item}</Link>
          </div>
        ))}
        <div className={styles.sidebarLink}>Login</div>
        <div
          style={{
            border: "1px solid #212832",
            borderRadius: "6px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Sign up
        </div>
        {/* <div>
          EN <span>
            <Image src={downArrow} alt="sign-up" />
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
