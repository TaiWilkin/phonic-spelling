import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Hero from "./Hero";
import LessonsAccordion from "./LessonsAccordion";

const Lessons = () => {
  const { user } = useSelector((state) => state.auth);
  const { attempts } = useSelector((state) => state.lessonAttempts);

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

  if (!Object.keys(attempts).length) {
    return <Redirect to="/pretest" />;
  }

  return (
    <Box>
      <VStack m="5">
        <Heading as="h2" mb="5">
          Lessons
        </Heading>
        <Box maxW="500px">
          <Box mb="5">
            <Text>
              Some lessons might be skipped based on your pretest scores. You
              can also skip ahead in the course by successfully completing a
              review lesson. You are limited to one pretest attempt, and to one
              early attempt per review.
            </Text>
          </Box>
          <LessonsAccordion />
        </Box>
      </VStack>
    </Box>
  );
};

export default Lessons;
