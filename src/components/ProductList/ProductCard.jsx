"use client";
import React from "react";
import { Grid } from "@mui/material";
import { useCartStore } from "@/store/cartStore";
import styles from "./styles.module.css";

export default function ProductCard({ products, t, mode, currency }) {
  const { addToCart } = useCartStore();  
  const exchangeRate = 32;

  const handleAddCart = (product) => {
    addToCart(product);
  };

  return (
    <Grid container spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center" }}>
      {products.map((product, index) => {
        const convertedPrice =
          currency === "USD"
            ? product.buyPrice
            : (product.buyPrice * exchangeRate).toFixed(2);

        return (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <Grid className={`text-center ${mode === "light" ? styles.lightMode : styles.darkMode}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", padding: "10px", borderRadius: "7px", width: "100%", height: "100%" }}>
              <img
                src={product?.productData?.productMainImage}
                alt={product?.productName || "Ürün resmi"}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "120px",
                  objectFit: "contain",
                  borderRadius: "3px",
                }}
              />
              <p className={mode === "light" ? styles.lightText : styles.darkText} style={{ fontWeight: "bold", marginTop: "10px" }}>
                {product?.productName || "Ürün adı yok"}
              </p>
              <p className={mode === "light" ? styles.lightText : styles.darkText}>
                {convertedPrice} {currency === "USD" ? "$" : "₺"}
              </p>
              <Grid sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <button
                  className={mode === "light" ? styles.cardButtonLight : styles.cardButtonDark}
                  style={{
                    padding: "3px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {t("detail")}
                </button>
                <button
                  onClick={() => handleAddCart(product)}  // Sepete ekle
                  className={mode === "light" ? styles.cardButtonLight : styles.cardButtonDark}
                  style={{
                    padding: "3px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {t("add")}
                </button>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
}
