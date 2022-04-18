import React from "react";
import { Link as ChakraLink, Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUnlockedLessons, getCompletedLessons } from "../util";

const LessonLink = ({ l, onClose = () => {} }) => {
  const { attempts } = useSelector((state) => state.lessonAttempts);
  const unlockedLessons = getUnlockedLessons(attempts);
  const completedLessons = getCompletedLessons(attempts);

  return unlockedLessons[l] ? (
    <ChakraLink as={Link} to={`/lessons/${l}`} onClick={onClose} key={l}>
      <Checkbox isChecked={completedLessons[l]} colorScheme="teal">
        Lesson {l}
      </Checkbox>
    </ChakraLink>
  ) : (
    <Checkbox isChecked={false} isDisabled key={l} color="grey">
      Lesson {l}
    </Checkbox>
  );
};

export default LessonLink;
