import { format, parse } from "date-fns";
import phonemes from "./data/phonemes";

const SOUND_ON = false;
const VOICES = window.speechSynthesis?.getVoices();

export const pronounce = (text) => {
  if ("speechSynthesis" in window) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = 0.75; // From 0.1 to 10
    msg.voice =
      VOICES.find((v) => v.name === "Google US English") ||
      VOICES.find((v) => v.lang === "en-US");
    if (SOUND_ON) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(msg);
    } else {
      console.log("saying: " + text);
    }
  } else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
  }
};

export const letterDescription = (name) => {
  return `${name} as in ${phonemes[name].examples
    .map((ex) => `'${ex}'`)
    .join(" and ")}`;
};

const reverseString = (str) => str.split("").reverse().join("");

const comparePhonemes = (a, b) => {
  if (reverseString(a) < reverseString(b)) {
    return -1;
  }
  if (reverseString(a) > reverseString(b)) {
    return 1;
  }
  return 0;
};

export const calculateScore = ({ missedWords, completedWords }) =>
  completedWords.length / (missedWords.length + completedWords.length);

export const sortPhonemes = (phonemes) => phonemes.sort(comparePhonemes);

export const sortStems = (stems) => stems.sort();

export const getUnlockedLessons = (attempts) =>
  Object.keys(attempts).reduce(
    (unlocked, lesson) => {
      const isUnlocked = attempts[lesson].some(
        (attempt) => attempt.score > 0.8
      );
      return { ...unlocked, [parseInt(lesson) + 1]: isUnlocked };
    },
    { 1: true }
  );

export const getCompletedLessons = (attempts) =>
  Object.keys(attempts).reduce((unlocked, lesson) => {
    const isCompletes = attempts[lesson].some((attempt) => attempt.score > 0.8);
    return { ...unlocked, [lesson]: isCompletes };
  }, {});

const dateFormat = "M/d/yy h:mm aaa";
export const formatDate = (date) => format(date, dateFormat);
export const parseDate = (date) => parse(date, dateFormat, new Date());
