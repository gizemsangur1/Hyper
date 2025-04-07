"use client";

import React from "react";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();

  return (
    <div
      className="input-group"
      style={{
        width: "80%",
        backgroundColor: "#F3F3F3",
        borderRadius: "7px",
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        style={{
          backgroundColor: "transparent",
          border: "none",
          height: "40px",
          color: "white",
        }}
      />
      <span className="input-group-text" style={{ backgroundColor: "transparent", border: "none" }}>
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
  );
}
