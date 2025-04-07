"use client";

import { fetchProductListWithOutPage } from "@/app/api/api";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchBar() {
  const { t } = useTranslation();
  const [search, setSearch] = useState(false);
  const [word, setWord] = useState("");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value.trim().length > 0);
    setWord(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchAndFilter = async () => {
      if (word.trim().length > 3) {
        setIsLoading(true);
        try {
          const response = await fetchProductListWithOutPage();
          const products = response.data || [];

          const filtered = products.filter((item) =>
            item.productName?.toLowerCase().includes(word.toLowerCase())
          );

          setResults(filtered);
        } catch (error) {
          console.error("Arama sırasında hata oluştu:", error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsLoading(false);
      }
    };

    fetchAndFilter();
  }, [word]);

  const totalPages = Math.ceil(results.length / itemsPerPage);
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ width: "80%", position: "relative" }}>
      <div
        className="input-group"
        style={{
          backgroundColor: "#F3F3F3",
          borderRadius: "7px",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={handleSearchChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            height: "40px",
            color: "black",
          }}
        />
        <span
          className="input-group-text"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#9ACBD0"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
      </div>

      {search && (
        <div
          style={{
            marginTop: "8px",
            position: "absolute",
            zIndex: 999,
            backgroundColor: "white",
            borderRadius: "7px",
            width: "100%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        >
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "10px" }}>
              <ClipLoader color="#9ACBD0" size={35} />
            </div>
          ) : results.length > 0 ? (
            <>
              {paginatedResults.map((item) => (
                <p key={item.productID} style={{ margin: "5px 0" }}>
                  {item.productName}
                </p>
              ))}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      padding: "4px 8px",
                      backgroundColor:
                        currentPage === i + 1 ? "#9ACBD0" : "#f0f0f0",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontWeight: currentPage === i + 1 ? "bold" : "normal",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          ) : (
            word.length > 3 && <p style={{ margin: 0 }}>Sonuç bulunamadı.</p>
          )}
        </div>
      )}
    </div>
  );
}
