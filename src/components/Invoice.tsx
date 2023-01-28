import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa"

interface IInvoiceProps {
    pk : number ;
    is_payed : boolean ;
    bill : IBill
}

interface IBill{
    pk : number ;
    __str__ : string ;
    start_date : String;
    bill_date : String;
}

export default function Invoice({pk ,is_payed,bill}: IInvoiceProps){

    return (
        <Link to={`/invoice/${pk}`}>
            <HStack key={pk} justifyContent={"space-between"} alignItems={"center"} borderWidth={1} p={5} borderRadius={"xl"} m={1} bg="white">
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
                </HStack>
                <HStack spacing={5}>
                    <Text noOfLines={1}>{bill.start_date}</Text>
                    <Text>~</Text>
                    <Text noOfLines={1}>{bill.bill_date}</Text>
                    <Button variant={"link"}>조회 &rarr;</Button>
                </HStack>
            </HStack>
        </Link>
    )
}