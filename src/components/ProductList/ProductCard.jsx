import React from "react";
import styles from "./styles.module.css";

export default function ProductCard({ products, t, mode, currency }) {
  const exchangeRate = 32; 

  return (
    <div className="container">
      <div className="row g-3" style={{ margin: "15px" }}>
        {products.map((product, index) => {
          const convertedPrice =
            currency === "USD"
              ? product.buyPrice
              : (product.buyPrice * exchangeRate).toFixed(2);

          return (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-3">
              <div
                className={`p-3 text-center ${
                  mode === "light" ? styles.lightMode : styles.darkMode
                }`}
                style={{
                  borderRadius: "7px",
                  border: "none",
                  height: "240px",
                  margin: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                }}
              >
                <img
                  src={product?.productData?.productMainImage}
                  alt={product?.productName || "Ürün resmi"}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "120px",
                    objectFit: "contain",
                    borderRadius: "3px",
                  }}
                />
                <a
                  className={mode === "light" ? styles.lightText : styles.darkText}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {product?.productName || "Ürün adı yok"}
                </a>
                <a className={mode === "light" ? styles.lightText : styles.darkText}>
                  {convertedPrice} {currency === "USD" ? "$" : "₺"}
                </a>
                <button
                  className={mode === "light" ? styles.cardButtonLight : styles.cardButtonDark}
                  style={{
                    width: "80%",
                    padding: "3px",
                    borderRadius: "7px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {t("detail")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
