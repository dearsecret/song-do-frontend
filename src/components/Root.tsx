import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { BsBuilding} from "react-icons/bs"

export default function Root(){

    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <>
            <HStack justifyContent={"space-between"} mx={5} py={5} borderBottomWidth={1}>
                <Link to="/">
                    <VStack alignItems={"center"}>
                        <BsBuilding size={42}/>
                        <Text noOfLines={2} fontWeight={"bold"}>Song-Do</Text>
                    </VStack>
                </Link>
                <HStack>
                    <Button bg="black" color="white" onClick={onOpen}>
                        로그인    
                    </Button>
                    <Button variant={"ghost"}>
                        회원가입
                    </Button>
                </HStack>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>
                            로그인
                        </ModalHeader>
                        <ModalBody>
                            인풋창
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet/>
        </>
    )
}