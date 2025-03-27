
import { fetchProductList } from "@/app/api/api";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsPage({t,mode,currency}) {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductList();
        console.log("API Yanıtı:", response);

        setProducts(response.data || []);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
        setProducts([]); 
      }
    };
    fetchData();
  }, []);

  return (
    <div className="contaianer">
      
      {products.length > 0 ? (
        <ProductCard products={products} t={t} mode={mode} currency={currency}/>
  
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  );
}
