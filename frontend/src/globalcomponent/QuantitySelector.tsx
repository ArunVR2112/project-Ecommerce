import React, { useState } from 'react';

interface QuantitySelectorProps {
    onQuantityChange: (quantity: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedQuantity = parseInt(event.target.value);
        setQuantity(selectedQuantity);
        onQuantityChange(selectedQuantity);
    };

    return (
        <select 
            name="quantity" 
            id="quantity" 
            autoComplete="off" 
            tabIndex={0} 
            data-action="a-dropdown-select" 
            className="a-native-dropdown ml-6 a-declarative" 
            value={quantity} 
            onChange={handleChange}
        >
            {[...Array(28).keys()].map(num => (
                <option key={num + 1} value={num + 1}>
                    {num + 1}
                </option>
            ))}
            <option value="" data-a-id="lastQuantityOption">29+</option>
        </select>
    );
};

export default QuantitySelector;
