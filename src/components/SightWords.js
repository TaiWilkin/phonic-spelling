import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import {
  VStack,
  HStack,
  Text,
  Heading,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";

import LessonContinueLink from "./LessonContinueLink";

import { pronounce } from "../util";
import { saveLessonAttempt } from "../reducers/lessonAttempts";

const getRandomWord = (words = []) => {
  return words[Math.floor(Math.random() * words.length)];
};

const formatWordList = (words) => {
  if (!words.length) return "";
  if (words.length === 1) return words[0];
  if (words.length === 2) return `${words[0]} and ${words[1]}`;
  return `${words.slice(0, -1).join(", ")}, and ${words[words.length - 1]}`;
};

const SightWords = ({ sightwords = [] }) => {
  const match = useRouteMatch();
  const lesson = match.params.id;
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const [words, setWords] = useState(sightwords);
  const [answer, setAnswer] = useState("");
  const [missedWords, setMissedWords] = useState([]);
  const [completedWords, setCompletedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState(getRandomWord(words));
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!currentWord && sightwords.length) {
      dispatch(
        saveLessonAttempt({
          lesson: lesson,
          missedSightWords: missedWords,
          completedSightWords: completedWords,
        })
      );
    } else {
      pronounce(currentWord, voice);
    }
    // eslint-disable-next-line
  }, [currentWord, voice]);

  const handleSubmit = () => {
    const formattedAnswer = answer.trim().toLowerCase();
    if (formattedAnswer === currentWord.trim().toLowerCase()) {
      if (showAnswer) {
        setShowAnswer(false);
      } else {
        setCompletedWords([...completedWords, currentWord]);
        setWords(words.filter((w) => w !== currentWord));
      }
      const newWord = getRandomWord(words.filter((w) => w !== currentWord));
      setCurrentWord(newWord);
      setAnswer("");
    } else {
      setMissedWords([...missedWords, currentWord]);
      setShowAnswer(true);
    }
  };

  if (!currentWord || !words.length) {
    return (
      <VStack>
        <Heading as="h2" mt="5" size="lg">
          Sight Words
        </Heading>
        <Text p="10px">
          You can spell {formatWordList(sightwords)} from memory.
        </Text>
        <LessonContinueLink />
      </VStack>
    );
  }

  return (
    <VStack>
      <Heading as="h2" mt="5" size="lg">
        Sight Words
      </Heading>
      {showAnswer ? (
        <Box className="word">
          <Text>{currentWord}</Text>
        </Box>
      ) : null}
      <Text p="10px">
        {!showAnswer
          ? "Spell the word you hear, then click 'Submit'. If you don't know this word, click 'Submit' to see the answer."
          : "Spell the word you see, then click 'Submit'."}
      </Text>
      <Box minw="400px">
        <HStack spacing="10px" m="10px">
          <Input
            style={{ flex: 3 }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            onClick={() => pronounce(currentWord, voice)}
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

export default SightWords;
