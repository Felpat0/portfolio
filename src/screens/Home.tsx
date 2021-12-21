import { Center, Flex, Stack } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import { ItemSquare } from "../components/SquareItem";
import { RoundIcon } from "../components/RoundIcon";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { TopBar } from "../components/TopBar";

import mostazaSquare from "./../assets/squares/mostaza.svg";
import webDevSquare from "./../assets/squares/webdev.png";
import videogamesSquare from "./../assets/squares/videogames.png";
import mlSquare from "./../assets/squares/machineLearning.png";

import linkedinIcon from "./../assets/icons/linkedin.png";
import githubIcon from "./../assets/icons/github.svg";
import mailIcon from "./../assets/icons/mailOrange.svg";
import switchIcon from "./../assets/icons/switch.png";
import profileIcon from "./../assets/icons/profileIcon.jpg";

import { Loading } from "../components/Loading";
import { useCallback, useEffect, useState } from "react";
import { MostazaOverlay } from "../components/overlays/MostazaOverlay";
import { WebDevOverlay } from "../components/overlays/WebDevOverlay";
import { VideogamesOverlay } from "../components/overlays/VideogamesOverlay";
import { MLOverlay } from "../components/overlays/MLOverlay";
import { BioOverlay } from "../components/overlays/BioOverlay";

import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`${fadeIn}`;

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentOverlay, setCurrentOverlay] = useState(-1);
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

  const toggleOverlay = useCallback(
    (overlayId: number) => {
      if (overlayId !== null && overlayId !== undefined) {
        if (currentOverlay !== -1) setCurrentOverlay(-1);
        else setCurrentOverlay(overlayId);
      } else setCurrentOverlay(-1);
    },
    [currentOverlay]
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
            toggleOverlay={toggleOverlay}
            overlayId={4}
          />
          <MostazaOverlay
            display={currentOverlay === 0 ? "block" : "none"}
            screenHeight={height}
            screenWidth={width}
            toggleDisplay={toggleOverlay}
            overlayId={0}
            icon={mostazaSquare}
            title={"Mostaza"}
            subtitle={"Currently working | Full Stack Engineer"}
          />
          <WebDevOverlay
            display={currentOverlay === 1 ? "block" : "none"}
            screenHeight={height}
            screenWidth={width}
            toggleDisplay={toggleOverlay}
            overlayId={1}
            icon={webDevSquare}
            title={"Web Dev Projects"}
          />
          <VideogamesOverlay
            display={currentOverlay === 2 ? "block" : "none"}
            screenHeight={height}
            screenWidth={width}
            toggleDisplay={toggleOverlay}
            overlayId={2}
            icon={videogamesSquare}
            title={"Videogames Projects"}
          />
          <MLOverlay
            display={currentOverlay === 3 ? "block" : "none"}
            screenHeight={height}
            screenWidth={width}
            toggleDisplay={toggleOverlay}
            overlayId={3}
            icon={mlSquare}
            title={"ML Projects"}
          />
          <BioOverlay
            display={currentOverlay === 4 ? "block" : "none"}
            screenHeight={height}
            screenWidth={width}
            toggleDisplay={toggleOverlay}
            overlayId={4}
            icon={profileIcon}
            title={"Federico Cattini"}
          />
        </Flex>
        <Flex h={"60vh"} w={"100%"} paddingTop={width <= 557 ? "0vh" : "3vh"}>
          <ScrollableContainer>
            <ItemSquare
              image={mostazaSquare}
              text={"Mostaza"}
              backgroundColor={"#50585a"}
              working={true}
              workingImage={profileIcon}
              onClick={() => {
                if (Date.now() - mouseDownTime < 200) {
                  setCurrentOverlay(0);
                }
              }}
              screenHeight={height}
              screenWidth={width}
            />
            <ItemSquare
              image={webDevSquare}
              text={"Web Development Projects"}
              selected={true}
              onClick={() => {
                if (Date.now() - mouseDownTime < 200) {
                  setCurrentOverlay(1);
                }
              }}
              screenHeight={height}
              screenWidth={width}
            />
            <ItemSquare
              image={videogamesSquare}
              text={"Videogames Projects"}
              onClick={() => {
                if (Date.now() - mouseDownTime < 200) {
                  setCurrentOverlay(2);
                }
              }}
              screenHeight={height}
              screenWidth={width}
            />
            <ItemSquare
              image={mlSquare}
              text={"Machine Learning Projects"}
              selected={true}
              onClick={() => {
                if (Date.now() - mouseDownTime < 200) {
                  setCurrentOverlay(3);
                }
              }}
              screenHeight={height}
              screenWidth={width}
            />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
            <ItemSquare screenHeight={height} screenWidth={width} />
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
