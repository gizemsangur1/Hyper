import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Language from "./Language";
import Theme from "./Theme";
import Currency from "./Currency";
import Cart from "./Cart";

export default function Header({t,onCurrencyChange}) {
  return (
    <div className="container flex justify-content-between" >
      <div className="row">
        <div className="col-2"style={{textAlign:"center",width:"100%"}}>
          <Logo />
        </div>
        <div className="col-6" style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%"}}>
			<SearchBar t={t}/>
		</div>
        <div className="col">
          <div className="row"style={{textAlign:"center",width:"100%",height:"46px",alignItems:"center"}}>
            <div className="col">
				<Language/>
			</div>
            <div className="col">
				<Theme/>
			</div>
            <div className="col">
				<Currency onCurrencyChange={onCurrencyChange}/>
			</div>
            <div className="col">
				<Cart/>
			</div>
          </div>
        </div>
      </div>
    </div>
  );
}
