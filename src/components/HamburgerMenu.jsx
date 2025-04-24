import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Language from "./Language";
import Theme from "./Theme";
import Cart from "./Cart";
import Currency from "./Currency";
<<<<<<< HEAD
import CancelIcon from '@mui/icons-material/Cancel';
=======
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865

export default function HamburgerMenu({
  action,
  onCurrencyChange,
  t,
  onClose,
  onHamburgerClick,
}) {
  const [title, setTitle] = useState("");
<<<<<<< HEAD
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
=======
  const menuRef = useRef(null);

  useEffect(() => {
    if (action == "menu") {
      setTitle("menu");
    }if(action=="cart"){
		setTitle("cart");
	}
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
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
<<<<<<< HEAD

  const handleCancel = (product) => {
    
    let cart = JSON.parse(window.localStorage.getItem("cart")) || [];
  
    
    const updatedCart = cart.filter((item) => item.productID !== product.productID);
  
    
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  
    
    setCart(updatedCart);
  
    console.log(`Product removed: ${product.productName}`);
  };
  

  console.log(cart);
=======
  console.log(action);
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
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
<<<<<<< HEAD
            zIndex: "1000",
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Theme />
            </Grid>
            <Grid
=======
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Theme />
            </Grid>
            <Grid
              item
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
              xs={12}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Language />
              <p>{t("language")}</p>
            </Grid>

<<<<<<< HEAD
            <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
=======
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
              <Currency onCurrencyChange={onCurrencyChange} />
              <p>{t("currency")}</p>
            </Grid>
            <Grid
<<<<<<< HEAD
=======
              item
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
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
<<<<<<< HEAD
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
=======
          }}
        >
          <Grid>{t("cart")}</Grid>
		  
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
        </Grid>
      )}
    </>
  );
}
