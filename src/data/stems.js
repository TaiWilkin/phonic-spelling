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
    letters: ["long-o", "hard-s", "silent-e"],
    image: "https://s7.gifyu.com/images/stem-ose.png",
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
};

export default stems;
