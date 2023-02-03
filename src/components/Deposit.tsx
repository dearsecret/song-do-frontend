import { Box, Flex, HStack, Image, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Stack, Text, Tooltip, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { FaPlus, FaArrowsAltH } from "react-icons/fa"
import ProtectedPage from "./ProtectedPage"

export default function Deposit(){
    const [sliderValue, setSliderValue] = useState(0)
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <ProtectedPage>
        <Box mx={{base: 5 , sm : 10, md:20}} my={10} color="blackAlpha.700">
            <HStack fontSize={24} as="b" m={0}>
                <Text>보증금</Text>
                <FaArrowsAltH size={13}/>
                <Text>월납입금</Text>
            </HStack>
            <Stack alignItems={"center"}>
                <Box borderRadius={"xl"} minH={"100"} w="200" overflow={"hidden"} my={5} >
                    <Image src="/money.jpg" objectFit={"cover"} />
                </Box>
            </Stack>
            <Slider mt={10}
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
            
            <Stack justifyContent={"space-between"}>
                <VStack my={10} alignItems={"flex-end"} color="blackAlpha.700">
                    <HStack fontSize={"md"}><FaPlus size={13}/><Text>보증금 <Text as="b">{sliderValue*20}</Text>만원</Text></HStack>
                    <Text fontSize={"lg"}>연간 <Text as="b">{Math.ceil(sliderValue*20*0.04)}</Text>만원 Saving</Text>
                </VStack>                
            </Stack>
            
            <Stack spacing={0} borderColor={"#8C8D8E"} borderRadius={"md  "} minH={300} mt={20} p={3} bg={"#F8F6EF"}>
                <HStack justifyContent={"space-between"} borderBottomWidth={0.5} p={1} alignItems={"end"} m={2   }>
                    <Text fontSize={"xl"} as="b">보증금 환산제 운영 안내</Text>
                    <Text as="b">2022/02/02</Text>
                </HStack>
                <Flex direction={"column"} textAlign={"end"} p={5}>
                    <Text>
                        정상가에 이용하시는 장기 임차인에 한하여
                    </Text>
                    <Text>
                        부담을 덜어드리고자,
                    </Text>
                    <Text>
                        보증금환산제도를 실시하고 있습니다.
                    </Text>
                    <Text>
                        이용에 참고 부탁드립니다.
                    </Text>
                    <Text fontSize={"xs"}>
                        (예산 소진시 조기종료될 수 있습니다.)
                    </Text>
                </Flex>
            </Stack>
        </Box>
        </ProtectedPage>
    )
}