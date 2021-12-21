import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

type Props = {};
export const ScrollableContainer: React.FC<Props> = (props) => {
  const [dragInitialPosition, setDragInitialPosition] = useState(0);
  const [initialScroll, setInitialScroll] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  let ref = React.useRef<HTMLDivElement>(null);

  if (ref.current) {
    ref.current.addEventListener("wheel", (evt) => {
      evt.preventDefault();
    });
  }
  return (
    <Flex
      flexDirection={"row"}
      w={"100%"}
      h={"100%"}
      onWheel={(evt) => {
        if (ref.current) {
          if (evt.deltaY > 0)
            ref.current.scrollLeft += (evt.deltaY / evt.deltaY) * 20;
          else ref.current.scrollLeft -= (evt.deltaY / evt.deltaY) * 20;
        }
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        setDragInitialPosition(e.clientX);
        if (ref.current) setInitialScroll(ref.current.scrollLeft);
        setIsMouseDown(true);
      }}
      onMouseUp={(e) => {
        e.preventDefault();
        setIsMouseDown(false);
      }}
      onMouseMove={(evt) => {
        if (isMouseDown) {
          let currentScroll =
            initialScroll + (dragInitialPosition - evt.clientX);
          if (ref.current && isMouseDown) {
            ref.current.scrollLeft = currentScroll;
          }
        }
      }}
      onMouseLeave={(evt) => {
        setIsMouseDown(false);
      }}
    >
      <StyledStack
        maxW={"94%"}
        direction={"row"}
        spacing={"1rem"}
        marginLeft={"5%"}
        ref={ref}
      >
        {props.children}
      </StyledStack>
    </Flex>
  );
};

const StyledStack = styled(Stack)`
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
