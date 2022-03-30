import { useState } from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Keyboard from "./Keyboard";
import Textbox from "./Textbox";
import Audio from "./Audio";

import {
  pronounce,
  letterDescription,
  sortPhonemes,
  sortStems,
  getAlt,
} from "../util";
import stems from "../data/stems";

const Typewriter = ({
  phonemeList,
  canSubmit,
  onSubmit,
  handleReprompt,
  useInSentence,
  hasSentence,
  stemList = [],
  word,
}) => {
  const { voice } = useSelector((state) => state.voice);
  const [letters, setLetters] = useState([]);
  const [attributions, setAttributions] = useState([]);
  const [describeLetters, setDescribeLetters] = useState(false);
  const handleKeyPress = (name) => {
    if (describeLetters) {
      pronounce(letterDescription(name), voice);
    }
    const alt = getAlt(name);
    if (alt) {
      setLetters([...letters, ...alt]);
    } else {
      setLetters([...letters, name]);
    }
  };
  const handleStemKeyPress = (stem) => {
    if (describeLetters) {
      pronounce(stem, voice);
    }
    const stemLetters = stems[stem]?.letters || [];
    setLetters([...letters, ...stemLetters]);
  };
  const clearLetters = () => setLetters([]);
  const toggleLetterDescription = () => setDescribeLetters(!describeLetters);
  const handleSubmit = () => {
    onSubmit(letters, attributions);
    clearLetters();
  };

  return (
    <Box>
      <HStack spacing="10px" m="10px">
        <Button onClick={clearLetters} style={{ flex: 1 }}>
          Clear
        </Button>
        <Button onClick={handleReprompt} style={{ flex: 1 }}>
          Repeat Prompt
        </Button>
        {hasSentence && (
          <Button onClick={useInSentence} style={{ flex: 1 }}>
            Use in Sentence
          </Button>
        )}
        <Audio word={word} setAttributions={setAttributions} />
        {canSubmit && (
          <Button
            onClick={handleSubmit}
            className="basic-Button"
            style={{ flex: 2, backgroundColor: "#04aa6d" }}
          >
            Submit
          </Button>
        )}
      </HStack>
      <Textbox letters={letters} />
      <Keyboard
        keys={sortPhonemes(phonemeList)}
        handleKeyPress={handleKeyPress}
        tooltip="Click a phoneme key to add a phoneme."
      />
      {!!stemList.length && (
        <Keyboard
          keys={sortStems(stemList)}
          handleKeyPress={handleStemKeyPress}
          stem
          tooltip="Click a stem key to add multiple phonemes."
        />
      )}
      <HStack spacing="10px" m="10px">
        <Button onClick={toggleLetterDescription}>
          {describeLetters
            ? "Turn off phoneme descriptions"
            : "Turn on phoneme descriptions"}
        </Button>
      </HStack>
    </Box>
  );
};

export default Typewriter;
