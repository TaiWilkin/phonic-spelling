import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VStack, Text, Heading } from "@chakra-ui/react";

import Key from "./Key";
import { pronounce, letterDescription } from "../util";
import phonemes from "../data/phonemes";

const style = {
  padding: "5px",
  background: "rgba(0,0,0,0.2)",
  margin: "5px",
};

const PhonemeIntroduction = () => {
  let { name } = useParams();

  useEffect(() => {
    pronounce(letterDescription(name));
  }, [name]);
  const handleKeyPress = (name) => {
    pronounce(letterDescription(name));
  };

  if (!name) return null;
  const phoneme = phonemes[name];

  return (
    <VStack>
      <Heading as="h2" mt="5" size="lg">
        {phoneme.letter}
      </Heading>
      <Text p="5">
        <strong>{phoneme.letter}</strong> as in:{" "}
        {phoneme.examples.map((example) => (
          <strong style={style} key={example}>
            {example}
          </strong>
        ))}{" "}
      </Text>
      <Key name={name} onClick={handleKeyPress} />
    </VStack>
  );
};

export default PhonemeIntroduction;
