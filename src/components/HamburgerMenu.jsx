import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Language from "./Language";
import Theme from "./Theme";
import Cart from "./Cart";
import Currency from "./Currency";

export default function HamburgerMenu({
  action,
  onCurrencyChange,
  t,
  onClose,
  onHamburgerClick,
}) {
  const [title, setTitle] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    if (action == "menu") {
      setTitle("menu");
    }if(action=="cart"){
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
  console.log(action);
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
              xs={12}
              sx={{ display: "flex", justifyContent: "space-around" }}
            >
              <Language />
              <p>{t("language")}</p>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Currency onCurrencyChange={onCurrencyChange} />
              <p>{t("currency")}</p>
            </Grid>
            <Grid
              item
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
          }}
        >
          <Grid>{t("cart")}</Grid>
		  
        </Grid>
      )}
    </>
  );
}
