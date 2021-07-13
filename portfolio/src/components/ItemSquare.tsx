import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  style: any;
};

export const ItemSquare: React.FC<Props> = (props) => {
  return <StyledFlex w={"20vw"} h={"20vw"} style={props.style}></StyledFlex>;
};

const StyledFlex = styled(Flex)`
  background-color: rgba(250, 250, 250, 0.015);
  border: 3px solid rgba(250, 250, 250, 0.1);
`;
