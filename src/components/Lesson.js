import { useEffect } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import lessons from "../data/lessons";
import SpellingLesson from "./SpellingLesson";
import WordAnalysis from "./WordAnalysis";
import PhonemeIntroduction from "./PhonemeIntroduction";
import LessonContinueLink from "./LessonContinueLink";
import LessonIntroduction from "./LessonIntroduction";

const Lesson = () => {
  let match = useRouteMatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user === false) {
      toast.warning(
        "You are not logged in. To save your progress, please login before you continue.",
        {
          autoClose: false,
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
  const { newPhonemes, allPhonemes, words, stems, notes } =
    lessons[match.params.id];
  const wordList = words.sort(() => (Math.random() > 0.5 ? 1 : -1));
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/phoneme/:name`}>
          <PhonemeIntroduction />
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
        <Route path={match.path}>
          <LessonIntroduction notes={notes} phonemeList={newPhonemes} />
        </Route>
      </Switch>
      <Switch>
        <Route path={`${match.path}/phoneme/:name`}>
          <LessonContinueLink phonemeList={newPhonemes} />
        </Route>
        <Route path={`${match.path}`} exact>
          <LessonContinueLink phonemeList={newPhonemes} />
        </Route>
      </Switch>
    </div>
  );
};

export default Lesson;
