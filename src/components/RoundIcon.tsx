import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
type Props = {
  image?: any;
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  variant: "simpleBorder" | "bottomBar" | "bottomBarSelected";
  height?: string;
  width?: string;
  imgHeight?: string;
  imgWidth?: string;
  href?: string;
  onClick?: any;
};

export const RoundIcon: React.FC<Props> = (props) => {
  const [background, setBackground] = useState("");
  let backgroundColor = "#4b4853";
  let textColor = "white";
  let width = "5.5rem";
  let height = "5.5rem";
  let imgWidth = "5.5rem";
  let imgHeight = "5.5rem";

  if (props.variant === "bottomBar") {
    width = "7rem";
    height = "7rem";
    imgWidth = "4rem";
    imgHeight = "4rem";
  }
  if (props.backgroundColor) backgroundColor = props.backgroundColor;
  if (props.textColor) textColor = props.textColor;
  if (props.height) height = props.height;
  if (props.width) width = props.width;
  if (props.imgHeight) imgHeight = props.imgHeight;
  if (props.imgWidth) imgWidth = props.imgWidth;
  if (props.variant === "bottomBarSelected") backgroundColor = "blue";
  if (props.variant === "simpleBorder")
    return (
      <StyledSpan>
        <StyledFlex
          padding={"2px"}
          bg={background}
          onMouseEnter={() => setBackground("rgba(104, 220, 230, 1)")}
          onMouseLeave={() => setBackground("")}
          onClick={props.onClick}
        >
          <a href={props.href} target="_blank" rel="noreferrer">
            <StyledFlex
              bg={backgroundColor}
              padding={"1rem"}
              w={width}
              h={height}
              style={{ minWidth: width, minHeight: height }}
            >
              {props.text ? (
                <Text fontSize={"3xl"} color={textColor} fontWeight={"bold"}>
                  {props.text}
                </Text>
              ) : (
                <StyledImgSimpleBorder
                  src={props.image}
                  width={imgWidth}
                  height={imgHeight}
                  style={{ minWidth: imgWidth, minHeight: imgHeight }}
                />
              )}
            </StyledFlex>
          </a>
        </StyledFlex>
      </StyledSpan>
    );
  else {
    return (
      <StyledSpan>
        <StyledFlex
          padding={"2px"}
          bg={background}
          onMouseEnter={() => setBackground("rgba(104, 220, 230, 1)")}
          onMouseLeave={() => setBackground("")}
          onClick={props.onClick}
        >
          <a href={props.href} target="_blank" rel="noreferrer">
            <StyledFlexBottomBar
              bg={backgroundColor}
              w={width}
              h={height}
              style={{ minWidth: width, minHeight: height }}
            >
              {props.text ? (
                <Text fontSize={"3xl"} color={textColor} fontWeight={"bold"}>
                  {props.text}
                </Text>
              ) : (
                <StyledImgBottomBar
                  src={props.image}
                  width={imgWidth}
                  height={imgHeight}
                  style={{ minWidth: imgWidth, minHeight: imgHeight }}
                />
              )}
            </StyledFlexBottomBar>
          </a>
        </StyledFlex>
      </StyledSpan>
    );
  }
};

const StyledImgSimpleBorder = styled.img`
  clip-path: circle(46%);
`;

const StyledImgBottomBar = styled.img``;

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;
  clip-path: circle(50%);
  cursor: pointer;
`;

const StyledFlexBottomBar = styled(Flex)`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  clip-path: circle(50%);
  cursor: pointer;
`;

const StyledSpan = styled.span`
  filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 1));
`;
