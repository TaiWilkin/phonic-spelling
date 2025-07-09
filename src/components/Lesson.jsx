import { useEffect } from "react";
import { Routes, Route, useMatch, useParams } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { lessons } from "../data";
import SpellingLesson from "./SpellingLesson";
import WordAnalysis from "./WordAnalysis";
import PhonemeIntroduction from "./PhonemeIntroduction";
import LessonContinueLink from "./LessonContinueLink";
import LessonIntroduction from "./LessonIntroduction";
import SightWords from "./SightWords";
import BlendDrill from "./BlendDrill";
import CompletedLesson from "./CompletedLesson";
import Dictation from "./Dictation";

const Lesson = () => {
  const match = useMatch("/lessons/:id/*");
  const path = match?.pathname;
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user === false) {
      toast.warning(
        "You are not logged in. To save your progress, please login before you continue.",
        {
          autoClose: 5000,
          closeOnClick: true,
        }
      );
    }
  }, [user]);

  if (!lessons[id])
    return (
      <Box p="5">
        <Text fontSize="lg">Lesson {id} is not yet available.</Text>
      </Box>
    );
  const {
    allPhonemes,
    words,
    stems,
    notes,
    review,
    sightwords,
    dictation,
    dictationImage,
    blenddrill,
  } = lessons[id];
  const wordList = words.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return (
    <div>
      <Routes>
        <Route
          path="phoneme/:name"
          element={<PhonemeIntroduction review={review} />}
        />
        <Route
          path="sightwords"
          element={<SightWords sightwords={sightwords} />}
        />
        <Route
          path="analysis"
          element={
            <WordAnalysis phonemeList={allPhonemes} wordList={wordList} />
          }
        />
        <Route
          path="spelling"
          element={
            <SpellingLesson
              phonemeList={allPhonemes}
              wordList={wordList}
              stemList={stems}
            />
          }
        />
        <Route
          path="blenddrill"
          element={
            <BlendDrill
              phonemeList={blenddrill?.phonemes}
              wordList={blenddrill?.words}
              stemList={blenddrill?.stems}
              lesson={id}
            />
          }
        />
        <Route
          path="dictation"
          element={
            <Dictation
              lesson={id}
              dictation={dictation}
              dictationImage={dictationImage}
            />
          }
        />
        <Route path="completed" element={<CompletedLesson lesson={id} />} />
        <Route
          index
          element={
            <LessonIntroduction
              notes={notes}
              sightwords={sightwords}
              lesson={id}
              words={words}
              review={review}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/phoneme/:name" element={<LessonContinueLink />} />
        <Route index exact element={<LessonContinueLink />} />
      </Routes>
    </div>
  );
};

export default Lesson;
