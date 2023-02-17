import { Stack } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Root(){

    
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />
            <ReactQueryDevtools />
            
        </>
    )
}