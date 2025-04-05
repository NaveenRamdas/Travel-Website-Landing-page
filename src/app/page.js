'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import backgroundImage from "../../public/hero-assets/herobg.svg"; 
import Hero from "./hero";
import Category from "./category";
import TopSelling from "./topSelling";  
import Easy from "./easy";
import Testimonials from "./testimonials";
import Brand from "./brand";
import Sub from "./sub";
import Footer from "./footer";
export default function Home() {
  return (
    <div className={styles.container}>
       <Image
        src={backgroundImage}
        alt="Background Image"
        layout="fill" 
        className ={styles.backgroundImage}
        
      />
     <Header />
     <Hero />
     <Category />
     <TopSelling />
     <Easy />
     <Testimonials />
     <Brand />
     <Sub />
     <Footer />
    </div>
  );
}
