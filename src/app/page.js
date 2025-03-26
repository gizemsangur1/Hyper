"use client"

import styles from "./page.module.css";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from "react";

export default function Home() {
  const { t } = useTranslation();
  const { toggle,mode } = useContext(ThemeContext);
  console.log("page.js",mode)
  return (
    <div className={styles.main} style={mode==="light"? {border:"white",backgroundColor:"white"}:{border:"black",backgroundColor:"black"}}>
      <main className={styles.main}>
          <Header t={t}/>
         
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
