import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { OverlayVoiceType } from "../../types";
import { DetailsOverlay } from "../DetailsOverlay";

import DcGANScreen from "../../assets/overlays/dcgan.png";

type Props = {
  display?: string;
  toggleDisplay?: any;
  overlayId?: number;
  icon: any;
  title: string;
  subtitle?: string;
  screenHeight: number;
  screenWidth: number;
};

export const MLOverlay: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  const voices: OverlayVoiceType[] = [
    {
      title: "Realistic images generation",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <div
            // @ts-ignore
            style={{
              display: "flex",
              flexDirection: props.screenWidth <= 557 ? "column" : "row",
              width: "100%",
              alignItems: "center",
              height: "100%",
            }}
          >
            {" "}
            <div>
              <Text fontSize={"lg"} textAlign={"center"} paddingTop={"1rem"}>
                I've implemented two machine learning models (
                <strong>
                  Deep Convolutional Generative Adversarial Networks
                </strong>{" "}
                DCGAN and <strong>Variational Autoencoder</strong>) and the
                necessary data pipes for my bachelor degree thesis.
                <br /> The code was written in <strong>
                  Python
                </strong> (using <strong>Tensorflow</strong>).
                <br />
                In particular I've loaded and normalized a dataset of 30.000
                images (64x64x3) representing cats and I used the DCGAN and the
                VAE to generate new cats images (as shown in the image).
                <br />
                The codes of both models are available on{" "}
                <strong>Google Colab</strong>:{" "}
                <a
                  href={
                    "https://colab.research.google.com/drive/1ptOsWjPMioUstgsNc52muaUziCHt8w8R"
                  }
                >
                  <strong>DCGAN</strong>
                </a>
                ,{" "}
                <a
                  href={
                    "https://colab.research.google.com/drive/1r0AnmhJeruyCewAbr6etX4s-t7Na6UUd?usp=sharing"
                  }
                >
                  <strong>VAE</strong>
                </a>
                .
              </Text>
            </div>
            <Center w={"100%"}>
              <Center w={"100%"}>
                <img
                  src={DcGANScreen}
                  style={{
                    width: props.screenWidth <= 557 ? "100%" : "100%",
                    paddingRight: "2vw",
                    paddingTop: props.screenWidth <= 557 ? "2rem" : "0",
                  }}
                />
              </Center>
            </Center>
          </div>
        </Stack>
      ),
    },
    {
      title: "Classification",
      content: (
        <Stack w={"100%"} h={"100%"}>
          <div
            // @ts-ignore
            style={{
              display: "flex",
              flexDirection: props.screenWidth <= 557 ? "column" : "column",
              width: "100%",
              height: "100%",
            }}
          >
            {" "}
            <Center flexDirection={"column"} h={"100%"}>
              <Text fontSize={"lg"} textAlign={"center"} paddingTop={"2rem"}>
                I've built three classification models (
                <strong>Random Forest Classifier</strong>,{" "}
                <strong>Neural Network</strong> and{" "}
                <strong>K-Nearest Neighbours</strong>) to predict if a bank
                client is likely to close his bank account. <br />
                The code is written in <strong>Python</strong> (using{" "}
                <strong>Tensorflow</strong>).
                <br />
                The dataset has been extrapolated from an Excel file, then it
                has been prepared for the models. The maximum achieved accuracy
                is 95.85% (and 0.91 AUC score).
                <br />
                The code is available on{" "}
                <a
                  href={
                    "https://colab.research.google.com/drive/17GeU5N5sxTow6AKW26QCRqRqmQSJPZYD?usp=sharing"
                  }
                >
                  <strong>Google Colab</strong>
                </a>
                .
              </Text>
            </Center>
          </div>
        </Stack>
      ),
    },
  ];
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
