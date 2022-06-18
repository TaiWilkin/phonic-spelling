import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

import Typewriter from "./Typewriter";
import AttributionPopup from "./AttributionPopup";
import { pronounce } from "../util";
import { saveLessonAttempt } from "../reducers/lessonAttempts";
import { words, content } from "../data";

const phonemeList = [
  "short-a",
  "t",
  "n",
  "f",
  "short-i",
  "m",
  "s",
  "hard-c",
  "p",
  "hard-s",
  "h",
  "short-e",
  "short-u",
  "r",
  "short-o",
  "j",
  "b",
  "d",
  "g",
  "k",
  "l",
  "hard-y",
  "v",
  "w",
  "x",
  "open-a",
  "double-l",
  "qu",
  "z",
  "long-o",
  "long-e",
  "voiced-th",
  "sh",
  "ch",
  "long-a",
  "silent-e",
  "long-i",
  "long-u",
  "long-y",
  "silent-y",
  "silent-t",
  "nasal-n",
  "silent-g",
  "silent-c",
  "unvoiced-th",
];
const wordList = content.pretest;

const Pretest = () => {
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const audio = useSelector((state) => state.audio);
  const { attempts } = useSelector((state) => state.lessonAttempts);
  const [completedWords, setCompletedWords] = useState([]);
  const [attributions, setAttributions] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAttributions, setShowAttributions] = useState(false);

  const completedLength = completedWords.length;
  const attemptedLessons = Object.keys(attempts);
  useEffect(() => {
    if (attemptedLessons.length !== completedLength) {
      const invalidWords = [];
      attemptedLessons.forEach((l) => {
        invalidWords.push(wordList[parseInt(l) - 1]);
      });
      setCompletedWords(invalidWords);
    }
  }, [attemptedLessons, completedLength]);

  const incompleteWords = wordList.filter(
    (word) => !completedWords.includes(word)
  );
  const currentWord = incompleteWords[0];

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

    const audioURLs = audio[currentWord]?.audioURLs;
    if (audioURLs && audioURLs.length && showAttributions) {
      setAttributions(audioURLs);
      setShowAttributions(false);
      onOpen();
    }
    let results = {
      incorrectAnswers: [],
      correctAnswers: [],
      lesson: wordList.findIndex((w) => w === currentWord) + 1,
    };
    if (
      correctLetters.length === letters.length &&
      correctLetters.every((l, i) => letters[i] === l)
    ) {
      results.correctAnswers = [currentWord];
      setCompletedWords([...completedWords, currentWord]);
      toast.success(`Correct! Lesson ${results.lesson} skipped.`);
    } else {
      results.incorrectAnswers = [currentWord];
      setCompletedWords(wordList);
      toast.error("Incorrect.");
    }
    dispatch(saveLessonAttempt(results));
  };

  useEffect(() => {
    if (!currentWord) return;
    giveInitialPrompt();
    // eslint-disable-next-line
  }, [currentWord]);

  if (!currentWord) {
    return <Redirect to="/lessons" />;
  }

  return (
    <>
      <Heading as="h2" mt="5" size="md">
        Pretest
      </Heading>
      <Text p="10px">
        Use the phoneme keys to spell the word you hear, then click 'Submit'.
      </Text>
      <Typewriter
        phonemeList={phonemeList}
        handleReprompt={pronounceCurrentWord}
        useInSentence={useInSentence}
        hasSentence={!!words[currentWord].sentence}
        onSubmit={onSubmit}
        canSubmit
        word={currentWord}
        setShowAttributions={setShowAttributions}
        isPretest
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

export default Pretest;
