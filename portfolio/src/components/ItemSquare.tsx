import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  image: any;
  style: any;
};

export const ItemSquare: React.FC<Props> = (props) => {
  if (props.image == "")
    return (
      <StyledFlexNoImage
        w={"20vw"}
        h={"20vw"}
        minW={"20vw"}
        style={props.style}
      ></StyledFlexNoImage>
    );
  else
    return (
      <StyledFlexWithImage
        w={"20vw"}
        h={"20vw"}
        style={props.style}
      ></StyledFlexWithImage>
    );
};

const StyledFlexNoImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  border: 3px solid rgba(250, 250, 250, 0.1);
`;

const StyledFlexWithImage = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  border: 3px solid rgba(250, 250, 250, 0.1);
`;
