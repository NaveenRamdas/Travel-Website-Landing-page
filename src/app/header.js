// components/Header.js
import React, { useState } from "react";
import styles from "./page.module.css";
import logo from "../../public/topNav-assets/Logo.svg";
import Sidebar from "./sideBar.js";
import Image from "next/image";
import downArrow from "../../public/assets/downarrow.svg";

function Header() {
  const headerName = ["Destinations", "Hotels", "Flights", "Bookings"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div className={styles.topNavContainer}>
      <div className={styles.imgContainer}>
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>

      {/* Desktop Navigation */}
      <div className={styles.topNav}>
        {headerName.map((i, index) => {
          return (
            <div key={index}>
              <ul>{i}</ul>
            </div>
          );
        })}
        <div>Login</div>
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
        <div>
          EN{" "}
          <span>
            <Image src={downArrow} alt="sign-up" />
          </span>
        </div>
      </div>

      {/* Mobile Navigation (Hamburger) */}
      <div className={styles.mobTopNav}>
        <div className={styles.hamburger} onClick={toggleSidebar}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Render Sidebar when hamburger is clicked */}
        
        {isSidebarOpen && <Sidebar headerName={headerName} closeSidebar={closeSidebar} />}
      </div>
    </div>
  );
}

export default Header;
