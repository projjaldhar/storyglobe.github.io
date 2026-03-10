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
        bio: "A beloved author who writes about life in the Indian hills. His stories about nature, animals, and everyday adventures have enchanted children for over 60 years. Living in the misty mountains of Mussoorie, he finds magic in rain, trees, and the changing seasons. He loves his cat, long walks, and watching the clouds go by!",
        emoji: "🏔️",
        famousBooks: ["The Blue Umbrella", "The Room on the Roof", "Rusty the Boy from the Hills", "The Cherry Tree", "Angry River"],
        birthYear: "1934",
      },
      {
        id: "rk-narayan",
        name: "R. K. Narayan",
        bio: "Creator of the magical fictional town of Malgudi, where ordinary people have extraordinary adventures. His simple, warm stories paint a picture of life in a small Indian town where every character feels like someone you might know. From the mischievous Swami to the wise Margayya, his characters stay with you forever!",
        emoji: "📖",
        famousBooks: ["Swami and Friends", "The Guide", "Malgudi Days", "The English Teacher", "The Man-Eater of Malgudi"],
        birthYear: "1906",
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
        bio: "Jacob and Wilhelm Grimm traveled across Germany collecting fairy tales from storytellers. They wrote down over 200 stories, preserving magical tales that might have been lost forever! They were also brilliant scholars who worked on the first German dictionary. Their fairy tales have become part of the world's shared imagination.",
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
  {
    id: "uk-ireland",
    name: "UK & Ireland",
    emoji: "🇬🇧",
    color: "story-sky",
    image: ukImg,
    description: "Rolling green hills, ancient castles, and a rich tradition of fairy tales, legends, and beloved children's literature.",
    lat: 54.3781,
    lng: -3.4360,
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
        summary: "Ancient stories from Scotland, Wales, and Ireland about brave heroes, magical creatures, and enchanted lands. These tales speak of a world where fairies live in hills and animals can talk! From the mighty Cú Chulainn to the wise salmon of knowledge, these stories are full of adventure.",
        origin: "Celtic Lands (Ancient)",
        emoji: "🧚",
        moral: "Courage and honor are the greatest treasures.",
        illustration: storyCeltic,
      },
      {
        id: "arthurian-legends",
        title: "King Arthur Legends",
        summary: "The legendary tales of King Arthur, the sword Excalibur, the Knights of the Round Table, and the wizard Merlin. These epic stories of courage, friendship, and magic have inspired people for over a thousand years! The quest for the Holy Grail remains one of the greatest adventure stories ever told.",
        origin: "Britain (Medieval)",
        emoji: "⚔️",
        moral: "True leadership means serving others with honor.",
        illustration: storyCeltic,
      },
    ],
    authors: [
      {
        id: "roald-dahl",
        name: "Roald Dahl",
        bio: "The master of mischief! He created Charlie and the Chocolate Factory, Matilda, The BFG, and many more wonderfully wicked stories. His books are full of humor, imagination, and just the right amount of grossness! He wrote in a tiny hut in his garden, wrapped in a sleeping bag, using a special board on his lap.",
        emoji: "🍫",
        famousBooks: ["Charlie and the Chocolate Factory", "Matilda", "The BFG", "James and the Giant Peach", "The Witches"],
        birthYear: "1916",
      },
      {
        id: "cs-lewis",
        name: "C. S. Lewis",
        bio: "Creator of the magical land of Narnia, where children step through a wardrobe into a world of talking animals, brave adventures, and the great lion Aslan. Seven books of pure wonder! He was best friends with J.R.R. Tolkien, and they used to read their stories to each other.",
        emoji: "🦁",
        famousBooks: ["The Lion, the Witch and the Wardrobe", "Prince Caspian", "The Voyage of the Dawn Treader", "The Horse and His Boy"],
        birthYear: "1898",
      },
      {
        id: "beatrix-potter",
        name: "Beatrix Potter",
        bio: "The creator of Peter Rabbit and many other beloved animal characters! She painted the most beautiful watercolor illustrations and told stories about naughty rabbits, curious kittens, and busy hedgehogs. She also became a champion sheep farmer and conservationist in England's Lake District.",
        emoji: "🐰",
        famousBooks: ["The Tale of Peter Rabbit", "The Tale of Jemima Puddle-Duck", "The Tale of Mrs. Tiggy-Winkle", "The Tale of Squirrel Nutkin"],
        birthYear: "1866",
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
    id: "west-africa",
    name: "West Africa",
    emoji: "🇬🇭",
    color: "story-sunset",
    image: africaImg,
    description: "A vibrant land of rich oral traditions, where griots (storytellers) have been sharing wisdom through tales for centuries.",
    lat: 9.0820,
    lng: -8.7832,
    stories: [
      {
        id: "anansi-stories",
        title: "Anansi the Spider",
        summary: "Anansi is the cleverest spider in the world! These West African tales follow the tricky spider as he outsmarts animals much bigger and stronger than him using nothing but his wits. Sometimes his tricks backfire — and that's when the funniest stories happen! Anansi stories traveled with enslaved Africans to the Caribbean and Americas, where they continue to be told today.",
        origin: "West Africa (Ancient)",
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
];
