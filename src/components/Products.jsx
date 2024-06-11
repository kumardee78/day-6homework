export default function Products({
  img,
  title,
  price,
  quant,
  inc,
  dec,
  index,
  rm,
}) {
  return (
    <div style={{ display: "flex",gap:'10rem'}}>
      <div style={{display:'flex'}}>
        <img width="100px" src={img} />
        <div >
          <p>{title}</p>
          <p>${price}</p>
          <button onClick={() => rm(index)}>Remove</button>
        </div>
      </div>
      <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
        <button onClick={() => inc(index)}>+</button>
        <p>{quant}</p>
        <button onClick={() => dec(index)}>-</button>
      </div>
    </div>
  );
}
