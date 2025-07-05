import { VStack, Heading, Container } from "@chakra-ui/react";

import VoiceSelector from "./VoiceSelector";

const Settings = () => {
  return (
    <VStack m="5">
      <Heading as="h2" mb="5">
        Settings
      </Heading>
      <Container maxW="container.xl">
        <Heading as="h3" mb="3" size="md">
          Text-to-speech voice
        </Heading>
        <VoiceSelector />
      </Container>
    </VStack>
  );
};

export default Settings;
