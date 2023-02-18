import { Box, Flex, HStack, Image, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Text, Tooltip, VStack } from "@chakra-ui/react"
import { useState } from "react"
import ProtectedPage from "./ProtectedPage"

export default function Deposit(){
    const [sliderValue, setSliderValue] = useState(0)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <ProtectedPage>
        <Box mx={0} my={10} color="blackAlpha.700">
            <HStack m={0} bg={"#F8F6EF"} borderTopWidth={1} borderColor={"#7E6955"}  >
                <Stack direction={"row"} m={5} spacing={5} color={"blackAlpha.600"} fontSize={"lg"} as="b" alignItems={"center"}>
                    <Text>보증금 &amp; 월납입금 조절</Text>
                </Stack >
            </HStack>
            <Stack alignItems={"center"} >
                <Slider
                mt={12}
                w={"70%"}
                id='slider'
                defaultValue={0}
                min={0}
                max={100}
                textColor={"#7e6955"}
                onChange={(v) => setSliderValue(v)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderMark value={0} mt='2' ml='0' fontSize='sm' as="b">
                500
                </SliderMark>
                <SliderMark value={100} mt='2' ml='-8' fontSize='sm' as="b">
                2500
                </SliderMark>
                <SliderTrack>
                <SliderFilledTrack bg="#A29A91" />
                </SliderTrack>
                <Tooltip
                hasArrow
                bg="#A29A91"
                color='white'
                placement='top'
                isOpen={showTooltip}
                label={`${sliderValue*20}`}
                >
                <SliderThumb />
                </Tooltip>
            </Slider>
            </Stack>
            <Stack justifyContent={"space-between"}>
                <VStack m={10} alignItems={"center"} color="blackAlpha.700">
                    <HStack fontSize={"md"}><Text>+ 보증금 <Text as="b">{sliderValue*20}</Text>만원</Text></HStack>
                    <Text fontSize={"lg"}>연간 <Text as="b">{Math.ceil(sliderValue*20*0.04)}</Text>만원 절약</Text>
                </VStack>                
            </Stack>
            
            
            
            <Stack spacing={0} borderColor={"#8C8D8E"} borderRadius={"md  "} minH={300} mt={20} p={3} bg={"#F8F6EF"}> 
                <Flex direction={"column"} textAlign={"end"} p={5}>
                    <Text>보증금과 월납입금을 효율적으로 이용하여 절약해보세요.</Text>
                </Flex>
            </Stack>
        </Box>
        </ProtectedPage>
    )
}