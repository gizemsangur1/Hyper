"use client";

import "./globals.css";
import { ThemeProvider, ThemeContext } from "@/context/ThemeContext";
import Header from "@/components/Header";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" data-bs-theme="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}

function LayoutContent({ children }) {
  const { t } = useTranslation();
  const { toggle, mode } = useContext(ThemeContext);
  const [currency, setCurrency] = useState("USD");

  return (
    <>
      <Header t={t} onCurrencyChange={setCurrency} />
      <div className="containermain">{children}</div>
    </>
  );
}
