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
  cut: { letters: ["hard-c", "short-u", "t"] },
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
    letters: ["hard-c", "long-o", "v", "silent-e"],
  },
  rove: {
    letters: ["r", "long-o", "v", "silent-e"],
  },
  drove: {
    letters: ["d", "r", "long-o", "v", "silent-e"],
  },
  clove: {
    letters: ["hard-c", "l", "long-o", "v", "silent-e"],
  },
  cone: {
    letters: ["hard-c", "long-o", "n", "silent-e"],
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
    letters: ["s", "hard-c", "r", "short-a", "p"],
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
  shine: {
    letters: ["sh", "long-i", "n", "silent-e"],
  },
  shade: {
    letters: ["sh", "long-a", "d", "silent-e"],
  },
  prime: {
    letters: ["p", "r", "long-i", "m", "silent-e"],
  },
  shad: {
    letters: ["sh", "short-a", "d"],
    sentence: "A shad is a herring-like fish.",
  },
  tripe: {
    letters: ["t", "r", "long-i", "p", "silent-e"],
  },
  prim: {
    letters: ["p", "r", "short-i", "m"],
  },
  plane: {
    letters: ["p", "l", "long-a", "n", "silent-e"],
    sentence: "You will take a plane to Hawaii.",
  },
  shame: {
    letters: ["sh", "long-a", "m", "silent-e"],
  },
  quite: {
    letters: ["qu", "long-i", "t", "silent-e"],
  },
  glade: {
    letters: ["g", "l", "long-a", "d", "silent-e"],
  },
  slope: {
    letters: ["s", "l", "long-o", "p", "silent-e"],
  },
  twine: {
    letters: ["t", "w", "long-i", "n", "silent-e"],
  },
  stripe: {
    letters: ["s", "t", "r", "long-i", "p", "silent-e"],
  },
  scrape: {
    letters: ["s", "hard-c", "r", "long-a", "p", "silent-e"],
  },
  slat: {
    letters: ["s", "l", "short-a", "t"],
  },
  grim: {
    letters: ["g", "r", "short-i", "m"],
  },
  sham: {
    letters: ["sh", "short-a", "m"],
  },
  twin: {
    letters: ["t", "w", "short-i", "n"],
  },
  wit: {
    letters: ["w", "short-i", "t"],
  },
  drake: {
    letters: ["d", "r", "long-a", "k", "silent-e"],
    sentence: "A drake is a male duck.",
  },
  drill: {
    letters: ["d", "r", "short-i", "l", "l"],
  },
  lime: {
    letters: ["l", "long-i", "m", "silent-e"],
  },
  sand: {
    letters: ["s", "short-a", "n", "d"],
  },
  send: {
    letters: ["s", "short-e", "n", "d"],
  },
  sent: {
    letters: ["s", "short-e", "n", "t"],
    sentence: "He sent a letter.",
  },
  hold: {
    letters: ["h", "long-o", "l", "d"],
    sentence: "Would you like to hold the doll?",
  },
  gilt: {
    letters: ["g", "short-i", "l", "t"],
    sentence: "The clock was decorated with gilt.",
  },
  sold: {
    letters: ["s", "long-o", "l", "d"],
    sentence: "He sold the cat to a young woman.",
  },
  told: {
    letters: ["t", "long-o", "l", "d"],
    told: "How many times have I told you to close the door?",
  },
  fold: {
    letters: ["f", "long-o", "l", "d"],
    sentence: "Please fold your laundry neatly.",
  },
  gold: {
    letters: ["g", "long-o", "l", "d"],
  },
  wilt: {
    letters: ["w", "short-i", "l", "t"],
  },
  tilt: {
    letters: ["t", "short-i", "l", "t"],
  },
  stilt: {
    letters: ["s", "t", "short-i", "l", "t"],
  },
  colt: {
    letters: ["hard-c", "long-o", "l", "t"],
  },
  bolt: {
    letters: ["b", "long-o", "l", "t"],
  },
  jolt: {
    letters: ["j", "long-o", "l", "t"],
  },
  belt: {
    letters: ["b", "short-e", "l", "t"],
  },
  melt: {
    letters: ["m", "short-e", "l", "t"],
  },
  felt: {
    letters: ["f", "short-e", "l", "t"],
  },
  smelt: {
    letters: ["s", "m", "short-e", "l", "t"],
  },
  job: {
    letters: ["j", "short-o", "b"],
  },
  clip: {
    letters: ["hard-c", "l", "short-i", "p"],
  },
  cop: {
    letters: ["hard-c", "short-o", "p"],
  },
  hush: {
    letters: ["h", "short-u", "sh"],
  },
  land: {
    letters: ["l", "short-a", "n", "d"],
  },
  lend: {
    letters: ["l", "short-e", "n", "d"],
  },
  went: {
    letters: ["w", "short-e", "n", "t"],
  },
  less: {
    letters: ["l", "short-e", "s", "s"],
  },
  scold: {
    letters: ["s", "hard-c", "long-o", "l", "d"],
  },
  slant: {
    letters: ["s", "l", "short-a", "n", "t"],
  },
  pride: {
    letters: ["p", "r", "long-i", "d", "silent-e"],
  },
  mind: {
    letters: ["m", "long-i", "n", "d"],
  },
  molt: {
    letters: ["m", "long-o", "l", "t"],
  },
  slush: {
    letters: ["s", "l", "short-u", "sh"],
  },
  thrash: {
    letters: ["unvoiced-th", "r", "short-a", "sh"],
  },
  thrust: {
    letters: ["unvoiced-th", "r", "short-u", "s", "t"],
  },
  bond: {
    letters: ["b", "short-o", "n", "d"],
  },
  hint: {
    letters: ["h", "short-i", "n", "t"],
  },
  blunt: {
    letters: ["b", "l", "short-u", "n", "t"],
  },
  swam: {
    letters: ["s", "w", "short-a", "m"],
  },
  swill: {
    letters: ["s", "w", "short-i", "l", "l"],
  },
  test: {
    letters: ["t", "short-e", "s", "t"],
  },
  tent: {
    letters: ["t", "short-e", "n", "t"],
  },
  tint: {
    letters: ["t", "short-i", "n", "t"],
  },
  pad: {
    letters: ["p", "short-a", "d"],
  },
  bank: {
    letters: ["b", "short-a", "nasal-n", "k"],
  },
  thank: {
    letters: ["unvoiced-th", "short-a", "nasal-n", "k"],
  },
  think: {
    letters: ["unvoiced-th", "short-i", "nasal-n", "k"],
  },
  drink: {
    letters: ["d", "r", "short-i", "nasal-n", "k"],
  },
  rang: {
    letters: ["r", "short-a", "nasal-n", "silent-g"],
  },
  hang: {
    letters: ["h", "short-a", "nasal-n", "silent-g"],
  },
  ring: {
    letters: ["r", "short-i", "nasal-n", "silent-g"],
  },
  bring: {
    letters: ["b", "r", "short-i", "nasal-n", "silent-g"],
  },
  rung: {
    letters: ["r", "short-u", "nasal-n", "silent-g"],
  },
  hung: {
    letters: ["h", "short-u", "nasal-n", "silent-g"],
  },
  junk: {
    letters: ["j", "short-u", "nasal-n", "k"],
  },
  chunk: {
    letters: ["ch", "short-u", "nasal-n", "k"],
  },
  trunk: {
    letters: ["t", "r", "short-u", "nasal-n", "k"],
  },
  song: {
    letters: ["s", "intermediate-o", "nasal-n", "silent-g"],
  },
  strong: {
    letters: ["s", "t", "r", "intermediate-o", "nasal-n", "silent-g"],
  },
  sting: {
    letters: ["s", "t", "short-i", "nasal-n", "silent-g"],
  },
  grand: {
    letters: ["g", "r", "short-a", "n", "d"],
  },
  grind: {
    letters: ["g", "r", "long-i", "n", "d"],
  },
  grist: {
    letters: ["g", "r", "long-i", "s", "t"],
  },
  cram: {
    letters: ["hard-c", "r", "short-a", "m"],
  },
  crape: {
    letters: ["hard-c", "r", "long-a", "p", "silent-e"],
  },
  mash: {
    letters: ["m", "short-a", "sh"],
  },
  much: {
    letters: ["m", "short-u", "ch"],
  },
  fed: {
    letters: ["f", "short-e", "d"],
  },
  damp: {
    letters: ["d", "short-a", "m", "p"],
  },
  dump: {
    letters: ["d", "short-u", "m", "p"],
  },
  lump: {
    letters: ["l", "short-u", "m", "p"],
  },
  limp: {
    letters: ["l", "short-i", "m", "p"],
  },
  crimp: {
    letters: ["hard-c", "r", "short-i", "m", "p"],
  },
  camp: {
    letters: ["hard-c", "short-a", "m", "p"],
  },
  scamp: {
    letters: ["s", "hard-c", "short-a", "m", "p"],
  },
  jump: {
    letters: ["j", "short-u", "m", "p"],
  },
  pump: {
    letters: ["p", "short-u", "m", "p"],
  },
  stump: {
    letters: ["s", "t", "short-u", "m", "p"],
  },
  stamp: {
    letters: ["s", "t", "short-a", "m", "p"],
  },
  romp: {
    letters: ["r", "short-o", "m", "p"],
  },
  pomp: {
    letters: ["p", "short-o", "m", "p"],
  },
  hemp: {
    letters: ["h", "short-e", "m", "p"],
  },
  tramp: {
    letters: ["t", "r", "short-a", "m", "p"],
  },
  bind: {
    letters: ["b", "long-i", "n", "d"],
  },
  kind: {
    letters: ["k", "long-i", "n", "d"],
  },
  mold: {
    letters: ["m", "long-o", "l", "d"],
  },
  neck: {
    letters: ["n", "short-e", "silent-c", "k"],
  },
  peck: {
    letters: ["p", "short-e", "silent-c", "k"],
  },
  pack: {
    letters: ["p", "short-a", "silent-c", "k"],
  },
  speck: {
    letters: ["s", "p", "short-e", "silent-c", "k"],
  },
  black: {
    letters: ["b", "l", "short-a", "silent-c", "k"],
  },
  crack: {
    letters: ["hard-c", "r", "short-a", "silent-c", "k"],
  },
  lock: {
    letters: ["l", "short-o", "silent-c", "k"],
  },
  rock: {
    letters: ["r", "short-o", "silent-c", "k"],
  },
  clock: {
    letters: ["hard-c", "l", "short-o", "silent-c", "k"],
  },
  block: {
    letters: ["b", "l", "short-o", "silent-c", "k"],
  },
  pick: {
    letters: ["p", "short-i", "silent-c", "k"],
  },
  stick: {
    letters: ["s", "t", "short-i", "silent-c", "k"],
  },
  trick: {
    letters: ["t", "r", "short-i", "silent-c", "k"],
  },
  thick: {
    letters: ["unvoiced-th", "short-i", "silent-c", "k"],
  },
  duck: {
    letters: ["d", "short-u", "silent-c", "k"],
  },
  truck: {
    letters: ["t", "r", "short-u", "silent-c", "k"],
  },
  wing: {
    letters: ["w", "short-i", "nasal-n", "silent-g"],
  },
  stung: {
    letters: ["s", "t", "short-u", "nasal-n", "silent-g"],
  },
  sink: {
    letters: ["s", "short-i", "nasal-n", "k"],
  },
  sank: {
    letters: ["s", "short-a", "nasal-n", "k"],
  },
  sunk: {
    letters: ["s", "short-u", "nasal-n", "k"],
  },
  smile: {
    letters: ["s", "m", "long-i", "l", "silent-e"],
  },
  small: {
    letters: ["s", "m", "open-a", "l", "l"],
  },
  naps: {
    letters: ["n", "short-a", "p", "s"],
  },
  plank: {
    letters: ["p", "l", "short-a", "nasal-n", "k"],
  },
  thatch: {
    letters: ["unvoiced-th", "short-a", "silent-t", "ch"],
  },
  keg: {
    letters: ["k", "short-e", "g"],
  },
  pegs: {
    letters: ["p", "short-e", "g", "hard-s"],
  },
  Mab: {
    letters: ["m", "short-a", "b"],
  },
  Tab: {
    letters: ["t", "short-a", "b"],
  },
  ram: {
    letters: ["r", "short-a", "m"],
  },
  lap: {
    letters: ["l", "short-a", "p"],
  },
  nap: {
    letters: ["n", "short-a", "p"],
  },
  sad: {
    letters: ["s", "short-a", "d"],
  },
  Dan: {
    letters: ["d", "short-a", "n"],
  },
  tag: {
    letters: ["t", "short-a", "g"],
  },
  feed: {
    letters: ["f", "long-e", "silent-e", "d"],
  },
  tree: {
    letters: ["t", "r", "long-e", "silent-e"],
  },
  seem: {
    letters: ["s", "long-e", "silent-e", "m"],
    sentence: "You seem hungry.",
  },
  beef: {
    letters: ["b", "long-e", "silent-e", "f"],
  },
  free: {
    letters: ["f", "r", "long-e", "silent-e"],
  },
  week: {
    letters: ["w", "long-e", "silent-e", "k"],
  },
  seen: {
    letters: ["s", "long-e", "silent-e", "n"],
  },
  sleep: {
    letters: ["s", "l", "long-e", "silent-e", "p"],
  },
  moo: {
    letters: ["m", "double-o"],
  },
  boot: {
    letters: ["b", "double-o", "t"],
  },
  roof: {
    letters: ["r", "double-o", "f"],
  },
  soon: {
    letters: ["s", "double-o", "n"],
  },
  hoop: {
    letters: ["h", "double-o", "p"],
  },
  stool: {
    letters: ["s", "t", "double-o", "l"],
  },
  room: {
    letters: ["r", "double-o", "m"],
  },
  stoop: {
    letters: ["s", "t", "double-o", "p"],
  },
  sky: {
    letters: ["s", "k", "long-y"],
  },
  skill: {
    letters: ["s", "k", "short-i", "l", "l"],
  },
  blue: {
    letters: ["b", "l", "u-as-double-o", "silent-e"],
  },
  door: {
    letters: ["d", "long-o", "silent-o", "r"],
  },
  glue: {
    letters: ["g", "l", "u-as-double-o", "silent-e"],
  },
  floor: {
    letters: ["f", "l", "long-o", "silent-o", "r"],
  },
  cuff: {
    letters: ["hard-c", "short-u", "f", "silent-f"],
  },
  muff: {
    letters: ["m", "short-u", "f", "silent-f"],
  },
  stuff: {
    letters: ["s", "t", "short-u", "f", "silent-f"],
  },
  gruff: {
    letters: ["g", "r", "short-u", "f", "silent-f"],
  },
  balk: {
    letters: ["b", "open-a", "silent-l", "k"],
    sentence: "The horse will balk at the gate.",
  },
  talk: {
    letters: ["t", "open-a", "silent-l", "k"],
    sentence: "We will talk all night.",
  },
  walk: {
    letters: ["w", "open-a", "silent-l", "k"],
    sentence: "Let's go for a walk.",
  },
  chalk: {
    letters: ["ch", "open-a", "silent-l", "k"],
    sentence: "Children enjoy playing with sidewalk chalk.",
  },
  fife: {
    letters: ["f", "long-i", "f", "silent-e"],
  },
  strife: {
    letters: ["s", "t", "r", "long-i", "f", "silent-e"],
  },
  spring: {
    letters: ["s", "p", "r", "short-i", "nasal-n", "silent-g"],
  },
  sprang: {
    letters: ["s", "p", "r", "short-a", "nasal-n", "silent-g"],
  },
  sprung: {
    letters: ["s", "p", "r", "short-u", "nasal-n", "silent-g"],
  },
  tick: {
    letters: ["t", "short-i", "silent-c", "k"],
  },
  tack: {
    letters: ["t", "short-a", "silent-c", "k"],
  },
  tuck: {
    letters: ["t", "short-u", "silent-c", "k"],
  },
  tend: {
    letters: ["t", "short-e", "n", "d"],
  },
  track: {
    letters: ["t", "r", "short-a", "silent-c", "k"],
  },
  trump: {
    letters: ["t", "r", "short-u", "m", "p"],
  },
  sing: {
    letters: ["s", "short-i", "nasal-n", "silent-g"],
  },
  sang: {
    letters: ["s", "short-a", "nasal-n", "silent-g"],
  },
  sung: {
    letters: ["s", "short-u", "nasal-n", "silent-g"],
  },
  cool: {
    letters: ["hard-c", "double-o", "l"],
  },
  root: {
    letters: ["r", "double-o", "t"],
  },
  moon: {
    letters: ["m", "double-o", "n"],
  },
  proof: {
    letters: ["p", "r", "double-o", "f"],
  },
  struck: {
    letters: ["s", "t", "r", "short-u", "silent-c", "k"],
  },
  pink: {
    letters: ["p", "short-i", "nasal-n", "k"],
  },
  skunk: {
    letters: ["s", "k", "short-u", "nasal-n", "k"],
  },
  cramp: {
    letters: ["hard-c", "r", "short-a", "m", "p"],
  },
  pluck: {
    letters: ["p", "l", "short-u", "silent-c", "k"],
  },
  check: {
    letters: ["ch", "short-e", "silent-c", "k"],
  },
  Frank: {
    letters: ["f", "r", "short-a", "nasal-n", "k"],
  },
  sling: {
    letters: ["s", "l", "short-i", "nasal-n", "silent-g"],
  },
  lung: {
    letters: ["l", "short-u", "nasal-n", "silent-g"],
  },
  king: {
    letters: ["k", "short-i", "nasal-n", "silent-g"],
  },
  brick: {
    letters: ["b", "r", "short-i", "silent-c", "k"],
  },
  shock: {
    letters: ["sh", "short-o", "silent-c", "k"],
  },
  Jack: {
    letters: ["j", "short-a", "silent-c", "k"],
  },
  bleed: {
    letters: ["b", "l", "long-e", "silent-e", "d"],
  },
  creek: {
    letters: ["hard-c", "r", "long-e", "silent-e", "k"],
  },
  spree: {
    letters: ["s", "p", "r", "long-e", "silent-e"],
  },
  deep: {
    letters: ["d", "long-e", "silent-e", "p"],
  },
  Jill: {
    letters: ["j", "short-i", "l", "l"],
  },
  kill: {
    letters: ["k", "short-i", "l", "l"],
  },
  kick: {
    letters: ["k", "short-i", "silent-c", "k"],
  },
  prop: {
    letters: ["p", "r", "short-o", "p"],
  },
  bent: {
    letters: ["b", "short-e", "n", "t"],
  },
  bunk: {
    letters: ["b", "short-u", "nasal-n", "k"],
  },
  bump: {
    letters: ["b", "short-u", "m", "p"],
  },
  zoo: {
    letters: ["z", "double-o"],
  },
  spoon: {
    letters: ["s", "p", "double-o", "n"],
  },
  spool: {
    letters: ["s", "p", "double-o", "l"],
  },
  bloom: {
    letters: ["b", "l", "double-o", "m"],
  },
  shoot: {
    letters: ["sh", "double-o", "t"],
  },
  broom: {
    letters: ["b", "r", "double-o", "m"],
  },
  meet: {
    letters: ["m", "long-e", "silent-e", "t"],
  },
  cheek: {
    letters: ["ch", "long-e", "silent-e", "k"],
  },
  three: {
    letters: ["unvoiced-th", "r", "long-e", "silent-e"],
  },
  sweep: {
    letters: ["s", "w", "long-e", "silent-e", "p"],
  },
  sweet: {
    letters: ["s", "w", "long-e", "silent-e", "t"],
  },
  green: {
    letters: ["g", "r", "long-e", "silent-e", "n"],
  },
  need: {
    letters: ["n", "long-e", "silent-e", "d"],
  },
  feel: {
    letters: ["f", "long-e", "silent-e", "l"],
  },
  creep: {
    letters: ["hard-c", "r", "long-e", "silent-e", "p"],
  },
  cluck: {
    letters: ["hard-c", "l", "short-u", "silent-c", "k"],
  },
  click: {
    letters: ["hard-c", "l", "short-i", "silent-c", "k"],
  },
  shrill: {
    letters: ["sh", "r", "short-i", "l", "l"],
  },
  shrink: {
    letters: ["sh", "r", "short-i", "nasal-n", "k"],
  },
  pug: {
    letters: ["p", "short-u", "g"],
  },
  puff: {
    letters: ["p", "short-u", "f", "silent-f"],
  },
  string: {
    letters: ["s", "t", "r", "short-i", "nasal-n", "silent-g"],
  },
  strung: {
    letters: ["s", "t", "r", "short-u", "nasal-n", "silent-g"],
  },
  ice: {
    letters: ["long-i", "soft-c", "silent-e"],
  },
  rice: {
    letters: ["r", "long-i", "soft-c", "silent-e"],
  },
  dice: {
    letters: ["d", "long-i", "soft-c", "silent-e"],
  },
  nice: {
    letters: ["n", "long-i", "soft-c", "silent-e"],
  },
  price: {
    letters: ["p", "r", "long-i", "soft-c", "silent-e"],
  },
  twice: {
    letters: ["t", "w", "long-i", "soft-c", "silent-e"],
  },
  splice: {
    letters: ["s", "p", "l", "long-i", "soft-c", "silent-e"],
  },
  ace: {
    letters: ["long-a", "soft-c", "silent-e"],
  },
  lace: {
    letters: ["l", "long-a", "soft-c", "silent-e"],
  },
  place: {
    letters: ["p", "l", "long-a", "soft-c", "silent-e"],
  },
  grace: {
    letters: ["g", "r", "long-a", "soft-c", "silent-e"],
  },
  face: {
    letters: ["f", "long-a", "soft-c", "silent-e"],
  },
  space: {
    letters: ["s", "p", "long-a", "soft-c", "silent-e"],
  },
  trace: {
    letters: ["t", "r", "long-a", "soft-c", "silent-e"],
  },
  age: {
    letters: ["long-a", "soft-g", "silent-e"],
  },
  page: {
    letters: ["p", "long-a", "soft-g", "silent-e"],
  },
  rage: {
    letters: ["r", "long-a", "soft-g", "silent-e"],
  },
  cage: {
    letters: ["hard-c", "long-a", "soft-g", "silent-e"],
  },
  stage: {
    letters: ["s", "t", "long-a", "soft-g", "silent-e"],
  },
  blend: {
    letters: ["b", "l", "short-e", "n", "d"],
  },
  stall: {
    letters: ["s", "t", "open-a", "l", "l"],
  },
  stalk: {
    letters: ["s", "t", "open-a", "silent-l", "k"],
  },
  stack: {
    letters: ["s", "t", "short-a", "silent-c", "k"],
  },
  tool: {
    letters: ["t", "double-o", "l"],
  },
  heel: {
    letters: ["h", "long-e", "silent-e", "l"],
  },
  sea: {
    letters: ["s", "ea"],
  },
  read: {
    letters: ["r", "long-e", "silent-a", "d"],
    sentence: "Read a book.",
  },
  load: {
    letters: ["l", "long-o", "silent-a", "d"],
    sentence: "Load the cart.",
  },
  hear: {
    letters: ["h", "long-e", "silent-a", "r"],
    sentence: "Do you hear them sing?",
  },
  lie: {
    letters: ["l", "ie"],
    sentence: "I cannot tell a lie.",
  },
  loaf: {
    letters: ["l", "long-o", "silent-a", "f"],
  },
  loaves: {
    letters: ["l", "long-o", "silent-a", "v", "silent-e", "s"],
  },
  heap: {
    letters: ["h", "long-e", "silent-a", "p"],
  },
  weak: {
    letters: ["w", "long-e", "silent-a", "k"],
  },
  pea: {
    letters: ["p", "ea"],
    sentence: "They are like peas in a pod.",
  },
  mean: {
    letters: ["m", "long-e", "silent-a", "n"],
  },
  meal: {
    letters: ["m", "long-e", "silent-a", "l"],
  },
  leaf: {
    letters: ["l", "long-e", "silent-a", "f"],
  },
  leaves: {
    letters: ["l", "long-e", "silent-a", "v", "silent-e", "s"],
  },
  pie: {
    letters: ["p", "ie"],
  },
  oar: {
    letters: ["long-o", "silent-a", "r"],
  },
  boat: {
    letters: ["b", "long-o", "silent-a", "t"],
  },
  meat: {
    letters: ["m", "long-e", "silent-a", "t"],
  },
  shone: {
    letters: ["sh", "long-o", "n", "silent-e"],
    sentence: ["The sun shone through the window."],
  },
  reed: {
    letters: ["r", "double-e", "d"],
    sentence: "A reed is a type of grass.",
  },
  race: {
    letters: ["r", "long-a", "soft-c", "silent-e"],
  },
  crank: {
    letters: ["hard-c", "r", "short-a", "nasal-n", "k"],
  },
  cress: {
    letters: ["hard-c", "r", "short-e", "s", "s"],
  },
  quick: {
    letters: ["qu", "short-i", "silent-c", "k"],
  },
  queen: {
    letters: ["qu", "long-e", "silent-e", "n"],
  },
  car: {
    letters: ["hard-c", "ar"],
  },
  farm: {
    letters: ["f", "ar", "m"],
  },
  barn: {
    letters: ["b", "ar", "n"],
  },
  yard: {
    letters: ["hard-y", "ar", "d"],
  },
  hark: {
    letters: ["h", "ar", "k"],
  },
  star: {
    letters: ["s", "t", "ar"],
  },
  hard: {
    letters: ["h", "ar", "d"],
  },
  harp: {
    letters: ["h", "ar", "p"],
  },
  harm: {
    letters: ["h", "ar", "m"],
  },
  charm: {
    letters: ["ch", "ar", "m"],
  },
  cart: {
    letters: ["hard-c", "ar", "t"],
  },
  far: {
    letters: ["f", "ar"],
  },
  bark: {
    letters: ["b", "ar", "k"],
  },
  sharp: {
    letters: ["sh", "ar", "p"],
  },
  shark: {
    letters: ["sh", "ar", "k"],
  },
  flue: { letters: ["f", "l", "u-as-double-o", "silent-e"] },
  flea: { letters: ["f", "l", "ea"] },
  float: { letters: ["f", "l", "long-o", "silent-a", "t"] },
  floss: { letters: ["f", "l", "intermediate-o", "s", "s"] },
  neat: { letters: ["n", "long-e", "silent-a", "t"] },
  noon: { letters: ["n", "double-o", "n"] },
  tea: { letters: ["t", "ea"] },
  seat: { letters: ["s", "long-e", "silent-a", "t"] },
  near: { letters: ["n", "long-e", "silent-a", "r"] },
  leak: { letters: ["l", "long-e", "silent-a", "k"] },
  leap: { letters: ["l", "long-e", "silent-a", "p"] },
  heat: { letters: ["h", "long-e", "silent-a", "t"] },
  heal: { letters: ["h", "long-e", "silent-a", "l"] },
  year: { letters: ["hard-y", "long-e", "silent-a", "r"] },
  speak: { letters: ["s", "p", "long-e", "silent-a", "k"] },
  road: { letters: ["r", "long-o", "silent-a", "d"] },
  coat: { letters: ["hard-c", "long-o", "silent-a", "t"] },
  goat: { letters: ["g", "long-o", "silent-a", "t"] },
  toad: { letters: ["t", "long-o", "silent-a", "d"] },
  throat: { letters: ["unvoiced-th", "r", "long-o", "silent-a", "t"] },
  tie: { letters: ["t", "ie"], sentence: "She wore a tie to the dance." },
  die: { letters: ["d", "ie"], sentence: "He rolled the die." },
  lead: {
    letters: ["l", "long-e", "silent-a", "d"],
    sentence: "I'll lead, and you follow.",
  },
  lean: { letters: ["l", "long-e", "silent-a", "n"] },
  long: { letters: ["l", "short-o", "nasal-n", "silent-g"] },
  slice: { letters: ["s", "l", "long-i", "soft-c", "silent-e"] },
  slack: { letters: ["s", "l", "short-a", "silent-c", "k"] },
  part: { letters: ["p", "ar", "t"] },
  park: { letters: ["p", "ar", "k"] },
  peep: { letters: ["p", "long-e", "silent-e", "p"] },
  soap: { letters: ["s", "long-o", "silent-a", "p"] },
  lard: { letters: ["l", "ar", "d"] },
  Mark: { letters: ["m", "ar", "k"] },
  swing: { letters: ["s", "w", "short-i", "nasal-n", "silent-g"] },
  bean: { letters: ["b", "long-e", "silent-a", "n"] },
  bait: { letters: ["b", "ai", "t"], sentence: "The fish took the bait." },
  wait: { letters: ["w", "ai", "t"] },
  laid: { letters: ["l", "ai", "d"] },
  maid: { letters: ["m", "ai", "d"] },
  paid: { letters: ["p", "ai", "d"] },
  fail: { letters: ["f", "ai", "l"] },
  mail: { letters: ["m", "ai", "l"] },
  nail: { letters: ["n", "ai", "l"] },
  pail: { letters: ["p", "ai", "l"] },
  hail: { letters: ["h", "ai", "l"] },
  snail: { letters: ["s", "n", "ai", "l"] },
  rain: { letters: ["r", "ai", "n"] },
  pain: { letters: ["p", "ai", "n"] },
  grain: { letters: ["g", "r", "ai", "n"] },
  train: { letters: ["t", "r", "ai", "n"] },
  chain: { letters: ["ch", "ai", "n"] },
  cook: { letters: ["hard-c", "oo", "k"] },
  book: { letters: ["b", "oo", "k"] },
  brook: { letters: ["b", "r", "oo", "k"] },
  shook: { letters: ["sh", "oo", "k"] },
  hook: { letters: ["h", "oo", "k"] },
  look: { letters: ["l", "oo", "k"] },
  crook: { letters: ["hard-c", "r", "oo", "k"] },
  wood: { letters: ["w", "oo", "d"] },
  stood: { letters: ["s", "t", "oo", "d"] },
  good: { letters: ["g", "oo", "d"] },
  wool: { letters: ["w", "oo", "l"] },
  foot: { letters: ["f", "oo", "t"] },
  crow: { letters: ["hard-c", "r", "long-o", "silent-w"] },
  flow: { letters: ["f", "l", "long-o", "silent-w"] },
  slow: { letters: ["s", "l", "long-o", "silent-w"] },
  snow: { letters: ["s", "n", "long-o", "silent-w"] },
  tail: { letters: ["t", "ai", "l"], sentence: "The dog wagged his tail." },
  sail: { letters: ["s", "ai", "l"], sentence: "The boat had a sail." },
  show: { letters: ["sh", "long-o", "silent-w"] },
  sheep: { letters: ["sh", "long-e", "silent-e", "p"] },
  seek: { letters: ["s", "long-e", "silent-e", "k"] },
  sick: { letters: ["s", "short-i", "silent-c", "k"] },
  seed: { letters: ["s", "long-e", "silent-e", "d"] },
  sole: {
    letters: ["s", "long-o", "l", "silent-e"],
    sentence: "The sole of the shoe was worn down.",
  },
  lice: { letters: ["l", "long-i", "soft-c", "silent-e"] },
  took: { letters: ["t", "oo", "k"] },
  lark: { letters: ["l", "ar", "k"] },
  keel: { letters: ["k", "long-e", "silent-e", "l"] },
  card: { letters: ["hard-c", "ar", "d"] },
  yarn: { letters: ["hard-y", "ar", "n"] },
  bead: { letters: ["b", "long-e", "silent-a", "d"] },
  blow: { letters: ["b", "l", "long-o", "silent-w"] },
  sheet: { letters: ["sh", "long-e", "silent-e", "t"] },
  weed: { letters: ["w", "long-e", "silent-e", "d"] },
  jail: { letters: ["j", "ai", "l"] },
  clear: { letters: ["hard-c", "l", "long-e", "silent-a", "r"] },
  beat: { letters: ["b", "long-e", "silent-a", "t"] },
  clean: { letters: ["hard-c", "l", "long-e", "silent-a", "n"] },
  cheap: { letters: ["ch", "long-e", "silent-a", "p"] },
  brace: { letters: ["b", "r", "long-a", "soft-c", "silent-e"] },
  feet: {
    letters: ["f", "long-e", "silent-e", "t"],
    sentence: "Do your feet smell funny?",
  },
  steep: { letters: ["s", "t", "long-e", "silent-e", "p"] },
  steal: {
    letters: ["s", "t", "long-e", "silent-a", "l"],
    sentence: "it is wrong to steal.",
  },
  fly: { letters: ["f", "l", "long-y"] },
  bull: { letters: ["b", "u-as-oo", "l", "l"] },
  full: { letters: ["f", "u-as-oo", "l", "l"] },
  pull: { letters: ["p", "u-as-oo", "l", "l"] },
  put: { letters: ["p", "u-as-oo", "t"] },
  push: { letters: ["p", "u-as-oo", "sh"] },
  puss: { letters: ["p", "u-as-oo", "s", "s"] },
  bush: { letters: ["b", "u-as-oo", "sh"] },
  cow: { letters: ["hard-c", "ow"] },
  now: { letters: ["n", "ow"] },
  how: { letters: ["h", "ow"] },
  bow: { letters: ["b", "ow"], sentence: "The dancer took a bow." },
  could: { letters: ["hard-c", "ou", "silent-l", "d"] },
  would: { letters: ["w", "ou", "silent-l", "d"] },
  should: { letters: ["sh", "ou", "silent-l", "d"] },
  tear: { letters: ["t", "long-e", "silent-a", "r"] },
  tide: { letters: ["t", "long-i", "d", "silent-e"] },
  tar: { letters: ["t", "ar"] },
  throw: { letters: ["unvoiced-th", "r", "long-o", "silent-w"] },
  stole: { letters: ["s", "t", "long-o", "l", "silent-e"] },
  stain: { letters: ["s", "t", "ai", "n"] },
  chart: { letters: ["ch", "ar", "t"] },
  cheat: { letters: ["ch", "long-e", "silent-a", "t"] },
  eve: { letters: ["long-e", "v", "silent-e"] },
  size: { letters: ["s", "long-i", "z", "silent-e"] },
  gong: { letters: ["g", "intermediate-o", "nasal-n", "silent-g"] },
  dent: { letters: ["d", "short-e", "n", "t"] },
  blade: { letters: ["b", "l", "long-a", "d", "silent-e"] },
  stump: { letters: ["s", "t", "short-u", "m", "p"] },
  flock: { letters: ["f", "l", "short-o", "silent-c", "k"] },
  due: { letters: ["d", "u-as-double-o", "silent-e"] },
  chick: { letters: ["ch", "short-i", "silent-c", "k"] },
  plank: { letters: ["p", "l", "short-a", "nasal-n", "k"] },
  flake: { letters: ["f", "l", "long-a", "k", "silent-e"] },
  keep: { letters: ["k", "long-e", "silent-e", "p"] },
  scale: { letters: ["s", "hard-c", "long-a", "l", "silent-e"] },
  while: { letters: ["wh", "long-i", "l", "silent-e"] },
  chose: { letters: ["ch", "long-o", "hard-s", "silent-e"] },
};

export default words;
