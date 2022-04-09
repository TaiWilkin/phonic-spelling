import { VStack, Heading, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Hero from "./Hero";
import LessonsAccordion from "./LessonsAccordion";

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
        <Box maxW="500px">
          <LessonsAccordion />
        </Box>
      </VStack>
    </Box>
  );
};

export default Lessons;
