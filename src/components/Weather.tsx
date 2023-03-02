import { useQuery } from "@tanstack/react-query"
import { getWeathers } from "../api"
import {WiDayCloudy, WiDayShowers, WiDaySunny, WiDegrees} from "react-icons/wi"
import {BsSnow2} from "react-icons/bs"
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";

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
    const {data, isLoading, isError} = useQuery<WeatherProps>([`weather`], getWeathers , {
        retry : false
    })
    let currTemp
    let fcstIcon 
    if (data != null){
        if (data.RN1 !== "강수없음"){
            if (data.PTY === "7" || data.PTY ==="3"){
                // 눈
                fcstIcon =BsSnow2
            } else {
                // 비
                fcstIcon = WiDayShowers
            }
        } else if (data.SKY !== "1"){
            // 구름
            fcstIcon = WiDayCloudy
        } else {
            // 맑음
            fcstIcon = WiDaySunny
        }
        currTemp = data.T1H
    }
    return (
        <>
        {isError? 
            null:
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
                    {
                        fcstIcon ? 
                        <Icon as={fcstIcon} color={"white"} fontSize={45}/>:
                        null
                    }
                </HStack>
            }
            </>
        }   
        </>
    )
}















