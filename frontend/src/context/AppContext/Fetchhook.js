import axios from "axios";

let base_url="http://192.168.56.1:8080/api";

export const addProductTocartBackend= (data)=>axios.post(base_url+"/cart/items",data);



export const orderTheProduct = (data) =>axios.post();