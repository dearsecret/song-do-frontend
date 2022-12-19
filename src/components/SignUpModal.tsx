import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import {FcManager , FcLock , FcPhone, FcComments} from "react-icons/fc"


interface SignUpModalProps{
    isOpen : boolean;
    onClose : () => void;
}

export default function SignUpModal({isOpen, onClose}:SignUpModalProps){
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalCloseButton />
            <ModalHeader>
                회원가입
            </ModalHeader>
            <ModalBody mb={15}>
                <VStack mb={15}>
                    <InputGroup>
                        <InputLeftElement children={
                            <FcManager />
                       }/>
                        <Input variant={"filled"} placeholder="아이디"/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={
                            <FcLock />
                       }/>
                        <Input variant={"filled"} placeholder="비밀번호" type={"password"}/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={
                            <FcComments />
                       }/>
                        <Input variant={"filled"} placeholder="닉네임"/>
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement children={
                            <FcPhone />
                       }/>
                        <Input variant={"filled"} placeholder="연락처"/>
                    </InputGroup>
                </VStack>
                <Button w="100%" bg="black" color="white">
                    회원가입
                </Button>
            </ModalBody>
        </ModalContent>
    </Modal>
    )
}