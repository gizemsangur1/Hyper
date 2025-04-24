"use client";
import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Language from "./Language";
import Theme from "./Theme";
import Currency from "./Currency";
import Cart from "./Cart";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HamburgerMenu from "./HamburgerMenu";

export default function Header({ t, onCurrencyChange }) {
  const [action, setAction] = useState("");
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);

  const handleHamburger = (action) => {
    console.log("clicked action:", action);
    setAction(action);
    setClicked(true);
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    if (clicked) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [clicked]);

  return (
    <Grid
      container
      direction="row"
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
<<<<<<< HEAD
      <Grid size={{ xs: 10, lg: 2 }} sx={{ textAlign: "center" }}>
        <Logo />
      </Grid>
      <Grid
=======
      <Grid item size={{ xs: 10, lg: 2 }} sx={{ textAlign: "center" }}>
        <Logo />
      </Grid>
      <Grid
        item
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
        size={{ xs: 2, lg: 0 }}
        sx={{ display: { xs: "flex", lg: "none" } }}
        onClick={() => handleHamburger("menu")}
      >
        <MenuIcon />
      </Grid>
      <Grid
<<<<<<< HEAD
=======
        item
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
        size={{ xs: 12, lg: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          marginBottom: { xs: "5px", lg: 0 },
        }}
      >
        <SearchBar t={t} />
      </Grid>
      <Grid
<<<<<<< HEAD
=======
        item
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
        size={{ xs: 0, lg: 4 }}
        sx={{ display: { xs: "none", lg: "flex" } }}
      >
        <Grid
          container
          direction="row"
          sx={{ textAlign: "center", height: "46px", alignItems: "center" }}
        >
<<<<<<< HEAD
          <Grid  className="col">
            <Language />
          </Grid>
          <Grid  className="col">
            <Theme />
          </Grid>
          <Grid  className="col">
            <Currency onCurrencyChange={onCurrencyChange} />
          </Grid>
          <Grid  className="col"  onClick={() => handleHamburger("cart")}>
=======
          <Grid item className="col">
            <Language />
          </Grid>
          <Grid item className="col">
            <Theme />
          </Grid>
          <Grid item className="col">
            <Currency onCurrencyChange={onCurrencyChange} />
          </Grid>
          <Grid item className="col"  onClick={() => handleHamburger("cart")}>
>>>>>>> 151db515af080da80601783f5d27a7a2a5686865
            <Cart/>
          </Grid>
        </Grid>
      </Grid>
      {clicked && (
        <HamburgerMenu
          action={action}
          onCurrencyChange={onCurrencyChange}
          t={t}
          onClose={() => setClicked(false)}
          onHamburgerClick={handleHamburger}
        />
      )}
    </Grid>
  );
}
