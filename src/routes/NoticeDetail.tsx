import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom"
import { getNoticeDetail } from "../api";
import ProtectedPage from "../components/ProtectedPage";

interface INoticeDetail {
    pk : number ;
    title : string ;
    content : string ;
}

export default function NoticeDetail (){
    const navigate = useNavigate()
    const {noticePk} = useParams()
    const {data , isLoading} = useQuery<INoticeDetail>([`notices`, noticePk], getNoticeDetail, {
        retry : false, 
        onError(){
            navigate("/invoices")
        }
    })

    return (
        <ProtectedPage>
            <Helmet><title>공지사항</title></Helmet>
            {!isLoading ? 
                <Container p={10} m={0} mb={20}>
            
                    <Heading my={7} color={"#59493E"}>
                        {data?.title}
                    </Heading>
                    <Stack bg={"#A49685"} borderWidth={3} borderColor={"#59493E"} m={0} minH={"70vh"} minW={"90vw"} borderRadius={"lg"} padding={5}>
                        {data?.content.split("\n").map(text=><Text color={"white"} as={"b"} border={0}>{text}</Text>)}
                        
                    </Stack>
                </Container>
            :null}
        </ProtectedPage>
    )
}