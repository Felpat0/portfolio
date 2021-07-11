import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { theme } from "../assets/theme";
import { TopBar } from "../components/TopBar";

export const Home: React.FC = () => {
  return (
    <Stack
      w={"100vw"}
      h={"100vh"}
      bg={theme.colors.backgroundHome}
      overflow={"hidden"}
      padding={"1rem"}
    >
      <Flex h={"10%"}>
        <TopBar />
      </Flex>

      <Flex></Flex>
    </Stack>
  );
};
