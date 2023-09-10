import { Flex, Center, Text, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fadeIn, slideInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

import SwitchLeft from "./../assets/switchLogoLeft.png";
import SwitchRight from "./../assets/switchLogoRight.png";

type Props = {
  screenHeight: number;
  screenWidth: number;
};

const fadeInAnimation = keyframes`${fadeIn}`;
const slideInDownAnimation = keyframes`${slideInDown}`;

export const Loading: React.FC<Props> = (props) => {
  const [showNext, setShowNext] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNext(true);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Center flexDirection={"row"}>
      <Stack>
        <Center>
          <Center w={props.screenWidth <= 557 ? "70vw" : "15vw"}>
            <Flex w={"50%"}>
              <img
                src={SwitchLeft}
                style={{ paddingRight: "0.5rem" }}
                alt={"Federico Cattini"}
              />
            </Flex>
            <SwitchRightFlex w={"50%"}>
              <img
                src={SwitchRight}
                style={{ paddingLeft: "0.5rem" }}
                alt={"Front-End Engineer"}
              />
            </SwitchRightFlex>
          </Center>
        </Center>
        <FadeInNameFlex>
          <Text
            fontSize={props.screenWidth <= 557 ? "4xl" : "6xl"}
            fontWeight={"bold"}
            color={"white"}
          >
            {"Federico Cattini"}
          </Text>
        </FadeInNameFlex>
        <Center visibility={"hidden"} display={showNext ? "none" : "flex"}>
          <Text
            fontSize={props.screenWidth <= 557 ? "4xl" : "6xl"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {"Front-End Engineer"}
          </Text>
        </Center>
        {showNext ? (
          <>
            <Center>
              <Text
                fontSize={props.screenWidth <= 557 ? "4xl" : "6xl"}
                fontWeight={"bold"}
                textAlign={"center"}
                color={"white"}
              >
                {"Front-End Engineer"}
              </Text>
            </Center>
          </>
        ) : (
          <></>
        )}
      </Stack>
    </Center>
  );
};

const FadeInNameFlex = styled(Center)`
  color: white;
  animation: 2s ${fadeInAnimation};
`;

const SwitchRightFlex = styled(Flex)`
  color: white;
  animation: 1.5s ${slideInDownAnimation};
`;
