import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import SuperbonusMobile from "../../assets/overlays/superbonusResized-phoneMockup.png";
import SuperbonusDesktop from "../../assets/overlays/superbonusResized-pcMockup.png";
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
  icon: any;
  title: string;
  subtitle?: string;
};

export const MostazaOverlay: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const voices: OverlayVoiceType[] = [
    {
      title: "Mostaza",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <Flex alignItems={"center"}>
            <Stack w={"50%"}>
              <Text fontSize={"xl"}>
                I'm currently working at Mostaza as a Full Stack Engineer.
              </Text>
              <br />
              <Center>
                <Stack>
                  <Center>
                    <Flex w={"2rem"} h={"2rem"} marginRight={"1rem"}>
                      <img src={CodeIcon} />
                    </Flex>
                    <Text fontSize={"4xl"}>My stack</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.5rem"} h={"auto"}>
                      {" "}
                      <img src={ReactIcon} />
                    </Flex>
                    <Text fontSize={"lg"}>React</Text>
                  </Center>
                  <Center>
                    <Flex w={"1.7rem"} h={"auto"} marginRight={"0.5rem"}>
                      {" "}
                      <img src={NodeIcon} />
                    </Flex>
                    <Text fontSize={"lg"}>NodeJS</Text>
                  </Center>
                  <Center>
                    <Flex w={"2rem"} h={"auto"} marginRight={"0.5rem"}>
                      {" "}
                      <img src={GraphSqlIcon} />
                    </Flex>
                    <Text fontSize={"lg"}>GraphSQL</Text>
                  </Center>
                </Stack>
              </Center>
              <Center paddingTop={"5rem"}>
                <Stack>
                  <Center>
                    <Flex w={"2rem"} h={"2rem"} marginRight={"1rem"}>
                      <img src={ToolsIcon} />
                    </Flex>
                    <Text fontSize={"4xl"}>Tools</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.5rem"} h={"auto"} marginRight={"0.5rem"}>
                      {" "}
                      <img src={PrismaIcon} />
                    </Flex>
                    <Text fontSize={"lg"}>Prisma</Text>
                  </Center>
                  <Center>
                    <Flex w={"2.7rem"} h={"auto"} marginRight={"0.5rem"}>
                      {" "}
                      <img src={DockerIcon} />
                    </Flex>
                    <Text fontSize={"lg"}>Docker</Text>
                  </Center>
                  <Center>
                    <Flex w={"1.7rem"} h={"auto"}>
                      {" "}
                      <img src={BitBucketIcon} />
                    </Flex>
                    <Text fontSize={"lg"} marginLeft={"0.5rem"}>
                      BitBucket
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Stack>
            <Stack w={"50%"}>
              <a href={"https://simulatoresuperbonus.it/"} target="_blank">
                <Center w={"100%"}>
                  <img src={SuperbonusMobile} width={"25%"} />
                  <img src={SuperbonusDesktop} width={"75%"} />
                </Center>
                <Text textAlign={"center"} fontSize={"xl"}>
                  Last project: <strong>Superbonus 110% Simulator</strong>
                </Text>
              </a>
            </Stack>
          </Flex>
        </Stack>
      ),
    },
    // {
    //   title: "Progetti",
    //   content: <p>Ne ho fatto uno ma non è niente di che</p>,
    // },
  ];
  return (
    <DetailsOverlay
      display={props.display}
      toggleDisplay={props.toggleDisplay}
      icon={props.icon}
      title={props.title}
      subtitle={props.subtitle}
      voices={voices}
    />
  );
};
