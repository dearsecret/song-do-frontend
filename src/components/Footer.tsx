import { Flex, Grid, HStack, Text, } from "@chakra-ui/react"

export default function (){
    return (
        <Grid  justifyContent={"center"} rowGap={5} alignItems={"center"} mt={150} sx={{'@media print' : {display : "none"}}} userSelect={"none"}>
                <Grid templateColumns={{sm :"1fr", md:"1fr 1fr"}} w={"100vw"} p={5} columnGap={{sm : 20}} py={5} px={{sm:5 , md:20}} bg={"#393F43"} textAlign={"end"} color={"white"} >
                    <HStack justifyContent={"space-between"}>
                        <Text>상호명</Text>
                        <Text noOfLines={1}>송도비취타운 사무실</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Text>주소</Text>
                        <Text noOfLines={1}>인천광역시 연수구 능허대로 187, 4층</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Text>이메일</Text>
                        <Text noOfLines={1}>dearsecret1217@gmail.com </Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>    
                        <Text>사업자번호</Text>
                        <Text>263-15-00207</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Text>대표번호</Text>
                        <Text>010-4476-8444</Text>
                    </HStack>
                    <HStack justifyContent={"space-between"}>
                        <Text>대표</Text>
                        <Text>홍동수</Text>
                    </HStack>
                </Grid>
                <Flex justifyContent={"center"} fontSize={"sm"} textAlign={"center"}> 2023. 송도비취타운 사무실 &copy; All rights reserved</Flex>
            </Grid>
    )
}