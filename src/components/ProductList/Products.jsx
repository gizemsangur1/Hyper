import { fetchProductList } from "@/app/api/api";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./styles.module.css";
import Loading from "./loading";

export default function ProductsPage({ t, mode, currency }) {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [page, setPage] = useState(0); 
  const [totalProducts, setTotalProducts] = useState(0);
  const limit = 20; 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchProductList(page, limit);
        setProducts(response.data || []);
        setTotalProducts(440);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
        setProducts([]);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(totalProducts / limit); 

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : products.length > 0 ? (
        <>
          <ProductCard products={products} t={t} mode={mode} currency={currency} />
          
          <div className="pagination" style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"}}>
            <button className={mode === "light" ? styles.cardButtonLight : styles.cardButtonDark} disabled={page === 0} onClick={() => setPage(page - 1)} style={{width:"15%",marginRight:"10px"}}>← Önceki</button>
            <span>Sayfa {page + 1} / {totalPages}</span>
            <button className={mode === "light" ? styles.cardButtonLight : styles.cardButtonDark} disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)} style={{width:"15%",marginLeft:"10px"}}>Sonraki →</button>
          </div>
        </>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  );
}
