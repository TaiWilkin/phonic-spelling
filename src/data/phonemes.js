import shortAImg from "./images/short-a.png";
import tImg from "./images/t.png";
import nImg from "./images/n.png";
import fImg from "./images/f.png";
import shortIImg from "./images/short-i.png";
import sImg from "./images/s.png";
import mImg from "./images/m.png";
import hardCImg from "./images/hard-c.png";
import hardSImg from "./images/hard-s.png";
import pImg from "./images/p.png";
import hImg from "./images/h.png";
import shortEImg from "./images/short-e.png";
import shortUImg from "./images/short-u.png";
import rImg from "./images/r.png";
import shortOImg from "./images/short-o.png";
import jImg from "./images/j.png";
import dImg from "./images/d.png";
import bImg from "./images/b.png";
import gImg from "./images/g.png";
import kImg from "./images/k.png";
import lImg from "./images/l.png";

const phonemes = {
  "short-a": {
    name: "short-a",
    letter: "A (short)",
    examples: ["an", "at"],
    image: shortAImg,
    vowel: true,
  },
  t: {
    name: "t",
    letter: "T",
    examples: ["tap", "tin"],
    image: tImg,
    vowel: false,
  },
  n: {
    name: "n",
    letter: "N",
    examples: ["nine", "no"],
    image: nImg,
    vowel: false,
  },
  f: { name: "f", letter: "F", examples: ["fan", "fit"], image: fImg },
  "short-i": {
    name: "short-i",
    letter: "I (short)",
    examples: ["it", "ink"],
    image: shortIImg,
    vowel: true,
  },
  m: {
    name: "m",
    letter: "M",
    examples: ["mat", "man"],
    image: mImg,
    vowel: false,
  },
  s: {
    name: "s",
    letter: "S",
    examples: ["sit", "sink"],
    image: sImg,
    vowel: false,
  },
  "hard-c": {
    name: "hard-c",
    letter: "C (hard)",
    examples: ["cat", "can"],
    image: hardCImg,
    vowel: false,
  },
  p: {
    name: "p",
    letter: "P",
    examples: ["pay", "pit"],
    image: pImg,
    vowel: false,
  },
  "hard-s": {
    name: "hard-s",
    letter: "S (hard)",
    examples: ["his", "as"],
    image: hardSImg,
    vowel: false,
  },
  h: {
    name: "h",
    letter: "H",
    examples: ["his", "hat"],
    image: hImg,
    vowel: false,
  },
  "short-e": {
    name: "short-e",
    letter: "E (short)",
    examples: ["set", "end"],
    image: shortEImg,
    vowel: true,
  },
  "short-u": {
    name: "short-u",
    letter: "U (short)",
    examples: ["sun", "up"],
    image: shortUImg,
    vowel: true,
  },
  r: {
    name: "r",
    letter: "R",
    examples: ["run", "rat"],
    image: rImg,
    vowel: false,
  },
  "short-o": {
    name: "short-o",
    letter: "O (short)",
    examples: ["hop", "lot"],
    image: shortOImg,
    vowel: true,
  },
  j: {
    name: "j",
    letter: "J",
    examples: ["jot", "jab"],
    image: jImg,
    vowel: false,
  },
  d: {
    name: "d",
    letter: "D",
    examples: ["dip", "dog"],
    image: dImg,
    vowel: false,
  },
  b: {
    name: "b",
    letter: "B",
    examples: ["bit", "ban"],
    image: bImg,
    vowel: false,
  },
  g: {
    name: "g",
    letter: "G",
    examples: ["go", "bag"],
    image: gImg,
    vowel: false,
  },
  k: {
    name: "k",
    letter: "K",
    examples: ["kiss", "kept"],
    image: kImg,
    vowel: false,
  },
  l: {
    name: "l",
    letter: "L",
    examples: ["lit", "ball"],
    image: lImg,
    vowel: false,
  },
};

export default phonemes;
