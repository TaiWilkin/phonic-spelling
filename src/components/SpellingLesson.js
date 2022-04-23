import { useEffect, useState } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { toast } from "react-toastify";

import Typewriter from "./Typewriter";
import AttributionPopup from "./AttributionPopup";
import { pronounce } from "../util";
import { saveLessonAttempt } from "../reducers/lessonAttempts";
import { words } from "../data";

const SpellingLesson = ({ phonemeList, wordList, stemList }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const audio = useSelector((state) => state.audio);
  const [completedWords, setCompletedWords] = useState([]);
  const [missedWords, setMissedWords] = useState([]);
  const [attributions, setAttributions] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAttributions, setShowAttributions] = useState(false);

  const incompleteWords = wordList.filter(
    (word) => !completedWords.includes(word)
  );
  const currentWord = incompleteWords[0];
  const lesson = match.params.id;

  const pronounceCurrentWord = () => {
    if (currentWord) pronounce(currentWord, voice);
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
      const sentence = words[currentWord]?.sentence;
      pronounce(
        `${currentWord}. ${
          sentence ? sentence : "Listen again: "
        } ${currentWord}.`,
        voice
      );
    }
  };

  const onSubmit = (letters) => {
    const correctLetters = words[currentWord].letters;
    if (
      correctLetters.length === letters.length &&
      correctLetters.every((l, i) => letters[i] === l)
    ) {
      const audioURLs = audio[currentWord]?.audioURLs;
      if (audioURLs && audioURLs.length && showAttributions) {
        setAttributions(audioURLs);
        setShowAttributions(false);
        onOpen();
      }

      setCompletedWords([...completedWords, currentWord]);
      toast.success("Correct!");
    } else {
      pronounceCurrentWord();
      setMissedWords([...missedWords, currentWord]);
      toast.error("Try again");
    }
  };

  useEffect(() => {
    if (!currentWord && wordList.length) {
      dispatch(
        saveLessonAttempt({
          missedWords,
          completedWords,
          lesson: lesson,
        })
      );
    }
    giveInitialPrompt();
    // eslint-disable-next-line
  }, [currentWord]);

  if (!currentWord) {
    return <Redirect to={`/lessons/${match.params.id}/completed`} />;
  }

  return (
    <>
      <Heading as="h2" mt="5" size="md">
        Spelling Practice
      </Heading>
      <Text p="10px">
        Use the phoneme {stemList ? "and stem " : ""}keys to spell the word you
        hear, then click 'Submit'.
      </Text>
      <Typewriter
        phonemeList={phonemeList}
        handleReprompt={pronounceCurrentWord}
        useInSentence={useInSentence}
        hasSentence={!!words[currentWord].sentence}
        stemList={stemList}
        onSubmit={onSubmit}
        canSubmit
        word={currentWord}
        setShowAttributions={setShowAttributions}
        completedWords={completedWords}
        wordList={wordList}
      />
      <AttributionPopup
        attributions={attributions}
        setAttributions={setAttributions}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default SpellingLesson;
