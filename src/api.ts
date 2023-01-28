import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios"
import Cookie from "js-cookie"
import { IPassword, IVariables } from "./types";


interface IUsernameLogIn{
    username : string; 
    password : string; 
}

const instance = axios.create({baseURL : process.env.NODE_ENV === "development"? "http://127.0.0.1:8000/api/v1/" : "https://songdo.onrender.com/api/v1/", withCredentials:true,})



export const logIn = ({username, password}: IUsernameLogIn) => instance.post(
    `users/login`,   {username , password} , {
        headers : {
            "X-CSRFToken" : Cookie.get("csrftoken") || "",
        }
    }
).then(res=>res.data)
export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);
export const logOut = () => instance.post(`users/logout`,null,{
    headers : {
        "X-CSRFToken" : Cookie.get("csrftoken") || "",
    }
}).then(res=>res.data)
export const changePW = ({oldPW , newPW}: IPassword) =>instance.put(`users/change`, {oldPW, newPW}, {
    headers : {
        "X-CSRFToken" : Cookie.get("csrftoken") || "",
    }
}).then(res=>res.data)


export const getBills = () => instance.get(`invoices/bills`).then(res=>res.data)
export const getBill = ({queryKey} : QueryFunctionContext) => {
    const [_, billPk] = queryKey
    return instance.get(`invoices/bills/${billPk}`).then(res=>res.data)
}
export const getInvoices = ({queryKey}:QueryFunctionContext) => {
    const [_, pageNum] = queryKey
    return instance.get(`invoices/pages?page=${pageNum}`).then(res=>res.data)
}
export const getInvoiceDetail = ({queryKey}: QueryFunctionContext) => {
    const [_, invocePk] = queryKey
    return instance.get(`invoices/${invocePk}`).then(res=>res.data)
}


export const getNotices = () => instance.get(`notices/`).then(res=>res.data)
export const getNoticeDetail = ({queryKey}:QueryFunctionContext) => {
    const [_, noticePk] = queryKey
    return instance.get(`notices/${noticePk}`).then(res=>res.data)
}

export const getAdminInvoices = () => instance.get(`invoices/admin`).then(res=>res.data)
export const getCustInfo =()=> instance.get(`informations/customer`).then(res=>res.data)
export const getBilling =({queryKey}:QueryFunctionContext)=> {
    const [_,custNum, billYm]= queryKey
    return instance.get(`informations/check?custNo=${custNum}&bill_ym=${billYm}`).then(res=>res.data)
}