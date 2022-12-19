import { Box, Button, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { BsBuilding} from "react-icons/bs"
import { FaUser, FaLock} from "react-icons/fa"

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
                    <Button >
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
                        <ModalBody mb={15}>
                            <VStack mb={15}>
                                <InputGroup>
                                    <InputLeftElement children={<Box color={"gray.500"}>
                                        <FaUser />
                                    </Box>}/>
                                    <Input variant={"filled"} placeholder="아이디"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Box color={"gray.500   "}>
                                        <FaLock />
                                    </Box>}/>
                                    <Input variant={"filled"} placeholder="비밀번호" type={"password"}/>
                                </InputGroup>
                            </VStack>
                            <Button w="100%" bg="black" color="white">
                                로그인
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </HStack>
            <Outlet/>
        </>
    )
}