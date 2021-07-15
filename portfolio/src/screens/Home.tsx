import { Center, Divider, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import { ItemSquare } from "../components/ItemSquare";
import { RoundIcon } from "../components/RoundIcon";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { TopBar } from "../components/TopBar";

import linkedinIcon from "./../assets/icons/linkedin.png";
import switchIcon from "./../assets/icons/switch.png";

export const Home: React.FC = () => {
  return (
    <Stack
      w={"100vw"}
      h={"100%"}
      minW={"1000px"}
      minH={"100vh"}
      maxW={"100vw"}
      bg={theme.colors.backgroundHome}
      padding={"1rem"}
    >
      <Flex h={"10%"} marginBottom={"5%"}>
        <TopBar />
      </Flex>

      <ScrollableContainer>
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
        <ItemSquare image={""} style={{}} />
      </ScrollableContainer>
      <Stack
        height={"25%"}
        width={"100%"}
        direction={"row"}
        spacing={"2rem"}
        justifyContent={"center"}
        paddingTop={"4%"}
      >
        <RoundIcon image={linkedinIcon} variant={"bottomBar"} />
        <RoundIcon image={linkedinIcon} variant={"bottomBar"} />
        <RoundIcon image={linkedinIcon} variant={"bottomBar"} />
        <RoundIcon image={linkedinIcon} variant={"bottomBar"} />
      </Stack>
      <Center paddingTop={"2rem"} paddingBottom={"2rem"}>
        <Flex h={"0.1rem"} w={"95%"} bg={theme.colors.lightGrey}></Flex>
      </Center>
      <Flex paddingLeft={"3rem"}>
        <Center w={"10%"}>
          <img style={{ width: "7rem" }} src={switchIcon} />
        </Center>
      </Flex>
    </Stack>
  );
};
