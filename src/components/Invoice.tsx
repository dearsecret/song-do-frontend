import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa"
import { IContract } from "../types";

interface IInvoiceProps {
    pk : number ;
    is_payed : boolean ;
    bill : IBill;
    contract : IContract;
}

interface IBill{
    pk : number ;
    __str__ : string ;
    start_date : String;
    bill_date : String;
}

export default function Invoice({pk ,is_payed,bill, contract}: IInvoiceProps){

    return (
        <Link to={`/invoice/${pk}`}>
            <HStack key={pk} justifyContent={"space-between"} alignItems={"center"} borderBottomWidth={1} p={5}  bg="white" fontSize={"sm"}>
                <HStack spacing={5}>
                    {is_payed? 
                        <Box color={"green.500"}>
                            <FaCheckCircle />
                        </Box> : 
                        <Box color={"red.500"}>
                            <FaRegTimesCircle />
                        </Box>
                    }
                    <Text as={"b"} noOfLines={1}>{bill.__str__}</Text>
                    <Text noOfLines={1}>{contract.name}</Text>
                </HStack>
                <HStack spacing={5}>
                    <HStack display={{base: "none" , md: "inline-flex"}}>
                        <Text noOfLines={1}>{bill.start_date}</Text>
                        <Text>~</Text>
                        <Text noOfLines={1}>{bill.bill_date}</Text>
                    </HStack>
                    <Button variant={"link"}>조회 &rarr;</Button>
                </HStack>
            </HStack>
        </Link>
    )
}