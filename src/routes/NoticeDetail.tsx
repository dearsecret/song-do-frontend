import { Container, Heading, Stack, Text, VStack } from "@chakra-ui/react";
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
                <Container  minW={"100%"} mt={6}  >
                    <Stack direction={"row"} spacing={5} bg={"#F8F6EF"} p={3} borderTopWidth={2} borderColor={"#7E6955"}>
                        <VStack justifyContent={"center"} bg={"#A49685"} color={"white"} textAlign={"center"} borderRadius={"lg"} w={"10"} fontSize={"xs"} as="b">
                            <Text>공지</Text>
                        </VStack>
                        <Text color={"blackAlpha.600"} fontSize={"md"} noOfLines={1}>{data?.title}</Text>
                    </Stack>
                    
                    <Stack m={0} minH={"70vh"} minW={"90vw"} py={5} px={10} bg={"gray.50"} spacing={0}>
                        {data?.content.split("\n").map(text=><Text color={"blackAlpha.600"}>{text}</Text>)}
                        
                    </Stack>
                </Container>
            :null}
        </ProtectedPage>
    )
}