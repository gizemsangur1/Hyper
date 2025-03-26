"use client"

import styles from "./page.module.css";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <Header t={t}/>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
