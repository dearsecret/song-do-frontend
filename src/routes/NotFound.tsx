import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function NotFound(){

    return (
        <VStack minH={"100vh"} justifyContent={"center"}>
            <Helmet><title>오류</title></Helmet>
            <Heading>페이지를 찾을 수 없습니다</Heading>
            <Text>
                URL 경로를 확인해주세요.
            </Text>
            <Link to="/">
                <Button colorScheme={"cyan"}  variant={"link"}>
                    홈페이지로 돌아가기 &rarr;
                </Button>
            </Link>
        </VStack>
    )
}