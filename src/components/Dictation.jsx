import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { pronounce } from "../util";
import { content } from "../data";
import { updateLessonAttempt } from "../reducers/lessonAttempt";
import LessonContinueLink from "./LessonContinueLink";

const clean = (str) => str.trim();

const isLowercaseLetter = (string) => /^[a-z]*$/.test(string);

const renderHiddenDictation = (d) => {
  return (
    <HStack spacing={0}>
      {d.split("").map((c, i) => {
        if (c === " ") {
          return <Box w="5" h="5" />;
        }
        if (!isLowercaseLetter(c)) {
          return (
            <Text key={i} fontSize="lg">
              {c}
            </Text>
          );
        }
        return <Box w="5" h="5" bg={`${content.color}.500`} />;
      })}
    </HStack>
  );
};

const Dictation = ({ lesson, dictation, dictationImage }) => {
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const [sentences, setSentences] = useState(dictation);
  const [answer, setAnswer] = useState("");
  const [missedSentences, setMissedSentences] = useState([]);
  const [completedSentences, setCompletedSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(sentences[0]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!currentSentence && dictation.length) {
      dispatch(
        updateLessonAttempt({
          incorrectAnswers: missedSentences,
          correctAnswers: completedSentences,
        })
      );
    } else {
      pronounce(currentSentence, voice);
    }
    // eslint-disable-next-line
  }, [currentSentence, voice]);

  const handleSubmit = () => {
    const formattedAnswer = clean(answer);
    const remainingSentences = sentences.filter((w) => w !== currentSentence);
    if (formattedAnswer === clean(currentSentence)) {
      if (showAnswer) {
        setShowAnswer(false);
        setSentences([...remainingSentences, currentSentence]);
      } else {
        setCompletedSentences([...completedSentences, currentSentence]);
        setSentences(remainingSentences);
      }
      const newSentence = sentences[0];
      setCurrentSentence(newSentence);
      setAnswer("");
    } else {
      setMissedSentences([...missedSentences, currentSentence]);
      setSentences([...remainingSentences, currentSentence]);
      setShowAnswer(true);
    }
  };

  if (!currentSentence || !sentences.length) {
    return (
      <VStack>
        <Heading as="h2" mt="5" size="lg">
          Dictation
        </Heading>
        {dictationImage && (
          <img
            src={dictationImage}
            alt="Dictation"
            style={{ maxHeight: `400px` }}
          />
        )}
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
          ? "Type the words you hear, then click 'Submit'. If you're stuck, click 'Submit' to see the answer. The text must match exactly, including capitals and punctuation."
          : "Type the words you see, then click 'Submit'."}
      </Text>
      <Container pb={10} pt={5}>
        {renderHiddenDictation(currentSentence)}
      </Container>
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
            colorScheme={content.color}
            style={{ flex: 2 }}
          >
            Submit
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Dictation;
