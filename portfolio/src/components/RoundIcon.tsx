import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
type Props = {
  image: any;
  variant: "simpleBorder" | "bottomBar" | "bottomBarSelected";
  //   size: {
  //       height: number;
  //       width: number;
  //   }
};

export const RoundIcon: React.FC<Props> = (props) => {
  let color = "#4b4853";
  if (props.variant === "bottomBarSelected") color = "blue";
  if (props.variant === "simpleBorder")
    return (
      <StyledSpan>
        <StyledFlex bg={color}>
          <StyledImgSimpleBorder src={props.image} />
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
  width: 5.5rem;
  height: 5.5rem;
  min-width: 5.5rem;
  min-height: 5.5rem;
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
  width: 5.5rem;
  height: 5.5rem;
  min-width: 5.5rem;
  min-height: 5.5rem;
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
