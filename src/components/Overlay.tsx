import { Stack } from "@chakra-ui/react";
import { OverlayVoiceType } from "./../types";
import { DetailsOverlay } from "./DetailsOverlay";
//@ts-ignore
import { Carousel } from "react-carousel-minimal";

import { useMemo } from "react";

type Props = {
  icon: any;
  title: string;
  options: {
    title: string;
    text: string | React.ReactNode;
    images?: string[];
  }[];
  display?: string;
  toggleDisplay?: any;
  overlayId?: number;
  subtitle?: string;
  screenHeight: number;
  screenWidth: number;
};

export const Overlay: React.FC<Props> = (props) => {
  const voices: OverlayVoiceType[] = useMemo(
    () =>
      props.options.map((option) => ({
        title: option.title,
        content: (
          <Stack alignItems={"center"} w={"100%"}>
            <div style={{ textAlign: "center" }}>{option.text}</div>
            {option.images && (
              <Carousel
                data={option.images.map((image) => ({
                  image,
                }))}
                slideImageFit={"contain"}
                thumbnailWidth={"50px"}
                dots
                thumbnails
              />
            )}
          </Stack>
        ),
      })),
    [props.options]
  );

  return (
    <DetailsOverlay
      display={props.display}
      overlayId={props.overlayId}
      screenHeight={props.screenHeight}
      screenWidth={props.screenWidth}
      toggleDisplay={props.toggleDisplay}
      icon={props.icon}
      title={props.title}
      subtitle={props.subtitle}
      voices={voices}
    />
  );
};
