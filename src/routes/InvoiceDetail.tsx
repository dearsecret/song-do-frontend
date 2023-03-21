import { Box, Button, Container, Grid, Heading, HStack, Skeleton, Stack, Text, VStack } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet"
import { FaCheckCircle } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom"
import { getInvoiceDetail} from "../api"
import ProtectedPage from "../components/ProtectedPage"
import { IInvoiceDetail } from "../types"


export default function InvoiceDetail (){
    const navigate = useNavigate()
    const {invoicePk} = useParams()
    const {data , isLoading} = useQuery<IInvoiceDetail>([`invoices`, invoicePk], getInvoiceDetail, {
        retry : false, 
        onError(){
            navigate("/invoices")
        }
    })
    const print =() => window.print()
    return (
        <ProtectedPage>
            
            {
                !isLoading? 
        <>
        <Helmet><title>{data?.contract.name}</title></Helmet>
        <Stack w={"100%"} px={{base : 0, md:10}} py={{base:0, md:5}} spacing={5} alignItems="flex-start" direction={{base: "column" , lg:"row" }}>
        <VStack w={"100%"} justifyContent="center" alignItems={"space-between"} px={{base :2, sm:10, md:20}} py={5} spacing={5}  borderRadius="lg" bg={"#F8F6EF"}>
            <HStack justifyContent={"space-between"}>
                <Heading fontSize={24}>이용내역</Heading>
                <Button onClick={print} sx={{'@media print' : {display : "none"}}} display={{"base" : "none", md: "initial"}}>프린트</Button>
            </HStack>
            <Heading fontSize={17}>사용자 정보</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5} bg="white">
                <Text>호실</Text>
                <Text>{data?.contract.name}</Text>
                <Text>면적</Text>
                <Text>{data?.contract.area}평</Text>
                <Text>시작일</Text>
                <Text>
                    {data?.bill.start_date}
                </Text>
                <Text>종료일</Text>
                <Text>
                    {data?.bill.bill_date}
                </Text>
                <Text>검침량</Text>
                <Text>{data?.usage}</Text>
                <Text>사용량</Text>
                <Text>{data?.ratio_usage}</Text>
            </Grid>
            <Heading fontSize={17}>1. 공용전기료 이용내역</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5} bg="white">
                <Text>공용 기본전기료</Text>
                <Text>{data?.public_share}</Text>
                <Text>공용 사용량</Text>
                <Text>{data?.public_usage}</Text>
                <Text>-합계</Text>
                <Text>{data?.public}</Text>
            </Grid>
            <Heading fontSize={17}>2. 관리비</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5} bg="white">
                <Text>일반(기본) 관리비</Text>
                <Text>{data?.area_fee}</Text>
                <Text>기타 비용</Text>
                <Text>한시적 임대인 부담</Text>
                <Text>-합계</Text>
                <Text>{data?.area_fee}</Text>
            </Grid>
            <Heading fontSize={17} >3. 전기 사용량</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5} bg="white">
                
                <Text>① 전력사용량 요금</Text>
                <Text>{data?.add_unit}</Text>
                <Text>② 기본요금</Text>
                <Text>{data?.basic}</Text>
                <Text>전기료(①+②)</Text>
                <Text>{data?.without_tax}</Text>
                <Text>부가세(10%)</Text>
                <Text>{data?.tax}</Text>
                <Text>-합계</Text>
                <Text>{data?.add_tax}</Text>
            </Grid>
            <HStack justifyContent={"space-between"} px={10} py={5} borderWidth={2} borderRadius="xl" bg="white">    
                <Heading fontSize={19}>청구금액</Heading>
                <Text as={"b"}>{data?.total} 원</Text>       
            </HStack>
            {data?.is_payed? 
                        <HStack justifyContent={"flex-end"} margin={5}>
                            <Text>확인 :</Text>
                            <Box color={"green.500"}>
                                <FaCheckCircle />
                            </Box>
                        </HStack>
                         : 
                        null
                    }
        </VStack>
        <VStack w={"100%"} justifyContent="center" alignItems={"space-between"} padding={{base : 0,sm:20, md:50}} spacing={5} borderRadius="lg" bg={"gray.50"}>
            <Heading fontSize={24}>상세정보</Heading>
            <Heading fontSize={18}>상가 전체 전기료 </Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5}>
                <Text>전체 전기료 합계</Text>
                <Text>{data?.bill.total}원</Text>
                <Text>관리단 전기료 합계</Text>
                <Text>{data?.bill.maintanance}</Text>
                <Text>Ⓐ 기본 전기료</Text>
                <Text>{data?.bill.public_share}</Text>
                <Text>Ⓑ 사용량 전기료</Text>
                <Text>{data?.bill.public_usage}</Text>
            </Grid>
            <Heading fontSize={18}>전력 사용량 정보</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5}>
                <Text>원격 검침량</Text>
                <Text>{data?.bill.usage}</Text>
                <Text>계량기 검칭량</Text>
                <Text>{data?.bill.usage_sum}</Text>
                <Text>소실율</Text>
                <Text noOfLines={1}>{data?.bill.ratio}</Text>
            </Grid>
            <Heading fontSize={18}>전기요금 정보</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5}>
                <Text>전체요금</Text>
                <Text>{data?.bill.floor}</Text>
                <Text>ⓐ 기본요금</Text>
                <Text>{data?.bill.basic}</Text>
                <Text>ⓑ 전력량요금</Text>
                <Text>{data?.bill.none_tax}</Text>
            </Grid>
            <Heading fontSize={18}>기타 통계 정보</Heading>
            <Grid templateColumns={"1fr 1fr"} margin={{base:5 , md:10}} borderWidth={1} borderRadius={"lg"} padding={5}>
                <Text>전력사용량 단위요금</Text>
                <Text>{data?.bill.unit_price}</Text>
                <Text>임대면적</Text>
                <Text>{data?.bill.area_sum}평</Text>
            </Grid>
            {data?.bill.owner_charge?
            <>
                <Heading fontSize={18}>임대인 부담내역</Heading>
                <Container borderWidth={1} borderRadius={"lg"} padding={5} minW={"100%"}>
                {data?.bill.owner_charge.map((ownercharge,index) => 
                    <HStack key={index} justifyContent={"space-between"} mr={10}>
                        <Text>{ownercharge.title}</Text>
                        <Text>{ownercharge.charge}</Text>
                    </HStack>
                    )
                }
                </Container>
    
            </>
            :null}
        </VStack>
        
        
        </Stack>
        {data?.bill.memos ? 
        <VStack alignItems={"flex-start"} mt={2} mb={20} padding={{base : 5,sm:20, md:50}} borderWidth={1} borderRadius={"xl"} bg={"gray.50"}>
            
                <>
                
                <Text as="b">알림</Text>
                    {data?.bill.memos.map((memo,index) => 
                    <Stack key={index} borderBottomWidth={1} mt={2} p={3} w={"100%"} bg={"white"} borderRadius={"xl"}>
                        <Stack direction={"row"}>
                            <Text as="b" size={"sm"}>
                                {index}. 
                            </Text>
                            <Text>
                                {memo.comment}
                            </Text>
                        </Stack>
                    </Stack>)}
                </> 

        </VStack>
            : null }
        </>

                :  <Skeleton w={"100%"} px={{base : 0, md:10}} py={{base:0, md:5}} h={"100vh"} />
            }
        </ProtectedPage>
        
    )
}