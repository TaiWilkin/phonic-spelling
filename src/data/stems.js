import atImg from "./images/at.png";
import anImg from "./images/an.png";
import inImg from "./images/in.png";
import itImg from "./images/it.png";
import enImg from "./images/en.png";
import otImg from "./images/ot.png";
import unImg from "./images/un.png";
import amImg from "./images/am.png";
import adImg from "./images/ad.png";
import edImg from "./images/ed.png";
import imImg from "./images/im.png";
import etImg from "./images/et.png";
import ogImg from "./images/og.png";
import idImg from "./images/id.png";
import axImg from "./images/ax.png";
import ixImg from "./images/ix.png";
import oxImg from "./images/ox.png";
import exImg from "./images/ex.png";
import allImg from "./images/all.png";
import ollImg from "./images/oll.png";
import ellImg from "./images/ell.png";
import illImg from "./images/ill.png";
import igImg from "./images/ig.png";
import agImg from "./images/ag.png";
import uzzImg from "./images/uzz.png";
import ibImg from "./images/ib.png";

const stems = {
  at: {
    letters: ["short-a", "t"],
    image: atImg,
  },
  an: {
    letters: ["short-a", "n"],
    image: anImg,
  },
  in: { letters: ["short-i", "n"], image: inImg },
  it: { letters: ["short-i", "t"], image: itImg },
  en: { letters: ["short-e", "n"], image: enImg },
  ot: { letters: ["short-o", "t"], image: otImg },
  un: { letters: ["short-u", "n"], image: unImg },
  am: { letters: ["short-a", "m"], image: amImg },
  ad: { letters: ["short-a", "d"], image: adImg },
  ed: { letters: ["short-e", "d"], image: edImg },
  im: { letters: ["short-i", "m"], image: imImg },
  et: { letters: ["short-e", "t"], image: etImg },
  og: { letters: ["short-o", "g"], image: ogImg },
  id: { letters: ["short-i", "d"], image: idImg },
  ax: { letters: ["short-a", "x"], image: axImg },
  ox: { letters: ["short-o", "x"], image: oxImg },
  ix: { letters: ["short-i", "x"], image: ixImg },
  ex: { letters: ["short-e", "x"], image: exImg },
  all: { letters: ["open-a", "l", "l"], image: allImg },
  ill: { letters: ["short-i", "l", "l"], image: illImg },
  ell: { letters: ["short-e", "l", "l"], image: ellImg },
  oll: { letters: ["short-o", "l", "l"], image: ollImg },
  ig: { letters: ["short-i", "g"], image: igImg },
  ag: { letters: ["short-a", "g"], image: agImg },
  uzz: { letters: ["short-u", "z", "z"], image: uzzImg },
  ib: { letters: ["short-i", "b"], image: ibImg },
};

export default stems;
