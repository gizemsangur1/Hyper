"use client"

import styles from "./page.module.css";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import { ThemeContext } from '@/context/ThemeContext';
import { useContext, useEffect, useState } from "react";
import ProductsPage from "@/components/ProductList/Products";



export default function Home() {
  const { t } = useTranslation();
  const { toggle,mode } = useContext(ThemeContext);
  const [currency, setCurrency] = useState("USD");
 
  return (
    <div className={styles.main} style={mode==="light"? {border:"white",backgroundColor:"white"}:{border:"black",backgroundColor:"black"}}>
      <main className={styles.main}>
          <Header t={t} onCurrencyChange={setCurrency} />
          <ProductsPage t={t} mode={mode} currency={currency}/>
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
