import React, { useEffect, useState } from "react";

const Order: React.FC = () => {
    const apiUrl = 'https://fakestoreapi.com/products/';

    let [product, setProduct] = useState<any[]>([]);

    async function getDetails() {
        let response = await fetch(apiUrl + 2);
        let data = await response.json();
        setProduct([data]); // Wrapping in an array to handle as an array
    }

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <div className='lg:ml-60 items-center mt-16'>
            <div className='w-full overflow-hidden mb-8'>

                <div className="grid grid-cols-4 w-full gap-4 p-4 border-b font-bold">
                    <div>Image</div>
                    <div>Title</div>
                    <div>Price</div>
                    <div>Status</div>
                </div>

                {product.map((data) => (
                    <div key={data.id} className="grid grid-cols-4 w-full gap-4 p-4 border-b">
                        <img src={data.image} className="h-24 object-contain" alt={data.title} />
                        <h1 className="text-xl font-semibold">{data.title}</h1>
                        <p className="text-lg font-bold">${data.price}</p>
                        <p className="text-lg">Available</p> {/* Assuming status is available */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
