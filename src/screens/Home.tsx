import { Center, Divider, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import { ItemSquare } from "../components/SquareItem";
import { RoundIcon } from "../components/RoundIcon";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { TopBar } from "../components/TopBar";

import linkedinIcon from "./../assets/icons/linkedin.png";
import githubIcon from "./../assets/icons/github.svg";
import mailIcon from "./../assets/icons/mailOrange.svg";
import switchIcon from "./../assets/icons/switch.png";
import mostazaSquare from "./../assets/squares/mostaza.svg";
import rivenIcon from "./../assets/icons/riven.jpg";
import infoIcon from "./../assets/icons/info.png";

import { Loading } from "../components/Loading";
import { useCallback, useEffect, useState } from "react";
import { MostazaOverlay } from "../components/overlays/MostazaOverlay";

export const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mostazaOverlayDisplay, setMostazaOverlayDisplay] = useState("none");
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
  }, []);

  const toggleMostazaOverlay = useCallback(() => {
    if (mostazaOverlayDisplay == "block") setMostazaOverlayDisplay("none");
    else setMostazaOverlayDisplay("block");
  }, [mostazaOverlayDisplay]);
  if (isLoading)
    return (
      <Center height={"100vh"} margin={0} overflow={"hidden"}>
        <Loading textFromTop={"Nintendo"} textFromBottom={"Switch"} />
      </Center>
    );
  return (
    <Stack
      w={"100%"}
      h={"100%"}
      minH={"100vh"}
      maxW={"100vw"}
      bg={theme.colors.backgroundHome}
      overflow={"hidden"}
    >
      <Flex h={"10vh"} paddingTop={"2vh"}>
        <TopBar height={height} width={width} />
        <MostazaOverlay
          display={mostazaOverlayDisplay}
          toggleDisplay={toggleMostazaOverlay}
          icon={mostazaSquare}
          title={"Mostaza"}
          subtitle={"Currently working | Full Stack Engineer"}
        />
      </Flex>
      <Flex h={"60vh"} w={"100%"} paddingTop={width <= 557 ? "0vh" : "3vh"}>
        <ScrollableContainer>
          <ItemSquare
            image={mostazaSquare}
            text={"Mostaza"}
            backgroundColor={"#50585a"}
            working={true}
            workingImage={rivenIcon}
            selected={true}
            onClick={() => setMostazaOverlayDisplay("block")}
            height={height}
            width={width}
          />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
          <ItemSquare height={height} width={width} />
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
        <RoundIcon
          image={infoIcon}
          variant={"bottomBar"}
          width={width <= 557 ? "20vw" : "11.5vh"}
          height={width <= 557 ? "20vw" : "11.5vh"}
          imgHeight={width <= 557 ? "15vw" : "10vh"}
          imgWidth={width <= 557 ? "15vw" : "10vh"}
        />
      </Stack>
      <Center h={"4vh"}>
        <Flex h={"0.1rem"} w={"95%"} bg={theme.colors.lightGrey}></Flex>
      </Center>
      <Flex h={"100%"}>
        <Center w={width <= 557 ? "100%" : "10%"}>
          <img
            style={{ width: width <= 557 ? "25%" : "13vh" }}
            src={switchIcon}
          />
        </Center>
      </Flex>
    </Stack>
  );
};