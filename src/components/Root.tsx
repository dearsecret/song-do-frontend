import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root(){

    
    return (
        <>
            <Header/>
            <Outlet/>
            <ReactQueryDevtools />
        </>
    )
}