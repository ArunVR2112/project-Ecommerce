import { useContext, useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";
import { addProductTocartBackend } from './Fetchhook';
import { DataContext } from '../dataContext/DataContext.tsx';

export default function AppState({ children }) {
  const [data, setData] = useState({
    cartItemId: "",
    itemQuantity: "",
    price: 0,
    createDateTime: "",
    userInfo: {
      userinfoid: 0
    }
  });

  const { user } = useContext(DataContext);
  const [cartItems, setCartItems] = useState([]);
  const [wishListItem, setWishListItem] = useState([]);

  const addProductToCart = (product, date) => {
    const validDate = date instanceof Date && !isNaN(date) ? date : new Date();

    const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct && user.status === 200) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );

      setData({
        cartItemId: product.id,
        itemTitle: product.title,
        itemQuantity: product.itemQuantity,
        price: product.price,
        createDateTime: validDate.toISOString(),
        userInfo: {
          userinfoid: user.data.userinfoid
        }
      });

      addProductTocartBackend(data).then((result) => {
        setCartItems(updatedCart);
        toast.success("Product added to Cart");
      }).catch((err) => {
        console.log(err);
        toast.error("There was an error from the backend");
      });

    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cartItems.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartItems(updatedCart);
    toast.success("Product Quantity Changed");
  };

  const removeProductFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
    toast.success("Item Removed From Cart");
  };

  const logInFirst = () => {
    toast.success("Log IN to Account");
  };

  const greetUser = () => {
    console.log("Hey!! How are you??");
  };

  const addProductToWishList = (product) => {
    const exisitingProduct = wishListItem.find((p) => p.id === product.id);
    if (exisitingProduct) {
      const updatedWishList = wishListItem.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );
      setWishListItem(updatedWishList);
      toast.success("Product added to WishList");
    } else {
      setWishListItem([...wishListItem, { ...product, quantity: 1 }]);
    }
  };

  const removeProductFromWishList = (product) => {
    const updatedWishListItem = wishListItem.filter((item) => item.id !== product.id);
    setWishListItem(updatedWishListItem);
    toast.success("Item Removed From WishList");
  };

  const handleQuantityChangeWishList = (productId, newQuantity) => {
    const updatedWishListItem = wishListItem.map(product =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setWishListItem(updatedWishListItem);
    toast.success("Product Quantity Changed in WishList");
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishListItem,
        addProductToWishList,
        greetUser,
        addProductToCart,
        removeProductFromCart,
        handleQuantityChange,
        removeProductFromWishList,
        handleQuantityChangeWishList,
        logInFirst
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
