import { Flex, Grid, GridItem, Stack, keyframes, usePrefersReducedMotion, VStack, Text, Heading, HStack, Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Clock from "react-live-clock"
import { Link } from "react-router-dom";

const opacity = keyframes`
  from { opacity :0 }
  to { opacity :100 }
`

export default function Home(){
    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion
      ? undefined
      : `${opacity} 5s ease-in-out`
    const lastAnimation = prefersReducedMotion
      ? undefined
      : `${opacity} 10s ease-in-out`
    return (
        <Stack position={"relative"} h={{base:1200, lg:1000}} minH={"100%"} m={0} >
            <Helmet><title>송도비취타운 사무실</title></Helmet>
            <Grid templateColumns={{sm :"1fr" , lg :"repeat(3,1fr)"}} rowGap={6} py={7} px={{base:0 , xl: 30}}>
                <GridItem h={{base:150, lg:350}} >
                    <VStack bg="gray.700" as="b" fontSize={"3xl"} color={"gray.100"}h={"100%"}  justifyContent={"center"} >
                        <Clock format={"YYYY년 MM월 DD일"} ticking={true} timezone={"Asia/Seoul"}/>
                        <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"}/>
                    </VStack>
                </GridItem>
                <GridItem h={{base:250, lg:350}} p={0} bg={"#7e6955"} colSpan={{lg: 2}}>
                    <VStack justifyContent={"center"} alignItems={"center"} h={"100%"}>
                        <Heading animation={animation} color={"#C0B19F"} >Office for Lease!</Heading>    
                        <Heading animation={lastAnimation} color={"#C0B19F"} >Incheon</Heading>    
                    </VStack>
                </GridItem>
                <GridItem h={{base:200, lg:350}} p={0} colSpan={{lg: 2}} bg={"#A49685"}>
                    <VStack justifyContent={"center"} alignItems={"center"} h={"100%"}>
                        <Text>Hello World</Text>
                    </VStack>
                </GridItem>
                <GridItem h={{base:300, lg:350}}  bg="#8C8D8E" fontSize={"sm"} as="b" color={"gray.100"}>
                    <VStack  p={0} >
                        <HStack mt={9} justifyContent={"space-between"} w={"80%"}>
                            <Text as="b" fontStyle={"oblique"} fontSize={"lg"}>Promotion</Text>
                            <Text></Text>
                        </HStack>
                        <Stack pt={{base:0, md:3}} spacing={{base:3, md:5}} w={"80%"} textAlign={"center"}>
                            <Link to="/deposit">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} mt={5} w="100%">
                                    <Text>
                                        보증금 및 월납입금 조율
                                    </Text>
                                </Box>
                            </Link>
                            <Link to="/storage">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} w="100%">
                                    <Text>
                                        웨어하우스 운영
                                    </Text>
                                </Box>
                            </Link>
                        </Stack>
                        
                    </VStack>
                </GridItem>
            </Grid>
            <Grid  position={"absolute"} bottom={"0"} h={"auto"} justifyContent={"center"} rowGap={5} alignItems={"center"} >
                <Grid templateColumns={{sm :"1fr", md:"1fr 1fr"}} w={"100vw"} p={5} columnGap={{sm : 20}} py={5} px={{sm:5 , md:20}} bg={"#393F43"} textAlign={"end"} color={"white"}>
                    <HStack justifyContent={"space-between"}>
                        <Text>상호명</Text>
                        <Text noOfLines={1}>송도비취타운 사무싩</Text>
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
            
            
            
        </Stack>
    )
}