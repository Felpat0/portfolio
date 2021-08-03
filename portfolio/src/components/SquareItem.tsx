import { Center, Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "../assets/theme";
import { RoundIcon } from "./RoundIcon";

type Props = {
  image?: any;
  style?: any;
  backgroundColor?: string;
  working?: boolean;
  workingImage?: any;
  selected?: boolean;
  onClick?: any;
  text?: string;
};

export const ItemSquare: React.FC<Props> = (props) => {
  const [opacity, setOpacity] = useState(0);

  let backgroundColor = "rgba(250, 250, 250, 0.015)";
  let textVisibility = "hidden";

  if (props.backgroundColor) backgroundColor = props.backgroundColor;
  if (props.text && opacity == 1) textVisibility = "visible";

  if (!props.image)
    return (
      <Stack>
        <Text
          color={theme.colors.textAquaBlue}
          fontSize={"2xl"}
          textAlign={"center"}
          /* @ts-ignore */
          style={{ visibility: textVisibility }}
        >
          {props.text ? props.text : "a"}
        </Text>
        <Flex
          style={props.style}
          border={"3px solid rgba(104, 220, 230, " + opacity + ")"}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          onClick={props.onClick}
        >
          <StyledFlexNoImage
            w={"45vh"}
            h={"45vh"}
            minW={"45vh"}
            style={props.style}
            bg={backgroundColor}
          ></StyledFlexNoImage>
        </Flex>
      </Stack>
    );
  else if (props.working && props.workingImage)
    return (
      <Stack>
        <Text
          color={theme.colors.textAquaBlue}
          fontSize={"2xl"}
          textAlign={"center"}
          /* @ts-ignore */
          style={{ visibility: textVisibility }}
        >
          {props.text ? props.text : "a"}
        </Text>
        <Flex
          style={props.style}
          border={"3px solid rgba(104, 220, 230, " + opacity + ")"}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          onClick={props.onClick}
        >
          <StyledFlexWithImage>
            <Flex bg={backgroundColor}>
              <StyledImg src={props.image} />
              <Flex marginRight={"-45vh"} w={"45vh"} h={"45vh"}>
                <Center
                  h={"100%"}
                  w={"100%"}
                  flexDirection={"column"}
                  paddingBottom={"2vw"}
                  marginLeft={"-45vh"}
                >
                  <Spacer />

                  <Center>
                    <RoundIcon
                      image={props.workingImage}
                      variant={"simpleBorder"}
                      width={"2.5rem"}
                      height={"2.5rem"}
                      imgWidth={"2.5rem"}
                      imgHeight={"2.5rem"}
                    />
                    <WorkingFlex>
                      <Text fontSize={"lg"}>Currently working</Text>
                    </WorkingFlex>
                  </Center>
                </Center>
              </Flex>
            </Flex>
          </StyledFlexWithImage>
        </Flex>
      </Stack>
    );
  else
    return (
      <Stack>
        {/* @ts-ignore */}
        <Text
          color={theme.colors.textAquaBlue}
          fontSize={"2xl"}
          textAlign={"center"}
          /* @ts-ignore */
          style={{ visibility: textVisibility }}
        >
          {props.text ? props.text : "a"}
        </Text>
        <Flex
          style={props.style}
          border={"3px solid rgba(104, 220, 230, " + opacity + ")"}
          onMouseEnter={() => setOpacity(1)}
          onMouseLeave={() => setOpacity(0)}
          onClick={props.onClick}
        >
          <StyledFlexWithImage>
            <Flex bg={backgroundColor}>
              <StyledImg src={props.image} />
            </Flex>
          </StyledFlexWithImage>
        </Flex>
      </Stack>
    );
};

const StyledFlexNoImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  border: 3px solid rgba(250, 250, 250, 0.1);
  cursor: pointer;
`;

const StyledFlexWithImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  cursor: pointer;
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
  width: 45vh;
  height: 45vh;
  min-width: 45vh;
  min-height: 45vh;
  clip-path: square(100%);
`;
