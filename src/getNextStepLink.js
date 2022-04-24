import { lessons } from "./data";

const steps = [
  {
    name: "Introduction",
    path: "/lessons/:id",
    shouldVisit: () => true,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}`,
  },
  {
    name: "Phonemes",
    createLink: (id, phoneme) => `/lessons/${id}/phoneme/${phoneme}`,
    shouldVisit: ({ newPhonemes }) => newPhonemes.length,
    shouldStay: ({ newPhonemes, phonemeIndex }) =>
      newPhonemes?.length && phonemeIndex < newPhonemes.length,
    path: "/lessons/:id/phoneme/:name",
  },
  {
    name: "Word Analysis",
    path: "/lessons/:id/analysis",
    shouldVisit: ({ words, review }) => !review && words && words.length,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}/analysis`,
  },
  {
    name: "Phonic Spelling",
    path: "/lessons/:id/spelling",
    shouldVisit: ({ words }) => words && words.length,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}/spelling`,
  },
  {
    name: "Sight Words",
    path: "/lessons/:id/sightwords",
    shouldVisit: ({ sightwords }) => sightwords && sightwords.length,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}/sightwords`,
  },
  {
    name: "Dictation",
    path: "/lessons/:id/dictation",
    shouldVisit: ({ dictation }) => dictation && dictation.length,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}/dictation`,
  },
  {
    name: "Lesson Complete",
    path: "/lessons/:id/completed",
    shouldVisit: (id) => true,
    shouldStay: () => false,
    createLink: (id) => `/lessons/${id}/completed`,
  },
];

const getNextStep = ({ name, id, path }) => {
  const lesson = lessons[id];

  if (!lesson) return false;

  let currentStep = steps.findIndex((s) => s.path === path);
  if (!currentStep) {
    currentStep = 0;
  }

  let phonemeIndex = lesson.newPhonemes.findIndex((p) => p === name) + 1;
  if (!phonemeIndex) {
    phonemeIndex = 0;
  }

  const step = steps.find(
    (step, i) =>
      (i === currentStep && step.shouldStay({ ...lesson, id, phonemeIndex })) ||
      (i > currentStep && step.shouldVisit({ ...lesson, id }))
  );

  if (!step) {
    console.warn("Next lesson step not found.");
    return false;
  }

  return step.createLink(id, lesson.newPhonemes[phonemeIndex]);
};

export default getNextStep;
