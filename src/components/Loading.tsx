import { Flex, Center, Text, Stack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { fadeInUp, fadeInDown, fadeIn, slideInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

import SwitchLeft from "./../assets/switchLogoLeft.png";
import SwitchRight from "./../assets/switchLogoRight.png";

type Props = {
  screenHeight: number;
  screenWidth: number;
};
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;
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
              <img src={SwitchLeft} style={{ paddingRight: "0.5rem" }} />
            </Flex>
            <SwitchRightFlex w={"50%"}>
              <img src={SwitchRight} style={{ paddingLeft: "0.5rem" }} />
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
            {"Full Stack Engineer"}
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
                {"Full Stack Engineer"}
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

const FadeInFlex1 = styled(Center)`
  color: white;
  animation: 3s ${fadeInUpAnimation};
`;
const FadeInFlex2 = styled(Center)`
  color: white;
  animation: 3s ${fadeInDownAnimation};
`;
