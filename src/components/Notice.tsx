import {  HStack, Stack, Textarea } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface INoticeProps{
    pk : number;
    title : string;
}

export default function Notice({pk, title}:INoticeProps){
    return (
        <Link to={`/notices/${pk}`}>
            <HStack key={pk} justifyContent={"space-between"} alignItems={"center"} borderBottomWidth={1} bg={"white"} borderRadius="md" m={1}>
                <Stack m={5}>
                    <Textarea color={"#7E6955"} as={"b"} fontSize={"md"} noOfLines={1}>{title}</Textarea>
                </Stack>
            </HStack>
        </Link>
    )
}