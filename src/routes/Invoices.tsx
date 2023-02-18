import { Box, Container, Grid, Heading, Skeleton, Text, VStack } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { getInvoices, getNotices } from "../api"
import Invoice from "../components/Invoice"
import Notice from "../components/Notice"
import ProtectedPage from "../components/ProtectedPage"
import { IInvoice, INotice } from "../types"



export default function Invoices (){
    const [pageNum, setPageNum] = useState(1)
    const {data:NoticeData, isLoading:NoticeLoading} = useQuery<INotice[]>([`notices`], getNotices)
    const {data:InvoiceData ,isLoading:InvoiceLoading} = useQuery<IInvoice[]>([`invoices`], getInvoices, {
        retry: false
    })

    return (
        <ProtectedPage>
            <Helmet><title>이용내역</title></Helmet>
                <Container pt={30} px={{base : 0, md:50}} minW={"100vw"}>
                    <Grid templateColumns={"1fr"} p={0}  bg={"#F8F6EF"} borderTopWidth={1} borderColor={"#7E6955"}>
                        {!NoticeLoading? 
                            NoticeData?.map(notice => <Notice key={notice.pk} pk={notice.pk} title={notice.title} />) 
                            :
                            [1,2,3].map(idx=><Skeleton key={idx} borderBottomWidth={1} p={5}/> )
                        }   
                    </Grid>
                </Container>
                <Container py={30} px={{base : 0, md:50}} minW={"100vw"}>
                    <Grid templateColumns={"1fr"} padding={{base:3, sm:6}} bg={"#F8F6EF"} borderTopWidth={1} borderColor={"#7E6955"} >
                    <VStack as="b"  color={"white"} bg={"#A49685"} fontSize={"md"} mb={5} borderRadius={"sm"}>
                        <Text>이용내역</Text>
                    </VStack>
                        {!InvoiceLoading? 
                            InvoiceData?.map(invoice => <Invoice key={invoice.pk} pk={invoice.pk} bill={invoice.bill} is_payed={invoice.is_payed} contract={invoice.contract} />) 
                            :
                            [1,2,3,4,5,6].map(idx=><Skeleton key={idx} borderBottomWidth={1} p={5}/>)
                        }
                    </Grid>
                </Container>
        </ProtectedPage>
    )
}