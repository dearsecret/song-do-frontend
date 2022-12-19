import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FcManager ,FcLock} from "react-icons/fc"


interface LogInModalProps{
    isOpen : boolean;
    onClose : () => void;
}

export default function LogInModal({isOpen, onClose}:LogInModalProps){
    return (
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
                                        <FcManager />
                                    </Box>}/>
                                    <Input variant={"filled"} placeholder="아이디"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Box color={"gray.500"}>
                                        <FcLock />
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
    )
}