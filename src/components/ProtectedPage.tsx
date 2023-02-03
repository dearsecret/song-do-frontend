import { Box, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../lib/useUser";

interface IProtectedPageProps {
  children: React.ReactNode;
}

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  const toast = useToast()
  useEffect(() => {
    if (!userLoading) {
      if (!isLoggedIn ) {
        navigate("/");
        toast({render: () => (
          <Box color='white' p={3} bg={"#393F43"} borderRadius={"lg"} textAlign={"center"}>
            로그인 후 이용해주시길 바랍니다.
          </Box>)})
      }
    }
  }, [userLoading, isLoggedIn,  navigate]);
  return <>{children}</>;
}