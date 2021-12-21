import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { OverlayVoiceType } from "../../types";

import { ProfileOverlay } from "../ProfileOverlay";
import { theme } from "../../assets/theme";
import { Activities } from "../Activities";
import { activities } from "../../stores/activities";

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

export const BioOverlay: React.FC<Props> = (props) => {
  const voices: OverlayVoiceType[] = [
    {
      title: "About me",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <Flex
            w={"100%"}
            direction={props.screenWidth <= 557 ? "column" : "row"}
          >
            <Center
              w={props.screenWidth <= 557 ? "100%" : "10vw"}
              height={props.screenWidth <= 557 ? "100%" : "10vw"}
              marginTop={"1rem"}
            >
              <Flex
                w={props.screenWidth <= 557 ? "60vw" : "10vw"}
                height={props.screenWidth <= 557 ? "60vw" : "10vw"}
              >
                <img
                  src={props.icon}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  width={"100%"}
                  alt={"Federico Cattini"}
                />
              </Flex>
            </Center>
            <Stack
              w={props.screenWidth <= 557 ? "100%" : "80%"}
              paddingTop={props.screenWidth <= 557 ? "1rem" : "0"}
            >
              <Center
                h={"0.2rem"}
                paddingLeft={props.screenWidth <= 557 ? "0" : "2rem"}
              >
                <Flex
                  h={"0.01rem"}
                  w={props.screenWidth <= 557 ? "90%" : "100%"}
                  bg={theme.colors.midGrey}
                />
              </Center>
              <Text
                fontSize={"3xl"}
                paddingLeft={props.screenWidth <= 557 ? "1rem" : "2rem"}
              >
                Federico Cattini
              </Text>
              <Center
                h={"0.2rem"}
                paddingLeft={props.screenWidth <= 557 ? "0" : "2rem"}
              >
                <Flex
                  h={"0.01rem"}
                  w={props.screenWidth <= 557 ? "90%" : "100%"}
                  bg={theme.colors.midGrey}
                />
              </Center>
              <Text
                fontSize={"xl"}
                color={theme.colors.lightGrey}
                paddingLeft={props.screenWidth <= 557 ? "1rem" : "2rem"}
              >
                Full Stack Engineer
              </Text>
              <Center
                h={"0.2rem"}
                paddingLeft={props.screenWidth <= 557 ? "0" : "2rem"}
              >
                <Flex
                  h={"0.01rem"}
                  w={props.screenWidth <= 557 ? "90%" : "100%"}
                  bg={theme.colors.midGrey}
                />
              </Center>
              <Text
                fontSize={""}
                color={theme.colors.lightGrey}
                paddingLeft={props.screenWidth <= 557 ? "1rem" : "2rem"}
              >
                Bachelor Degree in "Scienze e Tecnologie per i Media",{" "}
                <strong>
                  110 <em>cum laude</em>
                </strong>
              </Text>
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            paddingTop={props.screenWidth <= 557 ? "2rem" : "0"}
          >
            <Center h={"0.2rem"}>
              <Flex
                h={"0.01rem"}
                w={props.screenWidth <= 557 ? "90%" : "100%"}
                bg={theme.colors.midGrey}
              />
            </Center>
            <Text
              fontSize={"3xl"}
              paddingLeft={props.screenWidth <= 557 ? "1rem" : "0"}
            >
              Hi, I'm Federico
            </Text>
            <Text paddingLeft={props.screenWidth <= 557 ? "1rem" : "0"}>
              I'm a <strong>Software Developer</strong> who is also passionate
              about <strong>Mathematical Analysis</strong>,{" "}
              <strong>Geometry</strong> and <strong>Algebra</strong>. <br />
              <br /> I've started coding at the age of 12, coding is my passion
              and I've studied it at high school and at the University of Roma
              Tor Vergata, I'm currently working at Mostaza as a Full Stack
              Engineer.
            </Text>
            <Center h={"0.2rem"} paddingTop={"1rem"}>
              <Flex
                h={"0.01rem"}
                w={props.screenWidth <= 557 ? "90%" : "100%"}
                bg={theme.colors.midGrey}
              />
            </Center>
            <Flex
              marginTop={"1rem"}
              paddingLeft={props.screenWidth <= 557 ? "1rem" : "0"}
            >
              <Activities activities={activities} />
            </Flex>
          </Flex>
        </Stack>
      ),
    },
  ];
  return (
    <ProfileOverlay
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
