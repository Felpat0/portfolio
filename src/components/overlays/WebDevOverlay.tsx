import { Center, Stack, Text } from "@chakra-ui/react";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import GoGrandpaScreen from "../../assets/overlays/goGrandpa.jpg";
import KuffyScreen from "../../assets/overlays/kuffy.png";
import OltreScreen from "../../assets/overlays/oltre.png";
import NotesScreen from "../../assets/overlays/notes.png";

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

export const WebDevOverlay: React.FC<Props> = (props) => {
  const voices: OverlayVoiceType[] = [
    {
      title: "goGrandpa",
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
                <strong>goGrandpa</strong> is an Android Application developed
                using <strong>Apache Cordova</strong> in <strong>HTML</strong>,{" "}
                <strong>CSS</strong> and <strong>Javascript</strong>.
                <br />
                The backend has been built using a <strong>
                  PHP server
                </strong>{" "}
                (which is also able to send emails) and a <strong>MySQL</strong>{" "}
                database.
                <br />
                <br />
                The app allows elderly persons to request services that are
                provided by younger users.
                <br />
                This project has been developed in team, I've built the backend
                and also worked on the Javascript part.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/goGrandpa_local"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
            <Center w={"100%"}>
              <Center w={"80%"}>
                <img
                  src={GoGrandpaScreen}
                  style={{
                    width: props.screenWidth <= 557 ? "80%" : "50%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                  alt={"goGrandpa screen"}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
    {
      title: "Kuffy",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <div
            // @ts-ignore
            style={{
              display: "flex",
              flexDirection: props.screenWidth <= 557 ? "column" : "column",
              width: "100%",
              alignItems: "center",
              height: "100%",
            }}
          >
            {" "}
            <div>
              <Text fontSize={"lg"} textAlign={"center"}>
                <strong>Kuffy</strong> is a management web-app developed in{" "}
                <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                <strong>Javascript</strong>, <strong>PHP</strong> and{" "}
                <strong>MySQL</strong>.
                <br />
                <br />
                The app is aimed to hotel managers that need to manage data
                about clients, available rooms, reservations etc...
                <br />
                This project has been developed in team, I've worked on both the
                frontend and the backend part and developed the interactive
                availability calendar.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/andreeamiroslav/kuffy"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
            <Center
              w={"100%"}
              paddingTop={props.screenWidth <= 557 ? "1rem" : "2rem"}
            >
              <Center w={props.screenWidth <= 557 ? "100%" : "70%"}>
                <img
                  src={KuffyScreen}
                  style={{
                    width: props.screenWidth <= 557 ? "100%" : "100%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                  alt={"Kuffy screen"}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
    {
      title: "OltreStore",
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
            <div>
              <Text fontSize={"lg"} textAlign={"center"}>
                <strong>OltreStore</strong> is a webapp developed in{" "}
                <strong>HTML</strong>, <strong>CSS</strong>,{" "}
                <strong>Javascript</strong> and <strong>Python</strong> made for
                a European Project.
                <br />
                It allows users to explore data contained in a database in a
                simple way.
                <br />
                This project has been developed in team, I've worked in part of
                the frontend.
              </Text>
            </div>
            <Center w={"100%"}>
              <Center w={"80%"}>
                <img
                  src={OltreScreen}
                  style={{
                    width: "100%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                  alt={"OltreStore screen"}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
    {
      title: "Notes",
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
                <strong>Notes</strong> is a webapp developed in{" "}
                <strong>React</strong> (Javascript) for writing, organizing and
                managing notes.
                <br />
                The code is available on{" "}
                <a href={"https://github.com/Felpat0/notes"}>
                  <strong>GitHub</strong>
                </a>
                .
              </Text>
            </div>
            <Center w={"100%"}>
              <Center w={"90%"}>
                <img
                  src={NotesScreen}
                  style={{
                    width: "100%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                  alt={"Notes screen"}
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
