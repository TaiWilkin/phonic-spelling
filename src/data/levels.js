import { PHONICS, MCGUFFEY, SYNTHETIC_PRIMER } from "./course";
const phonic_levels = {
  1: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22,
  ],
  2: [
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  ],
  3: [],
  4: [],
};

const mcguffey_levels = { 1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] };

const synthetic_levels = { 1: [1, 2] };

const levels = {
  [PHONICS]: phonic_levels,
  [MCGUFFEY]: mcguffey_levels,
  [SYNTHETIC_PRIMER]: synthetic_levels,
};

export default levels;
