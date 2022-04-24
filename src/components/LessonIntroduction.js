import { useEffect } from "react";
import { VStack, Text, Heading, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { startNewLessonAttempt } from "../reducers/lessonAttempt";

const LessonIntroduction = ({ notes, lesson }) => {
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
    </VStack>
  );
};

export default LessonIntroduction;
