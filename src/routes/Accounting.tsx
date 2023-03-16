import { Center, Divider, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query"
import { updateNonNullExpression } from "typescript";
import { getAccounting } from "../api"
import ProtectedPage from "../components/ProtectedPage"

interface accounting {
    pk : number ; 
    name : string ;
    description :string ;
    price : number;
    date : string ;
}

export default function Accounting(){
    const {data, isLoading} = useQuery<accounting[]>([`accounting`], getAccounting)
    return (
        <ProtectedPage>
            <VStack m={0} p={"3%"} alignItems={"start"} spacing={10} userSelect={"none"}>
            <Heading fontSize={"xl"}>송도비취타운 4층</Heading>
            <Grid templateColumns={"2fr 1fr 3fr"} borderWidth={1} alignItems={"center"} textAlign={"end"}  w={"80%"}>
                <Text>
                    건물정보
                </Text>
                <Divider orientation={"vertical"} ml={5}/>
                <Text mr={3}>
                    인천시 연수구 능허대로 187 (송도비취타운)
                </Text>
                <GridItem  colSpan={3}>
                    <Center>
                        <Divider />
                    </Center>
                </GridItem>
                <Text>
                    연면적
                </Text>
                <Divider orientation={"vertical"} ml={5}/>
                <Text mr={3}>
                    4998.48㎡
                </Text>
                <GridItem colSpan={3}>
                    <Center>
                        <Divider />
                    </Center>
                </GridItem>
                <Text>
                    소유자 총합 면적
                </Text>
                <Divider orientation={"vertical"} ml={5}/>
                <Text mr={3}>
                    3651.88㎡
                </Text>
                <GridItem colSpan={3}>
                    <Center>
                        <Divider />
                    </Center>
                </GridItem>
                <Text>
                    전용면적
                </Text>
                <Divider orientation={"vertical"} ml={5}/>
                <Text mr={3}>
                    599.48㎡
                </Text>
                <GridItem colSpan={3}>
                    <Center>
                        <Divider />
                    </Center>
                </GridItem>
                <Text>
                    전용률
                </Text>
                <Divider orientation={"vertical"} ml={5}/>
                <Text mr={3}>
                    16.41%
                </Text>
            </Grid>
            <VStack spacing={0} textAlign={"start"} alignItems={"start"}>
                <Text noOfLines={1} fontSize={"sm"}>-본 건물의 KT 임차 수익 약 200만원으로 관리비를 충당합니다.</Text>
                <Text noOfLines={1} fontSize={"sm"}>-투명하고 공정한 관리를 위하여, 최대 10건의 임대인의 추가납부내역을 공개하고 있습니다.</Text>
                <Text noOfLines={1} fontSize={"sm"}>-임대인은 임차인 보호를 위하여 견적서 및 영수증에 대한 정보공개를 요청하며,</Text>
                <Text noOfLines={1} fontSize={"sm"}>-발급 시 전용률 16.41%에 의거하여 성실히 지급합니다.</Text>
            </VStack>
            {
                !isLoading? 
                
                
                data?.map((accounting ,ind) => 
                    <Grid templateColumns={"repeat(4,1fr)"} w={"100%"} fontSize="md" textAlign={"center"} >
                        {
                            ind ===0 ?
                            [0].map(inde => 
                                <>
                                    <Text as="b">납부일</Text>
                                    <Text as="b">납부내역</Text>
                                    <Text as="b">비용</Text>
                                    <Text as="b">비고</Text>
                                </>
                                )
                            :null
                        }
                        <Text>
                            {accounting.date}
                        </Text>
                        <Text>
                            {accounting.name}
                        </Text>
                        <Text>
                            {accounting.price}
                        </Text>   
                        <Text>
                            {accounting.description}
                        </Text>
                    </Grid>
                    )
                
                    
                :null
            }

        </VStack>
        </ProtectedPage>
    )
}