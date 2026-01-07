import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../componenets/ProductCard';

export default function ShopPage() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-3">
        {product.map((el) => {
          return <ProductCard key={el.id} productImg={el.image} produtName={el.title} productPrice={el.price} />;
        })}
      </div>
    </div>
  );
}
