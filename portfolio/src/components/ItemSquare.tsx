import { Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { RoundIcon } from "./RoundIcon";

type Props = {
  image?: any;
  style?: any;
  backgroundColor?: string;
  working?: boolean;
  workingImage?: any;
};

export const ItemSquare: React.FC<Props> = (props) => {
  let backgroundColor = "rgba(250, 250, 250, 0.015)";
  if (props.backgroundColor) backgroundColor = props.backgroundColor;
  if (!props.image)
    return (
      <StyledFlexNoImage
        w={"20vw"}
        h={"20vw"}
        minW={"20vw"}
        style={props.style}
        bg={backgroundColor}
      ></StyledFlexNoImage>
    );
  else if (props.working && props.workingImage)
    return (
      <StyledFlexWithImage w={"20vw"} h={"20vw"} style={props.style}>
        <Flex bg={backgroundColor}>
          <StyledImg src={props.image} />
          <Flex marginRight={"-20vw"} w={"20vw"} h={"20vw"}>
            <Center
              h={"100%"}
              w={"100%"}
              flexDirection={"column"}
              paddingBottom={"2vw"}
              marginLeft={"-20vw"}
            >
              <Spacer />

              <Center>
                <RoundIcon
                  image={props.workingImage}
                  variant={"simpleBorder"}
                  width={"2.5rem"}
                  height={"2.5rem"}
                  imgWidth={"2rem"}
                  imgHeight={"5rem"}
                />
                <WorkingFlex>
                  <Text fontSize={"lg"}>Currently working</Text>
                </WorkingFlex>
              </Center>
            </Center>
          </Flex>
        </Flex>
      </StyledFlexWithImage>
    );
  else
    return (
      <StyledFlexWithImage w={"20vw"} h={"20vw"} style={props.style}>
        <Flex bg={backgroundColor}>
          <StyledImg src={props.image} />
        </Flex>
      </StyledFlexWithImage>
    );
};

const StyledFlexNoImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  border: 3px solid rgba(250, 250, 250, 0.1);
`;

const StyledFlexWithImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
`;

const WorkingFlex = styled(Flex)`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  margin-left: 0.5rem;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StyledImg = styled.img`
  width: 20vw;
  height: 20vw;
  min-width: 20vw;
  min-height: 20vw;
  clip-path: square(100%);
`;
