import { Button, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { BsBuilding} from "react-icons/bs"
import LogInModal from "./LogInModal";
import SignUpModal from "./SignUpModal";

export default function Header(){
    const {isOpen : isLogInOpen, onClose : onLogInClose, onOpen:onLogInOpen} = useDisclosure();
    const {isOpen : isSignUpOpen, onClose : onSignUpClose, onOpen:onSignUpOpen} = useDisclosure();
    return (
        <HStack justifyContent={"space-between"} mx={5} py={5} borderBottomWidth={1}>
                <Link to="/">
                    <VStack alignItems={"center"}>
                        <BsBuilding size={42}/>
                        <Text noOfLines={2} fontWeight={"bold"}>Song-Do</Text>
                    </VStack>
                </Link>
                <HStack>
                    <Button bg="black" color="white" onClick={onLogInOpen}>
                        로그인    
                    </Button>
                    <Button onClick={onSignUpOpen}>
                        회원가입
                    </Button>
                </HStack>
                <LogInModal isOpen={isLogInOpen} onClose={onLogInClose}/>
                <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
                
            </HStack>
    )
}