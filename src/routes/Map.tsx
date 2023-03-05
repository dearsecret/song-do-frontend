import { Box, Button, Flex, Grid, GridItem, HStack, Text } from "@chakra-ui/react";

export default function Map(){
    return(
        <>  
            <Box mb={20} >
            <HStack m={0} bg={"#7E6955"} borderTopWidth={1} borderColor={"#7E6955"} >
                <Flex direction={"row"}  m={5} color={"#E4E1DC"} fontSize={"lg"} justifyContent={"center"} alignItems={"center"} w={"100%"}>
                        <Text fontSize={"2xl"} as={"b"}>현황도</Text>
                </Flex >
            </HStack>
            </Box>
            <Flex justifyContent={"center"} m={7} mb={0} borderTopLeftRadius={{base: 65, sm:80, md:95}} overflow={"hidden"} h={"70%"} borderWidth={2} borderRightWidth={0} borderBottomWidth={0} >

                <Grid w={"100vw"}  sx={{"aspectRatio": "2/1"}} templateColumns={"repeat(33,1fr)"} templateRows={"repeat(29,1fr)"}>
                    <GridItem colSpan={9} rowSpan={11}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            2호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8} rowSpan={11}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            3호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8} rowSpan={11}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            4호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={8} rowSpan={11}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            5호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={14}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} bg={"green.100"} _hover={{"bg": "blue.100"}}>
                            1호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={14} >
                        
                    </GridItem>
                    <GridItem colSpan={25} rowSpan={4} >
                        
                    </GridItem>
                    <GridItem colSpan={6} rowSpan={10}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} bg={"green.100"} _hover={{"bg": "blue.100"}}>
                            10호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={15} borderBottomWidth={2}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            9호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={7} rowSpan={15} borderBottomWidth={2}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            8호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={5} rowSpan={15} borderBottomWidth={2}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            7호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={5} rowSpan={15} borderBottomWidth={2}>
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            6호
                        </Button>
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={5} >
                        <Button w={"100%"} h={"100%"} borderRadius={"none"} >
                            E/V
                        </Button>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={4} opacity={"100%"}>
                            <Flex w={"100%"} h={"100%"} justifyContent={"center"}>
                                <Text>
                                    &uarr;
                                </Text>
                            </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}