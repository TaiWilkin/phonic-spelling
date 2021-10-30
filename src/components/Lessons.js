import { VStack, Heading, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import lessons from "../data/lessons";
import Hero from "./Hero";
import LessonLink from "./LessonLink";

const Lessons = () => {
  const { user } = useSelector((state) => state.auth);
  if (user === null) {
    return null;
  }

  if (user === false) {
    return (
      <Box>
        <Hero />
      </Box>
    );
  }

  return (
    <Box>
      <VStack m="5">
        <Heading as="h2" mb="5">
          Lessons
        </Heading>
        {Object.keys(lessons).map((l) => (
          <LessonLink l={l} key={l} />
        ))}
      </VStack>
    </Box>
  );
};

export default Lessons;
