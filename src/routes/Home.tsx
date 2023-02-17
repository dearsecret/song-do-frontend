import { Grid, GridItem, Stack, keyframes, usePrefersReducedMotion, VStack, Text, Heading, HStack, Box, Image, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Clock from "react-live-clock"
import { Link } from "react-router-dom";
import { getPromotions } from "../api";
import { Rooms } from "../types";

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

    const {data ,isLoading} = useQuery<Rooms[]>([`rooms`], getPromotions, {
        retry: false
    })

    return (
        <Stack >
            <Helmet><title>송도비취타운</title></Helmet>
            <Grid templateColumns={{sm :"1fr" , lg :"repeat(3,1fr)"}} pt={5} px={{base:0 , xl: 30}}>
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
            </Grid>

            <Grid templateColumns={{base :"1fr" , md :"repeat(3,1fr)"}} px={{base:0 , xl: 30}} >
                
                {isLoading ? 
                    <>
                    <GridItem p={5} bg={"#A49685"} >
                            <Flex  borderRadius={"sm"} overflow={"hidden"} justifyContent={"center"}>
                                <Skeleton w={"100%"} h={60} />
                            </Flex>
                            <Flex px={5} py={4} color={"whiteAlpha.800"} flexDirection={"column"}>
                                <SkeletonText noOfLines={1} my={1} />
                                <SkeletonText noOfLines={1} my={1} w={"30%"}  />
                            </Flex>
                    </GridItem>
                    <GridItem p={5} bg={"#A49685"} >
                            <Flex  borderRadius={"sm"} overflow={"hidden"} justifyContent={"center"}>
                                <Skeleton w={"100%"} h={60} />
                            </Flex>
                            <Flex px={5} py={4} color={"whiteAlpha.800"} flexDirection={"column"}>
                                <SkeletonText noOfLines={1} my={1} />
                                <SkeletonText noOfLines={1} my={1} w={"30%"}  />
                            </Flex>
                    </GridItem>
                    </>
                     : data?.map(room=> 
                    <GridItem key={room.pk} p={5} bg={"#A49685"} >
                        <Link to={`/promotion/${room.pk}`}>
                            <Flex  borderRadius={"sm"} overflow={"hidden"} justifyContent={"center"}>
                                <Image src={room.thumb} objectFit={"cover"} w={"100%"} h={60}  />
                            </Flex>
                            <Flex px={5} py={4} color={"whiteAlpha.800"} flexDirection={"column"}>
                                <Text as={"b"} noOfLines={1}>{room.title}</Text>
                                <Text noOfLines={1}>{room.category}</Text>
                            </Flex>
                        </Link>
                    </GridItem>
                )}
            
                
                <GridItem   bg="#8C8D8E" fontSize={"sm"} as="b" color={"gray.100"}>
                    <VStack  p={0} m={0}>
                        <HStack mt={5} justifyContent={"space-between"} w={"80%"}>
                            <Text as="b" fontStyle={"oblique"} fontSize={"lg"}>Information</Text>
                            
                        </HStack>
                        <Stack pt={{base:0}} spacing={{base:3, md:5}} w={"80%"} textAlign={"center"} pb={10}>
                            <Link to="/deposit">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} mt={5} w="100%">
                                    <Text>
                                        보증금 및 월납입금 조율
                                    </Text>
                                </Box>
                            </Link>
                            <a href="mailto:dearsecret1217@gmail.com?subject='문자메시지를 남기시면'&body='조금 더 신속히 연락드릴 수 있습니다.'">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} w="100%">
                                    <Text>
                                        Contact us with Email
                                    </Text>
                                </Box>
                            </a>
                            <a href="tel:+82 010-4476-8444">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} w="100%" display={{base : "-moz-initial", sm : "none"}}>
                                    <Text>
                                        Contact us with CellPhone
                                    </Text>
                                </Box>
                            </a>
            
                        </Stack>
                        
                    </VStack>
                </GridItem>
            </Grid>
            
            
        </Stack>
    )
}