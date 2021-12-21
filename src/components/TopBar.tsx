import { Flex, Spacer, Text } from "@chakra-ui/react";
import { RoundIcon } from "./RoundIcon";
import icon from "./../assets/icons/profileIcon.jpg";
import { useState } from "react";

import batteryIcon from "./../assets/icons/battery.png";
import wifiIcon from "./../assets/icons/wifi.png";

type Props = {
  height: any;
  width: any;
  toggleOverlay?: any;
  overlayId?: number;
};

export const TopBar: React.FC<Props> = (props) => {
  let iconSize = "10vh";
  let wifiSize = "3.5rem";
  let batterySize = "4rem";
  let fontSize = "3xl";
  let percentageDisplay = true;
  if (props.width <= 557) {
    iconSize = "3rem";
    fontSize = "lg";
    wifiSize = "2.2rem";
    batterySize = "2.2rem";
    percentageDisplay = false;
  }

  const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const [date, setDate] = useState(
    //@ts-ignore
    new Date().toLocaleTimeString("it-IT", dateOptions)
  );
  setInterval(
    () =>
      //@ts-ignore
      setDate(new Date().toLocaleTimeString("it-IT", dateOptions)),
    1000
  );
  return (
    <Flex
      h={"100%"}
      w={"100%"}
      alignItems={"center"}
      paddingLeft={"3vw"}
      paddingRight={"3vw"}
      paddingTop={"1vh"}
    >
      <RoundIcon
        image={icon}
        variant={"simpleBorder"}
        width={iconSize}
        height={iconSize}
        imgWidth={iconSize}
        imgHeight={iconSize}
        onClick={() => props.toggleOverlay(props.overlayId)}
      />
      <Text fontSize={fontSize} color={"white"} paddingLeft={"2vw"}>
        Federico Cattini
      </Text>
      <Spacer />
      <Text fontSize={fontSize} color={"white"} paddingRight={"1.5vw"}>
        {date}
      </Text>
      <img
        src={wifiIcon}
        style={{ marginRight: "1.5vw", width: wifiSize, height: wifiSize }}
        alt={"Wifi"}
      />
      {percentageDisplay ? (
        <>
          <Text fontSize={fontSize} color={"white"}>
            {"100"}
          </Text>
          <Text
            fontSize={fontSize}
            fontWeight={"bold"}
            color={"white"}
            paddingRight={"0.6rem"}
          >
            {"%"}
          </Text>
        </>
      ) : (
        <></>
      )}

      <img
        src={batteryIcon}
        style={{ width: batterySize, height: batterySize }}
        alt={"Battery icon"}
      />
    </Flex>
  );
};
