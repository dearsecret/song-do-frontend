import { Box, Divider, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPromotionDetail } from "../api";
import { PromotionDetail } from "../types";


export default function Promotion(){
    const {promotionPk} = useParams();
    const {data , isLoading} = useQuery<PromotionDetail>([`promotion`, promotionPk], getPromotionDetail)
    return ( 
        <Box mx={0} my={10} color="blackAlpha.700">
            <HStack m={0} bg={"#F8F6EF"} borderTopWidth={1} borderColor={"#7E6955"}  >
                <Stack direction={"row"} m={5} spacing={5} color={"blackAlpha.600"} fontSize={"lg"} as="b" alignItems={"center"}>
                    <Text>{data?.title}</Text>
                </Stack >
            </HStack>
            <Stack alignItems={"center"}>
                <Box borderRadius={"lg"}  overflow={"hidden"} my={5} >
                    <Image src={data?.thumb} objectFit={"cover"} h={340}/>
                </Box>
            </Stack>
            <Stack spacing={0} borderColor={"#8C8D8E"} borderRadius={"md"} minH={300} mt={10} p={3} bg={"#F8F6EF"}>
                <HStack justifyContent={"space-between"} borderBottomWidth={0.5} p={1} alignItems={"end"} m={2}>
                    <Text fontSize={"xl"} as="b">{data?.category}</Text>
                    <Text as="b">{data?.created_at.slice(0,10)}</Text>
                </HStack> 
                <VStack justifyContent={"start"} p={1} alignItems={"end"} m={2} minH={"300px"} spacing={0}>
                    {data?.description? data?.description.split("\n").map(text=><Text color={"blackAlpha.600"}>{text}</Text>): null}
                </VStack>
                <Divider opacity={"30%"} />
                <VStack justifyContent={"start"}  p={1} alignItems={"end"} m={5} minH={"200px"} spacing={0}>
                    {data?.detail? data?.detail.split("\n").map(text=><Text fontSize={"sm"} color={"blackAlpha.600"}>{text}</Text>): null}
                </VStack>
            </Stack>
        </Box>
    )
}