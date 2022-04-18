import { Text, Box, Heading, Spinner } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import CustomLink from "./CustomLink";
import { hasPassedAnAttempt } from "../util";
import lessons from "../data/lessons";

const CompletedLesson = ({ lesson }) => {
  const { attempts, loading } = useSelector((state) => state.lessonAttempts);
  const attemptList = attempts[lesson];

  if (loading) {
    return <Spinner />;
  }

  if (!attemptList && !loading) {
    return <Redirect to={`/lessons`} />;
  }
  console.log(attemptList);
  const isCompleted = hasPassedAnAttempt(attemptList, lesson);
  const phonicScores = attemptList
    .map(({ score }) => score)
    .filter((s) => !Number.isNaN(s));
  const maxPhonicScore = Math.max(phonicScores);
  const sightScores = attemptList
    .map(({ sightScore }) => sightScore)
    .filter((s) => !Number.isNaN(s));
  const maxSightScore = Math.max(sightScores);
  const formattedPhonicScore = `${(maxPhonicScore * 100).toFixed(2)}%`;
  const formattedSightScore = `${(maxSightScore * 100).toFixed(2)}%`;

  let text = "Lesson attempt completed";
  if (phonicScores.length && sightScores.length) {
    text =
      text +
      ` with a phonic score of ${formattedPhonicScore} and a sight word score of ${formattedSightScore}`;
  } else if (sightScores.length) {
    text = text + ` with a sight word score of ${formattedSightScore}`;
  } else if (phonicScores.length) {
    text = text + ` with a phonic score of ${formattedPhonicScore}`;
  }

  text = text + ".";
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
            color="teal"
          />
        ) : (
          <CustomLink
            text="Try again?"
            link={`/lessons/${parseInt(lesson)}`}
            color="teal"
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
      <Text m="5">{text}</Text>
      <CustomLink
        text="Continue to next lesson"
        link={`/lessons/${parseInt(lesson) + 1}`}
        color="teal"
      />
      <CustomLink
        text="Return to lessons home"
        link={`/lessons`}
        color="teal"
      />
    </Box>
  );
};

export default CompletedLesson;
