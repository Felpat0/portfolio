import { useState } from "react";
import {
  Center,
  CloseButton,
  Flex,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";

import { theme } from "../assets/theme";
import switchIcon from "./../assets/icons/switch.png";
import { DetailsOverlayVoice } from "./DetailsOverlayVoice";
import { OverlayVoiceType } from "../types";
import { RoundIcon } from "./RoundIcon";

type Props = {
  display?: string;
  toggleDisplay?: any;
  overlayId?: number;
  icon: any;
  title: string;
  subtitle?: string;
  voices?: OverlayVoiceType[];
  screenHeight: number;
  screenWidth: number;
};

export const ProfileOverlay: React.FC<Props> = (props) => {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  let iconSize = "10vh";

  if (props.screenWidth <= 557) iconSize = "3rem";

  return (
    <StyledCenter display={props.display}>
      <StyledCenter2>
        <Stack bg={theme.colors.backgroundHome} w={"100%"} h={"100%"}>
          {/* Topbar */}
          <Flex
            h={props.screenWidth <= 557 ? "10vh" : "12vh"}
            direction={"row"}
            alignItems={"center"}
            paddingLeft={"1vw"}
          >
            <RoundIcon
              image={props.icon}
              variant={"bottomBar"}
              width={iconSize}
              height={iconSize}
              imgWidth={iconSize}
              imgHeight={iconSize}
            />
            <Flex
              flexDirection={"column"}
              marginLeft={"1rem"}
              height={"100%"}
              width={"80%"}
              position={"relative"}
              justifyContent={"center"}
            >
              <Text fontSize={"2xl"} color={"white"}>
                {props.title}
              </Text>
              {props.screenWidth > 557 ? (
                <Text
                  fontSize={"sm"}
                  position={"absolute"}
                  color={"rgba(250, 250, 250, 0.7)"}
                  bottom={0}
                >
                  {props.subtitle}
                </Text>
              ) : (
                <></>
              )}
            </Flex>
            <Spacer />
            <Flex h={"100%"} paddingTop={"1rem"}>
              <CloseButton
                marginRight={"2rem"}
                color={"white"}
                size={"lg"}
                top={0}
                onClick={() => {
                  props.toggleDisplay(props.overlayId);
                }}
              />
            </Flex>
          </Flex>
          {props.screenWidth <= 557 ? (
            <Text
              fontSize={"sm"}
              color={"rgba(250, 250, 250, 0.7)"}
              textAlign={"center"}
            >
              {props.subtitle}
            </Text>
          ) : (
            <></>
          )}
          <Center paddingBottom={props.screenWidth <= 557 ? "0" : "1rem"}>
            <Flex h={"0.1rem"} w={"95%"} bg={theme.colors.lightGrey}></Flex>
          </Center>
          {/* Center */}
          <Flex
            h={"80%"}
            w={"100%"}
            color={"white"}
            overflow={"hidden"}
            direction={props.screenWidth <= 557 ? "column" : "row"}
          >
            <Stack
              w={props.screenWidth <= 557 ? "100%" : "15%"}
              paddingLeft={"3%"}
              paddingTop={"2%"}
              marginRight={"1rem"}
              justifyContent={props.screenWidth <= 557 ? "center" : ""}
            >
              {props.voices?.map((voice, index) => (
                <Flex w={"100%"} key={index + (voice?.title || "")}>
                  <DetailsOverlayVoice
                    text={voice.title}
                    onClick={() => {
                      setCurrentContentIndex(index);
                    }}
                    isActive={index === currentContentIndex}
                  />
                </Flex>
              ))}
            </Stack>
            <Center
              h={props.screenWidth <= 557 ? "" : "100%"}
              w={props.screenWidth <= 557 ? "100%" : ""}
            >
              <Flex
                w={props.screenWidth <= 557 ? "100%" : "0.1rem"}
                h={props.screenWidth <= 557 ? "0.1rem" : "100%"}
                bg={theme.colors.lightGrey}
              ></Flex>
            </Center>
            <Flex
              w={props.screenWidth <= 557 ? "100%" : "80%"}
              padding={"1%"}
              overflowY={"auto"}
            >
              {props.voices && props.voices[currentContentIndex].content}
            </Flex>
          </Flex>
          <Center
            paddingTop={"2rem"}
            paddingBottom={props.screenWidth <= 557 ? "0.1vh" : "1rem"}
            margin={0}
          >
            <Flex h={"0.1rem"} w={"95%"} bg={theme.colors.lightGrey}></Flex>
          </Center>
          {/* Bottombar */}
          <Flex h={props.screenWidth <= 557 ? "10vh" : ""}>
            <Center w={props.screenWidth <= 557 ? "100%" : "10%"} h={"100%"}>
              <img
                style={{
                  width: props.screenWidth <= 557 ? "25%" : "13vh",
                }}
                src={switchIcon}
                alt={"Switch"}
              />
            </Center>
          </Flex>
        </Stack>
      </StyledCenter2>
      <ExitCenter
        onClick={() => props.toggleDisplay(props.overlayId)}
      ></ExitCenter>
    </StyledCenter>
  );
};

const StyledCenter = styled(Center)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  cursor: cursor;
`;

const ExitCenter = styled(Center)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  cursor: cursor;
`;
const StyledCenter2 = styled(Center)`
  height: 90%;
  width: 90%;
  position: relative;
  justify-content: center;
  align-items: center;
  justify-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  left: 50%;
  transform: translateX(-50%);
  top: 5%;
`;
