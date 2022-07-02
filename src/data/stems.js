const stems = {
  at: { letters: ["short-a", "t"] },
  an: { letters: ["short-a", "n"] },
  in: {
    letters: ["short-i", "n"],
  },
  it: {
    letters: ["short-i", "t"],
  },
  en: {
    letters: ["short-e", "n"],
  },
  ot: {
    letters: ["short-o", "t"],
  },
  un: {
    letters: ["short-u", "n"],
  },
  am: {
    letters: ["short-a", "m"],
  },
  ad: {
    letters: ["short-a", "d"],
  },
  ed: {
    letters: ["short-e", "d"],
  },
  im: {
    letters: ["short-i", "m"],
  },
  et: {
    letters: ["short-e", "t"],
  },
  og: {
    letters: ["short-o", "g"],
  },
  id: {
    letters: ["short-i", "d"],
  },
  ax: {
    letters: ["short-a", "x"],
  },
  ox: {
    letters: ["short-o", "x"],
  },
  ix: {
    letters: ["short-i", "x"],
  },
  ex: {
    letters: ["short-e", "x"],
  },
  all: {
    letters: ["open-a", "l", "l"],
  },
  ill: {
    letters: ["short-i", "l", "l"],
  },
  ell: {
    letters: ["short-e", "l", "l"],
  },
  oll: {
    letters: ["short-o", "l", "l"],
  },
  ig: {
    letters: ["short-i", "g"],
  },
  ag: {
    letters: ["short-a", "g"],
  },
  uzz: {
    letters: ["short-u", "z", "z"],
  },
  ib: {
    letters: ["short-i", "b"],
  },
  ab: {
    letters: ["short-a", "b"],
  },
  eb: {
    letters: ["short-e", "b"],
  },
  ug: {
    letters: ["short-u", "g"],
  },
  ob: {
    letters: ["short-o", "b"],
  },
  eg: {
    letters: ["short-e", "g"],
  },
  em: {
    letters: ["short-e", "m"],
  },
  od: {
    letters: ["short-o", "d"],
  },
  ud: {
    letters: ["short-u", "d"],
  },
  om: {
    letters: ["short-o", "m"],
  },
  ub: {
    letters: ["short-u", "b"],
  },
  ap: {
    letters: ["short-a", "p"],
  },
  ip: {
    letters: ["short-i", "p"],
  },
  op: {
    letters: ["short-o", "p"],
  },
  um: {
    letters: ["short-u", "m"],
  },
  sp: {
    letters: ["s", "p"],
  },
  st: {
    letters: ["s", "t"],
  },
  ane: {
    letters: ["long-a", "n", "silent-e"],
  },
  ame: {
    letters: ["long-a", "m", "silent-e"],
  },
  ale: {
    letters: ["long-a", "l", "silent-e"],
  },
  ake: {
    letters: ["long-a", "k", "silent-e"],
  },
  ade: {
    letters: ["long-a", "d", "silent-e"],
  },
  pl: {
    letters: ["p", "l"],
  },
  sl: {
    letters: ["s", "l"],
  },
  fl: {
    letters: ["f", "l"],
  },
  cl: {
    letters: ["hard-c", "l"],
  },
  bl: {
    letters: ["b", "l"],
  },
  gl: {
    letters: ["g", "l"],
  },
  ide: {
    letters: ["long-i", "d", "silent-e"],
  },
  ine: {
    letters: ["long-i", "n", "silent-e"],
  },
  ile: {
    letters: ["long-i", "l", "silent-e"],
  },
  ube: {
    letters: ["long-u", "b", "silent-e"],
  },
  une: {
    letters: ["long-u", "n", "silent-e"],
  },
  ay: {
    letters: ["long-a", "silent-y"],
  },
  cr: {
    letters: ["hard-c", "r"],
  },
  gr: {
    letters: ["g", "r"],
  },
  dr: {
    letters: ["d", "r"],
  },
  fr: {
    letters: ["f", "r"],
  },
  tr: {
    letters: ["t", "r"],
  },
  pr: {
    letters: ["p", "r"],
  },
  oke: {
    letters: ["long-o", "k", "silent-e"],
  },
  ave: {
    letters: ["long-a", "v", "silent-e"],
  },
  ipe: {
    letters: ["long-i", "p", "silent-e"],
  },
  ape: {
    letters: ["long-a", "p", "silent-e"],
  },
  ole: {
    letters: ["long-o", "l", "silent-e"],
  },
  ate: {
    letters: ["long-a", "t", "silent-e"],
  },
  ife: {
    letters: ["long-i", "f", "silent-e"],
  },
  one: {
    letters: ["long-o", "n", "silent-e"],
  },
  ime: {
    letters: ["long-i", "m", "silent-e"],
  },
  afe: {
    letters: ["long-a", "f", "silent-e"],
  },
  ope: {
    letters: ["long-o", "p", "silent-e"],
  },
  ome: {
    letters: ["long-o", "m", "silent-e"],
  },
  abe: {
    letters: ["long-a", "b", "silent-e"],
  },
  ute: {
    letters: ["long-u", "t", "silent-e"],
  },
  obe: {
    letters: ["long-o", "b", "silent-e"],
  },
  ite: {
    letters: ["long-i", "t", "silent-e"],
  },
  ose: {
    letters: ["long-o", "s", "silent-e"],
  },
  "ose-hard": {
    value: "ose",
    letters: ["long-o", "hard-s", "silent-e"],
  },
  ode: {
    letters: ["long-o", "d", "silent-e"],
  },
  ive: {
    letters: ["long-i", "v", "silent-e"],
  },
  ove: {
    letters: ["long-o", "v", "silent-e"],
  },
  sk: {
    letters: ["s", "k"],
  },
  sc: {
    letters: ["s", "hard-c"],
  },
  sw: {
    letters: ["s", "w"],
  },
  sm: {
    letters: ["s", "m"],
  },
  sn: {
    letters: ["s", "n"],
  },
  br: {
    letters: ["b", "r"],
  },
  str: {
    letters: ["s", "t", "r"],
  },
  spr: {
    letters: ["s", "p", "r"],
  },
  shr: {
    letters: ["sh", "r"],
  },
  spl: {
    letters: ["s", "p", "l"],
  },
  scr: {
    letters: ["s", "hard-c", "r"],
  },
  ike: {
    letters: ["long-i", "k", "silent-e"],
  },
  ost: {
    letters: ["intermediate-o", "s", "t"],
  },
  ist: {
    letters: ["short-i", "s", "t"],
  },
  est: {
    letters: ["short-e", "s", "t"],
  },
  ust: {
    letters: ["short-u", "s", "t"],
  },
  tw: {
    letters: ["t", "w"],
  },
  ess: {
    letters: ["short-e", "s", "s"],
  },
  iss: {
    letters: ["short-i", "s", "s"],
  },
  oss: {
    letters: ["intermediate-o", "s", "s"],
  },
  uss: {
    letters: ["short-u", "s", "s"],
  },
  nd: {
    letters: ["n", "d"],
  },
  nt: { letters: ["n", "t"] },
  and: {
    letters: ["short-a", "n", "d"],
  },
  ent: {
    letters: ["short-e", "n", "t"],
  },
  ond: {
    letters: ["short-o", "n", "d"],
  },
  unt: {
    letters: ["short-u", "n", "t"],
  },
  end: {
    letters: ["short-e", "n", "d"],
  },
  int: {
    letters: ["short-i", "n", "t"],
  },
  ind: {
    letters: ["long-i", "n", "d"],
  },
  ant: {
    letters: ["short-a", "n", "t"],
  },
  ash: {
    letters: ["short-a", "sh"],
  },
  ish: {
    letters: ["short-i", "sh"],
  },
  esh: {
    letters: ["short-e", "sh"],
  },
  ush: {
    letters: ["short-u", "sh"],
  },
  lt: {
    letters: ["l", "t"],
  },
  ilt: {
    letters: ["short-i", "l", "t"],
  },
  elt: {
    letters: ["short-e", "l", "t"],
  },
  ld: {
    letters: ["l", "d"],
  },
  old: {
    letters: ["long-o", "l", "d"],
  },
  olt: {
    letters: ["long-o", "l", "t"],
  },
  nk: {
    letters: ["nasal-n", "k"],
  },
  ank: {
    letters: ["short-a", "nasal-n", "k"],
  },
  unk: {
    letters: ["short-u", "nasal-n", "k"],
  },
  ink: {
    letters: ["short-i", "nasal-n", "k"],
  },
  ng: {
    letters: ["nasal-n", "silent-g"],
  },
  ang: {
    letters: ["short-a", "nasal-n", "silent-g"],
  },
  ung: {
    letters: ["short-u", "nasal-n", "silent-g"],
  },
  ong: {
    letters: ["intermediate-o", "nasal-n", "silent-g"],
  },
  ing: {
    letters: ["short-i", "nasal-n", "silent-g"],
  },
  mp: {
    letters: ["m", "p"],
  },
  amp: {
    letters: ["short-a", "m", "p"],
  },
  ump: {
    letters: ["short-u", "m", "p"],
  },
  imp: {
    letters: ["short-i", "m", "p"],
  },
  omp: {
    letters: ["short-o", "m", "p"],
  },
  emp: {
    letters: ["short-e", "m", "p"],
  },
  ck: {
    letters: ["silent-c", "k"],
  },
  ick: {
    letters: ["short-i", "silent-c", "k"],
  },
  ack: {
    letters: ["short-a", "silent-c", "k"],
  },
  eck: {
    letters: ["short-e", "silent-c", "k"],
  },
  ock: {
    letters: ["short-o", "silent-c", "k"],
  },
  uck: {
    letters: ["short-u", "silent-c", "k"],
  },
  ee: {
    letters: ["long-e", "silent-e"],
  },
  oot: {
    letters: ["double-o", "t"],
  },
  eed: {
    letters: ["long-e", "silent-e", "d"],
  },
  oof: {
    letters: ["double-o", "f"],
  },
  eem: {
    letters: ["long-e", "silent-e", "m"],
  },
  oon: {
    letters: ["double-o", "n"],
  },
  eef: {
    letters: ["long-e", "silent-e", "f"],
  },
  oop: {
    letters: ["double-o", "p"],
  },
  eek: {
    letters: ["long-e", "silent-e", "k"],
  },
  ool: {
    letters: ["double-o", "l"],
  },
  oom: {
    letters: ["double-o", "m"],
  },
  een: {
    letters: ["long-e", "silent-e", "n"],
  },
  eep: {
    letters: ["long-e", "silent-e", "p"],
  },
  lk: {
    letters: ["silent-l", "k"],
  },
  ff: {
    letters: ["f", "silent-f"],
  },
  alk: {
    letters: ["open-a", "silent-l", "k"],
  },
  uff: {
    letters: ["short-u", "f", "silent-f"],
  },
  ue: {
    letters: ["u-as-oo", "silent-e"],
  },
  oor: {
    letters: ["long-o", "silent-o", "r"],
  },
  eet: {
    letters: ["long-e", "silent-e", "t"],
  },
  eel: {
    letters: ["long-e", "silent-e", "l"],
  },
  ice: {
    letters: ["long-i", "soft-c", "silent-e"],
  },
  ace: {
    letters: ["long-a", "soft-c", "silent-e"],
  },
  age: {
    letters: ["long-a", "soft-g", "silent-e"],
  },
  ea: {
    letters: ["long-e", "silent-a"],
  },
  oa: {
    letters: ["long-o", "silent-a"],
  },
  ie: {
    letters: ["long-i", "silent-e"],
  },
  ead: {
    letters: ["long-e", "silent-a", "d"],
  },
  oaf: {
    letters: ["long-o", "silent-a", "f"],
  },
  ean: {
    letters: ["long-e", "silent-a", "n"],
  },
  oar: {
    letters: ["long-o", "silent-a", "r"],
  },
  oad: {
    letters: ["long-o", "silent-a", "d"],
  },
  eap: {
    letters: ["long-e", "silent-a", "p"],
  },
  eal: {
    letters: ["long-e", "silent-a", "l"],
  },
  oat: {
    letters: ["long-o", "silent-a", "t"],
  },
  ear: {
    letters: ["long-e", "silent-a", "r"],
  },
  eak: {
    letters: ["long-e", "silent-a", "k"],
  },
  eat: {
    letters: ["long-e", "silent-a", "t"],
  },
  eaf: {
    letters: ["long-e", "silent-a", "f"],
  },
  ar: {
    letters: ["ar"],
  },
  ard: {
    letters: ["ar", "d"],
  },
  ark: {
    letters: ["ar", "k"],
  },
  art: {
    letters: ["ar", "t"],
  },
  arp: {
    letters: ["ar", "p"],
  },
  arm: {
    letters: ["ar", "m"],
  },
  arn: {
    letters: ["ar", "n"],
  },
  oap: { letters: ["oa", "p"] },
  ail: { letters: ["ai", "l"] },
  aid: { letters: ["ai", "d"] },
  ain: { letters: ["ai", "n"] },
  ait: { letters: ["ai", "t"] },
};

export default stems;
