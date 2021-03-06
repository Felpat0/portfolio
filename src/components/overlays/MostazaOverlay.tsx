import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import SuperbonusMobile from "../../assets/overlays/superbonus-phoneMockup.png";
import SuperbonusDesktop from "../../assets/overlays/superbonus-pcMockup.png";
import CodeIcon from "../../assets/icons/code.png";
import ReactIcon from "../../assets/icons/react.svg";
import NodeIcon from "../../assets/icons/node.svg";
import GraphSqlIcon from "../../assets/icons/graphsql.png";
import ToolsIcon from "../../assets/icons/tools.png";
import PrismaIcon from "../../assets/icons/prisma.png";
import DockerIcon from "../../assets/icons/docker.png";
import BitBucketIcon from "../../assets/icons/bitbucket.png";

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

export const MostazaOverlay: React.FC<Props> = (props) => {
  const voices: OverlayVoiceType[] = [
    {
      title: "Mostaza",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <Flex
            alignItems={"center"}
            direction={props.screenWidth <= 557 ? "column" : "row"}
          >
            <Stack w={props.screenWidth <= 557 ? "100%" : "50%"}>
              <Text fontSize={"xl"} textAlign={"center"}>
                I'm currently working at Mostaza as a Full Stack Engineer.
              </Text>
              <br />
              <Center>
                <Stack>
                  <Center>
                    <Flex w={"2rem"} h={"2rem"} marginRight={"1rem"}>
                      <img src={CodeIcon} alt={"Code icon"} />
                    </Flex>
                    <Text fontSize={"4xl"}>My stack</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.5rem"} h={"auto"}>
                      <img src={ReactIcon} alt={"React icon"} />
                    </Flex>
                    <Text fontSize={"lg"}>React</Text>
                  </Center>
                  <Center>
                    <Flex w={"1.7rem"} h={"auto"} marginRight={"0.5rem"}>
                      <img src={NodeIcon} alt={"Node icon"} />
                    </Flex>
                    <Text fontSize={"lg"}>NodeJS</Text>
                  </Center>
                  <Center>
                    <Flex w={"2rem"} h={"auto"} marginRight={"0.5rem"}>
                      <img src={GraphSqlIcon} alt={"Graphsql icon"} />
                    </Flex>
                    <Text fontSize={"lg"}>GraphSQL</Text>
                  </Center>
                </Stack>
              </Center>
              <Center paddingTop={props.screenWidth <= 557 ? "2rem" : "5rem"}>
                <Stack>
                  <Center>
                    <Flex w={"2rem"} h={"2rem"} marginRight={"1rem"}>
                      <img src={ToolsIcon} alt={"Tools icon"} />
                    </Flex>
                    <Text fontSize={"4xl"}>Tools</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.5rem"} h={"auto"} marginRight={"0.5rem"}>
                      <img src={PrismaIcon} alt={"Prisma icon"} />
                    </Flex>
                    <Text fontSize={"lg"}>Prisma</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.7rem"} h={"auto"} marginRight={"0.5rem"}>
                      <img src={DockerIcon} alt={"Docker icon"} />
                    </Flex>
                    <Text fontSize={"lg"}>Docker</Text>
                  </Center>
                  <Center>
                    <Flex w={"1.7rem"} h={"auto"}>
                      <img src={BitBucketIcon} alt={"Bitbucket icon"} />
                    </Flex>
                    <Text fontSize={"lg"} marginLeft={"0.5rem"}>
                      BitBucket
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Stack>
            <Stack
              w={props.screenWidth <= 557 ? "100%" : "50%"}
              paddingTop={props.screenWidth <= 557 ? "4rem" : "0"}
            >
              <a
                href={"https://www.tele-dolomiti.it/"}
                target="_blank"
                rel="noreferrer"
              >
                <Center
                  w={"100%"}
                  flexDirection={props.screenWidth <= 557 ? "column" : "row"}
                >
                  <img
                    src={SuperbonusMobile}
                    width={props.screenWidth <= 557 ? "90%" : "25%"}
                    alt={"Tele-Dolomiti mobile screen"}
                  />
                  <img
                    src={SuperbonusDesktop}
                    width={props.screenWidth <= 557 ? "90%" : "75%"}
                    alt={"Tele-Dolomiti desktop screen"}
                  />
                </Center>
                <Text textAlign={"center"} fontSize={"xl"}>
                  Last project: <strong>Tele-Dolomiti</strong>
                </Text>
              </a>
            </Stack>
          </Flex>
        </Stack>
      ),
    },
    // {
    //   title: "Progetti",
    //   content: <p>Ne ho fatto uno ma non ?? niente di che</p>,
    // },
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
