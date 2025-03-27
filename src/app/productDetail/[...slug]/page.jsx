"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProductList } from "@/app/api/api";
import { useTranslation } from "react-i18next";

const ProductPage = () => {
  const params = useParams();
  const productID = params?.slug?.[0];
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductList();
        const productList = response.data || [];

        setProducts(productList);

        const foundProduct = productList.find((p) => p.productID == productID);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
        setProducts([]);
      }
    };

    fetchData();
  }, [productID]);

  if (!product) {
    return <div>Ürün bulunamadı veya yükleniyor...</div>;
  }
  console.log(product);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={product.productData?.productMainImage}
            alt={product.productName}
          />
        </div>
        <div className="col" style={{ justifyContent: "center" }}>
          <h1>{product.productName}</h1>
          <p>{product.productData.productInfo}</p>
          <h2>Fiyat: {product.buyPrice} ₺</h2>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <button style={{ width: "90%", borderRadius: "7px" }}>
              {t("add")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
