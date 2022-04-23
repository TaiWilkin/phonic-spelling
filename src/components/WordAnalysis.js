import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, Redirect } from "react-router-dom";
import { Text, Box, Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";

import Typewriter from "./Typewriter";
import { pronounce } from "../util";
import { words } from "../data";
import getNextStepLink from "../getNextStepLink";

const WordAnalysis = ({ phonemeList, wordList }) => {
  let match = useRouteMatch();
  const { voice } = useSelector((state) => state.voice);
  const [completedWords, setCompletedWords] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const incompleteWords = wordList.filter(
    (word) => !completedWords.includes(word)
  );
  const currentWord = incompleteWords[0];
  const pronounceCurrentWord = () => {
    if (currentWord) {
      pronounce(currentWord, voice);
    }
  };
  const useInSentence = () => {
    const sentence = words[currentWord].sentence;
    if (!sentence) {
      pronounce("No sentence available.", voice);
    } else {
      pronounce(sentence, voice);
    }
  };
  const giveInitialPrompt = () => {
    if (currentWord) {
      const sentence = words[currentWord]?.sentence || "Listen again: ";
      pronounce(`'${currentWord}'. ${sentence} '${currentWord}'.`, voice);
    }
  };
  const onSubmit = (letters) => {
    const correctLetters = words[currentWord].letters;
    if (
      correctLetters.length === letters.length &&
      correctLetters.every((l, i) => letters[i] === l)
    ) {
      setCompletedWords([...completedWords, currentWord]);
      toast.success("Correct!");
    } else {
      setShowAnswer(true);
      setTimeout(() => {
        setShowAnswer(false);
      }, 1000);
      pronounceCurrentWord();
      toast.error("Try again");
    }
  };
  useEffect(() => {
    giveInitialPrompt();

    // eslint-disable-next-line
  }, [currentWord]);

  if (!currentWord) {
    const link = getNextStepLink({ id: match.params.id, path: match.path });
    return <Redirect to={link} />;
  }

  return (
    <>
      <Heading as="h2" mt="5" size="md">
        Word Analysis
      </Heading>
      <Text p="10px">
        Use the phoneme keys to spell the word you hear and see, then click
        'Submit'.
      </Text>
      <Box className="word">
        <Text>{currentWord}</Text>
      </Box>
      <Typewriter
        phonemeList={phonemeList}
        canSubmit
        onSubmit={onSubmit}
        handleReprompt={pronounceCurrentWord}
        useInSentence={useInSentence}
        completedWords={completedWords}
        wordList={wordList}
        analysis
        showAnswer={showAnswer && words[currentWord]?.letters}
      />
    </>
  );
};

export default WordAnalysis;
