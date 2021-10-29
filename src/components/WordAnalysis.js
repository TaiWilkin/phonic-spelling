import { useEffect, useState } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";
import { Text, Box, Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";

import Typewriter from "./Typewriter";
import ProgressBar from "./ProgressBar";
import { pronounce } from "../util";
import words from "../data/words";

const WordAnalysis = ({ phonemeList, wordList }) => {
  let match = useRouteMatch();
  const [completedWords, setCompletedWords] = useState([]);
  const incompleteWords = wordList.filter(
    (word) => !completedWords.includes(word)
  );
  const currentWord = incompleteWords[0];
  const pronounceCurrentWord = () => {
    if (currentWord) {
      pronounce(currentWord);
    }
  };
  const useInSentence = () => {
    const sentence = words[currentWord].sentence;
    if (!sentence) {
      pronounce("No sentence available.");
    } else {
      pronounce(sentence);
    }
  };
  const giveInitialPrompt = () => {
    if (currentWord) {
      const sentence = words[currentWord]?.sentence;
      pronounce(`'${currentWord}'. ${sentence} '${currentWord}'.`);
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
      pronounceCurrentWord();
      toast.error("Try again");
    }
  };
  useEffect(() => {
    giveInitialPrompt();

    // eslint-disable-next-line
  }, [currentWord]);

  if (!currentWord) {
    return <Redirect to={`/lessons/${match.params.id}/spelling`} />;
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
      />
      <ProgressBar completedWords={completedWords} wordList={wordList} />
    </>
  );
};

export default WordAnalysis;
