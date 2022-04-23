import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  VStack,
  Heading,
  Text,
  Container,
  Box,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

import { pronounce } from "../util";
import LessonContinueLink from "./LessonContinueLink";

const getRandomSentence = (sentences = []) => {
  return sentences[Math.floor(Math.random() * sentences.length)];
};

const clean = (str) =>
  str
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const Dictation = ({ lesson, dictation, dictationImage }) => {
  const { voice } = useSelector((state) => state.voice);
  const [sentences, setSentences] = useState(dictation);
  const [answer, setAnswer] = useState("");
  const [missedSentences, setMissedSentences] = useState([]);
  const [completedSentences, setCompletedSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(
    getRandomSentence(sentences)
  );
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!currentSentence && dictation.length) {
      toast.success("Success!");
    } else {
      pronounce(currentSentence, voice);
    }
    // eslint-disable-next-line
  }, [currentSentence, voice]);

  const handleSubmit = () => {
    const formattedAnswer = clean(answer);
    if (formattedAnswer === clean(currentSentence)) {
      if (showAnswer) {
        setShowAnswer(false);
      } else {
        setCompletedSentences([...completedSentences, currentSentence]);
        setSentences(sentences.filter((w) => w !== currentSentence));
      }
      const newSentence = getRandomSentence(
        sentences.filter((w) => w !== currentSentence)
      );
      setCurrentSentence(newSentence);
      setAnswer("");
    } else {
      setMissedSentences([...missedSentences, currentSentence]);
      setShowAnswer(true);
    }
  };

  if (!currentSentence || !sentences.length) {
    return (
      <VStack>
        <Heading as="h2" mt="5" size="lg">
          Dictation
        </Heading>
        <img
          src={dictationImage}
          alt="Dictation"
          style={{ maxHeight: `400px` }}
        />
        <Container pb={10} pt={5}>
          {dictation.map((d) => (
            <Text key={d} fontSize="lg">
              {d}
            </Text>
          ))}
          <LessonContinueLink />
        </Container>
      </VStack>
    );
  }

  return (
    <VStack>
      <Heading as="h2" mt="5" size="lg">
        Dictation
      </Heading>
      {showAnswer ? (
        <Box className="word">
          <Text>{currentSentence}</Text>
        </Box>
      ) : null}
      <Text p="10px">
        {!showAnswer
          ? "Type the words you hear, then click 'Submit'. If you're stuck, click 'Submit' to see the answer."
          : "Type the words you see, then click 'Submit'."}
      </Text>
      <Box minw="400px">
        <HStack spacing="10px" m="10px">
          <Input
            style={{ flex: 3 }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={() => pronounce(currentSentence, voice)}
            style={{ flex: 2 }}
          >
            Repeat Prompt
          </Button>
          <Button
            onClick={handleSubmit}
            className="basic-Button"
            style={{ flex: 2, backgroundColor: "#04aa6d" }}
          >
            Submit
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Dictation;
