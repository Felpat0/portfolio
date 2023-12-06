import { Center, Flex, Stack } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import { SquareItem } from "../components/SquareItem";
import { RoundIcon } from "../components/RoundIcon";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { TopBar } from "../components/TopBar";

import linkedinIcon from "./../assets/icons/linkedin.png";
import githubIcon from "./../assets/icons/github.svg";
import mailIcon from "./../assets/icons/mailOrange.svg";
import switchIcon from "./../assets/icons/switch.png";
import profileIcon from "./../assets/icons/profileIcon.jpg";

import { Loading } from "../components/Loading";
import { useCallback, useEffect, useState } from "react";

import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { overlays } from "../config/overlays";
import { Overlay } from "../components/Overlay";
import { BioOverlay } from "../components/overlays/BioOverlay";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentOverlayId, setCurrentOverlayId] = useState<number | "bio">(-1);
  const [mouseDownTime, setMouseDownTime] = useState(0);
  const [width, setWidth] = useState(
    window.innerWidth > 0 ? window.innerWidth : window.screen.width
  );
  const [height, setHeight] = useState(
    window.innerHeight > 0 ? window.innerHeight : window.screen.height
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth > 0 ? window.innerWidth : window.screen.width);
      setHeight(
        window.innerHeight > 0 ? window.innerHeight : window.screen.height
      );
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const currentOverlay =
    typeof currentOverlayId === "number"
      ? overlays[currentOverlayId]
      : undefined;

  const onSquareClick = useCallback(
    (overlayId: number) => {
      if (Date.now() - mouseDownTime < 200) {
        if (currentOverlayId !== -1) setCurrentOverlayId(-1);
        else setCurrentOverlayId(overlayId);
      }
    },
    [mouseDownTime, currentOverlayId]
  );

  const toggleOverlay = useCallback(
    (overlayId: number | "bio") => {
      if (overlayId || overlayId === 0) {
        if (currentOverlayId !== -1) setCurrentOverlayId(-1);
        else if (overlayId === "bio") setCurrentOverlayId("bio");
        else setCurrentOverlayId(overlayId);
      } else setCurrentOverlayId(-1);
    },
    [currentOverlayId]
  );

  if (isLoading) {
    return (
      <Center
        height={"100vh"}
        margin={0}
        overflow={"hidden"}
        bg={theme.colors.backgroundHome}
      >
        <Loading screenHeight={height} screenWidth={width} />
      </Center>
    );
  }

  return (
    <Stack
      w={"100%"}
      h={"100%"}
      minH={"100vh"}
      maxW={"100vw"}
      bg={theme.colors.backgroundHome}
      overflow={"hidden"}
    >
      <FadeInStack
        w={"100%"}
        h={"100%"}
        minH={"100vh"}
        maxW={"100vw"}
        bg={theme.colors.backgroundHome}
        overflow={"hidden"}
        onMouseDown={() => {
          setMouseDownTime(Date.now());
        }}
      >
        <Flex h={"10vh"} paddingTop={"2vh"}>
          <TopBar
            height={height}
            width={width}
            openBio={() => toggleOverlay("bio")}
          />
          {currentOverlay && (
            <Overlay
              {...currentOverlay}
              overlayId={
                typeof currentOverlayId === "number"
                  ? currentOverlayId
                  : undefined
              }
              screenHeight={height}
              screenWidth={width}
              toggleDisplay={toggleOverlay}
            />
          )}
          {currentOverlayId === "bio" ? (
            <BioOverlay
              screenHeight={height}
              screenWidth={width}
              toggleDisplay={toggleOverlay}
              overlayId={4}
              icon={profileIcon}
              title={"Federico Cattini"}
            />
          ) : (
            <></>
          )}
        </Flex>
        <Flex h={"60vh"} w={"100%"} paddingTop={width <= 557 ? "0vh" : "3vh"}>
          <ScrollableContainer>
            {overlays.map((overlay, index) => (
              <SquareItem
                {...overlay}
                backgroundColor={"rgba(255, 255, 255, 0.9)"}
                workingImage={profileIcon}
                onClick={() => onSquareClick(index)}
                screenHeight={height}
                screenWidth={width}
                key={index + overlay.title}
              />
            ))}

            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
            <SquareItem screenHeight={height} screenWidth={width} />
          </ScrollableContainer>
        </Flex>
        <Stack
          height={"12vh"}
          width={"100%"}
          direction={"row"}
          spacing={"1.5vw"}
          justifyContent={"center"}
        >
          <RoundIcon
            image={linkedinIcon}
            variant={"bottomBar"}
            width={width <= 557 ? "20vw" : "11.5vh"}
            height={width <= 557 ? "20vw" : "11.5vh"}
            imgHeight={width <= 557 ? "11vw" : "7vh"}
            imgWidth={width <= 557 ? "11vw" : "7vh"}
            href={"https://www.linkedin.com/in/federicocattini/"}
          />
          <RoundIcon
            image={githubIcon}
            variant={"bottomBar"}
            width={width <= 557 ? "20vw" : "11.5vh"}
            height={width <= 557 ? "20vw" : "11.5vh"}
            imgHeight={width <= 557 ? "15vw" : "9vh"}
            imgWidth={width <= 557 ? "15vw" : "9vh"}
            href={"https://github.com/Felpat0"}
          />
          <RoundIcon
            image={mailIcon}
            variant={"bottomBar"}
            width={width <= 557 ? "20vw" : "11.5vh"}
            height={width <= 557 ? "20vw" : "11.5vh"}
            imgHeight={width <= 557 ? "15vw" : "8vh"}
            imgWidth={width <= 557 ? "15vw" : "8vh"}
            href={"mailto: federico.cattini98@gmail.com"}
          />
          {/* <RoundIcon
            image={infoIcon}
            variant={"bottomBar"}
            width={width <= 557 ? "20vw" : "11.5vh"}
            height={width <= 557 ? "20vw" : "11.5vh"}
            imgHeight={width <= 557 ? "15vw" : "10vh"}
            imgWidth={width <= 557 ? "15vw" : "10vh"}
          /> */}
        </Stack>
        <Center h={"4vh"}>
          <Flex h={"0.1rem"} w={"95%"} bg={theme.colors.lightGrey}></Flex>
        </Center>
        <Flex h={"100%"}>
          <Center w={width <= 557 ? "100%" : "10%"}>
            <img
              style={{ width: width <= 557 ? "25%" : "13vh" }}
              src={switchIcon}
              alt={"Switch icon"}
            />
          </Center>
        </Flex>
      </FadeInStack>
    </Stack>
  );
};

const FadeInStack = styled(Stack)`
  animation: 1s ${fadeInAnimation};
`;
