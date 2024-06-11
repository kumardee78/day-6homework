import { useEffect, useState } from "react";
import data from "./products";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState(data);

  const [total, setTotal] = useState(0);

  function increaseQuantity(index) {
    let temp = [...products];
    temp[index].quantity += 1;
    setProducts(temp);
  }

  function deccreaseQuantity(index) {
    let temp = [...products];
    if (temp[index].quantity > 1) {
      temp[index].quantity -= 1;
      setProducts(temp);
    } else {
      removeProduction(index);
    }
  }

  function removeProduction(index) {
    let temp = products.filter((item, idx) => {
      if (idx != index) return item;
    });

    setProducts(temp);
  }

  useEffect(() => {
    let sum = 0;
    products.forEach((item, index) => {
      sum += item.price * item.quantity;
    });
    setTotal(sum);
  }, [products]);

  return (
    <div>
      <Navbar products={products} />

      {products.length > 0 ? (
        <div style={{padding:"1rem 1rem"}}>
          <h1 style={{padding:'1rem 0',textAlign:'center', fontSize:'1.5rem'}}>Your Bag</h1>
          {products.map((item, index) => {
            return (
              <Products
                key={index}
                img={item.img}
                title={item.title}
                price={item.price}
                quant={item.quantity}
                inc={increaseQuantity}
                dec={deccreaseQuantity}
                index={index}
                rm={removeProduction}
              />
            );
          })}

          <h3 style={{ padding: "1rem 0rem" }}>Total Price: {total}</h3>
          <p style={{ width: "60%", margin: "0 auto",display:'flex',justifyContent:'center' }}>
            <button
              onClick={() => setProducts([])}
              style={{
                background: "lightblue",
                padding: "0.5rem 1rem",
                borderRadius: "0.4rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Clear Cart
            </button>
          </p>
        </div>
      ) : (
        <p
          style={{
            padding: "5rem 3rem",
            fontWeight: "bold",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          There is no item in your bag
        </p>
      )}
    </div>
  );
}

export default App;
