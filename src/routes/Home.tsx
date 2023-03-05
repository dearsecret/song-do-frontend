import { Grid, GridItem, Stack, keyframes, usePrefersReducedMotion, VStack, Text, Heading, HStack, Box, Image, Flex, Skeleton, SkeletonText, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import Clock from "react-live-clock"
import { Link } from "react-router-dom";
import { getPromotions } from "../api";
import Weather from "../components/Weather";
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
            <Grid flexDirection={{sm : "column-reverse" , lg : "row-reverse" }} templateColumns={{sm :"1fr" , lg :"repeat(3,1fr)"}} px={{base:0 , xl: 30}}>
                <GridItem h={{base:300, md:380}} p={0} bg={"#7e6955"} colSpan={3}>
                    <VStack justifyContent={"space-between"} alignItems={"center"} h={"100%"} pt={20}>
                        <VStack>
                            <Heading animation={animation} color={"#C0B19F"} >Office for Lease!</Heading>    
                            <Heading animation={lastAnimation} color={"#C0B19F"} >Incheon</Heading>    
                        </VStack>
                        <HStack bg ="rgba(0,0,0,0.65)"  p={0} m={0} alignItems={"center"} justifyContent="space-between" fontSize={"4xl"} pb={2} px={5} w={"100%"} fontFamily={"heading"}>
                            <HStack color={"white"} spacing={3} userSelect={"none"}>
                                <VStack spacing={0} fontSize={"md"}>
                                    <Clock format={"YYYY"} ticking={true} timezone={"Asia/Seoul"}/>
                                    <Clock format={"MM/DD"} ticking={true} timezone={"Asia/Seoul"}/>
                                </VStack>
                                <Clock format={"HH:mm:ss"} ticking={true} timezone={"Asia/Seoul"}/>
                            </HStack>
                            <Weather />
                        </HStack>
                    </VStack>
                </GridItem>
            </Grid>
            <Grid templateColumns={{base :"1fr" , md :"repeat(3,1fr)"}} px={{base:0 , xl: 30}} >
                <GridItem fontSize={"sm"} as="b" bg={"#273745"} h={"100%"} py={5} px={10}>                    
                    <Flex flexDirection={"column"} justifyContent={"start"} alignItems={"start"} h={"100%"} gap={10}>
                        <Box w={"100%"}>                        
                                <Text fontStyle={"oblique"} fontSize={"lg"} color={"white"}>Map</Text>
                                <Flex flexDirection={"column"} justifyContent={"center"} pt={3} gap={3}>
                                    <Link to="/map">
                                        <Button w={"100%"} bg={"#192834"} color="white" >
                                            Usable Site
                                        </Button>
                                    </Link>
                                </Flex>
                        </Box>
                        <Box w={"100%"}>                        
                            <Text fontStyle={"oblique"} fontSize={"lg"} color={"white"}>Service</Text>
                            <Flex flexDirection={"column"} justifyContent={"center"} pt={3} gap={3}>
                                <Button w={"100%"} bg={"#192834"} color="white" disabled>
                                    Meeting Lounge
                                </Button>
                                <Button w={"100%"} bg={"#192834"} color="white" disabled>
                                    Register for Business
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </GridItem>
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
                    <GridItem key={room.pk} p={5} bg={"#A49685"}>
                        <Link to={`/promotion/${room.pk}`}>
                            <VStack>    
                            <Flex  borderRadius={"sm"} overflow={"hidden"} justifyContent={"center"} mx={{base:10 , md: 0}} mt={3} w={"100%"} boxShadow="md">
                                <Image src={room.thumb} objectFit={"cover"} h={{base: "40vh", md : 240}} w={"100%"}  />
                            </Flex>
                            <Flex color={"whiteAlpha.800"} flexDirection={"column"} w={"100%"} pt={2} px={{base:7 , md: 5}}>
                                <Text as={"b"} noOfLines={1} >{room.title}</Text>
                                <Text fontWeight={"extrabold"} textAlign={"end"} noOfLines={1}>{room.category}</Text>
                            </Flex>
                            </VStack>
                        </Link>
                    </GridItem>
                )}
            
                
                <GridItem   bg="#8C8D8E" fontSize={"sm"} as="b" color={"gray.100"}>
                    <VStack  p={0} m={0}>
                        <HStack justifyContent={"space-between"} w={"80%"} pt={2} userSelect={"none"}>
                            <Text fontStyle={"oblique"} fontSize={"lg"}>Information</Text>
                        </HStack>
                        <Stack pt={{base:0}} spacing={3} w={"80%"} textAlign={"center"} >
                            <Link to="/deposit">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} mt={2} w="100%" boxShadow={"md"}>
                                    <Text>
                                        보증금 및 월납입금
                                    </Text>
                                </Box>
                            </Link>
                            <a href="mailto:dearsecret1217@gmail.com?subject='문자메시지를 남기시면'&body='조금 더 신속히 연락드릴 수 있습니다.'">
                                <Box bg="#69696B" py={3} borderRadius={"sm"} w="100%" boxShadow={"md"}>
                                    <Text>
                                        Contact us with Email
                                    </Text>
                                </Box>
                            </a>
                            <a href="tel:+82 010-4476-8444">
                                <Box bg="#69696B" pt={3} borderRadius={"sm"} w="100%" display={{base : "-moz-initial", sm : "none"}} boxShadow={"md"}>
                                    <Text>
                                        Contact us with CellPhone
                                    </Text>
                                </Box>
                            </a>
                        </Stack>
                        <HStack justifyContent={"space-between"} w={"80%"} mt={4} userSelect={"none"}>
                            <Text fontStyle={"oblique"} fontSize={"lg"} >Location</Text>
                        </HStack>
                        <Stack px={10} pb={8} opacity={"75%"} w={{base: "80%", md:"100%"}} >
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12675.13155301673!2d126.649889!3d37.4186063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5fae2ef0f4c0965!2z7Iah64-E67mE7Leo7YOA7Jq0IOyCrOustOyLpA!5e0!3m2!1sko!2skr!4v1676710025590!5m2!1sko!2skr"  loading="lazy"></iframe>
                        </Stack>
                        
                    </VStack>
                </GridItem>
            </Grid>
        </Stack>
    )
}