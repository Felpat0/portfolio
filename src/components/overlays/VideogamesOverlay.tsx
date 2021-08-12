import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import PacmanScreen from "../../assets/overlays/pacman.png";
import PogScreen from "../../assets/overlays/pog.png";

type Props = {
  display?: string;
  toggleDisplay?: any;
  overlayId?: number;
  icon: any;
  title: string;
  subtitle?: string;
  screenHeight: number;
  screenWidth: number;
};

export const VideogamesOverlay: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const voices: OverlayVoiceType[] = [
    {
      title: "PacMan",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <div
            // @ts-ignore
            style={{
              display: "flex",
              flexDirection: props.screenWidth <= 557 ? "column" : "row",
              width: "100%",
              alignItems: "center",
              height: "100%",
            }}
          >
            {" "}
            <div>
              <Text fontSize={"lg"} textAlign={"center"}>
                I remade the game <strong>PacMan</strong> in{" "}
                <strong>Java</strong> (using the library{" "}
                <strong>Java AWT</strong>).
                <br />
                In particular I've implemented PacMan's movement, collisions,
                enemies' AI and sound effects.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/PacManJava"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
            <Center w={"100%"}>
              <Center w={"80%"}>
                <img
                  src={PacmanScreen}
                  style={{
                    width: props.screenWidth <= 557 ? "80%" : "80%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
    {
      title: "CMD Rogue-Like",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <div
            // @ts-ignore
            style={{
              display: "flex",
              flexDirection: props.screenWidth <= 557 ? "column" : "column",
              width: "100%",
              height: "100%",
            }}
          >
            {" "}
            <Center flexDirection={"column"}>
              <Text fontSize={"lg"} textAlign={"center"}>
                For a university project I've developed a{" "}
                <strong>Rogue-Like game</strong> in plain <strong>C++</strong>.
                The aim of the game is to exit from the dungeon without getting
                killed by the monsters that inhabit it.
                <br />
                Some of the implemented features are:
              </Text>
              <Text fontSize={"lg"} paddingLeft={"2rem"}>
                <ul>
                  <li>
                    Random dungeon generation (with writing and reading on XML
                    file)
                  </li>
                  <li>
                    Items (like weapons, armors, potions, herbs) and spells
                    (also area of effect spells)
                  </li>
                  <li>
                    Possibility of creating custom classes, items and spells via
                    XML file
                  </li>
                  <li>Fog of war</li>
                  <li>
                    Pathfinding alghorithm <strong>A*</strong>
                  </li>
                  <li>Turn-based game cycle</li>
                </ul>
                <br />
              </Text>
              <Text fontSize={"lg"}>
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/POGproject"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </Center>
            <Center
              w={"100%"}
              paddingTop={props.screenWidth <= 557 ? "1rem" : "2rem"}
            >
              <Center w={props.screenWidth <= 557 ? "100%" : "70%"}>
                <img
                  src={PogScreen}
                  style={{
                    width: props.screenWidth <= 557 ? "100%" : "100%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
  ];
  return (
    <DetailsOverlay
      display={props.display}
      overlayId={props.overlayId}
      screenHeight={props.screenHeight}
      screenWidth={props.screenWidth}
      toggleDisplay={props.toggleDisplay}
      icon={props.icon}
      title={props.title}
      subtitle={props.subtitle}
      voices={voices}
    />
  );
};
