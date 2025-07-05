import { useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
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
  const path = match?.pathnameBase;
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
        <Route path={`${path}/phoneme/:name`}>
          <PhonemeIntroduction review={review} />
        </Route>
        <Route path={`${path}/sightwords`}>
          <SightWords sightwords={sightwords} />
        </Route>
        <Route path={`${path}/analysis`}>
          <WordAnalysis phonemeList={allPhonemes} wordList={wordList} />
        </Route>
        <Route path={`${path}/spelling`}>
          <SpellingLesson
            phonemeList={allPhonemes}
            wordList={wordList}
            stemList={stems}
          />
        </Route>
        <Route path={`${path}/blenddrill`}>
          <BlendDrill
            phonemeList={blenddrill?.phonemes}
            wordList={blenddrill?.words}
            stemList={blenddrill?.stems}
            lesson={id}
          />
        </Route>
        <Route path={`${path}/dictation`}>
          <Dictation
            lesson={id}
            dictation={dictation}
            dictationImage={dictationImage}
          />
        </Route>
        <Route path={`${path}/completed`}>
          <CompletedLesson lesson={id} />
        </Route>
        <Route path={path}>
          <LessonIntroduction
            notes={notes}
            sightwords={sightwords}
            lesson={id}
            words={words}
            review={review}
          />
        </Route>
      </Routes>
      <Routes>
        <Route path={`${path}/phoneme/:name`}>
          <LessonContinueLink />
        </Route>
        <Route path={`${path}`} exact>
          <LessonContinueLink />
        </Route>
      </Routes>
    </div>
  );
};

export default Lesson;
