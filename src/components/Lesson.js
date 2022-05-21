import { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
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
  let match = useRouteMatch();
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

  if (!lessons[match.params.id])
    return (
      <Box p="5">
        <Text fontSize="lg">
          Lesson {match.params.id} is not yet available.
        </Text>
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
  } = lessons[match.params.id];
  const wordList = words.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/phoneme/:name`}>
          <PhonemeIntroduction review={review} />
        </Route>
        <Route path={`${match.path}/sightwords`}>
          <SightWords sightwords={sightwords} />
        </Route>
        <Route path={`${match.path}/analysis`}>
          <WordAnalysis phonemeList={allPhonemes} wordList={wordList} />
        </Route>
        <Route path={`${match.path}/spelling`}>
          <SpellingLesson
            phonemeList={allPhonemes}
            wordList={wordList}
            stemList={stems}
          />
        </Route>
        <Route path={`${match.path}/blenddrill`}>
          <BlendDrill
            phonemeList={blenddrill?.phonemes}
            wordList={blenddrill?.words}
            stemList={blenddrill?.stems}
            lesson={match.params.id}
          />
        </Route>
        <Route path={`${match.path}/dictation`}>
          <Dictation
            lesson={match.params.id}
            dictation={dictation}
            dictationImage={dictationImage}
          />
        </Route>
        <Route path={`${match.path}/completed`}>
          <CompletedLesson lesson={match.params.id} />
        </Route>
        <Route path={match.path}>
          <LessonIntroduction
            notes={notes}
            sightwords={sightwords}
            lesson={match.params.id}
          />
        </Route>
      </Switch>
      <Switch>
        <Route path={`${match.path}/phoneme/:name`}>
          <LessonContinueLink />
        </Route>
        <Route path={`${match.path}`} exact>
          <LessonContinueLink />
        </Route>
      </Switch>
    </div>
  );
};

export default Lesson;
