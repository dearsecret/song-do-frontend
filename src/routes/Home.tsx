import { Flex, Grid, GridItem, Stack, Image, keyframes, usePrefersReducedMotion, VStack, Text, Heading, HStack } from "@chakra-ui/react";
import Clock from "react-live-clock"

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
        <Stack position={"relative"} h={{base:1000, lg:1000}} minH={"100%"} m={0} >
            <Grid templateColumns={{sm :"1fr" , lg :"repeat(3,1fr)"}} rowGap={5} py={7} px={{base:0 , xl: 30}}>
                <GridItem h={{sm:150, lg:350}} >
                    <VStack bg="gray.700" as="b" fontSize={"3xl"} color={"gray.100"} justifyContent={"center"} h={"100%"}>
                        <Clock format={"YYYY년 MM월 DD일"} ticking={true} timezone={"Asia/Seoul"}/>
                        <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"}/>
                    </VStack>
                </GridItem>
                <GridItem h={{sm:300, lg:350}} p={0} bg={"#7e6955"} colSpan={{lg: 2}}>
                    <VStack justifyContent={"center"} alignItems={"center"} h={"100%"}>
                        <Heading animation={animation} color={"#C0B19F"} >Office for Lease!</Heading>    
                        <Heading animation={lastAnimation} color={"#C0B19F"} >Incheon</Heading>    
                    </VStack>
                </GridItem>
            </Grid>
            <Grid  position={"absolute"} bottom={"0"} h={"auto"} justifyContent={"center"} rowGap={5} alignItems={"center"} >
                <Grid templateColumns={{sm :"1fr", md:"1fr 1fr"}} w={"100vw"} p={5} columnGap={{sm : 20}} py={5} px={{sm:5 , md:20}} bg={"#393F43"} textAlign={"end"} color={"white"}>
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
                <Flex justifyContent={"center"} fontSize={"sm"} textAlign={"center"}> 2023. 창대그린비취 사무실 &copy; All rights reserved</Flex>
            </Grid>
            
            
            
        </Stack>
    )
}