import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";


export default function Storage(){
    return (
        <Box mx={{base: 5 , sm : 10, md:20}} my={10} color="blackAlpha.700">
            <HStack fontSize={24} as="b" m={0}>
                <Text>Warehouse 운영</Text>
            </HStack>
            <Stack alignItems={"center"}>
                <Box borderRadius={"xl"} minH={"100"} w="200" overflow={"hidden"} my={5} >
                    <Image src="/warehouse.jpg" objectFit={"cover"} />
                </Box>
            </Stack>
            <Stack spacing={0} borderColor={"#8C8D8E"} borderRadius={"md"} minH={300} mt={20} p={3} bg={"#F8F6EF"}>
                <HStack justifyContent={"space-between"} borderBottomWidth={0.5} p={1} alignItems={"end"} m={2   }>
                    <Text fontSize={"xl"} as="b">공유 창고 운영 안내</Text>
                    <Text as="b">2022/02/02</Text>
                </HStack>
                <VStack textAlign={"end"} p={5} justifyContent="space-between" alignItems={"flex-end"}>
                    <Box>
                        <Text>
                            공간이 더 필요하신 임차인의 편의성을 위하여,
                        </Text>
                        <Text>
                            공유 창고 운영하고 있습니다.
                        </Text>
                        <Text>
                            이용에 참고 부탁드립니다.
                        </Text>
                    </Box>
                    <Box mt={10 }>
                        <Text fontSize={"xs"}>
                            월 6만9천원, 전기료 및 관리비 임대인 부담
                        </Text>
                        <Text fontSize={"xs"}>
                            전체 임대, 월 55만원
                        </Text>
                    </Box>
                </VStack>
            </Stack>
        </Box>
    )
}