import {  Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface INoticeProps{
    pk : number;
    title : string;
}

export default function Notice({pk, title}:INoticeProps){
    return (
        <Link to={`/notices/${pk}`}>
            <HStack key={pk} borderBottomWidth={1} m={0}  >
                <Stack direction={"row"} m={5} spacing={5}>
                    <VStack justifyContent={"center"} bg={"#A49685"} color={"white"} textAlign={"center"} borderRadius={"lg"} w={"10"} fontSize={"xs"} as="b" >
                        <Text>공지</Text>
                    </VStack>
                    <Text color={"blackAlpha.600"} fontSize={"md"} noOfLines={1}>{title}</Text>
                </Stack>
                
            </HStack>
        </Link>
    )
}