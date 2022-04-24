import { useEffect } from "react";
import { Text, Box, Heading, Spinner } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CustomLink from "./CustomLink";
import { saveLessonAttempt } from "../reducers/lessonAttempts";
import { hasPassedAnAttempt } from "../util";
import { lessons, content } from "../data";

const CompletedLesson = ({ lesson }) => {
  const dispatch = useDispatch();
  const { attempts, loading } = useSelector((state) => state.lessonAttempts);
  const lessonAttempt = useSelector((state) => state.lessonAttempt);
  const attemptList = attempts[lesson];

  useEffect(() => {
    dispatch(saveLessonAttempt(lessonAttempt));
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!attemptList) {
    return <Redirect to={`/lessons`} />;
  }

  const isCompleted = hasPassedAnAttempt(attemptList);
  const scores = attemptList
    .map(({ score }) => score)
    .filter((s) => !Number.isNaN(s));
  const maxScore = Math.max(...scores);
  const formattedScore = `${(maxScore * 100).toFixed(2)}%`;

  const text = `Your top score for this lesson is ${formattedScore}.`;

  if (!isCompleted) {
    return (
      <Box m="5">
        <Heading as="h2" mt="5" size="md">
          Lesson {lesson}
        </Heading>
        <Text m="5">{text} A score of 80% is required to proceed.</Text>
        {lessons[lesson]?.review ? (
          <CustomLink
            text="Return to lessons home"
            link={`/lessons`}
            color={`${content.color}.500`}
          />
        ) : (
          <CustomLink
            text="Try again?"
            link={`/lessons/${parseInt(lesson)}`}
            color={`${content.color}.500`}
          />
        )}
      </Box>
    );
  }

  return (
    <Box m="5">
      <Heading as="h2" mt="5" size="md">
        Lesson {lesson}
      </Heading>
      <Text m="5">
        Congratulations! {text} You are ready to proceed to the next lesson.
      </Text>
      <CustomLink
        text="Continue to next lesson"
        link={`/lessons/${parseInt(lesson) + 1}`}
        color={`${content.color}.500`}
      />
      <CustomLink
        text="Return to lessons home"
        link={`/lessons`}
        color={`${content.color}.500`}
      />
    </Box>
  );
};

export default CompletedLesson;
