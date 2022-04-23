import { lessons, words, phonemes, stems } from "./index";

const testData = () => {
  if (process.env.NODE_ENV !== "development") return;

  Object.keys(lessons).forEach((l) => {
    const lesson = lessons[l];

    lesson.newPhonemes?.forEach((np) => {
      if (!lesson.allPhonemes?.includes(np)) {
        console.warn(
          `Lesson ${l} newPhonemes includes ${np} but allPhonemes does not`
        );
      }
      if (!phonemes[np]) {
        console.warn(
          `Lesson ${l} newPhonemes includes ${np} but this phoneme is undefined`
        );
      }
    });

    lesson.allPhonemes?.forEach((ap) => {
      if (!phonemes[ap]) {
        console.warn(
          `Lesson ${l} allPhonemes includes ${ap} but this phoneme is undefined`
        );
      }
    });

    lesson.words?.forEach((w) => {
      if (!words[w]) {
        console.warn(
          `Lesson ${l} words includes ${w} but this word is undefined`
        );
      }
    });

    lesson.stems?.forEach((s) => {
      if (!stems[s]) {
        console.warn(
          `Lesson ${l} stems includes ${s} but this stem is undefined`
        );
      }
    });
  });
};

testData();
