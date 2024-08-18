import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../Component/ProductCard';

const SearchResultsPage = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search).get('query');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                // Filter products based on the search query
                const filteredProducts = data.filter(product =>
                    product.title.toLowerCase().includes(query.toLowerCase())
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query]);

    return (
        <div className='ml-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
            {loading ? "Fetching Data....." : (
                products.length > 0 ? (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found for "{query}"</p>
                )
            )}
        </div>
    );
};

export default SearchResultsPage;
