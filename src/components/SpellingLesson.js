import { useEffect, useState } from "react";
import { useRouteMatch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { toast } from "react-toastify";

import Typewriter from "./Typewriter";
import AttributionPopup from "./AttributionPopup";
import { pronounce } from "../util";
import { updateLessonAttempt } from "../reducers/lessonAttempt";
import { words } from "../data";
import getNextStepLink from "../getNextStepLink";

const SpellingLesson = ({ phonemeList, wordList, stemList }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const { lesson } = useSelector((state) => state.lessonAttempt);
  const audio = useSelector((state) => state.audio);
  const [completedWords, setCompletedWords] = useState([]);
  const [missedWords, setMissedWords] = useState([]);
  const [skippedWords, setSkippedWords] = useState([]);
  const [attributions, setAttributions] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAttributions, setShowAttributions] = useState(false);

  const incompleteWords = wordList.filter(
    (word) => !completedWords.includes(word) && !skippedWords.includes(word)
  );
  const currentWord = incompleteWords[0];

  const pronounceCurrentWord = () => {
    if (currentWord) pronounce(currentWord, voice);
  };

  const countTimesWordMissed = (word, newMissedWords) =>
    newMissedWords.filter((w) => w === word).length;

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
      const newMissedWords = [...missedWords, currentWord];
      setMissedWords(newMissedWords);
      if (countTimesWordMissed(currentWord, newMissedWords) >= 3) {
        setSkippedWords([...skippedWords, currentWord]);
        toast.error(
          `You missed the word '${currentWord.toUpperCase()}' three times, ` +
            `so will not be given it again in this attempt.`,
          { autoClose: 2000 }
        );
      } else {
        toast.error("Try again");
      }
    }
  };

  useEffect(() => {
    if (!currentWord && wordList.length) {
      dispatch(
        updateLessonAttempt({
          incorrectAnswers: missedWords,
          correctAnswers: completedWords,
        })
      );
    }
    giveInitialPrompt();
    // eslint-disable-next-line
  }, [currentWord]);

  if (!lesson) {
    return <Redirect to={"/lessons"} />;
  }

  if (!currentWord) {
    const link = getNextStepLink({ id: match.params.id, path: match.path });
    return <Redirect to={link} />;
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
        skippedWords={skippedWords}
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
