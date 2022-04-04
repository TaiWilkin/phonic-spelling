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
  ax: {
    letters: ["short-a", "x"],
    sentence: "They cut down the oak tree with an 'ax'.",
  },
  Max: {
    letters: ["m", "short-a", "x"],
    sentence: "Max is kind to small animals.",
  },
  vex: {
    letters: ["v", "short-e", "x"],
    sentence: "Don't 'vex' the king when he is in a temper.",
  },
  Rex: {
    letters: ["r", "short-e", "x"],
    sentence: "I named my dog 'Rex' because it means king.",
  },
  fix: {
    letters: ["f", "short-i", "x"],
    sentence: "I try to 'fix' my mistakes.",
  },
  mix: {
    letters: ["m", "short-i", "x"],
    sentence: "I like to 'mix' the batter.",
  },
  fox: {
    letters: ["f", "short-o", "x"],
    sentence: "The child tamed the wild 'fox'.",
  },
  box: {
    letters: ["b", "short-o", "x"],
    sentence: "Hurry and open the 'box'!",
  },
  lax: {
    letters: ["l", "short-a", "x"],
    sentence: "The rules were unusually 'lax'.",
  },
  wax: {
    letters: ["w", "short-a", "x"],
    sentence: "Candles are made of 'wax'.",
  },
  call: {
    letters: ["hard-c", "open-a", "l", "l"],
    sentence: "'Call' the emergency number if you are in danger.",
  },
  all: {
    letters: ["open-a", "l", "l"],
    sentence: "We 'all' ate supper together.",
  },
  calls: {
    letters: ["hard-c", "open-a", "l", "l", "hard-s"],
    sentence: "He 'calls' his children in for dinner.",
  },
  sell: {
    letters: ["s", "short-e", "l", "l"],
    sentence: "She will sell seashells.",
  },
  fell: {
    letters: ["f", "short-e", "l", "l"],
    sentence: "She fell and hurt her knee.",
  },
  fells: {
    letters: ["f", "short-e", "l", "l", "hard-s"],
    sentence: "He fells a dozen trees in a day.",
  },
  rill: {
    letters: ["r", "short-i", "l", "l"],
    sentence: "A rill is a small stream.",
  },
  Bill: {
    letters: ["b", "short-i", "l", "l"],
    sentence: "Bill has a new coat.",
  },
  rills: {
    letters: ["r", "short-i", "l", "l", "hard-s"],
    sentence: "They took a hike to see the mountain rills.",
  },
  doll: {
    letters: ["d", "short-o", "l", "l"],
    sentence: "My doll has black hair.",
  },
  loll: {
    letters: ["l", "short-o", "l", "l"],
    sentence: "The cats like to loll on the sofa.",
  },
  dolls: {
    letters: ["d", "short-o", "l", "l", "hard-s"],
    sentence: "The dolls have a dollhouse.",
  },
  ball: {
    letters: ["b", "open-a", "l", "l"],
    sentence: "The old ball has a hole in it.",
  },
  tall: {
    letters: ["t", "open-a", "l", "l"],
    sentence: "The tree is very tall.",
  },
  balls: {
    letters: ["b", "open-a", "l", "l", "hard-s"],
    sentence: "The ballpit is full of balls.",
  },
  big: {
    letters: ["b", "short-i", "g"],
    sentence: "The dog wanted the big bone.",
  },
  fig: {
    letters: ["f", "short-i", "g"],
    sentence: "A fig is a kind of fruit.",
  },
  pill: {
    letters: ["p", "short-i", "l", "l"],
    sentence: "The doctor prescribed a pill.",
  },
  quill: {
    letters: ["qu", "short-i", "l", "l"],
    sentence: "I would like to learn to write with a quill.",
  },
  bag: {
    letters: ["b", "short-a", "g"],
    sentence: "He brought the toys in his bag.",
  },
  rag: {
    letters: ["r", "short-a", "g"],
    sentence: "Clean the spill up with a rag.",
  },
  buzz: {
    letters: ["b", "short-u", "z", "z"],
    sentence: "The bees all buzz loudly.",
  },
  fuzz: {
    letters: ["f", "short-u", "z", "z"],
  },
  rib: {
    letters: ["r", "short-i", "b"],
  },
  bib: {
    letters: ["b", "short-i", "b"],
  },
  Nan: {
    letters: ["n", "short-a", "n"],
  },
  pup: {
    letters: ["p", "short-u", "p"],
  },
  led: {
    letters: ["l", "short-e", "d"],
    sentence: "She led the dog with the leash.",
  },
  tax: {
    letters: ["t", "short-a", "x"],
    sentence: "The tax paid for new roads to be built.",
  },
  ran: {
    letters: ["r", "short-a", "n"],
    sentence: "They ran to get out of the rain.",
  },
  him: {
    letters: ["h", "short-i", "m"],
    sentence: "Did you ask him yet?",
  },
  fall: {
    letters: ["f", "open-a", "l", "l"],
    sentence: "Fall is my favorite season.",
  },
  got: {
    letters: ["g", "short-o", "t"],
    sentence: "She led the dog with the leash.",
  },
  met: {
    letters: ["m", "short-e", "t"],
    sentence: "I met you at the park yesterday.",
  },
  bell: {
    letters: ["b", "short-e", "l", "l"],
    sentence: "Ring a bell when class starts.",
  },
  pit: {
    letters: ["p", "short-i", "t"],
    sentence: "The coal miner went down in the pit.",
  },
  bun: {
    letters: ["b", "short-u", "n"],
    sentence: "Put your hair in a bun.",
  },
  did: {
    letters: ["d", "short-i", "d"],
  },
  quit: {
    letters: ["qu", "short-i", "t"],
  },
  men: {
    letters: ["m", "short-e", "n"],
  },
  had: {
    letters: ["h", "short-a", "d"],
  },
  jog: {
    letters: ["j", "short-o", "g"],
  },
  yam: {
    letters: ["hard-y", "short-a", "m"],
  },
  cab: {
    letters: ["hard-c", "short-a", "b"],
    sentence: "We took a cab to the museum.",
  },
  web: {
    letters: ["w", "short-e", "b"],
    sentence: "The spider built a web.",
  },
  rug: {
    letters: ["r", "short-u", "g"],
    sentence: "The kitten is asleep on the rug.",
  },
  Rob: {
    letters: ["r", "short-o", "b"],
    sentence: "Rob did not rob the bank.",
  },
  beg: {
    letters: ["b", "short-e", "g"],
    sentence: "My brother taught the puppy to beg for treats.",
  },
  nut: {
    letters: ["n", "short-u", "t"],
    sentence: "A peanut is not a true nut.",
  },
  hem: {
    letters: ["h", "short-e", "m"],
    sentence: "I will hem my pants tonight.",
  },
  hod: {
    letters: ["h", "short-o", "d"],
    sentence: "A hod is a kind of tray used to carry bricks and mortar.",
  },
  mud: {
    letters: ["m", "short-u", "d"],
    sentence: "Clean the mud off your boots.",
  },
  Tom: {
    letters: ["t", "short-o", "m"],
    sentence: "Tom and Jerry debuted in 1940.",
  },
  tub: {
    letters: ["t", "short-u", "b"],
    sentence: "Have you ever used a clawfoot tub?",
  },
  tap: {
    letters: ["t", "short-a", "p"],
    sentence: "The hot-water tap in the sink is broken.",
  },
  tip: {
    letters: ["t", "short-i", "p"],
    sentence: "He sharpened his pencil to a fine tip.",
  },
  hop: {
    letters: ["h", "short-o", "p"],
    sentence: "How high can you hop?",
  },
  sum: {
    letters: ["s", "short-u", "m"],
    sentence: "What is the sum of one and two?",
  },
  so: {
    letters: ["s", "long-o"],
    sentence:
      "She did her homework early so she could go out with her friends.",
  },
  go: {
    letters: ["g", "long-o"],
  },
  no: {
    letters: ["n", "long-o"],
    sentence: "They said no when I asked.",
  },
  be: {
    letters: ["b", "long-e"],
    sentence: "I will be home soon.",
  },
  me: {
    letters: ["m", "long-e"],
  },
  we: {
    letters: ["w", "long-e"],
  },
  he: {
    letters: ["h", "long-e"],
  },
  the: {
    letters: ["voiced-th", "long-e"],
  },
  she: {
    letters: ["sh", "long-e"],
  },
  spill: {
    letters: ["s", "p", "short-i", "l", "l"],
  },
  still: {
    letters: ["s", "t", "short-i", "l", "l"],
  },
  chill: {
    letters: ["ch", "short-i", "l", "l"],
  },
  chip: {
    letters: ["ch", "short-i", "p"],
  },
  ship: {
    letters: ["sh", "short-i", "p"],
  },
  shin: {
    letters: ["sh", "short-i", "n"],
  },
  fade: {
    letters: ["f", "long-a", "d", "silent-e"],
  },
  made: {
    letters: ["m", "long-a", "d", "silent-e"],
  },
  wade: {
    letters: ["w", "long-a", "d", "silent-e"],
  },
  wades: {
    letters: ["w", "long-a", "d", "silent-e", "hard-s"],
  },
  cake: {
    letters: ["hard-c", "long-a", "k", "silent-e"],
  },
  make: {
    letters: ["m", "long-a", "k", "silent-e"],
  },
  rake: {
    letters: ["r", "long-a", "k", "silent-e"],
  },
  cakes: {
    letters: ["hard-c", "long-a", "k", "silent-e", "s"],
  },
  pale: {
    letters: ["p", "long-a", "l", "silent-e"],
  },
  sale: {
    letters: ["s", "long-a", "l", "silent-e"],
  },
  gale: {
    letters: ["g", "long-a", "l", "silent-e"],
  },
  sales: {
    letters: ["s", "long-a", "l", "silent-e", "hard-s"],
  },
  lame: {
    letters: ["l", "long-a", "m", "silent-e"],
  },
  tame: {
    letters: ["t", "long-a", "m", "silent-e"],
  },
  name: {
    letters: ["n", "long-a", "m", "silent-e"],
  },
  names: {
    letters: ["n", "long-a", "m", "silent-e", "hard-s"],
  },
  cane: {
    letters: ["hard-c", "long-a", "n", "silent-e"],
  },
  lane: {
    letters: ["l", "long-a", "n", "silent-e"],
  },
  mane: {
    letters: ["m", "long-a", "n", "silent-e"],
  },
  canes: {
    letters: ["hard-c", "long-a", "n", "silent-e", "hard-s"],
  },
};

export default words;
