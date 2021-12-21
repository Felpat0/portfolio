import { useState } from "react";
import { Center, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

import { theme } from "../assets/theme";

type Props = {
  text?: string | any;
  onClick?: any;
  isActive?: boolean;
};
export const DetailsOverlayVoice: React.FC<Props> = (props) => {
  const [opacity, setOpacity] = useState(0);
  let display = "none";
  let color = "white";
  if (props.isActive) {
    display = "block";
    color = theme.colors.textAquaBlue;
  }
  //Add fade in animation
  return (
    <VoiceFlex
      border={"3px solid rgba(104, 220, 230, " + opacity + ")"}
      padding={"0.5rem"}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      color={color}
      onClick={props.onClick}
    >
      <Center w={"0.2rem"}>
        <Flex
          w={"100%"}
          h={"100%"}
          bg={theme.colors.textAquaBlue}
          display={display}
        ></Flex>
      </Center>
      <Text fontSize={"lg"} paddingLeft={"0.3rem"}>
        {props.text}
      </Text>
    </VoiceFlex>
  );
};

const VoiceFlex = styled(Flex)`
  max-width: 100%;
  cursor: pointer;
`;
