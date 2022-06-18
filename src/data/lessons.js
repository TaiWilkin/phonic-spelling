import { PHONICS, MCGUFFEY, SYNTHETIC_PRIMER } from "./course";
import phonic_lessons from "./phonic_lessons";
import mcguffey_lessons from "./mcguffey_lessons";
import synthetic_lessons from "./synthetic_lessons";

const lessons = {
  [PHONICS]: phonic_lessons,
  [MCGUFFEY]: mcguffey_lessons,
  [SYNTHETIC_PRIMER]: synthetic_lessons,
};

export default lessons;
