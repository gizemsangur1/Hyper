"use client"; 
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

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
          <div className="containermain">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
