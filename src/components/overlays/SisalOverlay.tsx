import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import CodeIcon from "../../assets/icons/code.png";
import ReactIcon from "../../assets/icons/react.svg";
import JestIcon from "../../assets/icons/jest.png";
import StorybookIcon from "../../assets/icons/storybook.png";
import ToolsIcon from "../../assets/icons/tools.png";
import VSCodeIcon from "../../assets/icons/vscode.png";
import GitlabIcon from "../../assets/icons/gitlab.png";

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

export const SisalOverlay: React.FC<Props> = (props) => {
  const voices: OverlayVoiceType[] = [
    {
      title: "Sisal",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <Flex
            alignItems={"center"}
            direction={props.screenWidth <= 557 ? "column" : "row"}
          >
            <Stack w={props.screenWidth <= 557 ? "100%" : "50%"}>
              <Text fontSize={"xl"} textAlign={"center"}>
                I'm currently working at Sisal as a React Developer.
              </Text>
              <br />
              <Center>
                <Stack>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"1rem"}>
                      <img src={CodeIcon} alt={"Code icon"} />
                    </Flex>
                    <Text fontSize={"4xl"}>My stack</Text>
                  </Center>
                  <Center>
                    <Flex w={"auto"} h={"2rem"}>
                      <img src={ReactIcon} alt={"React"} />
                    </Flex>
                    <Text fontSize={"lg"}>React</Text>
                  </Center>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                      <img src={JestIcon} alt={"Jest"} />
                    </Flex>
                    <Text fontSize={"lg"}>Jest</Text>
                  </Center>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                      <img src={StorybookIcon} alt={"Storybook"} />
                    </Flex>
                    <Text fontSize={"lg"}>Storybook</Text>
                  </Center>
                </Stack>
              </Center>
              <Center paddingTop={props.screenWidth <= 557 ? "2rem" : "5rem"}>
                <Stack>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"1rem"}>
                      <img src={ToolsIcon} alt={"Tools icon"} />
                    </Flex>
                    <Text fontSize={"4xl"}>Tools</Text>
                  </Center>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                      <img src={VSCodeIcon} alt={"VS Code"} />
                    </Flex>
                    <Text fontSize={"lg"}>VS Code</Text>
                  </Center>
                  <Center>
                    <Flex w={"auto"} h={"2rem"} marginRight={"0.5rem"}>
                      <img src={GitlabIcon} alt={"GitLab"} />
                    </Flex>
                    <Text fontSize={"lg"}>GitLab</Text>
                  </Center>
                </Stack>
              </Center>
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
