import { Flex } from "@chakra-ui/react";
import styled from "styled-components";
type Props = {
  image: any;
  variant: "simpleBorder" | "selectedBorder";
  //   size: {
  //       height: number;
  //       width: number;
  //   }
};

export const RoundIcon: React.FC<Props> = (props) => {
  let color = "#4b4853";
  if (props.variant === "selectedBorder") color = "blue";
  return (
    <StyledFlex bg={color}>
      <StyledImg src={props.image} />
    </StyledFlex>
  );
};

const StyledImg = styled.img`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  min-height: 5rem;
  clip-path: circle(46%);
`;

const StyledFlex = styled(Flex)`
  width: 5rem;
  height: 5rem;
  min-width: 5rem;
  min-height: 5rem;
  clip-path: circle(50%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
