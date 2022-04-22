import { format, parse } from "date-fns";
import { phonemes, lessons } from "./data";

const SOUND_ON = process?.env?.NODE_ENV === "development" ? false : true;
export let VOICES = window.speechSynthesis?.getVoices();
export const defaultVoice = "Google US English";

export const pronounce = (text, voice = defaultVoice) => {
  if ("speechSynthesis" in window) {
    // Speech Synthesis supported 🎉
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.rate = 0.75; // From 0.1 to 10
    const voices = VOICES.length ? VOICES : window.speechSynthesis?.getVoices();
    if (!VOICES.length && voices.length) {
      VOICES = voices;
    }
    msg.voice = voices.find((v) => v.voiceURI === voice);
    if (!msg.voice) {
      msg.voice = voices.find((v) => v.voiceURI === "Google US English");
    }
    if (!msg.voice) {
      msg.voice = voices.find((v) => v.lang === "en-US");
    }
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

export const calculateScore = ({ missedWords = [], completedWords = [] }) =>
  completedWords.length / (missedWords.length + completedWords.length);

export const sortPhonemes = (phonemes) => phonemes.sort(comparePhonemes);

export const sortStems = (stems) => stems.sort();

export const getAlt = (phoneme) => phonemes[phoneme].alt;

export const hasPassedAnAttempt = (lessonAttempts = [], lesson) => {
  if (!lesson || !lessons[lesson] || !lessonAttempts.length) return false;
  const { sightwords = [], words = [] } = lessons[lesson];
  const hasPassedSightWords =
    !sightwords.length ||
    lessonAttempts.some((attempt) => attempt.sightScore > 0.8);
  const hasPassedPhonicWords =
    !words.length || lessonAttempts.some((attempt) => attempt.score > 0.8);
  return hasPassedSightWords && hasPassedPhonicWords;
};

export const getUnlockedLessons = (attempts) =>
  Object.keys(lessons).reduce(
    (unlocked, lesson) => {
      const isValidReview = lessons[lesson].review && !attempts[lesson];
      const isCompleted = hasPassedAnAttempt(attempts[lesson], lesson);
      return {
        ...unlocked,
        [lesson]: isCompleted || isValidReview || unlocked[lesson],
        [parseInt(lesson) + 1]: isCompleted,
      };
    },
    { 1: true }
  );

export const getCompletedLessons = (attempts) =>
  Object.keys(attempts).reduce((unlocked, lesson) => {
    const isCompleted = hasPassedAnAttempt(attempts[lesson], lesson);
    return { ...unlocked, [lesson]: isCompleted };
  }, {});

const dateFormat = "M/d/yy h:mm aaa";
export const formatDate = (date) => format(date, dateFormat);
export const parseDate = (date) => parse(date, dateFormat, new Date());
