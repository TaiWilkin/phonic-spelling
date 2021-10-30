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
import hardYImg from "./images/hard-y.png";
import wImg from "./images/w.png";
import vImg from "./images/v.png";
import xImg from "./images/x.png";
import openAImg from "./images/open-a.png";
import doubleLImg from "./images/double-l.png";
import quImg from "./images/qu.png";
import zImg from "./images/z.png";

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
  "hard-y": {
    name: "hard-y",
    letter: "Y (hard)",
    examples: ["yet", "young"],
    image: hardYImg,
    vowel: false,
  },
  v: {
    name: "v",
    letter: "V",
    examples: ["vet", "value"],
    image: vImg,
    vowel: false,
  },
  w: {
    name: "w",
    letter: "W",
    examples: ["wit", "wave"],
    image: wImg,
    vowel: false,
  },
  x: {
    name: "x",
    letter: "X",
    examples: ["ox", "ax"],
    image: xImg,
    vowel: false,
  },
  "open-a": {
    name: "open-a",
    letter: "A (open)",
    examples: ["all", "fall"],
    image: openAImg,
    vowel: true,
  },
  "double-l": {
    name: "double-l",
    letter: "L (doubled)",
    examples: ["all", "fall"],
    image: doubleLImg,
    vowel: false,
    alt: ["l", "l"],
  },
  qu: {
    name: "qu",
    letter: "Qu",
    examples: ["quit", "quill"],
    image: quImg,
    vowel: false,
  },
  z: {
    name: "z",
    letter: "Z",
    examples: ["zoo", "quiz"],
    image: zImg,
    vowel: false,
  },
};

export default phonemes;
