
function Navbar({products}) {
  return (
    <div
      style={{
        backgroundColor: "dodgerblue",
        color: "white",
        textAlign: "right",
        padding: '0.8rem',
        position:'relative',
        
      }}
    >
      <h1 style={{paddingTop:'1rem'}}>My Cart</h1>
      <span style={{position:'absolute',top:'0.3rem', right:'1.5rem', background:'red', borderRadius:'1rem', padding:'0 0.5rem'}}>{products.length}</span>
    </div>
  );
}

export default Navbar;
