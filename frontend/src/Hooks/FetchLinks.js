
import axios from 'axios';


const link = "http://localhost:8080/api/user/data";
export   const sendData =(data) =>  axios.post(link,data);

const url="http://localhost:8080/api/user/loginvalidate";

export const loginData=(data) => axios.post(url,data);


let base_url="http://192.168.56.1:8080/";

export const addProductTocartBackend= (data)=>axios.post(base_url,data);