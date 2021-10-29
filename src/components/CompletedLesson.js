import { Text, Box, Heading } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import { calculateScore } from "../util";

const CompletedLesson = ({ lesson, missedWords, completedWords }) => {
  const score = calculateScore({ missedWords, completedWords });
  const percent = score * 100;
  if (score < 0.8) {
    return (
      <Box m="5">
        <Heading as="h2" mt="5" size="md">
          Lesson {lesson}
        </Heading>
        <Text m="5">
          Lesson attempt completed with a score of {percent.toFixed(2)}%. A
          score of 80% is required to proceed.
        </Text>
        <CustomLink
          text="Try again?"
          link={`/lessons/${parseInt(lesson)}`}
          color="teal"
        />
      </Box>
    );
  }
  return (
    <Box m="5">
      <Heading as="h2" mt="5" size="md">
        Lesson {lesson}
      </Heading>
      <Text m="5">
        Lesson attempt completed with a score of {percent.toFixed(2)}%.
      </Text>
      <CustomLink
        text="Continue to next lesson"
        link={`/lessons/${parseInt(lesson) + 1}`}
        color="teal"
      />
    </Box>
  );
};

export default CompletedLesson;
