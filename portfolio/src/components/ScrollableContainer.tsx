import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {};
export const ScrollableContainer: React.FC<Props> = (props) => {
  const [mounted, setMounted] = useState(false);
  const [dragInitialPosition, setDragInitialPosition] = useState(0);
  const [initialScroll, setInitialScroll] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  let ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (ref.current) {
    ref.current.addEventListener("wheel", (evt) => {
      evt.preventDefault();
    });
  }
  return (
    <Flex
      flexDirection={"row"}
      onWheel={(evt) => {
        if (ref.current) {
          if (evt.deltaY > 0)
            ref.current.scrollLeft += (evt.deltaY / evt.deltaY) * 15;
          else ref.current.scrollLeft -= (evt.deltaY / evt.deltaY) * 15;
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
      <Flex w={"5%"} />
      <StyledStack
        height={"35%"}
        maxWidth={"95vw"}
        direction={"row"}
        spacing={"1rem"}
        ref={ref}
      >
        {props.children}
      </StyledStack>
    </Flex>
  );
};

const StyledStack = styled(Stack)`
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
