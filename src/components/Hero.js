import { VStack, Heading, Text, Container } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import { content } from "../data";

const Hero = () => {
  const { title, description } = content;
  return (
    <VStack
      w="100%"
      p="50px"
      bgGradient={`linear(to-r, ${content.color}.200, ${content.color}.500)`}
    >
      <Container>
        <Heading as="h1" mb="5">
          {title}
        </Heading>
        {description.map((d) => (
          <Text m={4} key={d}>
            {d}
          </Text>
        ))}
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
