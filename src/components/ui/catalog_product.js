import React from "react";
import Gallery from "../gallery";
import Price from "./price";
import OldPrice from "../old-price";


function TopProduct({product}) {
  return (
       <section>
         <div style={{ display: "flex" }}>
          <Gallery src={product.src} alt={product.name}/>
          </div>
            <p>
              Цена: <OldPrice  />{" "}
              <Price />
            </p>
            </section>
    );
  }

export default TopProduct;
