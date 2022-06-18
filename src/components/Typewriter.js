import { useState } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Keyboard from "./Keyboard";
import Textbox from "./Textbox";
import Audio from "./Audio";
import ProgressBar from "./ProgressBar";

import {
  pronounce,
  letterDescription,
  sortPhonemes,
  sortStems,
  getAlt,
} from "../util";
import { stems, content } from "../data";

const Typewriter = ({
  phonemeList,
  canSubmit,
  onSubmit,
  handleReprompt,
  useInSentence,
  hasSentence,
  stemList = [],
  word,
  setShowAttributions,
  completedWords,
  wordList,
  analysis,
  showAnswer,
  isPretest,
}) => {
  const { voice } = useSelector((state) => state.voice);
  const [letters, setLetters] = useState([]);
  const [describeLetters, setDescribeLetters] = useState(isPretest);
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
    onSubmit(letters);
    clearLetters();
  };

  return (
    <Box height="100%">
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
        <Audio word={word} setShowAttributions={setShowAttributions} />
        {canSubmit && (
          <Button
            onClick={handleSubmit}
            className="basic-Button"
            colorScheme={content.color}
            style={{ flex: 2 }}
          >
            Submit
          </Button>
        )}
      </HStack>
      <Textbox letters={showAnswer ? showAnswer : letters} />
      <VStack display="flex" p="10px" height={analysis ? "200px" : "320px"}>
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
      </VStack>
      <HStack spacing="10px" m="10px">
        <Button onClick={toggleLetterDescription} style={{ flex: 1 }}>
          {describeLetters
            ? "Turn off phoneme descriptions"
            : "Turn on phoneme descriptions"}
        </Button>
        <ProgressBar completedWords={completedWords} wordList={wordList} />
      </HStack>
    </Box>
  );
};

export default Typewriter;
