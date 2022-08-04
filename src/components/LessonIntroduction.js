import { useEffect } from "react";
import {
  VStack,
  Text,
  Heading,
  Box,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { startNewLessonAttempt } from "../reducers/lessonAttempt";
import { content } from "../data";

const renderWords = (words) => (
  <Wrap spacing={4} mb="5">
    {words.map((word) => (
      <WrapItem key={word}>
        <Tag
          size="lg"
          variant="solid"
          colorScheme={content.color}
          borderRadius="full"
        >
          {word}
        </Tag>
      </WrapItem>
    ))}
  </Wrap>
);

const LessonIntroduction = ({ notes, sightwords, words, lesson, review }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startNewLessonAttempt(lesson));
  }, [dispatch, lesson]);

  return (
    <VStack>
      <Heading as="h2" mt="5" mb="5" size="lg">
        Introduction
      </Heading>
      <Box maxWidth="600px">
        {notes.map((note) => (
          <Text p="5px" fontSize="lg" align="left" key={note}>
            {note}
          </Text>
        ))}
      </Box>
      {review && words && words.length ? (
        <Box maxWidth="600px">
          <Heading as="h3" mt="5" mb="2" size="md">
            Review Words
          </Heading>
          <Text p="5px" fontSize="lg" mb="5" align="left">
            You have studied these words before, and will review them in this
            lesson.
          </Text>
          {renderWords(words)}
        </Box>
      ) : null}
      {sightwords && sightwords.length ? (
        <Box maxWidth="600px">
          <Heading as="h3" mt="5" mb="2" size="md">
            Sight Words
          </Heading>
          <Text p="5px" fontSize="lg" mb="5" align="left">
            Study these words now. You will have an opportunity to practice them
            later in the lesson.
          </Text>
          {renderWords(sightwords)}
        </Box>
      ) : null}
    </VStack>
  );
};

export default LessonIntroduction;
