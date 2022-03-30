import { VStack, Heading, Box, Text, Link } from "@chakra-ui/react";

import WordnikAPILogo from "../data/images/wordnik-logo-300px.png";

const Acknowledgments = () => (
  <Box>
    <VStack m="5" spacing="24px">
      <Heading as="h2" mb="5">
        Acknowledgements
      </Heading>
      <Box
        boxShadow="0 8px 16px 0 rgba(0,0,0,0.2)"
        borderRadius="lg"
        align="center"
        p="20px 40px"
        maxW="md"
      >
        <Heading as="h3">Wordnik API</Heading>
        <Text p="5px" fontSize="lg" align="center">
          Special thanks to the{" "}
          <Link href="https://www.wordnik.com">Wordnik API</Link> for supplying
          the audio for our words.
        </Text>
        <img src={WordnikAPILogo} alt="Wordnik API Logo" />
      </Box>
      <Box
        boxShadow="0 8px 16px 0 rgba(0,0,0,0.2)"
        borderRadius="lg"
        align="center"
        p="20px 40px"
        maxW="md"
      >
        <Heading as="h3">HathiTrust</Heading>
        <Text p="5px" fontSize="lg" align="center">
          Much of the words and content on this site are taken from{" "}
          <Link href="https://hdl.handle.net/2027/hvd.32044097069249">
            Primary Speller by Edwin S. Richards at HathiTrust
          </Link>
          .
        </Text>
      </Box>
    </VStack>
  </Box>
);

export default Acknowledgments;
