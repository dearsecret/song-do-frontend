import { useQuery } from "@tanstack/react-query"
import { getWeathers } from "../api"
import {WiDayCloudy, WiDayShowers, WiDaySunny, WiDegrees} from "react-icons/wi"
import {BsSnow2} from "react-icons/bs"
import { Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";

interface WeatherProps{
    LGT : string;
    PTY : string;
    REH : string;
    RN1 : string;
    SKY : string;
    T1H : string;
    UUU : string;
    VEC : string;
    VVV : string;
    WSD : string;
    baseDate : string;
    baseTime : string;
    fcstDate : string;
    fcstTime : string;
    id : string;
}


export default function Weather(){
    const {data , isLoading} = useQuery<WeatherProps[]>([`weather`], getWeathers , {
        retry : false
    })
    let currTemp
    let fcstIcon 
    if (data){
        const first = data[0]   
        if (first.RN1 !== "강수없음"){
            if (first.PTY === "7" || first.PTY ==="3"){
                // 눈
                fcstIcon =BsSnow2
            } else {
                // 비
                fcstIcon = WiDayShowers
            }
        } else if (first.SKY !== "1"){
            // 구름
            fcstIcon = WiDayCloudy
        } else {
            // 맑음
            fcstIcon = WiDaySunny
        }
        currTemp = first.T1H
    }
    return (
        <>
            {isLoading? null:
                <HStack fontSize={30}  alignItems={"center"} spacing={3}>
                    <Flex flexDirection={"row"} color={"white"} >
                        <Text>{data && !isLoading ? currTemp : null} </Text>
                        <Flex>
                            <Text fontSize={"xl"}>&#176;</Text>
                            <Text>c</Text>
                        </Flex>
                    </Flex>
                    <Icon as={fcstIcon} color={"white"} fontSize={45}/>
                </HStack>
            }
            
        </>
    )
}















