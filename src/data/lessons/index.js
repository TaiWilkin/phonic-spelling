import eight from "./eight";
import nine from "./nine";
import ten from "./ten";
import eleven from "./eleven";
import twelve from "./twelve";
import thirteen from "./thirteen";
import fourteen from "./fourteen";
import fifteen from "./fifteen";
import sixteen from "./sixteen";
import seventeen from "./seventeen";
import eighteen from "./eighteen";
import nineteen from "./nineteen";
import twenty from "./twenty";
import twentyone from "./twentyone";
import twentytwo from "./twentytwo";

const lessons = {
  1: {
    newPhonemes: ["short-a", "t", "n", "f"],
    allPhonemes: ["short-a", "f", "n", "t"],
    words: ["at", "fat", "Nat", "an", "fan", "tan", "ant"],
    notes: [
      "Vowels are sounds that are made with an open throat and mouth. " +
        "They are represented by the letters such as a, e, i, o, u, and sometimes y. ",
      "When there is only one vowel in a word and it is followed by one or more consonants, " +
        "that vowel is generally short.",
      "The 'a' in 'at' and 'an' is an example of a short vowel. In some accents, " +
        "the 'a' in these two words will sound slightly different, but we still " +
        "consider both 'a's to be short 'a's. ",
    ],
  },
  2: {
    newPhonemes: ["short-i", "m", "s"],
    allPhonemes: ["short-a", "t", "n", "f", "short-i", "m", "s"],
    words: ["in", "sit", "sits", "mat", "mats", "it", "its", "tin"],
    stems: ["at"],
    notes: [
      "In this lesson, we introduce our first word stem. Stems are groups of phonemes that " +
        "we have previously studied, and which you can now use as a group to write your " +
        "words more quickly.",
      "We also introduce short 'i', our second short vowel. Notice that it is always followed by a consonant.",
    ],
  },
  3: {
    newPhonemes: ["hard-c", "p", "hard-s", "h", "short-e"],
    allPhonemes: [
      "short-a",
      "t",
      "n",
      "f",
      "short-i",
      "m",
      "s",
      "hard-c",
      "p",
      "hard-s",
      "h",
      "short-e",
    ],
    words: [
      "can",
      "pan",
      "cans",
      "fin",
      "pin",
      "pins",
      "fit",
      "hit",
      "hits",
      "hen",
      "ten",
      "hens",
      "is",
      "his",
      "fins",
    ],
    stems: ["at", "an", "in", "it", "en"],
    notes: [
      "This is the first lesson with a secondary sound for a letter. " +
        "'S' can be pronounced as in 'sit' (soft s), or it can be pronounced as in 'has' (hard s).",
      "Hard 's' occurs sometimes at the end of words after short vowels (his, has) and after the nasal letters 'm' and 'n' (fans, rams).",
      "When 's' is at the beginning of a word (suit), or is doubled (class), it is always soft.",
      "We also introduce short 'e', our third short vowel. Notice that it is always followed by a consonant.",
      "Hard 'c' is also introduced in this lesson. 'C' is hard except in special circumstances, which will be discussed later.",
    ],
  },
  4: {
    newPhonemes: ["short-u", "r", "short-o"],
    allPhonemes: [
      "short-a",
      "t",
      "n",
      "f",
      "short-i",
      "m",
      "s",
      "hard-c",
      "p",
      "hard-s",
      "h",
      "short-e",
      "short-u",
      "r",
      "short-o",
    ],
    words: [
      "up",
      "cup",
      "cups",
      "cat",
      "rat",
      "cats",
      "am",
      "ham",
      "hams",
      "pot",
      "not",
      "pots",
      "fun",
      "sun",
      "suns",
    ],
    stems: ["at", "an", "in", "it", "en", "ot", "un"],
    notes: [
      "This lesson intrduces the last of the common short vowels (a, e, i, o, and u).",
      "Listen carefully to differentiate soft and hard 's'.",
    ],
  },
  5: {
    newPhonemes: ["j", "b", "d"],
    allPhonemes: [
      "short-a",
      "t",
      "n",
      "f",
      "short-i",
      "m",
      "s",
      "hard-c",
      "p",
      "hard-s",
      "h",
      "short-e",
      "short-u",
      "r",
      "short-o",
      "j",
      "b",
      "d",
    ],
    words: [
      "as",
      "has",
      "jam",
      "Sam",
      "bad",
      "Dad",
      "bed",
      "Ned",
      "Jim",
      "dim",
    ],
    stems: ["at", "an", "in", "it", "en", "ot", "un", "am", "ad", "ed", "im"],
    notes: [
      "We learn 'j' in this lesson. " +
        "Later we will learn another phoneme that makes the same sound as 'j', " +
        "but for this lesson just notice which vowels follow the 'j'. ",
      "'J' doesn't come at the end of words unless they are borrowed from another language.",
    ],
  },
  6: {
    newPhonemes: ["g", "k", "l"],
    allPhonemes: [
      "short-a",
      "t",
      "n",
      "f",
      "short-i",
      "m",
      "s",
      "hard-c",
      "p",
      "hard-s",
      "h",
      "short-e",
      "short-u",
      "r",
      "short-o",
      "j",
      "b",
      "d",
      "g",
      "k",
      "l",
    ],
    words: [
      "gun",
      "run",
      "get",
      "let",
      "hog",
      "bog",
      "kid",
      "lid",
      "kit",
      "lit",
    ],
    stems: [
      "at",
      "an",
      "in",
      "it",
      "en",
      "ot",
      "un",
      "am",
      "ad",
      "ed",
      "im",
      "et",
      "og",
      "id",
    ],
    notes: [
      "'K' is introduced in this lesson. " +
        "Why do we use 'k' for these words instead of hard 'c'? " +
        "'C' becomes soft like 's' when it is before an 'e', 'i', or 'y'. " +
        "When the 'k'/'hard c' sound is followed by one of those letters, it must be spelled with 'k'.",
      "Hard 'G' is introduced in the lesson. Like 'c', 'g' often becomes soft and sounds " +
        "like 'j' when it comes before 'e', 'i', or 'y'.",
      "In some accents, " +
        "the 'o' in 'hot' and 'dog' will sound different, but we still " +
        "consider both 'o's to be short 'o's. ",
    ],
  },
  7: {
    newPhonemes: ["hard-y", "v", "w"],
    allPhonemes: [
      "short-a",
      "t",
      "n",
      "f",
      "short-i",
      "m",
      "s",
      "hard-c",
      "p",
      "hard-s",
      "h",
      "short-e",
      "short-u",
      "r",
      "short-o",
      "j",
      "b",
      "d",
      "g",
      "k",
      "l",
      "hard-y",
      "v",
      "w",
    ],
    words: [
      "van",
      "man",
      "vans",
      "Tim",
      "vim",
      "dims",
      "wet",
      "set",
      "sets",
      "yet",
      "pet",
      "pets",
      "win",
      "bin",
      "wins",
    ],
    stems: [
      "at",
      "an",
      "in",
      "it",
      "en",
      "ot",
      "un",
      "am",
      "ad",
      "ed",
      "im",
      "et",
      "og",
      "id",
    ],
    notes: [
      "The consonant 'Y' is introduced in this lesson. " +
        "Remember that a consonant is a phoneme which blocks the flow of air " +
        "using your throat, tongue, or lips. ",
      "Say 'yet', and feel the way your throat and tongue move to block some " +
        "of the air on the 'y'. Feel how they open up when you pronounce the vowel 'e' in 'yet'. " +
        "Compare the feeling of 'y' as a vowel in the word 'myth' " +
        "to the feeling of 'y' as a consonant in the word 'yam'.",
    ],
  },
  8: eight,
  9: nine,
  10: ten,
  11: eleven,
  12: twelve,
  13: thirteen,
  14: fourteen,
  15: fifteen,
  16: sixteen,
  17: seventeen,
  18: eighteen,
  19: nineteen,
  20: twenty,
  21: twentyone,
  22: twentytwo,
};

export default lessons;
