"use client";
import React, { useEffect, useState } from "react";
import { Badge, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Language from "./Language";
import Theme from "./Theme";
import Currency from "./Currency";
import Cart from "./Cart";
import HamburgerMenu from "./HamburgerMenu";
import { useCartStore } from "@/store/cartStore";

export default function Header({ t, onCurrencyChange }) {
  const [action, setAction] = useState("");
  const [clicked, setClicked] = useState(false);
  
  
  const { cartLength, loadCart } = useCartStore();

  const handleHamburger = (action) => {
    setAction(action);
    setClicked(true);
  };

  
  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <Grid container direction="row" sx={{ display: "flex", justifyContent: "space-between" }}>
      <Grid size={{ xs: 10, lg: 2 }} sx={{ textAlign: "center" }}>
        <Logo />
      </Grid>
      <Grid size={{ xs: 2, lg: 0 }} sx={{ display: { xs: "flex", lg: "none" } }} onClick={() => handleHamburger("menu")}>
        <MenuIcon />
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", marginBottom: { xs: "5px", lg: 0 } }}>
        <SearchBar t={t} />
      </Grid>
      <Grid size={{ xs: 0, lg: 4 }} sx={{ display: { xs: "none", lg: "flex" } }}>
        <Grid container direction="row" sx={{ textAlign: "center", height: "46px", alignItems: "center" }}>
          <Grid className="col">
            <Language />
          </Grid>
          <Grid className="col">
            <Theme />
          </Grid>
          <Grid className="col">
            <Currency onCurrencyChange={onCurrencyChange} />
          </Grid>
          <Grid className="col" onClick={() => handleHamburger("cart")}>
            <Badge badgeContent={cartLength} color="primary">
              <Cart />
            </Badge>
          </Grid>
        </Grid>
      </Grid>
      {clicked && (
        <HamburgerMenu action={action} onCurrencyChange={onCurrencyChange} t={t} onClose={() => setClicked(false)} onHamburgerClick={handleHamburger} />
      )}
    </Grid>
  );
}
