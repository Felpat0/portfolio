import { Flex, Spacer, Text } from "@chakra-ui/react";
import { RoundIcon } from "./RoundIcon";
import icon from "./../assets/icons/riven.jpg";
import { useState } from "react";

import batteryIcon from "./../assets/icons/battery.png";
import wifiIcon from "./../assets/icons/wifi.png";
import styled from "styled-components";

export const TopBar: React.FC = () => {
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
      paddingLeft={"3rem"}
      paddingRight={"3rem"}
    >
      <RoundIcon
        image={icon}
        variant={"simpleBorder"}
        width={"5.5rem"}
        height={"5.5rem"}
        imgWidth={"5.5rem"}
        imgHeight={"5.5rem"}
      />
      <Text fontSize={"3xl"} color={"white"} paddingLeft={"1rem"}>
        Federico Cattini
      </Text>
      <Spacer />
      <Text fontSize={"3xl"} color={"white"} paddingRight={"1.5rem"}>
        {date}
      </Text>
      <StyledImg src={wifiIcon} style={{ marginRight: "1.5rem" }} />
      <Text fontSize={"3xl"} color={"white"}>
        {"100"}
      </Text>
      <Text
        fontSize={"xl"}
        fontWeight={"bold"}
        color={"white"}
        paddingRight={"0.6rem"}
      >
        {"%"}
      </Text>
      <StyledImg src={batteryIcon} style={{ width: "4rem", height: "4rem" }} />
    </Flex>
  );
};

const StyledImg = styled.img`
  width: 3rem;
  height: 3rem;
`;
