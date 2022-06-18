export const PHONICS = "phonics";
export const MCGUFFEY = "mcguffey";
export const SYNTHETIC_PRIMER = "synthetic-primer";

const VALID_COURSES = [PHONICS, MCGUFFEY, SYNTHETIC_PRIMER];
let COURSE = process.env.REACT_APP_SITE || PHONICS;

if (!VALID_COURSES.includes(COURSE)) {
  console.warning(`Course ${COURSE} is not valid.`);
  COURSE = PHONICS;
}

export const CONTENT = {
  [PHONICS]: {
    title: "Phonic Spelling",
    description: [
      "This program is inspired by the Primary Speller by Edwin S. Richards, " +
        "which was published in 1911 in the hope of overcoming many of the " +
        "difficulties encountered in the teaching of spelling. It is based upon " +
        "the phonetic method.",
      "In each lesson, students will be introduced to several phonemes and " +
        "phonetic concepts. They will then use these phonemes to analyze the " +
        "phonetic composition of a set of words. Finally, they will be tested " +
        "on their ability to spell these words. As each lesson is successfully " +
        "completed, additional lessons will unlock.",
    ],
    acknowledgments: ["Wordnik API", "HathiTrust"],
    color: "teal",
    pretest: [
      "tan",
      "sits",
      "his",
      "cup",
      "jam",
      "bog",
      "yet",
      "vex",
      "balls",
      "quill",
      "bell",
      "hop",
      "she",
      "names",
      "flag",
      "cube",
      "cry",
      "grape",
      "stove",
    ],
  },
  [MCGUFFEY]: {
    title: "McGuffey Spelling",
    description: [
      "This program is inspired by the McGuffey Readers, and based upon " +
        "the phonetic method.",
      "In each lesson, students will be introduced to several phonemes and " +
        "phonetic concepts. They will then use these phonemes to analyze the " +
        "phonetic composition of a set of words. Finally, they will be tested " +
        "on their ability to spell these words. As each lesson is successfully " +
        "completed, additional lessons will unlock.",
    ],
    acknowledgments: ["Wordnik API", "Project Gutenberg"],
    color: "cyan",
    pretest: ["cat", "has", "fan", "lad"],
  },
  [SYNTHETIC_PRIMER]: {
    title: "Pollard's Synthetic Primer",
    description: [
      "This program is inspired by the Synthetic Primer by Rebecca S. Pollard, " +
        "which was published in 1897 and is based upon " +
        "the phonetic method.",
      "In each lesson, students will be introduced to several phonemes and " +
        "phonetic concepts. They will then use these phonemes to analyze the " +
        "phonetic composition of a set of words. Finally, they will be tested " +
        "on their ability to spell these words. As each lesson is successfully " +
        "completed, additional lessons will unlock.",
    ],
    acknowledgments: ["Wordnik API", "HathiTrust"],
    color: "purple",
    pretest: [
      "has",
      "can",
      "naps",
      "sang",
      "track",
      "plank",
      "flash",
      "thatch",
      "leg",
      "pegs",
    ],
  },
};

export default COURSE;
