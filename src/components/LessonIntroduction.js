import { VStack, Text, Heading, Box } from "@chakra-ui/react";

const LessonIntroduction = ({ notes }) => {
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
