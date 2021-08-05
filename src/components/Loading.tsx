import { Flex, Center, Text } from "@chakra-ui/react";
import { fadeInUp, fadeInDown } from "react-animations";
import styled, { keyframes } from "styled-components";

type Props = {
  textFromTop: string;
  textFromBottom: string;
};
const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const Loading: React.FC<Props> = (props) => {
  return (
    <Center flexDirection={"row"}>
      <FadeInFlex1 marginRight={"2rem"}>
        <Text fontSize={"8xl"} fontWeight={"bold"}>
          {props.textFromTop}
        </Text>
      </FadeInFlex1>
      <FadeInFlex2>
        <Text fontSize={"8xl"} fontWeight={"bold"}>
          {props.textFromBottom}
        </Text>
      </FadeInFlex2>
    </Center>
  );
};

const FadeInFlex1 = styled(Flex)`
  color: white;
  animation: 2s ${fadeInUpAnimation};
`;
const FadeInFlex2 = styled(Flex)`
  color: white;
  animation: 2s ${fadeInDownAnimation};
`;
