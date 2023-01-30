import { Container, Grid, Heading } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getInvoices, getNotices } from "../api"
import Invoice from "../components/Invoice"
import Notice from "../components/Notice"
import ProtectedPage from "../components/ProtectedPage"
import { IInvoice, INotice } from "../types"



export default function Invoices (){
    const [pageNum, setPageNum] = useState(1)
    const {data:NoticeData, isLoading:NoticeLoading} = useQuery<INotice[]>([`notices`], getNotices)
    const {data:InvoiceData ,isLoading:InvoiceLoading} = useQuery<IInvoice[]>([`invoices`,pageNum], getInvoices, {
        retry: false
    })

    return (
        <ProtectedPage>
            {
                NoticeLoading && InvoiceLoading ? null :
                <>
                <Container pt={30} px={{base : 0,sm:20, md:50}} minW={"100vw"} >
                    <Grid templateColumns={"1fr"} borderRadius={"xl"} padding={5} bg={"#7E6955"}>
                    <Heading color={"gray.200"} fontSize={"lg"} mb={3}>공지사항</Heading>
                        {NoticeData?.map(notice => <Notice key={notice.pk} pk={notice.pk} title={notice.title} />)}   
                    </Grid>
                </Container>
                <Container py={30} px={{base : 0,sm:20, md:50}} minW={"100vw"}  >
                    <Grid templateColumns={"1fr"} borderRadius={"xl"} padding={5} bg={"#F8F6EF"}>
                    <Heading color={"#7E6955"} fontSize={"lg"} mb={3}>이용내역</Heading>
                        {InvoiceData?.map(invoice => <Invoice key={invoice.pk} pk={invoice.pk} bill={invoice.bill} is_payed={invoice.is_payed} />)}
                    </Grid>
                </Container>
                </>
            }
        </ProtectedPage>
    )
}