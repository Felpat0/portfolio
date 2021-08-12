import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import { theme } from "../assets/theme";
import { activities } from "../stores/activities";

type Props = {
  activities: any[];
};

export const Activities: React.FC<Props> = (props) => {
  return (
    <Stack w={"100%"}>
      <Flex w={"100%"}>
        <Flex w={"0.3rem"} bg={theme.colors.lightGrey} marginRight={"0.6rem"} />
        <Text fontSize={"xl"}>Experiences</Text>
      </Flex>
      {activities.map((activity) => (
        <Stack w={"100%"}>
          <Center h={"0.2rem"} w={"80%"}>
            <Flex h={"0.01rem"} w={"100%"} bg={theme.colors.midGrey} />
          </Center>
          <Flex w={"100%"}>
            <Flex
              w={"7vw"}
              h={"7vw"}
              minW={"6rem"}
              minH={"6rem"}
              border={"1px solid black"}
              marginRight={"1rem"}
              alignItems={"center"}
              padding={"0.5rem"}
              bg={activity.bg}
            >
              <img src={activity.image} />
            </Flex>
            <Stack justifyContent={"center"}>
              <Text fontSize={"lg"}>
                <strong>{activity.title}</strong>
              </Text>
              <Text fontSize={"md"}>{activity.subtitle}</Text>
            </Stack>
          </Flex>
        </Stack>
      ))}
    </Stack>
  );
};
