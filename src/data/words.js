const words = {
  at: { letters: ["short-a", "t"], sentence: "I sing 'at' home." },
  fat: {
    letters: ["f", "short-a", "t"],
    sentence: "The meat has 'fat' on it.",
  },
  Nat: { letters: ["n", "short-a", "t"], sentence: "'Nat' goes to the park." },
  an: {
    letters: ["short-a", "n"],
    sentence: "I want to eat 'an' ice cream cone.",
  },
  fan: {
    letters: ["f", "short-a", "n"],
    sentence: "I will cool you with my 'fan'.",
  },
  tan: {
    letters: ["t", "short-a", "n"],
    sentence: "The color of the couch is 'tan'.",
  },
  ant: {
    letters: ["short-a", "n", "t"],
    sentence: "The 'ant' is a small insect.",
  },
  in: { letters: ["short-i", "n"], sentence: "He put the 'toy' in the box." },
  sit: { letters: ["s", "short-i", "t"], sentence: "'Sit' on the chair." },
  sits: {
    letters: ["s", "short-i", "t", "s"],
    sentence: "He 'sits' on the chair.",
  },
  mat: { letters: ["m", "short-a", "t"], sentence: "The cat is on the 'mat'." },
  mats: {
    letters: ["m", "short-a", "t", "s"],
    sentence: "The cats sit on the 'mats'.",
  },
  it: { letters: ["short-i", "t"], sentence: "Pick 'it' up." },
  its: { letters: ["short-i", "t", "s"], sentence: "Where is 'its' mother?" },
  tin: { letters: ["t", "short-i", "n"], sentence: "'Tin' is a useful metal." },
  can: {
    letters: ["hard-c", "short-a", "n"],
    sentence: "A 'can' stores food well.",
  },
  pan: {
    letters: ["p", "short-a", "n"],
    sentence: "A 'pan' is used to cook food.",
  },
  cans: {
    letters: ["hard-c", "short-a", "n", "hard-s"],
    sentence: "Two 'cans' can be attached by string to make a telephone.",
  },
  fin: { letters: ["f", "short-i", "n"], sentence: "A shark has a 'fin'." },
  pin: {
    letters: ["p", "short-i", "n"],
    sentence: "You should use a safety 'pin'.",
  },
  pins: {
    letters: ["p", "short-i", "n", "hard-s"],
    sentence: "He stores 'pins' in his pin-cushion.",
  },
  fit: {
    letters: ["f", "short-i", "t"],
    sentence: "Will it 'fit' in the box?",
  },
  hit: {
    letters: ["h", "short-i", "t"],
    sentence: "Do not 'hit' your brother.",
  },
  hits: {
    letters: ["h", "short-i", "t", "s"],
    sentence: "She 'hits' the high notes when she sings.",
  },
  hen: { letters: ["h", "short-e", "n"], sentence: "A 'hen' lays eggs." },
  ten: {
    letters: ["t", "short-e", "n"],
    sentence: "I received 'ten' new books.",
  },
  hens: {
    letters: ["h", "short-e", "n", "hard-s"],
    sentence: "The 'hens' have a large henhouse.",
  },
  is: { letters: ["short-i", "hard-s"], sentence: "She 'is' very tall." },
  his: {
    letters: ["h", "short-i", "hard-s"],
    sentence: "'His' father is kind.",
  },
  fins: {
    letters: ["f", "short-i", "n", "hard-s"],
    sentence: "Many fish have 'fins'.",
  },
  up: {
    letters: ["short-u", "p"],
    sentence: "Look 'up' at the sky.",
  },
  cup: {
    letters: ["hard-c", "short-u", "p"],
    sentence: "Use a clean 'cup'.",
  },
  cups: {
    letters: ["hard-c", "short-u", "p", "s"],
    sentence: "We have no clean 'cups'.",
  },
  cat: {
    letters: ["hard-c", "short-a", "t"],
    sentence: "The 'cat' caught a rat.",
  },
  rat: {
    letters: ["r", "short-a", "t"],
    sentence: "I have a pet 'rat'.",
  },
  cats: {
    letters: ["hard-c", "short-a", "t", "s"],
    sentence: "'Cats' catch mice.",
  },
  am: {
    letters: ["short-a", "m"],
    sentence: "I 'am' happy today.",
  },
  ham: {
    letters: ["h", "short-a", "m"],
    sentence: "I would like a 'ham' sandwhich.",
  },
  hams: {
    letters: ["h", "short-a", "m", "hard-s"],
    sentence: "The store has some nice 'hams' for sale.",
  },
  pot: {
    letters: ["p", "short-o", "t"],
    sentence: "He uses an iron 'pot' for the soup.",
  },
  not: {
    letters: ["n", "short-o", "t"],
    sentence: "I will 'not' steal.",
  },
  pots: {
    letters: ["p", "short-o", "t", "s"],
    sentence: "We will wash all the 'pots'.",
  },
  fun: {
    letters: ["f", "short-u", "n"],
    sentence: "We have 'fun' together.",
  },
  sun: {
    letters: ["s", "short-u", "n"],
    sentence: "I wear sunglasses to protect my eyes from the 'sun'.",
  },
  suns: {
    letters: ["s", "short-u", "n", "hard-s"],
    sentence: "The snake 'suns' itself on the rock.",
  },
  as: {
    letters: ["short-a", "hard-s"],
    sentence: "It is 'as' sweet 'as' honey.",
  },
  has: {
    letters: ["h", "short-a", "hard-s"],
    sentence: "He 'has' a cat.",
  },
  jam: {
    letters: ["j", "short-a", "m"],
    sentence: "I like 'jam' on my toast.",
  },
  Sam: {
    letters: ["s", "short-a", "m"],
    sentence: "'Sam' loves dancing.",
  },
  bad: {
    letters: ["b", "short-a", "d"],
    sentence: "I am having a 'bad' day.",
  },
  Dad: {
    letters: ["d", "short-a", "d"],
    sentence: "My 'dad' loves to cook.",
  },
  bed: {
    letters: ["b", "short-e", "d"],
    sentence: "I go to 'bed' early.",
  },
  Ned: {
    letters: ["n", "short-e", "d"],
    sentence: "I'm going to the party with 'Ned'.",
  },
  Jim: {
    letters: ["j", "short-i", "m"],
    sentence: "'Jim' went up the hill.",
  },
  dim: {
    letters: ["d", "short-i", "m"],
    sentence: "Will you 'dim' the light?",
  },
  gun: {
    letters: ["g", "short-u", "n"],
    sentence: "The criminal had a 'gun'.",
  },
  run: {
    letters: ["r", "short-u", "n"],
    sentence: "The criminal is on the 'run'.",
  },
  get: {
    letters: ["g", "short-e", "t"],
    sentence: "He hopes he will 'get' a puppy for his birthday.",
  },
  let: {
    letters: ["l", "short-e", "t"],
    sentence: "They will 'let' her play with them.",
  },
  hog: {
    letters: ["h", "short-o", "g"],
    sentence: "She has a 'hog' on her farm.",
  },
  bog: {
    letters: ["b", "short-o", "g"],
    sentence: "Be careful walking in the 'bog'.",
  },
  kid: {
    letters: ["k", "short-i", "d"],
    sentence: "The goat has a 'kid'.",
  },
  lid: {
    letters: ["l", "short-i", "d"],
    sentence: "The pot has a 'lid'.",
  },
  kit: {
    letters: ["k", "short-i", "t"],
    sentence: "I just bought a new craft 'kit'.",
  },
  lit: {
    letters: ["l", "short-i", "t"],
    sentence: "I 'lit' the lamp.",
  },
  van: {
    letters: ["v", "short-a", "n"],
    sentence: "Let's go in the 'van'.",
  },
  man: {
    letters: ["m", "short-a", "n"],
    sentence: "The 'man' has a tall hat.",
  },
  vans: {
    letters: ["v", "short-a", "n", "hard-s"],
    sentence: "The school has two 'vans'.",
  },
  Tim: {
    letters: ["t", "short-i", "m"],
    sentence: "'Tim' has a pet cat.",
  },
  vim: {
    letters: ["v", "short-i", "m"],
    sentence: "She approached the task with 'vim' and vigor.",
  },
  dims: {
    letters: ["d", "short-i", "m", "hard-s"],
    sentence: "The light is 'dim'.",
  },
  wet: {
    letters: ["w", "short-e", "t"],
    sentence: "The clothes are 'wet'.",
  },
  set: {
    letters: ["s", "short-e", "t"],
    sentence: "I just bought a new chess 'set'.",
  },
  sets: {
    letters: ["s", "short-e", "t", "s"],
    sentence: "We should get home before the sun 'sets'.",
  },
  yet: {
    letters: ["hard-y", "short-e", "t"],
    sentence: "I don't want to go home 'yet'.",
  },
  pet: {
    letters: ["p", "short-e", "t"],
    sentence: "I want a new 'pet'.",
  },
  pets: {
    letters: ["p", "short-e", "t", "s"],
    sentence: "She 'pets' the cat.",
  },
  win: {
    letters: ["w", "short-i", "n"],
    sentence: "I will win when we play chess.",
  },
  bin: {
    letters: ["b", "short-i", "n"],
    sentence: "Throw the trash in the bin.",
  },
  wins: {
    letters: ["w", "short-i", "n", "hard-s"],
    sentence: "My mother always 'wins' at Scrabble.",
  },
};

export default words;
