import course, { CONTENT } from "./course";
import allLessons from "./lessons";
import phonemes from "./phonemes";
import allLevels from "./levels";
import stems from "./stems";
import words from "./words";

const lessons = allLessons[course];
const levels = allLevels[course];

const content = CONTENT[course];

export { course, words, stems, phonemes, lessons, levels, content };
