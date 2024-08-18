import React, { useEffect, useState } from 'react';
import ProductCard from '../Component/ProductCard';

const HomePage = () => {
  const apiUrl = 'https://fakestoreapi.com/products/';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllResponses() {
    setLoading(true);
    let response = await fetch(apiUrl);
    let data = await response.json();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getAllResponses();
  }, []);

  return (
    <div className='mt-8 mb-8 ml-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
      {loading ? "Fetching Data....." : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default HomePage;
