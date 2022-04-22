import { PHONICS, MCGUFFEY } from "./course";
import phonic_lessons from "./phonic_lessons";
import mcguffey_lessons from "./mcguffey_lessons";

const lessons = {
  [PHONICS]: phonic_lessons,
  [MCGUFFEY]: mcguffey_lessons,
};

export default lessons;
