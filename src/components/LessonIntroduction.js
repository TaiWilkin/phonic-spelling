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

const LessonIntroduction = ({ notes, sightwords, lesson }) => {
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
      {sightwords && sightwords.length ? (
        <Box maxWidth="600px">
          <Heading as="h3" mt="5" mb="2" size="md">
            Sight Words
          </Heading>
          <Text p="5px" fontSize="lg" mb="5" align="left">
            Study these words now. You will have an opportunity to practice them
            later in the lesson.
          </Text>
          <Wrap spacing={4} mb="5">
            {sightwords.map((word) => (
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
        </Box>
      ) : null}
    </VStack>
  );
};

export default LessonIntroduction;
