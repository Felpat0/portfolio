import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
type Props = {
  image: any;
  variant: "simpleBorder" | "bottomBar" | "bottomBarSelected";
  height?: string;
  width?: string;
  imgHeight?: string;
  imgWidth?: string;
};

export const RoundIcon: React.FC<Props> = (props) => {
  let color = "#4b4853";
  let width = "5.5rem";
  let height = "5.5rem";
  let imgWidth = "5.5rem";
  let imgHeight = "5.5rem";
  if (props.height) height = props.height;
  if (props.width) width = props.width;
  if (props.imgHeight) imgHeight = props.imgHeight;
  if (props.imgWidth) imgWidth = props.imgWidth;
  if (props.variant === "bottomBarSelected") color = "blue";
  if (props.variant === "simpleBorder")
    return (
      <StyledSpan>
        <StyledFlex
          bg={color}
          w={width}
          h={height}
          style={{ minWidth: width, minHeight: height }}
        >
          <StyledImgSimpleBorder
            src={props.image}
            width={width}
            height={height}
            style={{ minWidth: width, minHeight: height }}
          />
        </StyledFlex>
      </StyledSpan>
    );
  else {
    return (
      <StyledSpan>
        <StyledFlexBottomBar bg={color}>
          <StyledImgBottomBar src={props.image} />
        </StyledFlexBottomBar>
      </StyledSpan>
    );
  }
};

const StyledImgSimpleBorder = styled.img`
  clip-path: circle(46%);
`;

const StyledImgBottomBar = styled.img`
  width: 4rem;
  height: 4rem;
  min-width: 3rem;
  min-height: 3rem;
`;

const StyledFlex = styled(Flex)`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  clip-path: circle(50%);
`;

const StyledFlexBottomBar = styled(Flex)`
  padding: 1rem;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  min-width: 7rem;
  min-height: 7rem;
  clip-path: circle(50%);
`;

const StyledSpan = styled.span`
  filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 1));
`;
