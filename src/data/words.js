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
    sentence: "She turned pale as a ghost.",
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
  plan: {
    letters: ["p", "l", "short-a", "n"],
  },
  plum: {
    letters: ["p", "l", "short-u", "m"],
  },
  plug: {
    letters: ["p", "l", "short-u", "g"],
  },
  sled: {
    letters: ["s", "l", "short-e", "d"],
  },
  slim: {
    letters: ["s", "l", "short-i", "m"],
  },
  slab: {
    letters: ["s", "l", "short-a", "b"],
  },
  flat: {
    letters: ["f", "l", "short-a", "t"],
  },
  flax: {
    letters: ["f", "l", "short-a", "x"],
  },
  flag: {
    letters: ["f", "l", "short-a", "g"],
  },
  club: {
    letters: ["hard-c", "l", "short-u", "b"],
  },
  clam: {
    letters: ["hard-c", "l", "short-a", "m"],
  },
  clap: {
    letters: ["hard-c", "l", "short-a", "p"],
  },
  blot: {
    letters: ["b", "l", "short-o", "t"],
  },
  glad: {
    letters: ["g", "l", "short-a", "d"],
  },
  slit: {
    letters: ["s", "l", "short-i", "t"],
  },
  hide: {
    letters: ["h", "long-i", "d", "silent-e"],
  },
  side: {
    letters: ["s", "long-i", "d", "silent-e"],
  },
  wide: {
    letters: ["w", "long-i", "d", "silent-e"],
  },
  hides: {
    letters: ["h", "long-i", "d", "silent-e", "hard-s"],
  },
  line: {
    letters: ["l", "long-i", "n", "silent-e"],
  },
  mine: {
    letters: ["m", "long-i", "n", "silent-e"],
  },
  wine: {
    letters: ["w", "long-i", "n", "silent-e"],
  },
  lines: {
    letters: ["l", "long-i", "n", "silent-e", "hard-s"],
  },
  file: {
    letters: ["f", "long-i", "l", "silent-e"],
  },
  pile: {
    letters: ["p", "long-i", "l", "silent-e"],
  },
  mile: {
    letters: ["m", "long-i", "l", "silent-e"],
  },
  miles: {
    letters: ["m", "long-i", "l", "silent-e", "hard-s"],
  },
  tube: {
    letters: ["t", "long-u", "b", "silent-e"],
  },
  cube: {
    letters: ["hard-c", "long-u", "b", "silent-e"],
  },
  tune: {
    letters: ["t", "long-u", "n", "silent-e"],
  },
  tunes: {
    letters: ["t", "long-u", "n", "silent-e", "hard-s"],
  },
  vine: {
    letters: ["v", "long-i", "n", "silent-e"],
  },
  ride: {
    letters: ["r", "long-i", "d", "silent-e"],
  },
  nine: {
    letters: ["n", "long-i", "n", "silent-e"],
  },
  rides: {
    letters: ["r", "long-i", "d", "silent-e", "hard-s"],
  },
  by: {
    letters: ["b", "long-y"],
    sentence: "This book was written by Ben Franklin.",
  },
  my: {
    letters: ["m", "long-y"],
  },
  cry: {
    letters: ["hard-c", "r", "long-y"],
  },
  may: {
    letters: ["m", "long-a", "silent-y"],
  },
  ray: {
    letters: ["r", "long-a", "silent-y"],
  },
  gray: {
    letters: ["g", "r", "long-a", "silent-y"],
  },
  rays: {
    letters: ["r", "long-a", "silent-y", "hard-s"],
  },
  way: {
    letters: ["w", "long-a", "silent-y"],
  },
  pry: {
    letters: ["p", "r", "long-y"],
  },
  pray: {
    letters: ["p", "r", "long-a", "silent-y"],
  },
  ways: {
    letters: ["w", "long-a", "silent-y", "hard-s"],
  },
  say: {
    letters: ["s", "long-a", "silent-y"],
  },
  day: {
    letters: ["d", "long-a", "silent-y"],
  },
  dray: {
    letters: ["d", "r", "long-a", "silent-y"],
  },
  days: {
    letters: ["d", "long-a", "silent-y", "hard-s"],
  },
  dry: {
    letters: ["d", "r", "long-y"],
  },
  fry: {
    letters: ["f", "r", "long-y"],
  },
  try: {
    letters: ["t", "r", "long-y"],
  },
  joke: {
    letters: ["j", "long-o", "k", "silent-e"],
  },
  poke: {
    letters: ["p", "long-o", "k", "silent-e"],
  },
  woke: {
    letters: ["w", "long-o", "k", "silent-e"],
  },
  jokes: {
    letters: ["j", "long-o", "k", "silent-e", "s"],
  },
  save: {
    letters: ["s", "long-a", "v", "silent-e"],
  },
  wave: {
    letters: ["s", "long-a", "v", "silent-e"],
  },
  pave: {
    letters: ["s", "long-a", "v", "silent-e"],
  },
  waves: {
    letters: ["s", "long-a", "v", "silent-e", "hard-s"],
  },
  wipe: {
    letters: ["w", "long-i", "p", "silent-e"],
  },
  ripe: {
    letters: ["r", "long-i", "p", "silent-e"],
  },
  pipe: {
    letters: ["p", "long-i", "p", "silent-e"],
  },
  pipes: {
    letters: ["p", "long-i", "p", "silent-e", "s"],
  },
  tape: {
    letters: ["t", "long-a", "p", "silent-e"],
  },
  shape: {
    letters: ["sh", "long-a", "p", "silent-e"],
  },
  grape: {
    letters: ["g", "r", "long-a", "p", "silent-e"],
  },
  tapes: {
    letters: ["t", "long-a", "p", "silent-e", "s"],
  },
  mole: {
    letters: ["m", "long-o", "l", "silent-e"],
  },
  pole: {
    letters: ["p", "long-o", "l", "silent-e"],
  },
  hole: {
    letters: ["h", "long-o", "l", "silent-e"],
  },
  holes: {
    letters: ["h", "long-o", "l", "silent-e", "hard-s"],
  },
  late: {
    letters: ["l", "long-a", "t", "silent-e"],
  },
  wife: {
    letters: ["w", "long-i", "f", "silent-e"],
  },
  bone: {
    letters: ["b", "long-o", "n", "silent-e"],
  },
  time: {
    letters: ["t", "long-i", "m", "silent-e"],
  },
  safe: {
    letters: ["s", "long-a", "f", "silent-e"],
  },
  rope: {
    letters: ["r", "long-o", "p", "silent-e"],
  },
  home: {
    letters: ["h", "long-o", "m", "silent-e"],
  },
  babe: {
    letters: ["b", "long-a", "b", "silent-e"],
  },
  cute: {
    letters: ["hard-c", "long-u", "t", "silent-e"],
  },
  robe: {
    letters: ["r", "long-o", "b", "silent-e"],
  },
  bite: {
    letters: ["b", "long-i", "t", "silent-e"],
  },
  rose: {
    letters: ["r", "long-o", "hard-s", "silent-e"],
  },
  rode: {
    letters: ["r", "long-o", "d", "silent-e"],
  },
  hive: {
    letters: ["h", "long-i", "v", "silent-e"],
  },
  stove: {
    letters: ["s", "t", "long-o", "v", "silent-e"],
  },
  sly: {
    letters: ["s", "l", "long-y"],
  },
  well: {
    letters: ["w", "short-e", "l", "l"],
  },
  pod: {
    letters: ["p", "short-o", "d"],
  },
  wall: {
    letters: ["w", "open-a", "l", "l"],
  },
  but: {
    letters: ["b", "short-u", "t"],
  },
  wake: {
    letters: ["w", "long-a", "k", "silent-e"],
  },
  nag: {
    letters: ["n", "short-a", "g"],
  },
  log: {
    letters: ["l", "short-o", "g"],
  },
  gum: {
    letters: ["g", "short-u", "m"],
  },
  chin: {
    letters: ["ch", "short-i", "n"],
  },
  kite: {
    letters: ["k", "long-i", "t", "silent-e"],
  },
  than: {
    letters: ["voiced-th", "short-a", "n"],
    sentence: "I am taller than Tara.",
  },
  drum: {
    letters: ["d", "r", "short-u", "m"],
  },
  six: {
    letters: ["s", "short-i", "x"],
  },
  bud: {
    letters: ["b", "short-u", "d"],
  },
  play: {
    letters: ["p", "l", "long-a", "silent-y"],
  },
  leg: {
    letters: ["l", "short-e", "g"],
  },
  crib: {
    letters: ["hard-c", "r", "short-i", "b"],
  },
  crab: {
    letters: ["hard-c", "r", "short-a", "b"],
  },
  spell: {
    letters: ["s", "p", "short-e", "l", "l"],
  },
  Jane: {
    letters: ["j", "long-a", "n", "silent-e"],
  },
  globe: {
    letters: ["g", "l", "long-o", "b", "silent-e"],
  },
  life: {
    letters: ["l", "long-i", "f", "silent-e"],
  },
  slate: {
    letters: ["s", "l", "long-a", "t", "silent-e"],
  },
  bug: {
    letters: ["b", "short-u", "g"],
  },
  slide: {
    letters: ["s", "l", "long-i", "d", "silent-e"],
  },
  rod: {
    letters: ["r", "short-o", "d"],
  },
  rob: {
    letters: ["r", "short-o", "b"],
  },
  them: {
    letters: ["voiced-th", "short-e", "m"],
  },
  frame: {
    letters: ["f", "r", "long-a", "m", "silent-e"],
  },
  kin: {
    letters: ["k", "short-i", "n"],
    sentence: "He visited his kin in the country each summer.",
  },
  skin: {
    letters: ["s", "k", "short-i", "n"],
  },
  spin: {
    letters: ["s", "p", "short-i", "n"],
  },
  pen: {
    letters: ["p", "short-e", "n"],
  },
  then: {
    letters: ["voiced-th", "short-e", "n"],
    sentence: "I will go to the park and then to the movies.",
  },
  when: {
    letters: ["wh", "short-e", "n"],
  },
  ban: {
    letters: ["b", "short-a", "n"],
    sentences: "Is there ever a good reason to ban a book?",
  },
  span: {
    letters: ["s", "p", "short-a", "n"],
  },
  scan: {
    letters: ["s", "hard-c", "short-a", "n"],
  },
  trim: {
    letters: ["t", "r", "short-i", "m"],
  },
  skim: {
    letters: ["s", "k", "short-i", "m"],
  },
  swim: {
    letters: ["s", "w", "short-i", "m"],
  },
  den: {
    letters: ["d", "short-e", "n"],
    sentence: "The bears hibernated in their den.",
  },
  clan: {
    letters: ["hard-c", "l", "short-a", "n"],
  },
  rim: {
    letters: ["r", "short-i", "m"],
  },
  chap: {
    letters: ["ch", "short-a", "p"],
  },
  trap: {
    letters: ["t", "r", "short-a", "p"],
  },
  strap: {
    letters: ["s", "t", "r", "short-a", "p"],
  },
  brag: {
    letters: ["b", "r", "short-a", "g"],
  },
  drag: {
    letters: ["d", "r", "short-a", "g"],
  },
  stag: {
    letters: ["s", "t", "short-a", "g"],
  },
  snip: {
    letters: ["s", "n", "short-i", "p"],
  },
  trip: {
    letters: ["t", "r", "short-i", "p"],
  },
  drip: {
    letters: ["d", "r", "short-i", "p"],
  },
  yell: {
    letters: ["hard-y", "short-e", "l", "l"],
  },
  shell: {
    letters: ["sh", "short-e", "l", "l"],
  },
  smell: {
    letters: ["s", "m", "short-e", "l", "l"],
  },
  cap: {
    letters: ["hard-c", "short-a", "p"],
  },
  map: {
    letters: ["m", "short-a", "p"],
  },
  snap: {
    letters: ["s", "n", "short-a", "p"],
  },
  snag: {
    letters: ["s", "n", "short-a", "g"],
  },
  skip: {
    letters: ["s", "k", "short-i", "p"],
  },
  strip: {
    letters: ["s", "t", "r", "short-i", "p"],
  },
  swell: {
    letters: ["s", "w", "short-e", "l", "l"],
  },
  a: {
    letters: ["short-a"],
    sentence: "I have 'a' cat.",
  },
  and: {
    letters: ["short-a", "n", "d"],
    sentence: "Jack 'and' Jill went up the hill.",
  },
  Ann: {
    letters: ["short-a", "n", "n"],
    sentence: "'Ann' can climb very tall trees.",
  },
  hat: {
    letters: ["h", "short-a", "t"],
    sentence: "Can I borrow your 'hat'?",
  },
  lad: {
    letters: ["l", "short-a", "d"],
  },
  sat: {
    letters: ["s", "short-a", "t"],
  },
  dog: {
    letters: ["d", "short-o", "g"],
  },
  Rab: {
    letters: ["r", "short-a", "b"],
  },
  see: {
    letters: ["s", "long-e", "silent-e"],
  },
  sees: {
    letters: ["s", "long-e", "silent-e", "hard-s"],
  },
  frog: {
    letters: ["f", "r", "short-o", "g"],
  },
  on: {
    letters: ["short-o", "n"],
  },
  stand: {
    letters: ["s", "t", "short-a", "n", "d"],
  },
  lamp: {
    letters: ["l", "short-a", "m", "p"],
  },
  catch: {
    letters: ["hard-c", "short-a", "t", "ch"],
  },
  bit: { letters: ["b", "short-i", "t"] },
  spit: { letters: ["s", "p", "short-i", "t"] },
  flit: { letters: ["f", "l", "short-i", "t"] },
  split: { letters: ["s", "p", "l", "short-i", "t"] },
  Fred: { letters: ["f", "r", "short-e", "d"] },
  bled: { letters: ["b", "l", "short-e", "d"] },
  shed: { letters: ["sh", "short-e", "d"] },
  shred: { letters: ["sh", "r", "short-e", "d"] },
  shy: { letters: ["sh", "long-y"] },
  sty: { letters: ["s", "t", "long-y"] },
  why: { letters: ["wh", "long-y"] },
  spry: { letters: ["s", "p", "r", "long-y"] },
  hub: { letters: ["h", "short-u", "b"] },
  rub: { letters: ["r", "short-u", "b"] },
  scrub: { letters: ["s", "hard-c", "r", "short-u", "b"] },
  shrub: { letters: ["sh", "r", "short-u", "b"] },
  bran: { letters: ["b", "r", "short-a", "n"] },
  pig: { letters: ["p", "short-i", "g"] },
  stun: { letters: ["s", "t", "short-u", "n"] },
  will: { letters: ["w", "short-i", "l", "l"] },
  shot: { letters: ["sh", "short-o", "t"] },
  trot: { letters: ["t", "r", "short-o", "t"] },
  plot: { letters: ["p", "l", "short-o", "t"] },
  spot: { letters: ["s", "p", "short-o", "t"] },
  tug: { letters: ["t", "short-u", "g"] },
  jug: { letters: ["j", "short-u", "g"] },
  mug: { letters: ["m", "short-u", "g"] },
  snug: { letters: ["s", "n", "short-u", "g"] },
  hay: { letters: ["h", "long-a", "silent-y"] },
  pay: { letters: ["p", "long-a", "silent-y"] },
  stay: { letters: ["s", "t", "long-a", "silent-y"] },
  spray: { letters: ["s", "p", "r", "long-a", "silent-y"] },
  chop: { letters: ["ch", "short-o", "p"] },
  drop: { letters: ["d", "r", "short-o", "p"] },
  slop: { letters: ["s", "l", "short-o", "p"] },
  stop: { letters: ["s", "t", "short-o", "p"] },
  fog: { letters: ["f", "short-o", "g"] },
  clog: { letters: ["hard-c", "l", "short-o", "g"] },
  hid: { letters: ["h", "short-i", "d"] },
  stud: { letters: ["s", "t", "short-u", "d"] },
  till: { letters: ["t", "short-i", "l", "l"] },
  tell: { letters: ["t", "short-e", "l", "l"] },
  cub: { letters: ["hard-c", "short-u", "b"] },
  fate: { letters: ["f", "long-a", "t", "silent-e"] },
  pine: { letters: ["p", "long-i", "n", "silent-e"] },
  note: { letters: ["n", "long-o", "t", "silent-e"] },
  hope: { letters: ["h", "long-o", "p", "silent-e"] },
  rip: { letters: ["r", "short-i", "p"] },
  pane: {
    letters: ["p", "long-a", "n", "silent-e"],
    sentence: "There is a pane of colored glass in the window.",
  },
  hate: { letters: ["h", "long-a", "t", "silent-e"] },
  fine: { letters: ["f", "long-i", "n", "silent-e"] },
  spite: { letters: ["s", "p", "long-i", "t", "silent-e"] },
  mad: { letters: ["m", "short-a", "d"] },
  cut: { letters: ["c", "short-u", "t"] },
  slid: {
    letters: ["s", "l", "short-i", "d"],
    sentence: "He slid down the muddy bank.",
  },
  slime: { letters: ["s", "l", "long-i", "m", "silent-e"] },
  bay: { letters: ["b", "long-a", "silent-y"] },
  gay: { letters: ["g", "long-a", "silent-y"] },
  clay: { letters: ["hard-c", "l", "long-a", "silent-y"] },
  chum: { letters: ["ch", "short-u", "m"] },
  spy: {
    letters: ["s", "p", "long-y"],
  },
  sped: {
    letters: ["s", "p", "short-e", "d"],
  },
  spun: {
    letters: ["s", "p", "short-u", "n"],
  },
  slip: {
    letters: ["s", "l", "short-i", "p"],
  },
  slap: {
    letters: ["s", "l", "short-a", "p"],
  },
  chat: {
    letters: ["ch", "short-a", "t"],
  },
  cot: {
    letters: ["hard-c", "short-o", "t"],
  },
  cob: {
    letters: ["hard-c", "short-o", "b"],
  },
  like: {
    letters: ["l", "long-i", "k", "silent-e"],
  },
  pike: {
    letters: ["p", "long-i", "k", "silent-e"],
  },
  spike: {
    letters: ["s", "p", "long-i", "k", "silent-e"],
  },
  strike: {
    letters: ["s", "t", "r", "long-i", "k", "silent-e"],
  },
  nose: {
    letters: ["n", "long-o", "hard-s", "silent-e"],
  },
  those: {
    letters: ["voiced-th", "long-o", "hard-s", "silent-e"],
  },
  close: {
    letters: ["hard-c", "l", "long-o", "hard-s", "silent-e"],
  },
  take: {
    letters: ["t", "long-a", "k", "silent-e"],
  },
  sake: {
    letters: ["s", "long-a", "k", "silent-e"],
    sentence: "They did it for his sake.",
  },
  snake: {
    letters: ["s", "n", "long-a", "k", "silent-e"],
  },
  shake: {
    letters: ["sh", "long-a", "k", "silent-e"],
  },
  shave: {
    letters: ["sh", "long-a", "v", "silent-e"],
  },
  brave: {
    letters: ["b", "r", "long-a", "v", "silent-e"],
  },
  thin: {
    letters: ["unvoiced-th", "short-i", "n"],
  },
  Ben: {
    letters: ["b", "short-e", "n"],
    sentence: "This book was written by Ben Franklin.",
  },
  slam: {
    letters: ["s", "l", "short-a", "m"],
  },
  slot: {
    letters: ["s", "l", "short-o", "t"],
  },
  hot: {
    letters: ["h", "short-o", "t"],
  },
  dram: {
    letters: ["d", "r", "short-a", "m"],
  },
  bet: {
    letters: ["b", "short-e", "t"],
  },
  broke: {
    letters: ["b", "r", "long-o", "k", "silent-e"],
  },
  smoke: {
    letters: ["s", "m", "long-o", "k", "silent-e"],
  },
  stroke: {
    letters: ["s", "t", "r", "long-o", "k", "silent-e"],
  },
  dive: {
    letters: ["d", "long-i", "v", "silent-e"],
  },
  five: {
    letters: ["f", "long-i", "v", "silent-e"],
  },
  drive: {
    letters: ["d", "r", "long-i", "v", "silent-e"],
  },
  cove: {
    letters: ["c", "long-o", "v", "silent-e"],
  },
  rove: {
    letters: ["r", "long-o", "v", "silent-e"],
  },
  drove: {
    letters: ["d", "r", "long-o", "v", "silent-e"],
  },
  clove: {
    letters: ["c", "l", "long-o", "v", "silent-e"],
  },
  cone: {
    letters: ["c", "long-o", "n", "silent-e"],
  },
  tone: {
    letters: ["t", "long-o", "n", "silent-e"],
  },
  stone: {
    letters: ["s", "t", "long-o", "n", "silent-e"],
  },
  drone: {
    letters: ["d", "r", "long-o", "n", "silent-e"],
  },
  plod: {
    letters: ["p", "l", "short-o", "d"],
  },
  hip: {
    letters: ["h", "short-i", "p"],
  },
  fob: {
    letters: ["f", "short-o", "b"],
  },
  fad: {
    letters: ["f", "short-a", "d"],
  },
  chug: {
    letters: ["ch", "short-u", "g"],
  },
  cape: {
    letters: ["hard-c", "long-a", "p", "silent-e"],
  },
  dime: {
    letters: ["d", "long-i", "m", "silent-e"],
  },
  din: {
    letters: ["d", "short-i", "n"],
  },
  dine: {
    letters: ["d", "long-i", "n", "silent-e"],
  },
  rid: {
    letters: ["r", "short-i", "d"],
  },
  rate: {
    letters: ["r", "long-a", "t", "silent-e"],
  },
  spine: {
    letters: ["s", "p", "long-i", "n", "silent-e"],
  },
  thus: {
    letters: ["unvoiced-th", "short-u", "s"],
  },
  that: {
    letters: ["voiced-th", "short-a", "t"],
  },
  this: {
    letters: ["voiced-th", "short-i", "s"],
  },
  slay: {
    letters: ["s", "l", "long-a", "silent-y"],
  },
  drug: {
    letters: ["d", "r", "short-u", "g"],
  },
  crop: {
    letters: ["hard-c", "r", "short-o", "p"],
  },
  snub: {
    letters: ["s", "n", "short-u", "b"],
  },
  brim: {
    letters: ["b", "r", "short-i", "m"],
  },
  whip: {
    letters: ["wh", "short-i", "p"],
  },
  fled: {
    letters: ["f", "l", "short-e", "d"],
  },
  spade: {
    letters: ["s", "p", "long-a", "d", "silent-e"],
  },
  spoke: {
    letters: ["s", "p", "long-o", "k", "silent-e"],
  },
  grove: {
    letters: ["g", "r", "long-o", "v", "silent-e"],
  },
  crane: {
    letters: ["hard-c", "r", "long-a", "n", "silent-e"],
  },
  grave: {
    letters: ["g", "r", "long-a", "v", "silent-e"],
  },
  scrap: {
    letters: ["s", "hard-c", "r", "a", "p"],
  },
  skate: {
    letters: ["s", "k", "long-a", "t", "silent-e"],
  },
  choke: {
    letters: ["ch", "long-o", "k", "silent-e"],
  },
  flog: {
    letters: ["f", "l", "short-o", "g"],
  },
  flame: {
    letters: ["f", "l", "long-a", "m", "silent-e"],
  },
  lake: {
    letters: ["l", "long-a", "k", "silent-e"],
  },
  must: {
    letters: ["m", "short-u", "s", "t"],
  },
  dust: {
    letters: ["d", "short-u", "s", "t"],
  },
  rust: {
    letters: ["r", "short-u", "s", "t"],
  },
  crust: {
    letters: ["hard-c", "r", "short-u", "s", "t"],
  },
  best: {
    letters: ["b", "short-e", "s", "t"],
  },
  nest: {
    letters: ["n", "short-e", "s", "t"],
  },
  rest: {
    letters: ["r", "short-e", "s", "t"],
  },
  chest: {
    letters: ["ch", "short-e", "s", "t"],
  },
  fist: {
    letters: ["f", "short-i", "s", "t"],
  },
  list: {
    letters: ["l", "short-i", "s", "t"],
  },
  mist: {
    letters: ["m", "short-i", "s", "t"],
  },
  twist: {
    letters: ["t", "w", "short-i", "s", "t"],
  },
  cost: {
    letters: ["hard-c", "intermediate-o", "s", "t"],
  },
  lost: {
    letters: ["l", "intermediate-o", "s", "t"],
  },
  frost: {
    letters: ["f", "r", "intermediate-o", "s", "t"],
  },
  just: {
    letters: ["j", "short-u", "s", "t"],
  },
  while: {
    letters: ["wh", "long-i", "l", "silent-e"],
  },
  white: {
    letters: ["wh", "long-i", "t", "silent-e"],
  },
  scab: {
    letters: ["s", "hard-c", "short-a", "b"],
  },
  scum: {
    letters: ["s", "hard-c", "short-u", "m"],
  },
  scat: {
    letters: ["s", "hard-c", "short-a", "t"],
  },
  grime: {
    letters: ["g", "r", "long-i", "m", "silent-e"],
  },
  grate: {
    letters: ["g", "r", "long-a", "t", "silent-e"],
    sentence: "Please grate the cheese.",
  },
  Bess: {
    letters: ["b", "short-e", "s", "s"],
  },
  Jess: {
    letters: ["j", "short-e", "s", "s"],
  },
  bless: {
    letters: ["b", "l", "short-e", "s", "s"],
  },
  dress: {
    letters: ["d", "r", "short-e", "s", "s"],
  },
  miss: {
    letters: ["m", "short-i", "s", "s"],
  },
  hiss: {
    letters: ["h", "short-i", "s", "s"],
  },
  kiss: {
    letters: ["k", "short-i", "s", "s"],
  },
  bliss: {
    letters: ["b", "l", "short-i", "s", "s"],
  },
  boss: {
    letters: ["b", "intermediate-o", "s", "s"],
  },
  toss: {
    letters: ["t", "intermediate-o", "s", "s"],
  },
  moss: {
    letters: ["m", "intermediate-o", "s", "s"],
  },
  cross: {
    letters: ["hard-c", "r", "intermediate-o", "s", "s"],
  },
  muss: {
    letters: ["m", "short-u", "s", "s"],
  },
  fuss: {
    letters: ["f", "short-u", "s", "s"],
  },
  loss: {
    letters: ["l", "intermediate-o", "s", "s"],
  },
  press: {
    letters: ["p", "r", "short-e", "s", "s"],
  },
  stem: {
    letters: ["s", "t", "short-e", "m"],
  },
  stub: {
    letters: ["s", "t", "short-u", "b"],
  },
  plate: {
    letters: ["p", "l", "long-a", "t", "silent-e"],
  },
  quell: {
    letters: ["qu", "short-e", "l", "l"],
  },
  fill: {
    letters: ["f", "short-i", "l", "l"],
  },
  band: {
    letters: ["b", "short-a", "n", "d"],
    sentence: "The band began to play.",
  },
  mend: {
    letters: ["m", "short-e", "n", "d"],
    sentence: "Can you mend your torn shirt?",
  },
  spend: {
    letters: ["s", "p", "short-e", "n", "d"],
  },
  spent: {
    letters: ["s", "p", "short-e", "n", "t"],
  },
  mint: {
    letters: ["m", "short-i", "n", "t"],
    sentence: "I drink mint tea.",
  },
  print: {
    letters: ["p", "r", "short-i", "n", "t"],
  },
  fond: {
    letters: ["f", "short-o", "n", "d"],
    sentence: "She was fond of her little sister.",
  },
  pond: {
    letters: ["p", "short-o", "n", "d"],
    sentence: "They went ice-skating on the pond.",
  },
  find: {
    letters: ["f", "long-i", "n", "d"],
  },
  blind: {
    letters: ["b", "l", "long-i", "n", "d"],
  },
  hunt: {
    letters: ["h", "short-u", "n", "t"],
  },
  grunt: {
    letters: ["g", "r", "short-u", "n", "t"],
    sentence: "The pig answered with a grunt.",
  },
  plant: {
    letters: ["p", "l", "short-a", "n", "t"],
  },
  scant: {
    letters: ["s", "hard-c", "short-a", "n", "t"],
  },
  fret: {
    letters: ["f", "r", "short-e", "t"],
    sentence: "Never fret and never worry. ",
  },
  grin: {
    letters: ["g", "r", "short-i", "n"],
  },
  wise: {
    letters: ["w", "long-i", "hard-s", "silent-e"],
  },
  wove: {
    letters: ["w", "long-o", "v", "silent-e"],
  },
  grab: {
    letters: ["g", "r", "short-a", "b"],
  },
  grub: {
    letters: ["g", "r", "short-u", "b"],
  },
  grit: {
    letters: ["g", "r", "short-i", "t"],
  },
  bray: {
    letters: ["b", "r", "long-a", "silent-y"],
    silent: "Listen to that donkey bray!",
  },
  brake: {
    letters: ["b", "r", "long-a", "k", "silent-e"],
    sentence: "Use your parking brake.",
  },
  trod: {
    letters: ["t", "r", "short-o", "d"],
  },
  trust: {
    letters: ["t", "r", "short-u", "s", "t"],
  },
  cash: {
    letters: ["hard-c", "short-a", "sh"],
  },
  dash: {
    letters: ["d", "short-a", "sh"],
  },
  fish: {
    letters: ["f", "short-i", "sh"],
  },
  wish: {
    letters: ["w", "short-i", "sh"],
  },
  fresh: {
    letters: ["f", "r", "short-e", "sh"],
  },
  flesh: {
    letters: ["f", "l", "short-e", "sh"],
  },
  rush: {
    letters: ["r", "short-u", "sh"],
  },
  brush: {
    letters: ["b", "r", "short-u", "sh"],
  },
  dish: {
    letters: ["d", "short-i", "sh"],
  },
  flash: {
    letters: ["f", "l", "short-a", "sh"],
  },
  crush: {
    letters: ["hard-c", "r", "short-u", "sh"],
  },
  smash: {
    letters: ["s", "m", "short-a", "sh"],
  },
  sash: {
    letters: ["s", "short-a", "sh"],
  },
  mesh: {
    letters: ["m", "short-e", "sh"],
  },
  blush: {
    letters: ["b", "l", "short-u", "sh"],
  },
  splash: {
    letters: ["s", "p", "l", "short-a", "sh"],
  },
  stake: {
    letters: ["s", "t", "long-a", "k", "silent-e"],
  },
  chime: {
    letters: ["ch", "long-i", "m", "silent-e"],
  },
  chose: {
    letters: ["ch", "long-o", "hard-s", "silent-e"],
  },
  chess: {
    letters: ["ch", "short-e", "s", "s"],
  },
  vest: {
    letters: ["v", "short-e", "s", "t"],
  },
  vote: {
    letters: ["v", "long-o", "t", "silent-e"],
  },
};

export default words;
