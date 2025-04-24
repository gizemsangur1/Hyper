import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Language from "./Language";
import Theme from "./Theme";
import Cart from "./Cart";
import Currency from "./Currency";
import CancelIcon from '@mui/icons-material/Cancel';

export default function HamburgerMenu({
  action,
  onCurrencyChange,
  t,
  onClose,
  onHamburgerClick,
}) {
  const [title, setTitle] = useState("");
  const [cart, setCart] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const storedCart = JSON.parse(window.localStorage.getItem("cart")) || [];
    setCart(storedCart);
    if (action == "menu") {
      setTitle("menu");
    }
    if (action == "cart") {
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
    
    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  
    
    const updatedCart = cart.filter((item) => item.productID !== product.productID);
  
    
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    
    setCart(updatedCart);
  
    console.log(`Product removed: ${product.productName}`);
  };
  

  console.log(cart);
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
      {action == "cart" && (
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
              <p>Your cart is empty.</p>
            ) : (
              <Grid direction="row">
                {cart.map((item, index) => (
                  <Grid key={index} sx={{display:"flex",justifyContent:"space-between"}}>
                     <p>{item.productName}</p>
                    <CancelIcon  onClick={() => handleCancel(item)}/>
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
