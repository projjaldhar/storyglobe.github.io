import indiaImg from "@/assets/country-india.png";
import germanyImg from "@/assets/country-germany.png";
import ukImg from "@/assets/country-uk.png";
import japanImg from "@/assets/country-japan.png";
import africaImg from "@/assets/country-africa.png";

import storyPanchatantra from "@/assets/story-panchatantra.png";
import storyGrimm from "@/assets/story-grimm.png";
import storyCeltic from "@/assets/story-celtic.png";
import storyMomotaro from "@/assets/story-momotaro.png";
import storyAnansi from "@/assets/story-anansi.png";
import storyLionMouse from "@/assets/story-lion-mouse.png";

export interface Story {
  id: string;
  title: string;
  summary: string;
  origin: string;
  emoji: string;
  moral?: string;
  illustration?: string;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  emoji: string;
  famousBooks: string[];
  birthYear?: string;
}

export interface Country {
  id: string;
  name: string;
  emoji: string;
  color: string;
  image: string;
  description: string;
  lat: number;
  lng: number;
  stories: Story[];
  authors: Author[];
}

export const countries: Country[] = [
  // ── ASIA ─────────────────────────────────────────────────
  {
    id: "india",
    name: "India",
    emoji: "🇮🇳",
    color: "story-warm",
    image: indiaImg,
    description: "A land of ancient wisdom, colorful festivals, and timeless fables passed down for thousands of years.",
    lat: 20.5937,
    lng: 78.9629,
    stories: [
      {
        id: "panchatantra",
        title: "Panchatantra",
        summary: "A collection of ancient Indian animal fables that teach wisdom and life lessons through clever stories about monkeys, crocodiles, turtles, and more. Written over 2,000 years ago, these tales have traveled across the world and inspired stories in many cultures! The Panchatantra contains five books, each teaching different aspects of wise living through interconnected animal tales.",
        origin: "Ancient India (~200 BCE)",
        emoji: "🐒",
        moral: "True wisdom comes from understanding both friends and foes.",
        illustration: storyPanchatantra,
      },
      {
        id: "hitopadesha",
        title: "Hitopadesha",
        summary: "Meaning 'Friendly Advice,' these delightful tales use talking animals to teach children about friendship, cleverness, and making good decisions. Each story is like a puzzle that reveals a wise lesson at the end! Kings, ministers, and even common birds and beasts share their wisdom in these enchanting stories.",
        origin: "Medieval India (~12th century)",
        emoji: "🦚",
        moral: "A friend in need is a friend indeed.",
        illustration: storyPanchatantra,
      },
      {
        id: "jataka-tales",
        title: "Jataka Tales",
        summary: "Stories about the previous lives of the Buddha, where he appears as different animals and people. These tales teach kindness, bravery, and compassion through exciting adventures in forests and kingdoms. From wise monkeys to generous elephants, each tale shows how small acts of goodness can change the world.",
        origin: "Ancient India (~300 BCE)",
        emoji: "🪷",
        moral: "Kindness and compassion are the greatest strengths.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "ruskin-bond",
        name: "Ruskin Bond",
        bio: "A beloved author who writes about life in the Indian hills. His stories about nature, animals, and everyday adventures have enchanted children for over 60 years. Living in the misty mountains of Mussoorie, he finds magic in rain, trees, and the changing seasons.",
        emoji: "🏔️",
        famousBooks: ["The Blue Umbrella", "The Room on the Roof", "Rusty the Boy from the Hills", "The Cherry Tree", "Angry River"],
        birthYear: "1934",
      },
      {
        id: "rk-narayan",
        name: "R. K. Narayan",
        bio: "Creator of the magical fictional town of Malgudi, where ordinary people have extraordinary adventures. His simple, warm stories paint a picture of life in a small Indian town where every character feels like someone you might know.",
        emoji: "📖",
        famousBooks: ["Swami and Friends", "The Guide", "Malgudi Days", "The English Teacher", "The Man-Eater of Malgudi"],
        birthYear: "1906",
      },
    ],
  },
  {
    id: "japan",
    name: "Japan",
    emoji: "🇯🇵",
    color: "story-lavender",
    image: japanImg,
    description: "A land of cherry blossoms, ancient temples, and beautiful folktales about honor, nature, and magical creatures.",
    lat: 36.2048,
    lng: 138.2529,
    stories: [
      {
        id: "momotaro",
        title: "Momotarō (Peach Boy)",
        summary: "A boy born from a giant peach grows up to be brave and kind. With his friends — a dog, a monkey, and a pheasant — he journeys to Ogre Island to defeat the demons and bring back stolen treasure! This is Japan's most beloved folk tale, teaching that friendship and courage can overcome any obstacle.",
        origin: "Japan (Ancient)",
        emoji: "🍑",
        moral: "With loyal friends by your side, you can overcome any challenge.",
        illustration: storyMomotaro,
      },
      {
        id: "tanuki-tales",
        title: "Tanuki Tales",
        summary: "Funny and mischievous stories about the tanuki (raccoon dog), a shapeshifting trickster from Japanese folklore. These playful creatures love to play pranks on humans and have magical powers! Sometimes their tricks go wrong in the funniest ways.",
        origin: "Japan (Ancient)",
        emoji: "🦝",
        moral: "Cleverness without kindness can lead to trouble.",
        illustration: storyMomotaro,
      },
      {
        id: "urashima-taro",
        title: "Urashima Tarō",
        summary: "A kind fisherman rescues a sea turtle and is taken to a magical underwater palace. The Dragon Princess thanks him with wonderful gifts, but when he returns home, he discovers that hundreds of years have passed! A bittersweet tale about the passage of time.",
        origin: "Japan (8th century)",
        emoji: "🐢",
        moral: "Be grateful for the present moment, for time waits for no one.",
        illustration: storyMomotaro,
      },
    ],
    authors: [
      {
        id: "kenji-miyazawa",
        name: "Kenji Miyazawa",
        bio: "A poet and storyteller who wrote magical tales about nature, animals, and the stars. His story 'Night on the Galactic Railroad' takes you on a train ride through the Milky Way! He believed that art and science were connected, and his stories blend wonder with wisdom about the natural world.",
        emoji: "🌌",
        famousBooks: ["Night on the Galactic Railroad", "The Restaurant of Many Orders", "Gauche the Cellist"],
        birthYear: "1896",
      },
    ],
  },
  {
    id: "china",
    name: "China",
    emoji: "🇨🇳",
    color: "story-sunset",
    image: japanImg,
    description: "An ancient civilization with 5,000 years of myths, dragons, wise emperors, and magical journeys written in the stars.",
    lat: 35.8617,
    lng: 104.1954,
    stories: [
      {
        id: "journey-to-the-west",
        title: "Journey to the West",
        summary: "The greatest adventure in Chinese literature! Sun Wukong, the mischievous Monkey King, can transform into 72 different shapes and carries a magical staff that shrinks to the size of a needle. He joins the monk Xuanzang on an epic journey to retrieve sacred scriptures, battling demons and monsters along the way. This story has inspired countless movies, games, and shows!",
        origin: "China (16th century)",
        emoji: "🐒",
        moral: "Even the wildest spirit can be guided by wisdom and compassion.",
        illustration: storyMomotaro,
      },
      {
        id: "legend-white-snake",
        title: "Legend of the White Snake",
        summary: "A beautiful white snake spirit transforms into a woman and falls in love with a kind herbalist named Xu Xian. Their love is tested by a meddling monk who believes humans and spirits should not be together. This timeless story of loyalty, sacrifice, and love has been told for over a thousand years and remains one of China's four great folk tales.",
        origin: "China (Tang Dynasty, ~7th century)",
        emoji: "🐍",
        moral: "True love is worth any sacrifice.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "wu-chengen",
        name: "Wu Cheng'en",
        bio: "The author who wrote down 'Journey to the West,' one of the Four Great Classical Novels of Chinese literature. He spent many years turning ancient folk tales and Buddhist legends into one grand epic adventure. His creation of Sun Wukong, the Monkey King, gave the world one of literature's greatest and most beloved characters.",
        emoji: "📜",
        famousBooks: ["Journey to the West (Xiyouji)"],
        birthYear: "1500",
      },
      {
        id: "cao-xueqin",
        name: "Cao Xueqin",
        bio: "Author of 'Dream of the Red Chamber,' considered the greatest Chinese novel ever written. Set in a vast noble family, it tells the story of love, family, and the passage of time through the eyes of young people growing up. He wrote it from his own memories of a wealthy childhood that faded away.",
        emoji: "🏮",
        famousBooks: ["Dream of the Red Chamber"],
        birthYear: "1715",
      },
    ],
  },

  // ── EUROPE ────────────────────────────────────────────────
  {
    id: "uk",
    name: "United Kingdom",
    emoji: "🇬🇧",
    color: "story-sky",
    image: ukImg,
    description: "Rolling hills, ancient castles, and a rich tradition of legends, detectives, and beloved children's literature.",
    lat: 51.5074,
    lng: -1.5,
    stories: [
      {
        id: "arthurian-legends",
        title: "King Arthur Legends",
        summary: "The legendary tales of King Arthur, the sword Excalibur, the Knights of the Round Table, and the wizard Merlin. These epic stories of courage, friendship, and magic have inspired people for over a thousand years! The quest for the Holy Grail remains one of the greatest adventure stories ever told.",
        origin: "Britain (Medieval)",
        emoji: "⚔️",
        moral: "True leadership means serving others with honor.",
        illustration: storyCeltic,
      },
      {
        id: "peter-pan",
        title: "Peter Pan",
        summary: "The boy who never grows up whisks Wendy, John, and Michael away to Neverland — a magical island filled with pirates, mermaids, fairies, and the Lost Boys. Captain Hook and his crew are always scheming, but Peter Pan and his fairy friend Tinker Bell are always ready for adventure! This classic tale asks: what would you give up to stay young forever?",
        origin: "Scotland, UK (1904)",
        emoji: "🧚",
        moral: "Growing up means responsibility, but wonder should never be lost.",
        illustration: storyCeltic,
      },
    ],
    authors: [
      {
        id: "roald-dahl",
        name: "Roald Dahl",
        bio: "The master of mischief! He created Charlie and the Chocolate Factory, Matilda, The BFG, and many more wonderfully wicked stories. His books are full of humor, imagination, and just the right amount of grossness! He wrote in a tiny hut in his garden, wrapped in a sleeping bag.",
        emoji: "🍫",
        famousBooks: ["Charlie and the Chocolate Factory", "Matilda", "The BFG", "James and the Giant Peach", "The Witches"],
        birthYear: "1916",
      },
      {
        id: "beatrix-potter",
        name: "Beatrix Potter",
        bio: "The creator of Peter Rabbit and many other beloved animal characters! She painted the most beautiful watercolor illustrations and told stories about naughty rabbits, curious kittens, and busy hedgehogs. She also became a champion sheep farmer and conservationist in England's Lake District.",
        emoji: "🐰",
        famousBooks: ["The Tale of Peter Rabbit", "The Tale of Jemima Puddle-Duck", "The Tale of Mrs. Tiggy-Winkle", "The Tale of Squirrel Nutkin"],
        birthYear: "1866",
      },
      {
        id: "jk-rowling",
        name: "J. K. Rowling",
        bio: "The author who introduced the world to Harry Potter, the boy wizard who attends Hogwarts School of Witchcraft and Wizardry. She wrote the first Harry Potter book as a single mum on a tight budget, often writing in coffee shops. Her seven-book series has sold over 600 million copies and been translated into 85 languages!",
        emoji: "⚡",
        famousBooks: ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"],
        birthYear: "1965",
      },
    ],
  },
  {
    id: "ireland",
    name: "Ireland",
    emoji: "🇮🇪",
    color: "story-forest",
    image: ukImg,
    description: "The Emerald Isle — a land of mist, magic, ancient Celtic warriors, and leprechauns hiding pots of gold.",
    lat: 53.4129,
    lng: -8.2439,
    stories: [
      {
        id: "irish-folk-tales",
        title: "Irish Folk Tales",
        summary: "Magical stories of leprechauns hiding pots of gold at the end of rainbows, brave warriors, and enchanted creatures called selkies who can transform from seals to humans. Ireland's stories are full of mystery, wonder, and the magic of the emerald isle!",
        origin: "Ireland (Ancient)",
        emoji: "🍀",
        moral: "Magic is everywhere if you know where to look.",
        illustration: storyCeltic,
      },
      {
        id: "celtic-fairy-tales",
        title: "Celtic Fairy Tales",
        summary: "Ancient stories from Ireland, Scotland, and Wales about brave heroes, magical creatures, and enchanted lands. These tales speak of a world where fairies live in hills and animals can talk! From the mighty Cú Chulainn to the wise salmon of knowledge, these stories are full of adventure.",
        origin: "Celtic Lands (Ancient)",
        emoji: "🧚",
        moral: "Courage and honor are the greatest treasures.",
        illustration: storyCeltic,
      },
    ],
    authors: [
      {
        id: "cs-lewis",
        name: "C. S. Lewis",
        bio: "Born in Belfast, Ireland, he created the magical land of Narnia, where children step through a wardrobe into a world of talking animals, brave adventures, and the great lion Aslan. Seven books of pure wonder! He was best friends with J.R.R. Tolkien, and they used to read their stories to each other.",
        emoji: "🦁",
        famousBooks: ["The Lion, the Witch and the Wardrobe", "Prince Caspian", "The Voyage of the Dawn Treader", "The Horse and His Boy"],
        birthYear: "1898",
      },
      {
        id: "oscar-wilde",
        name: "Oscar Wilde",
        bio: "A brilliant Irish writer whose fairy tales like 'The Happy Prince' and 'The Selfish Giant' have made children cry happy tears for over a century. His stories are beautiful, witty, and full of heart. He believed that a good story should be both entertaining and moving.",
        emoji: "✨",
        famousBooks: ["The Happy Prince", "The Selfish Giant", "The Nightingale and the Rose", "The Star-Child"],
        birthYear: "1854",
      },
    ],
  },
  {
    id: "germany",
    name: "Germany",
    emoji: "🇩🇪",
    color: "story-forest",
    image: germanyImg,
    description: "Deep enchanted forests, fairy tale castles, and magical stories that have captivated children for centuries.",
    lat: 51.1657,
    lng: 10.4515,
    stories: [
      {
        id: "grimms-fairy-tales",
        title: "Grimm's Fairy Tales",
        summary: "The most famous collection of fairy tales in the world! From Cinderella to Rapunzel, Snow White to Hansel and Gretel — these magical stories take you through enchanted forests filled with witches, princes, and talking animals. Originally collected from storytellers across Germany, these tales have been translated into over 160 languages!",
        origin: "Germany (1812)",
        emoji: "🏰",
        moral: "Goodness and bravery always triumph over evil.",
        illustration: storyGrimm,
      },
      {
        id: "struwwelpeter",
        title: "Struwwelpeter",
        summary: "A collection of wonderfully wild cautionary tales about naughty children! With colorful illustrations and rhyming verses, these funny (and sometimes spooky) stories have been making children laugh and gasp since 1845. Each tale teaches a lesson through hilariously exaggerated consequences!",
        origin: "Germany (1845)",
        emoji: "✂️",
        moral: "Actions have consequences — even silly ones!",
        illustration: storyGrimm,
      },
    ],
    authors: [
      {
        id: "brothers-grimm",
        name: "Brothers Grimm",
        bio: "Jacob and Wilhelm Grimm traveled across Germany collecting fairy tales from storytellers. They wrote down over 200 stories, preserving magical tales that might have been lost forever! They were also brilliant scholars who worked on the first German dictionary.",
        emoji: "👬",
        famousBooks: ["Cinderella", "Snow White", "Rapunzel", "Hansel and Gretel", "The Bremen Town Musicians"],
        birthYear: "1785 & 1786",
      },
      {
        id: "michael-ende",
        name: "Michael Ende",
        bio: "Author of 'The Neverending Story' and 'Momo,' he created fantastical worlds where imagination has real power. His books remind us that stories can change the world! He believed that the most important thing in life is to never stop dreaming and imagining.",
        emoji: "📚",
        famousBooks: ["The Neverending Story", "Momo", "Jim Button and Luke the Engine Driver"],
        birthYear: "1929",
      },
    ],
  },

  // ── AFRICA ────────────────────────────────────────────────
  {
    id: "ghana",
    name: "Ghana",
    emoji: "🇬🇭",
    color: "story-sunset",
    image: africaImg,
    description: "A vibrant land of rich oral traditions, where griots (storytellers) have been sharing wisdom through tales for centuries.",
    lat: 7.9465,
    lng: -1.0232,
    stories: [
      {
        id: "anansi-stories",
        title: "Anansi the Spider",
        summary: "Anansi is the cleverest spider in the world! These West African tales follow the tricky spider as he outsmarts animals much bigger and stronger than him using nothing but his wits. Sometimes his tricks backfire — and that's when the funniest stories happen! Anansi stories traveled with enslaved Africans to the Caribbean and Americas, where they continue to be told today.",
        origin: "Ghana, West Africa (Ancient)",
        emoji: "🕷️",
        moral: "Cleverness can overcome strength, but wisdom knows when not to be too clever.",
        illustration: storyAnansi,
      },
      {
        id: "why-stories",
        title: "Why Stories (Pourquoi Tales)",
        summary: "Ever wondered why the leopard has spots or why mosquitoes buzz in people's ears? These creative and funny African tales explain how things in nature came to be! Each story is a wonderful blend of humor, imagination, and observation of the natural world.",
        origin: "West Africa (Ancient)",
        emoji: "🐆",
        moral: "There is always a story behind everything in nature.",
        illustration: storyAnansi,
      },
      {
        id: "lion-and-mouse",
        title: "The Lion and the Mouse",
        summary: "A tiny mouse wakes up a sleeping lion, and the lion lets the mouse go. Later, the mouse saves the lion from a hunter's net by chewing through the ropes! This ancient fable from Aesop's collection reminds us that even the smallest creatures can make the biggest difference.",
        origin: "Aesop's Fables (Ancient)",
        emoji: "🦁",
        moral: "Kindness is never wasted — even the smallest friend can be the greatest help.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "chinua-achebe",
        name: "Chinua Achebe",
        bio: "Known as the 'Father of African Literature,' he told stories that celebrated African culture and traditions. His children's books bring the wisdom of Nigerian folklore to young readers everywhere. He believed that storytelling was the most powerful way to preserve culture and teach future generations.",
        emoji: "🌳",
        famousBooks: ["Things Fall Apart", "How the Leopard Got His Claws", "The Drum", "The Flute"],
        birthYear: "1930",
      },
    ],
  },
  {
    id: "egypt",
    name: "Egypt",
    emoji: "🇪🇬",
    color: "story-warm",
    image: africaImg,
    description: "Land of the Pharaohs and mighty pyramids, where gods walked among humans and magic was real.",
    lat: 26.8206,
    lng: 30.8025,
    stories: [
      {
        id: "ancient-egyptian-myths",
        title: "Gods of Ancient Egypt",
        summary: "In the beginning, the sun god Ra sailed his golden boat across the sky every day and through the underworld every night. Osiris, the kind king of Egypt, was tricked and killed by his jealous brother Set — but his brave wife Isis used her magic to bring him back! Their son Horus grew up to defeat Set and restore justice. These epic stories of gods, magic, and eternal life shaped one of history's greatest civilizations.",
        origin: "Ancient Egypt (~3100 BCE)",
        emoji: "🏺",
        moral: "Love and justice are more powerful than any treachery.",
        illustration: storyLionMouse,
      },
      {
        id: "tales-of-sinuhe",
        title: "The Tale of Sinuhe",
        summary: "One of the world's oldest adventure stories! When the Pharaoh dies, a royal official named Sinuhe panics and flees Egypt. He travels to faraway lands, becomes a great warrior, and even fights a champion in single combat. But all his life, he longs for his homeland. Will he ever find the courage to return to Egypt and face the new Pharaoh? Written on papyrus over 3,900 years ago!",
        origin: "Ancient Egypt (~1900 BCE)",
        emoji: "🌴",
        moral: "Home is always worth returning to, no matter how far you roam.",
        illustration: storyAnansi,
      },
    ],
    authors: [
      {
        id: "naguib-mahfouz",
        name: "Naguib Mahfouz",
        bio: "The first Arab writer to win the Nobel Prize in Literature! His stories bring to life the bustling streets and alleyways of old Cairo, where ordinary people live extraordinary lives. He wrote about Egypt's past and present with great love and wisdom, and his characters feel as real as your neighbors.",
        emoji: "🕌",
        famousBooks: ["The Cairo Trilogy", "Arabian Nights and Days", "Children of Gebelawi", "Akhenaten: Dweller in Truth"],
        birthYear: "1911",
      },
    ],
  },

  // ── NORTH AMERICA ─────────────────────────────────────────
  {
    id: "usa",
    name: "United States",
    emoji: "🇺🇸",
    color: "story-sky",
    image: africaImg,
    description: "A young nation with ancient indigenous legends, wild frontier tall tales, and the birthplace of some beloved storytellers.",
    lat: 39.8283,
    lng: -98.5795,
    stories: [
      {
        id: "native-american-legends",
        title: "Native American Legends",
        summary: "Long before cities and roads, the First Peoples of North America told stories to explain the world around them. Coyote, the trickster, stole fire from the gods and gave it to humans. Raven brought light to a world of darkness. The Great Turtle carries the whole world on its back! These beautiful legends are thousands of years old and teach deep respect for nature, animals, and the stars.",
        origin: "North America (Ancient)",
        emoji: "🦅",
        moral: "We are all connected — to each other and to the natural world.",
        illustration: storyAnansi,
      },
      {
        id: "american-tall-tales",
        title: "American Tall Tales",
        summary: "These wildly exaggerated stories about larger-than-life heroes are uniquely American! Paul Bunyan was so enormous his footprints became the Great Lakes. Pecos Bill rode a tornado like a bucking bronco. John Henry raced a steam-powered drill and won — but at a great cost. These funny, boastful, and sometimes heartbreaking tales capture the spirit of a young, adventurous nation.",
        origin: "United States (19th century)",
        emoji: "🪓",
        moral: "Hard work and determination can move mountains — sometimes literally!",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "mark-twain",
        name: "Mark Twain",
        bio: "The great American storyteller who gave the world Tom Sawyer and Huckleberry Finn! Growing up on the banks of the Mississippi River, he had a front-row seat to one of America's most exciting eras. His stories are full of adventure, humor, and deep truths about freedom and friendship. He said, 'The secret of getting ahead is getting started.'",
        emoji: "🛶",
        famousBooks: ["The Adventures of Tom Sawyer", "Adventures of Huckleberry Finn", "The Prince and the Pauper", "A Connecticut Yankee in King Arthur's Court"],
        birthYear: "1835",
      },
      {
        id: "dr-seuss",
        name: "Dr. Seuss",
        bio: "The inventor of Whoville, Lorax, and the Cat in the Hat! Dr. Seuss (his real name was Theodor Geisel) created rhyming worlds full of made-up words, wacky creatures, and big ideas that even very young children can understand. He believed that nonsense poetry could teach the most serious lessons about kindness and imagination.",
        emoji: "🎩",
        famousBooks: ["The Cat in the Hat", "Green Eggs and Ham", "Oh, the Places You'll Go!", "The Lorax", "How the Grinch Stole Christmas"],
        birthYear: "1904",
      },
    ],
  },
  {
    id: "mexico",
    name: "Mexico",
    emoji: "🇲🇽",
    color: "story-warm",
    image: africaImg,
    description: "A colorful land where ancient Aztec and Maya civilizations left behind incredible myths, legends, and a love of storytelling.",
    lat: 23.6345,
    lng: -102.5528,
    stories: [
      {
        id: "aztec-creation-myths",
        title: "Aztec Creation Myths",
        summary: "The Aztecs believed the world had been created and destroyed four times before! In each age, the gods tried a different sun. In our current age, the sun god required a great sacrifice to rise every morning — which is why the Aztecs believed they had to offer gifts to keep the sun moving across the sky. Quetzalcoatl, the magnificent feathered serpent, was the wisest of all gods and the bringer of civilization, corn, and writing to humanity.",
        origin: "Aztec Empire (~1300s CE)",
        emoji: "☀️",
        moral: "Great things often require great sacrifice.",
        illustration: storyLionMouse,
      },
      {
        id: "la-llorona",
        title: "La Llorona",
        summary: "One of the most famous ghost stories in all of Latin America! La Llorona (the Weeping Woman) is heard crying by rivers late at night, calling for her lost children. The story changes from village to village — in some versions she is a warning to children not to stray near water after dark, in others she is a sorrowful spirit seeking redemption. For centuries, this haunting tale has been whispered around campfires across Mexico and beyond.",
        origin: "Mexico (Colonial era, ~16th century)",
        emoji: "👻",
        moral: "Choices made in sorrow can echo for a very long time.",
        illustration: storyAnansi,
      },
    ],
    authors: [
      {
        id: "elena-poniatowska",
        name: "Elena Poniatowska",
        bio: "One of Mexico's most celebrated writers, she collected the voices of ordinary Mexican people and turned them into extraordinary literature. She has spent her life telling the stories that might otherwise be forgotten — stories of street vendors, earthquake survivors, and everyday heroes. She received Mexico's highest literary prize, the Premio Cervantes.",
        emoji: "🌺",
        famousBooks: ["Here's to You, Jesusa!", "Tinísima", "Nothing, Nobody", "Dear Diego"],
        birthYear: "1932",
      },
      {
        id: "francisco-jimenez",
        name: "Francisco Jiménez",
        bio: "He grew up as a migrant farm worker and turned his childhood experiences into moving stories for children and young adults. His books about the Jiménez family have won many awards and helped millions of readers understand what it means to work hard and dream big, no matter where you come from.",
        emoji: "🌽",
        famousBooks: ["The Circuit", "Breaking Through", "Reaching Out", "Taking Hold"],
        birthYear: "1943",
      },
    ],
  },

  // ── SOUTH AMERICA ─────────────────────────────────────────
  {
    id: "brazil",
    name: "Brazil",
    emoji: "🇧🇷",
    color: "story-forest",
    image: africaImg,
    description: "A land of the Amazon jungle, vibrant carnival, and rich folklore full of magical creatures and mischievous spirits.",
    lat: -14.2350,
    lng: -51.9253,
    stories: [
      {
        id: "saci-perere",
        title: "Saci-Pererê",
        summary: "Brazil's most beloved trickster! Saci is a one-legged boy with a magical red cap who spins around in dust whirlwinds. He hides things, spoils milk, tangles horses' manes, and gives children nightmares — all for fun! To catch him, you must throw his cap or trap him in a jar. But catching Saci is almost impossible... and besides, does anyone really want to? Life would be much less fun without him!",
        origin: "Brazil (Tupi-Guaraní folklore, Ancient)",
        emoji: "🌪️",
        moral: "Even mischief has its place in a world that takes itself too seriously.",
        illustration: storyAnansi,
      },
      {
        id: "legend-of-iara",
        title: "The Legend of Iara",
        summary: "Deep in the Amazon River lives Iara, the most beautiful creature in the world — half woman, half fish, with long green hair and a voice so lovely that no man who hears her can resist. She calls to fishermen and swimmers, drawing them down into her underwater palace. Is she a monster or a queen? The indigenous peoples of the Amazon have told her story for thousands of years to explain the river's mysterious pull.",
        origin: "Brazil (Amazonian indigenous folklore, Ancient)",
        emoji: "🧜",
        moral: "Respect nature's power — beauty can be both wonderful and dangerous.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "monteiro-lobato",
        name: "Monteiro Lobato",
        bio: "The father of Brazilian children's literature! He created the magical Yellow Woodpecker Farm, where children visit a wise grandmother who tells them all about Brazilian folklore. His characters Emília (a talking rag doll) and the Viscount of Sabugosa (a corncob) are beloved by generations of Brazilian children. He believed every child deserved to read exciting, imaginative stories.",
        emoji: "🌻",
        famousBooks: ["Reinações de Narizinho", "The Yellow Woodpecker Farm", "Emília no País da Gramática", "Sítio do Picapau Amarelo"],
        birthYear: "1882",
      },
    ],
  },
  {
    id: "peru",
    name: "Peru",
    emoji: "🇵🇪",
    color: "story-sunset",
    image: africaImg,
    description: "Home of the mighty Inca Empire, soaring Andes mountains, and ancient legends as vast as Machu Picchu itself.",
    lat: -9.1900,
    lng: -75.0152,
    stories: [
      {
        id: "inca-legends",
        title: "Inca Legends",
        summary: "The Inca people believed their first emperor, Manco Cápac, and his sister Mama Ocllo were children of the Sun God Inti himself. They rose from the waters of Lake Titicaca, the highest lake in the world, and traveled until a golden staff sank into the earth — that spot became Cusco, the capital of an empire that stretched 4,000 miles! Their myths tell of the Apus (mountain spirits) who protect their people to this day.",
        origin: "Inca Empire (~1400s CE)",
        emoji: "🌄",
        moral: "We come from the sun and return to the earth — both are sacred.",
        illustration: storyLionMouse,
      },
      {
        id: "andean-folk-tales",
        title: "Andean Folk Tales",
        summary: "High in the Andes mountains, the Quechua and Aymara peoples tell stories of the Ukuku — a mysterious bear-man who lives between the human and spirit worlds. The Fox and the Condor argue about who is cleverer. The magical hummingbird carries prayers to the gods. These tales have been passed down through generations in villages so high that clouds drift below them.",
        origin: "Andes Mountains (Ancient)",
        emoji: "🦙",
        moral: "The world is alive with spirits — treat every creature with respect.",
        illustration: storyAnansi,
      },
    ],
    authors: [
      {
        id: "mario-vargas-llosa",
        name: "Mario Vargas Llosa",
        bio: "Peru's greatest novelist and a winner of the Nobel Prize in Literature! He grew up listening to the stories of Peru's different peoples — coastal fishermen, Andean farmers, Amazon explorers — and wove them into powerful novels. He started writing as a young boy, sneaking stories into his school notebooks.",
        emoji: "✍️",
        famousBooks: ["The Time of the Hero", "The Green House", "Aunt Julia and the Scriptwriter", "The Storyteller"],
        birthYear: "1936",
      },
    ],
  },

  // ── OCEANIA ───────────────────────────────────────────────
  {
    id: "australia",
    name: "Australia",
    emoji: "🇦🇺",
    color: "story-warm",
    image: africaImg,
    description: "A sunburned land of ancient Dreamtime stories, unique wildlife, and one of the world's oldest living cultures.",
    lat: -25.2744,
    lng: 133.7751,
    stories: [
      {
        id: "dreamtime-stories",
        title: "Aboriginal Dreamtime",
        summary: "The Dreamtime is not just a time — it is the very beginning and the ongoing story of the world. The great Ancestor Spirits rose from the earth, created the mountains, rivers, and animals, and then became part of the land itself. Every rock formation, waterhole, and animal has a sacred story. The Rainbow Serpent slithered across the land and carved out the rivers with her body. These stories are the oldest continuing spiritual tradition in the world, over 60,000 years old!",
        origin: "Aboriginal Australia (Ancient, 60,000+ years)",
        emoji: "🌈",
        moral: "The land is alive — we are its caretakers, not its owners.",
        illustration: storyAnansi,
      },
      {
        id: "bunyip-tales",
        title: "The Bunyip",
        summary: "Deep in the billabongs (waterholes) and rivers of Australia lurks a terrifying creature called the Bunyip. Aboriginal peoples described it as having a roar like thunder, tusks like a walrus, and a taste for anyone who got too close to the water at night! Is it a crocodile? A seal? A leftover dinosaur? No one has ever caught one to be sure — which makes the Bunyip perfectly mysterious.",
        origin: "Aboriginal Australia (Ancient)",
        emoji: "🌊",
        moral: "The unknown deserves both respect and curiosity.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "may-gibbs",
        name: "May Gibbs",
        bio: "The creator of Snugglepot and Cuddlepie, two gumnut babies (tiny people who live in gum trees!) who have the most amazing adventures in the Australian bush. Her illustrations of tiny people living among wattles, banksia flowers, and gum nuts are uniquely Australian and utterly magical. She brought the Australian bush to life for generations of children.",
        emoji: "🌿",
        famousBooks: ["Snugglepot and Cuddlepie", "Little Ragged Blossom", "Little Obelia", "Bib and Bub"],
        birthYear: "1877",
      },
      {
        id: "mem-fox",
        name: "Mem Fox",
        bio: "One of Australia's most beloved children's book authors! 'Possum Magic' is Australia's bestselling picture book of all time, telling the story of Grandma Poss who makes little Hush invisible and then can't remember the spell to make her visible again. Her warm, rhythmic writing style has made her books a bedtime favourite around the world.",
        emoji: "🐨",
        famousBooks: ["Possum Magic", "Wilfrid Gordon McDonald Partridge", "Koala Lou", "Time for Bed"],
        birthYear: "1946",
      },
    ],
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    emoji: "🇳🇿",
    color: "story-forest",
    image: japanImg,
    description: "Aotearoa — the Land of the Long White Cloud — where Māori legends of demigods, taniwha, and the stars still echo in the mountains.",
    lat: -40.9006,
    lng: 174.8860,
    stories: [
      {
        id: "maui-legends",
        title: "Māui and the Great Fish",
        summary: "Māui was the smallest of his brothers and the greatest of all demigods! He fished up the North Island of New Zealand from the bottom of the sea using his grandmother's jawbone as a fishhook. He also lassoed the sun with a rope made from his sister's hair to slow it down so people had more daylight. And he was the first to discover fire, tricking the fire goddess Mahuika into giving up her flames. The bravest, cleverest, cheekiest hero in all of Polynesia!",
        origin: "Māori, New Zealand (Ancient)",
        emoji: "🎣",
        moral: "Even the smallest person can reshape the world with enough cleverness and courage.",
        illustration: storyMomotaro,
      },
      {
        id: "taniwha-tales",
        title: "Taniwha Tales",
        summary: "A taniwha is a powerful spirit that lives in rivers, lakes, and the sea. Some taniwha are terrifying monsters that drag people underwater. Others are guardian spirits that protect their people from danger, warning them of floods or leading lost canoes safely home. Every river and bay in New Zealand has its own taniwha story, passed down by the local iwi (tribe) who have lived there for centuries.",
        origin: "Māori, New Zealand (Ancient)",
        emoji: "🐉",
        moral: "The natural world is full of powerful spirits — respect them, and they will protect you.",
        illustration: storyLionMouse,
      },
    ],
    authors: [
      {
        id: "margaret-mahy",
        name: "Margaret Mahy",
        bio: "New Zealand's greatest children's author and a winner of the prestigious Carnegie Medal (twice!). Her books mix everyday New Zealand life with wild magic — haunted houses, shape-shifting children, and family adventures. She worked as a librarian and believed every child deserved access to brilliant books. Her wild imagination and warm humor made her stories irresistible.",
        emoji: "📚",
        famousBooks: ["The Haunting", "The Changeover", "The Great White Man-Eating Shark", "A Lion in the Meadow"],
        birthYear: "1936",
      },
    ],
  },
];
