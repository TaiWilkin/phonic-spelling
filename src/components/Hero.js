import { VStack, Heading, Text, Container } from "@chakra-ui/react";
import CustomLink from "./CustomLink";

const Hero = () => {
  return (
    <VStack w="100%" p="50px" bgGradient="linear(to-r, teal.200, teal.500)">
      <Container>
        <Heading as="h1" mb="5">
          Phonic Spelling
        </Heading>
        <Text m={4}>
          This program is inspired by the Primary Speller by Edwin S. Richards,
          which was published in 1911 in the hope of overcoming many of the
          difficulties encountered in the teaching of spelling. It is based upon
          the phonetic method.
        </Text>
        <Text m={4}>
          In each lesson, students will be introduced to several phonemes and
          phonetic concepts. They will then use these phonemes to analyze the
          phonetic composition of a set of words. Finally, they will be tested
          on their ability to spell these words. As each lesson is successfully
          completed, additional lessons will unlock.
        </Text>
        <CustomLink
          text="Sign in to begin."
          link="/signin"
          textDecoration="underline"
        />
      </Container>
    </VStack>
  );
};

export default Hero;
