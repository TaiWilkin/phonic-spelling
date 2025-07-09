import { useEffect, useState } from "react";
import { useParams, useLocation, useMatch, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { toast } from "react-toastify";

import Typewriter from "./Typewriter";
import AttributionPopup from "./AttributionPopup";
import { pronounce } from "../util";
import { updateLessonAttempt } from "../reducers/lessonAttempt";
import { words } from "../data";
import getNextStepLink from "../getNextStepLink";

const BlendDrill = ({ phonemeList, wordList, stemList }) => {
  const match = useMatch("/lessons/:id/*");
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { voice } = useSelector((state) => state.voice);
  const { lesson } = useSelector((state) => state.lessonAttempt);
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

  const pronounceCurrentWord = () => {
    if (currentWord) pronounce(currentWord, voice);
  };

  const useInSentence = () => {
    const sentence = words[currentWord]?.sentence;
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
    return <Navigate to={"/lessons"} />;
  }

  if (!currentWord) {
    const link = getNextStepLink({
      id,
      path: match?.pathname || location.pathname, // fallback in case match is null
    });

    return <Navigate to={link} />;
  }

  return (
    <>
      <Heading as="h2" mt="5" size="md">
        Blend Drill
      </Heading>
      <Text p="10px">
        Use the phoneme and stem keys to spell the word you hear, then click
        'Submit'.
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

export default BlendDrill;
