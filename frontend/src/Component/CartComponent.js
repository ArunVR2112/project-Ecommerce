import { Fragment, useContext, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AppContext from '../context/AppContext/AppContext';
import CartProduct from './CartProduct';

export default function CartComponent({ openCart, setOpenCart }) {
    const { cartItems, applyDiscount } = useContext(AppContext);
    const [discount, setDiscount] = useState('');

    const calculateSubtotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    const calculateDiscount = () => {
        if (!discount) return 0;

        if (discount.includes('%')) {
            const percentage = parseFloat(discount.replace('%', ''));
            return (calculateSubtotal() * percentage) / 100;
        }

        if (discount.includes('$')) {
            return parseFloat(discount.replace('$', ''));
        }

        return 0;
    };

    const handleApplyDiscount = () => {
        applyDiscount(discount);
    };

    const subtotal = calculateSubtotal();
    const discountAmount = calculateDiscount();
    const total = subtotal - discountAmount;

    return (
        <Transition.Root show={openCart} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => setOpenCart(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    Cart
                                                </Dialog.Title>
                                                <button
                                                    type="button"
                                                    className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    onClick={() => setOpenCart(false)}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                            {cartItems.length < 1 ? (
                                                <p className="text-center">No Products In The Cart</p>
                                            ) : (
                                                <>
                                                    {cartItems.map((product) => (
                                                        <CartProduct key={product.id} product={product} />
                                                    ))}
                                                    <div className="mt-4">
                                                        <div className="flex justify-between items-center mb-4">
                                                            <p className="text-lg font-bold">Subtotal: ${subtotal.toFixed(2)}</p>
                                                        </div>
                                                        <div className="flex flex-col mb-4">
                                                            <label htmlFor="discount" className="text-sm font-medium text-gray-700">Discount Code</label>
                                                            <input
                                                                id="discount"
                                                                type="text"
                                                                value={discount}
                                                                onChange={(e) => setDiscount(e.target.value)}
                                                                placeholder="Enter discount code"
                                                                className="mt-1 px-2 py-1 border border-gray-300 rounded-md"
                                                            />
                                                            <button
                                                                onClick={handleApplyDiscount}
                                                                className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                                            >
                                                                Apply Discount
                                                            </button>
                                                        </div>
                                                        <div className="flex justify-between items-center mb-4">
                                                            <p className="text-lg font-bold">Discount: ${discountAmount.toFixed(2)}</p>
                                                        </div>
                                                        <div className="flex justify-between items-center mb-4">
                                                            <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
                                                        </div>
                                                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                                            Checkout
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
