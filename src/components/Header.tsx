import { Avatar, Button, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link, useNavigate} from "react-router-dom";
import LogInModal from "./LogInModal";
import useUser from "../lib/useUser";
import { logOut } from "../api";
import { useQueryClient } from "@tanstack/react-query";


export default function Header(){
    const {user, userLoading, isLoggedIn} =useUser()
    const {isOpen : isLogInOpen, onClose : onLogInClose, onOpen:onLogInOpen} = useDisclosure();
    const client = useQueryClient();
    const navigate = useNavigate()
    const onLogOut = async()=>{
        await logOut();
        client.refetchQueries([`me`])
        navigate("/")
    }
    
    return (
        <>
        <HStack justifyContent={"flex-end"} px={"5"} h={5}  m={0}>
        {!userLoading? 
            (isLoggedIn? 
            <Link to="/invoices">
                <Button bg={"#A29A91"} color={"white"} variant={"solid"} size={"sm"}>이용내역</Button>
            </Link>
            :null)
        :null}
        </HStack>
        <Flex justifyContent={"space-between"} px={5}  borderBottomWidth={1} sx={{'@media print' : {display : "none"}}} m={0}>
                <Link to="/">
                <VStack alignItems={"center"} spacing={1} color={"#7e6955"} justifyContent={"center"} m={0} p={5}>
                    <Text fontWeight={"bold"} as={"b"} fontSize={"xl"}>창대그린비취</Text>
                    <Text fontWeight={"bold"} as={"b"} fontSize={"sm"}>상가&사무실</Text>
                </VStack>
                </Link>
            <HStack>
                {!userLoading? 
                (!isLoggedIn? (
                    <>
                        <Button bg="#A29A91" color="white" onClick={onLogInOpen}>
                            로그인    
                        </Button>
                    </>
                ) : 
                (
                <Flex direction={"column"}>
                    <Menu>
                        <MenuButton>
                            <Avatar name={user.name} size={"md"} m={1}/>
                        </MenuButton>
                    
                        <MenuList>
                            {
                                user.is_host ?
                                <Link to="/host">
                                    <MenuItem>요금 조회</MenuItem>
                                </Link> : null
                            }
                            <Link to="/profile">
                                <MenuItem>나의 정보</MenuItem>
                            </Link>
                            <MenuItem onClick={onLogOut}>로그아웃</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                )
                ):null}
                
            </HStack>
            
            <LogInModal isOpen={isLogInOpen} onClose={onLogInClose}/>
        </Flex>
        
        </>
    )
}