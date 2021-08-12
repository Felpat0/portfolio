import { Center, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { theme } from "../assets/theme";
import { Loading } from "../components/Loading";

type Props = {};

export const Projects: React.FC<Props> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading)
    return (
      <Stack
        w={"100vw"}
        h={"100%"}
        minW={"1000px"}
        minH={"100vh"}
        maxW={"100vw"}
        bg={theme.colors.backgroundHome}
        overflowX={"hidden"}
      >
        <Center h={"100vh"}>
          <Loading screenHeight={0} screenWidth={0} />
        </Center>
      </Stack>
    );
  return (
    <Stack
      w={"100vw"}
      h={"100%"}
      minW={"1000px"}
      minH={"100vh"}
      maxW={"100vw"}
      bg={theme.colors.backgroundHome}
      overflowX={"hidden"}
    >
      we
    </Stack>
  );
};
