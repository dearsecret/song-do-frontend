import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useToast, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { logIn } from "../api";


interface LogInModalProps{
    isOpen : boolean;
    onClose : () => void;
}
interface IForm {
    username : string ;
    password : string ; 
}

export default function LogInModal({isOpen, onClose}:LogInModalProps){
    const {register,  reset, handleSubmit, formState:{errors} } = useForm<IForm>()
    const toast =useToast()
    const queryClient = useQueryClient()
    const mutation = useMutation(logIn, {
        onSuccess : () =>{
            toast({render: () => (
                <Box color='white' p={3} bg={"#393F43"} borderRadius={"lg"} textAlign={"center"}>
                  이용해주셔서 감사합니다.
                </Box>)})
            onClose()
            queryClient.refetchQueries(["me"])
            reset()  
            
        },
    })

    const onSubmit = ({username, password}: IForm) =>{
        mutation.mutate({username , password})
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader color={"#A29A91"}>
                            로그인
                        </ModalHeader>
                        <ModalBody mb={15} as="form" onSubmit={handleSubmit(onSubmit)}>
                            <VStack mb={15}>
                                <InputGroup>
                                    <InputLeftElement children={<Box color={"gray.500"}>
                                        <FaEnvelope />
                                    </Box>}/>
                                    <Input isInvalid={Boolean(errors.username?.message)} {...register("username", {required : "이메일을 확인해주세요."})} variant={"filled"} placeholder="이메일"/>
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={<Box color={"gray.500"}>
                                        <FaLock />
                                    </Box>}/>
                                    <Input isInvalid={Boolean(errors.password?.message)} {...register("password", {required : "패스워드를 확인해주세요."})} variant={"filled"} placeholder="비밀번호" type={"password"}/>
                                </InputGroup>
                            </VStack>
                            {mutation.isError ? (
                                <Text color="#A29A91" textAlign={"center"} fontSize="sm">
                                이메일 또는 비밀번호를 확인해주세요.
                                </Text>
                            ) : null}
                            <Button isLoading={mutation.isLoading} w="100%" bg="#A29A91" color="white" type="submit">
                                로그인
                            </Button>
                        </ModalBody>
                    </ModalContent>
                </Modal>
    )
}