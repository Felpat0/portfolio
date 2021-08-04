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
  height?: any;
  width?: any;
};

export const ItemSquare: React.FC<Props> = (props) => {
  const [opacity, setOpacity] = useState(0);

  let size = "45vh";

  if (props.width <= 557) {
    size = "45vh";
  }

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
            w={size}
            h={size}
            minW={size}
            minH={size}
            style={props.style}
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
              <img
                style={{
                  width: size,
                  minWidth: size,
                  height: size,
                  minHeight: size,
                  clipPath: "square(100%)",
                }}
                src={props.image}
              />
              <Flex marginRight={"-" + size} w={size} h={size}>
                <Center
                  h={"100%"}
                  w={"100%"}
                  flexDirection={"column"}
                  paddingBottom={"2vw"}
                  marginLeft={"-" + size}
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
              <img
                style={{
                  width: size,
                  minWidth: size,
                  height: size,
                  minHeight: size,
                  clipPath: "square(100%)",
                }}
                src={props.image}
              />
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
