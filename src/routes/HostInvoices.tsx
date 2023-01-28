import { Container, Grid, GridItem, InputGroup, InputLeftAddon, HStack, Select, Button, Text, Flex } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { getBilling, getCustInfo } from "../api"
import StaffOnlyPage from "../components/StaffOnlyPage"
import { formatDate } from "../lib/utils"
import { CustNo } from "../types"




export default function HostInvoices(){
    const {data:custNoLists, isLoading:menuLoading} = useQuery<CustNo[]>([`custInfo`] , getCustInfo)
    const dateArr = formatDate(6)

    const {register :searchReg , watch} = useForm()
    const {custNo, billYm} = watch()
    const {data, refetch} = useQuery([`getBilling`, custNo, billYm], getBilling, {
        enabled : false,
        retry: false,
    }) 
    const onClick = ()=>{
        refetch()
    }

    return (
        <StaffOnlyPage>
            {menuLoading?
            null : 
                <Container py={30} px={{base : 30, md:50}} minW={"100vw"} mb={"10vh"}>
                    <HStack my={2}>
                        <InputGroup >
                            <InputLeftAddon>고객번호</InputLeftAddon>                            
                            <Select {...searchReg("custNo" , {required:true, maxLength:10 })} placeholder="구분" required>
                                {custNoLists?.map((cust,ind)=> <option key={ind} value={cust.custNum}>{cust.title}</option>)}
                            </Select>
                        </InputGroup>
                        <InputGroup>
                            <InputLeftAddon>청구년월</InputLeftAddon>
                            <Select {...searchReg("billYm" , {required:true, maxLength:6 })} placeholder="------" required>
                                {dateArr.map((month,ind) => <option key={ind} value={month}>{month}</option>)}
                            </Select>
                        </InputGroup>
                        <Button onClick={onClick}>조회</Button>
                    </HStack>
                    {!data? null :
                        data.error ? <Flex p={0} m={0} justifyContent={"end"}><Text color={"red.500"} as={"b"}>{data?.error}</Text></Flex> :
                        <Grid templateColumns={"1fr 1fr"} borderWidth={1} borderRadius={"xl"} padding={5} bg={"green.50"} rowGap={3}>
                            <GridItem>고객번호</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.custNo}</GridItem>
                            <GridItem>청구년월</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.bill_ym}</GridItem>
                            <GridItem>정기검침일</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.mr_ymd}</GridItem>
                            <GridItem>요금적용전력</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.bill_aply_pwr}</GridItem>
                            <GridItem>이사정산일</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.move_ymd}</GridItem>
                            <GridItem>기본요금</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.base_bill}</GridItem>
                            <GridItem>전력량요금</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.kwh_bill}</GridItem>
                            <GridItem>할인/공제계</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.dc_bill}</GridItem>
                            <GridItem>전기요금계</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.req_bill}</GridItem>
                            <GridItem>청구요금</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.req_amt}</GridItem>
                            <GridItem>경부하사용량</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.lload_usekwh}</GridItem>
                            <GridItem>중부하사용량</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.mload_usekwh}</GridItem>
                            <GridItem>최대부하사용량</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.maxload_usekwh}</GridItem>
                            <GridItem>경부하당월지침</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.lload_needle}</GridItem>
                            <GridItem>중부하당월지침</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.mload_needle}</GridItem>
                            <GridItem>최대부하당월지침</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.maxload_needle}</GridItem>
                            <GridItem>진상역률</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.jn_pwrfact}</GridItem>
                            <GridItem>지상역률</GridItem><GridItem bg={"whiteAlpha.700"} p={"1"} borderRadius={"sm"}>{data.ji_pwrfact}</GridItem>
                        </Grid>
                    }
                </Container>
                }
        </StaffOnlyPage>
    )
}