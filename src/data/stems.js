const stems = {
  at: {
    letters: ["short-a", "t"],
    image: "https://s7.gifyu.com/images/at.png",
  },
  an: {
    letters: ["short-a", "n"],
    image: "https://s7.gifyu.com/images/an.png",
  },
  in: {
    letters: ["short-i", "n"],
    image: "https://s7.gifyu.com/images/in5580defc5304a974.png",
  },
  it: {
    letters: ["short-i", "t"],
    image: "https://s7.gifyu.com/images/stem-it.png",
  },
  en: {
    letters: ["short-e", "n"],
    image: "https://s7.gifyu.com/images/en.png",
  },
  ot: {
    letters: ["short-o", "t"],
    image: "https://s7.gifyu.com/images/ot.png",
  },
  un: {
    letters: ["short-u", "n"],
    image: "https://s7.gifyu.com/images/un.png",
  },
  am: {
    letters: ["short-a", "m"],
    image: "https://s7.gifyu.com/images/am.png",
  },
  ad: {
    letters: ["short-a", "d"],
    image: "https://s7.gifyu.com/images/ad.png",
  },
  ed: {
    letters: ["short-e", "d"],
    image: "https://s7.gifyu.com/images/ed.png",
  },
  im: {
    letters: ["short-i", "m"],
    image: "https://s7.gifyu.com/images/im.png",
  },
  et: {
    letters: ["short-e", "t"],
    image: "https://s7.gifyu.com/images/et.png",
  },
  og: {
    letters: ["short-o", "g"],
    image: "https://s7.gifyu.com/images/og.png",
  },
  id: {
    letters: ["short-i", "d"],
    image: "https://s7.gifyu.com/images/id.png",
  },
  ax: {
    letters: ["short-a", "x"],
    image: "https://s7.gifyu.com/images/ax.png",
  },
  ox: {
    letters: ["short-o", "x"],
    image: "https://s7.gifyu.com/images/ox.png",
  },
  ix: {
    letters: ["short-i", "x"],
    image: "https://s7.gifyu.com/images/ix.png",
  },
  ex: {
    letters: ["short-e", "x"],
    image: "https://s7.gifyu.com/images/ex.png",
  },
  all: {
    letters: ["open-a", "l", "l"],
    image: "https://s7.gifyu.com/images/all.png",
  },
  ill: {
    letters: ["short-i", "l", "l"],
    image: "https://s7.gifyu.com/images/ill.png",
  },
  ell: {
    letters: ["short-e", "l", "l"],
    image: "https://s7.gifyu.com/images/ell.png",
  },
  oll: {
    letters: ["short-o", "l", "l"],
    image: "https://s7.gifyu.com/images/oll.png",
  },
  ig: {
    letters: ["short-i", "g"],
    image: "https://s7.gifyu.com/images/ig.png",
  },
  ag: {
    letters: ["short-a", "g"],
    image: "https://s7.gifyu.com/images/ag249f84a847f77e1c.png",
  },
  uzz: {
    letters: ["short-u", "z", "z"],
    image: "https://s7.gifyu.com/images/uzz.png",
  },
  ib: {
    letters: ["short-i", "b"],
    image: "https://s7.gifyu.com/images/ib.png",
  },
  ab: {
    letters: ["short-a", "b"],
    image: "https://s7.gifyu.com/images/stem-ab.png",
  },
  eb: {
    letters: ["short-e", "b"],
    image: "https://s7.gifyu.com/images/stem-eb.png",
  },
  ug: {
    letters: ["short-u", "g"],
    image: "https://s7.gifyu.com/images/stem-ug.png",
  },
  ob: {
    letters: ["short-o", "b"],
    image: "https://s7.gifyu.com/images/stem-ob.png",
  },
  eg: {
    letters: ["short-e", "g"],
    image: "https://s7.gifyu.com/images/stem-eg.png",
  },
  em: {
    letters: ["short-e", "m"],
    image: "https://s7.gifyu.com/images/stem-em.png",
  },
  od: {
    letters: ["short-o", "d"],
    image: "https://s7.gifyu.com/images/stem-od.png",
  },
  ud: {
    letters: ["short-u", "d"],
    image: "https://s7.gifyu.com/images/stem-ud.png",
  },
  om: {
    letters: ["short-o", "m"],
    image: "https://s7.gifyu.com/images/stem-om.png",
  },
  ub: {
    letters: ["short-u", "b"],
    image: "https://s7.gifyu.com/images/stem-ub.png",
  },
  ap: {
    letters: ["short-a", "p"],
    image: "https://s7.gifyu.com/images/stem-ap.png",
  },
  ip: {
    letters: ["short-i", "p"],
    image: "https://s7.gifyu.com/images/stem-ip.png",
  },
  op: {
    letters: ["short-o", "p"],
    image: "https://s7.gifyu.com/images/stem-op.png",
  },
  um: {
    letters: ["short-u", "m"],
    image: "https://s7.gifyu.com/images/stem-um.png",
  },
  sp: {
    letters: ["s", "p"],
    image: "https://s7.gifyu.com/images/sp.png",
  },
  st: {
    letters: ["s", "t"],
    image: "https://s7.gifyu.com/images/st.png",
  },
  ane: {
    letters: ["long-a", "n", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ane.png",
  },
  ame: {
    letters: ["long-a", "m", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ame.png",
  },
  ale: {
    letters: ["long-a", "l", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ale.png",
  },
  ake: {
    letters: ["long-a", "k", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ake.png",
  },
  ade: {
    letters: ["long-a", "d", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ade.png",
  },
  pl: {
    letters: ["p", "l"],
    image: "https://s7.gifyu.com/images/stem-pl.png",
  },
  sl: {
    letters: ["s", "l"],
    image: "https://s7.gifyu.com/images/stem-sl.png",
  },
  fl: {
    letters: ["f", "l"],
    image: "https://s7.gifyu.com/images/stem-fl.png",
  },
  cl: {
    letters: ["hard-c", "l"],
    image: "https://s7.gifyu.com/images/stem-cl.png",
  },
  bl: {
    letters: ["b", "l"],
    image: "https://s7.gifyu.com/images/stem-bl.png",
  },
  gl: {
    letters: ["g", "l"],
    image: "https://s7.gifyu.com/images/stem-gl.png",
  },
  ide: {
    letters: ["long-i", "d", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ide.png",
  },
  ine: {
    letters: ["long-i", "n", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ine.png",
  },
  ile: {
    letters: ["long-i", "l", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ile.png",
  },
  ube: {
    letters: ["long-u", "b", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ube.png",
  },
  une: {
    letters: ["long-u", "n", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-une.png",
  },
  ay: {
    letters: ["long-a", "silent-y"],
    image: "https://s7.gifyu.com/images/stem-ay.png",
  },
  cr: {
    letters: ["hard-c", "r"],
    image: "https://s7.gifyu.com/images/stem-cr.png",
  },
  gr: {
    letters: ["g", "r"],
    image: "https://s7.gifyu.com/images/stem-gr.png",
  },
  dr: {
    letters: ["d", "r"],
    image: "https://s7.gifyu.com/images/stem-dr.png",
  },
  fr: {
    letters: ["f", "r"],
    image: "https://s7.gifyu.com/images/stem-fr.png",
  },
  tr: {
    letters: ["t", "r"],
    image: "https://s7.gifyu.com/images/stem-tr.png",
  },
  pr: {
    letters: ["p", "r"],
    image: "https://s7.gifyu.com/images/stem-pr.png",
  },
  oke: {
    letters: ["long-o", "k", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-oke.png",
  },
  ave: {
    letters: ["long-a", "v", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ave.png",
  },
  ipe: {
    letters: ["long-i", "p", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ipe.png",
  },
  ape: {
    letters: ["long-a", "p", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ape.png",
  },
  ole: {
    letters: ["long-o", "l", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ole.png",
  },
  ate: {
    letters: ["long-a", "t", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ate.png",
  },
  ife: {
    letters: ["long-i", "f", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ife.png",
  },
  one: {
    letters: ["long-o", "n", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-one.png",
  },
  ime: {
    letters: ["long-i", "m", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ime.png",
  },
  afe: {
    letters: ["long-a", "f", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-afe.png",
  },
  ope: {
    letters: ["long-o", "p", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ope.png",
  },
  ome: {
    letters: ["long-o", "m", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ome.png",
  },
  abe: {
    letters: ["long-a", "b", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-abe.png",
  },
  ute: {
    letters: ["long-u", "t", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ute.png",
  },
  obe: {
    letters: ["long-o", "b", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-obe.png",
  },
  ite: {
    letters: ["long-i", "t", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ite.png",
  },
  ose: {
    letters: ["long-o", "s", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ose.png",
  },
  "ose-hard": {
    value: "ose",
    letters: ["long-o", "hard-s", "silent-e"],
    image: "https://s8.gifyu.com/images/stem-ose.png",
  },
  ode: {
    letters: ["long-o", "d", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ode.png",
  },
  ive: {
    letters: ["long-i", "v", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ive.png",
  },
  ove: {
    letters: ["long-o", "v", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ove.png",
  },
  sk: {
    letters: ["s", "k"],
    image: "https://s7.gifyu.com/images/stem-sk.png",
  },
  sc: {
    letters: ["s", "hard-c"],
    image: "https://s7.gifyu.com/images/stem-sc.png",
  },
  sw: {
    letters: ["s", "w"],
    image: "https://s7.gifyu.com/images/stem-sw.png",
  },
  sm: {
    letters: ["s", "m"],
    image: "https://s7.gifyu.com/images/stem-sm.png",
  },
  sn: {
    letters: ["s", "n"],
    image: "https://s7.gifyu.com/images/stem-sn.png",
  },
  br: {
    letters: ["b", "r"],
    image: "https://s7.gifyu.com/images/stem-br.png",
  },
  str: {
    letters: ["s", "t", "r"],
    image: "https://s7.gifyu.com/images/stem-str.png",
  },
  spr: {
    letters: ["s", "p", "r"],
    image: "https://s8.gifyu.com/images/stem-spr.png",
  },
  shr: {
    letters: ["sh", "r"],
    image: "https://s8.gifyu.com/images/stem-shr.png",
  },
  spl: {
    letters: ["s", "p", "l"],
    image: "https://s8.gifyu.com/images/stem-spl.png",
  },
  scr: {
    letters: ["s", "hard-c", "r"],
    image: "https://s8.gifyu.com/images/stem-scr.png",
  },
  ike: {
    letters: ["long-i", "k", "silent-e"],
    image: "https://s8.gifyu.com/images/stem-ike.png",
  },
  ost: {
    letters: ["intermediate-o", "s", "t"],
    image: "https://s1.gifyu.com/images/stem-ost.png",
  },
  ist: {
    letters: ["short-i", "s", "t"],
    image: "https://s1.gifyu.com/images/stem-ist.png",
  },
  est: {
    letters: ["short-e", "s", "t"],
    image: "https://s1.gifyu.com/images/stem-est.png",
  },
  ust: {
    letters: ["short-u", "s", "t"],
    image: "https://s1.gifyu.com/images/stem-ust.png",
  },
  tw: {
    letters: ["t", "w"],
    image: "https://s1.gifyu.com/images/stem-tw.png",
  },
  ess: {
    letters: ["short-e", "s", "s"],
    image: "https://s1.gifyu.com/images/stem-ess.png",
  },
  iss: {
    letters: ["short-i", "s", "s"],
    image: "https://s1.gifyu.com/images/stem-iss.png",
  },
  oss: {
    letters: ["intermediate-o", "s", "s"],
    image: "https://s1.gifyu.com/images/stem-oss.png",
  },
  uss: {
    letters: ["short-u", "s", "s"],
    image: "https://s1.gifyu.com/images/stem-uss.png",
  },
  nd: {
    letters: ["n", "d"],
    image: "https://s8.gifyu.com/images/stem-nd.png",
  },
  nt: { letters: ["n", "t"], image: "https://s8.gifyu.com/images/stem-nt.png" },
  and: {
    letters: ["short-a", "n", "d"],
    image: "https://s8.gifyu.com/images/stem-and.png",
  },
  ent: {
    letters: ["short-e", "n", "t"],
    image: "https://s8.gifyu.com/images/stem-ent.png",
  },
  ond: {
    letters: ["short-o", "n", "d"],
    image: "https://s8.gifyu.com/images/stem-ond.png",
  },
  unt: {
    letters: ["short-u", "n", "t"],
    image: "https://s8.gifyu.com/images/stem-unt.png",
  },
  end: {
    letters: ["short-e", "n", "d"],
    image: "https://s8.gifyu.com/images/stem-end.png",
  },
  int: {
    letters: ["short-i", "n", "t"],
    image: "https://s8.gifyu.com/images/stem-int.png",
  },
  ind: {
    letters: ["long-i", "n", "d"],
    image: "https://s8.gifyu.com/images/stem-ind.png",
  },
  ant: {
    letters: ["short-a", "n", "t"],
    image: "https://s8.gifyu.com/images/stem-ant.png",
  },
  ash: {
    letters: ["short-a", "sh"],
    image: "https://s8.gifyu.com/images/stem-ash.png",
  },
  ish: {
    letters: ["short-i", "sh"],
    image: "https://s8.gifyu.com/images/stem-ish.png",
  },
  esh: {
    letters: ["short-e", "sh"],
    image: "https://s8.gifyu.com/images/stem-esh.png",
  },
  ush: {
    letters: ["short-u", "sh"],
    image: "https://s8.gifyu.com/images/stem-ush.png",
  },
  lt: {
    letters: ["l", "t"],
    image: "https://s8.gifyu.com/images/stem-lt.png",
  },
  ilt: {
    letters: ["short-i", "l", "t"],
    image: "https://s8.gifyu.com/images/stem-ilt.png",
  },
  elt: {
    letters: ["short-e", "l", "t"],
    image: "https://s8.gifyu.com/images/stem-elt.png",
  },
  ld: {
    letters: ["l", "d"],
    image: "https://s8.gifyu.com/images/stem-ld.png",
  },
  old: {
    letters: ["long-o", "l", "d"],
    image: "https://s8.gifyu.com/images/stem-old.png",
  },
  olt: {
    letters: ["long-o", "l", "t"],
    image: "https://s8.gifyu.com/images/stem-olt.png",
  },
  nk: {
    letters: ["nasal-n", "k"],
    image: "https://s8.gifyu.com/images/stem-nk.png",
  },
  ank: {
    letters: ["short-a", "nasal-n", "k"],
    image: "https://s8.gifyu.com/images/stem-ank.png",
  },
  unk: {
    letters: ["short-u", "nasal-n", "k"],
    image: "https://s8.gifyu.com/images/stem-unk.png",
  },
  ink: {
    letters: ["short-i", "nasal-n", "k"],
    image: "https://s8.gifyu.com/images/stem-ink.png",
  },
  ng: {
    letters: ["nasal-n", "silent-g"],
    image: "https://s8.gifyu.com/images/stem-ng.png",
  },
  ang: {
    letters: ["short-a", "nasal-n", "silent-g"],
    image: "https://s8.gifyu.com/images/stem-ang.png",
  },
  ung: {
    letters: ["short-u", "nasal-n", "silent-g"],
    image: "https://s8.gifyu.com/images/stem-ung.png",
  },
  ong: {
    letters: ["intermediate-o", "nasal-n", "silent-g"],
    image: "https://s8.gifyu.com/images/stem-ong.png",
  },
  ing: {
    letters: ["short-i", "nasal-n", "silent-g"],
    image: "https://s8.gifyu.com/images/stem-ing.png",
  },
  mp: {
    letters: ["m", "p"],
    image: "https://s8.gifyu.com/images/stem-mp.png",
  },
  amp: {
    letters: ["short-a", "m", "p"],
    image: "https://s8.gifyu.com/images/stem-amp.png",
  },
  ump: {
    letters: ["short-u", "m", "p"],
    image: "https://s8.gifyu.com/images/stem-ump.png",
  },
  imp: {
    letters: ["short-i", "m", "p"],
    image: "https://s8.gifyu.com/images/stem-imp.png",
  },
  omp: {
    letters: ["short-o", "m", "p"],
    image: "https://s8.gifyu.com/images/stem-omp.png",
  },
  emp: {
    letters: ["short-e", "m", "p"],
    image: "https://s8.gifyu.com/images/stem-emp.png",
  },
};

export default stems;
