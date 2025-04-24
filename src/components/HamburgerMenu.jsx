import { Grid } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";

import Language from "./Language";
import Theme from "./Theme";
import Cart from "./Cart";
import Currency from "./Currency";
import CancelIcon from '@mui/icons-material/Cancel';
import { useCartStore } from "@/store/cartStore";

export default function HamburgerMenu({
  action,
  onCurrencyChange,
  t,
  onClose,
  onHamburgerClick,
}) {
  const [title, setTitle] = useState("");
  const { cart, removeFromCart } = useCartStore();  
  const menuRef = useRef(null);

  useEffect(() => {
    if (action === "menu") {
      setTitle("menu");
    }
    if (action === "cart") {
      setTitle("cart");
    }
  }, [action]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleCancel = (product) => {
    
    removeFromCart(product);
    
  };

  return (
    <>
      {action === "menu" && (
        <Grid
          ref={menuRef}
          container
          direction="column"
          sx={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: { xs: "45%", sm: "25%" },
            backgroundColor: "#F3F3F3",
            padding: "10px",
            zIndex: "1000",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Theme />
            </Grid>
            <Grid
              xs={12}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Language />
              <p>{t("language")}</p>
            </Grid>

            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Currency onCurrencyChange={onCurrencyChange} />
              <p>{t("currency")}</p>
            </Grid>
            <Grid
              xs={12}
              onClick={() => onHamburgerClick("cart")}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Cart />
              <p>{t("cart")}</p>
            </Grid>
          </Grid>
        </Grid>
      )}
      {action === "cart" && (
        <Grid
          ref={menuRef}
          container
          direction="column"
          sx={{
            position: "fixed",
            right: 0,
            top: 0,
            height: "100vh",
            width: { xs: "45%", sm: "25%" },
            backgroundColor: "#F3F3F3",
            padding: "10px",
            zIndex: "1000",
          }}
        >
          <Grid><h1>{t("cart")}</h1></Grid>
          <Grid container>
            {cart.length === 0 ? (
              <p>{t("emptyCart")}</p> 
            ) : (
              <Grid direction="row">
                {cart.map((item, index) => (
                  <Grid key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <p>{item.productName}</p>
                    <CancelIcon onClick={() => handleCancel(item)} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
