import { Avatar, Button, FormControl, HStack, Input, InputGroup, InputLeftAddon, Text, useToast, VStack } from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import ProtectedPage from "../components/ProtectedPage"
import useUser from "../lib/useUser"
import { FaLock, FaUnlock } from "react-icons/fa"
import { useForm } from "react-hook-form"
import { IPassword } from "../types"
import { changePW } from "../api"
import { useState } from "react"
import { Helmet } from "react-helmet"

export default function Profile() {
    const {isLoggedIn, userLoading, user} =useUser()
    const navigate = useNavigate()
    const toast = useToast()
    const client = useQueryClient()

    const [toggle,  setToggle] = useState(false)
    const {register, handleSubmit, reset} = useForm<IPassword>()
    
    const onClick =()=>{
        setToggle(!toggle)
        reset()
    }
    
    const mutation = useMutation(changePW , {
        onSuccess : () =>{
            client.refetchQueries([`me`])
            navigate("/")
            toast({
                title : "비밀번호를 변경하였습니다.",
                description : "다시 로그인을 하시기 바랍니다.",
                status : "success",
            })
        }
    })
    const onSubmit = ({oldPW , newPW} : IPassword) =>{
        mutation.mutate({oldPW, newPW})
    }
    return (
        <ProtectedPage>
            <Helmet><title>프로필 변경</title></Helmet>
            {!userLoading? 
                (isLoggedIn? 
                    <VStack padding={20} spacing={7}>
                        <Avatar name={user.name} size={"xl"}/>
                        <Text as="b" fontSize={23}>{user?.name}</Text> 
                        <Text>{user?.email}</Text>
                        
                        {toggle? 
                            <VStack w={"80%"} as="form" onSubmit={handleSubmit(onSubmit)}>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftAddon children={<FaUnlock/>}/>
                                        <Input {...register("oldPW", {required : "확인해주세요."})} autoComplete="off" required type={"password"} placeholder={"비밀번호를 입력하세요."}/>
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftAddon children={<FaLock/>}/>
                                        <Input {...register("newPW", {required: "확인해주세요."})} autoComplete="off" required type={"password"} placeholder={"새로운 비밀번호를 입력하세요."}/>
                                    </InputGroup>
                                </FormControl>
                                <HStack>
                                    <Button type="submit">변경</Button>
                                    <Button onClick={()=>setToggle(!toggle)}>취소</Button>
                                </HStack>
                            </VStack>
                        : <Button onClick={onClick}>비밀번호 변경하기</Button>}
                        {mutation.isError ? (
                                <Text color="red.500" textAlign={"center"} fontSize="sm">
                                비밀번호를 확인해주세요.
                                </Text>
                            ) : null}
                    </VStack>
                :null)
            :null}
        </ProtectedPage>
    )
}