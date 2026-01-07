export default function ProductCard({ productImg, produtName, productPrice }) {
  return (
    <div className="card bg-gray-500 shadow-sm">
      <figure>
        <img src={productImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{produtName}</h2>
        <p>Price : {productPrice}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
