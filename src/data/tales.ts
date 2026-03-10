export interface Question {
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
}

export interface Tale {
  id: string;
  storyId: string; // matches the story id in stories.ts
  title: string;
  emoji: string;
  content: string;
  pages?: string[];       // story split into page-by-page chunks for the reading view
  questions?: Question[]; // exactly 3 MCQs shown after the last page
}

export const tales: Tale[] = [
  // anansi-stories
  {
    id: "anansi-how-got-stories",
    storyId: "anansi-stories",
    title: "How Anansi Got All the World's Stories",
    emoji: "🕷️",
    content:
      "Long ago, all the world's stories belonged to Nyame, the Sky God. Anansi the spider wanted them desperately, but the price was enormous — a python, a leopard, and a hornets' nest. Everyone laughed at the tiny spider. But Anansi was clever! He tricked the python into letting itself be tied to a branch by pretending to measure it. He lured the leopard into a pit with honey. And he chased the hornets into a gourd by pouring water on them and telling them to shelter inside. Anansi brought all three to Nyame, who was so amazed he gave Anansi every story in the world. That is why, to this day, all tales are called 'spider stories.'",
    pages: [
      "Long ago, all the world's stories belonged to Nyame, the Sky God. Anansi the spider wanted them desperately — but the price was enormous. Nyame demanded three impossible things: a fierce python, a dangerous leopard, and a swarm of stinging hornets. Everyone laughed at the tiny spider. How could he ever do it?",
      "But Anansi was very clever! He tricked the python into being tied to a branch by pretending to measure who was longer. He dug a pit filled with honey and lured the proud leopard right into it. Then he poured water on a hornets' nest and shouted, 'Quick — climb into this gourd to stay dry!' The hornets flew straight in and Anansi sealed the lid!",
      "Anansi brought all three to Nyame, the Sky God. Nyame could hardly believe his eyes. 'Even great kings and warriors have failed this task,' he said. 'From this day forward, all the stories of the world belong to you, Anansi!' And that is why, to this very day, all tales are called Spider Stories. 🕷️",
    ],
    questions: [
      {
        question: "What did Anansi want from Nyame, the Sky God?",
        options: ["A bag of gold", "All the world's stories", "A magical spider web"],
        correctIndex: 1,
      },
      {
        question: "How did Anansi trick the hornets into the gourd?",
        options: ["He used a net", "He poured water and told them to shelter inside", "He sang them to sleep"],
        correctIndex: 1,
      },
      {
        question: "What did Nyame give Anansi as a reward?",
        options: ["A new home in the sky", "Magic powers", "All the stories in the world"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "anansi-and-the-turtle",
    storyId: "anansi-stories",
    title: "Anansi and the Turtle",
    emoji: "🐢",
    content:
      "Anansi had cooked a delicious yam stew and did not want to share. When Turtle arrived hungry from a long journey, Anansi told him he must wash his dusty hands before eating. Turtle walked all the way to the river, washed up, and trudged back — but his feet got dusty again on the walk. Every time Turtle sat down, Anansi sent him back to wash. By the time Turtle gave up, the bowl was empty. Turtle smiled and said nothing. Weeks later, Turtle invited Anansi to a feast underwater. Anansi dove down eagerly, but Turtle told him he must remove his coat first. Anansi's coat was his air! Without it, he floated right back up — and Turtle ate every bite alone.",
    pages: [
      "Anansi had spent all morning cooking a big pot of delicious yam stew. Just as he sat down to eat, there was a knock at the door. It was Turtle, dusty and hungry from a very long journey. Anansi did not want to share — not even one spoonful!",
      "'You are welcome to eat,' said Anansi with a sneaky smile, 'but you must wash your dusty hands first.' Turtle walked all the way to the river, washed carefully, and walked all the way back. But his feet got dusty on the path again! Every time Turtle sat down, Anansi sent him back. By the time Turtle gave up, every last drop of stew was gone.",
      "Weeks later, Turtle invited Anansi to a grand feast — at the bottom of the river! Anansi dove down and saw a wonderful spread of food. 'In my home,' said Turtle calmly, 'we do not eat with our coats on.' But Anansi's coat was his air. Without it, he floated straight back up to the surface — hungry! Some tricks always find their way back. 🐢",
    ],
    questions: [
      {
        question: "Why did Anansi keep sending Turtle to wash his hands?",
        options: ["Turtle's hands were truly very dirty", "So Anansi could eat all the food himself", "It was a rule in Anansi's village"],
        correctIndex: 1,
      },
      {
        question: "Where did Turtle invite Anansi to eat?",
        options: ["In a tall tree", "On top of a mountain", "At the bottom of the river"],
        correctIndex: 2,
      },
      {
        question: "Why couldn't Anansi eat at Turtle's feast?",
        options: ["He was not hungry", "He could not remove his coat — it was his air", "The food was too spicy"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "anansi-wisdom-pot",
    storyId: "anansi-stories",
    title: "Anansi and the Wisdom Pot",
    emoji: "🫙",
    content:
      "Anansi once decided to collect all the wisdom in the world so he could be the smartest creature alive. He gathered wisdom from every corner of the forest into a giant clay pot. Then he tried to climb a tall tree to hide it at the top where no one could reach. But the pot was so huge he could not get a grip on the bark while holding it in front of him. His young son watched and said, 'Father, why not carry the pot on your back?' Anansi was furious — he had all the world's wisdom in the pot, yet his little boy had just been wiser than him! He smashed the pot, and wisdom scattered everywhere. That is why wisdom is shared among all living things.",
    pages: [
      "Anansi had a very big plan. He decided to collect ALL the wisdom in the world and keep it for himself! For many days he wandered the forest, gathering every bit of wisdom he could find and stuffing it into an enormous clay pot. 'Soon I will be the smartest creature alive!' he said.",
      "When the pot was full, Anansi tried to climb a tall tree to hide it at the very top. But the pot was so huge that it kept banging against the trunk. He slipped and slid and could not get a grip. He tried and tried — but he just could not do it.",
      "Anansi's little son was watching. 'Father,' the boy said quietly, 'wouldn't it be easier to carry the pot on your back?' Anansi froze. He had ALL the world's wisdom in his pot — yet his own small son had just been wiser than him! Anansi smashed the pot. Wisdom flew in every direction across the whole world. And that is why no one person has all the wisdom — it belongs to everyone. 🫙",
    ],
    questions: [
      {
        question: "What did Anansi collect and put inside the pot?",
        options: ["All the food in the forest", "All the wisdom in the world", "All the gold he could find"],
        correctIndex: 1,
      },
      {
        question: "Where did Anansi want to hide the pot?",
        options: ["Underground", "In the river", "At the top of a tall tree"],
        correctIndex: 2,
      },
      {
        question: "Who gave Anansi the clever idea of carrying the pot on his back?",
        options: ["His son", "An old owl", "Turtle"],
        correctIndex: 0,
      },
    ],
  },

  // why-stories
  {
    id: "why-leopard-has-spots",
    storyId: "why-stories",
    title: "Why the Leopard Has Spots",
    emoji: "🐆",
    content:
      "Once upon a time, the leopard had a coat as plain and golden as sunshine. He was so proud of it that he boasted to every animal in the forest. One day, the clever hare grew tired of the leopard's bragging and challenged him to a hiding contest. 'Hide anywhere you like,' said Hare, 'and I will find you!' Leopard hid behind a bush, but his golden fur glowed in the shadows and Hare spotted him immediately. Embarrassed, Leopard begged the forest spirit for help. The spirit dipped her fingers in mud and pressed spots all over Leopard's coat so he could blend into dappled shadows. From that day on, Leopard became the greatest hunter — and never bragged again.",
    pages: [
      "Long, long ago, Leopard's coat was completely plain — smooth and golden like the savannah grass. Leopard was very, very proud of it. He walked through the forest every day telling all the animals how beautiful he was. 'There is no coat more magnificent than mine!' he would boast.",
      "Clever Hare grew very tired of the bragging. One day she said, 'Let us play a hiding game! Hide anywhere you like, and I will find you in ten seconds.' Leopard laughed and hid behind a bush — but his bright golden coat shone like a torch in the shadows. Hare found him instantly! Leopard was so embarrassed he wanted to disappear.",
      "That night, Leopard crept to the forest spirit and begged for help. The kind spirit dipped her fingers in dark mud and gently pressed spots all over his golden coat. When morning came, Leopard could hide perfectly in the dappled shade of the trees. He became the greatest hunter in the forest — and he never boasted about his coat again. 🐆",
    ],
    questions: [
      {
        question: "What did Leopard's coat look like before he got his spots?",
        options: ["Striped like a tiger", "Plain and golden", "White and fluffy"],
        correctIndex: 1,
      },
      {
        question: "Who challenged Leopard to the hiding contest?",
        options: ["The lion", "Anansi the spider", "The clever hare"],
        correctIndex: 2,
      },
      {
        question: "Who gave Leopard his spots?",
        options: ["Hare", "The forest spirit", "Anansi"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "why-mosquitoes-buzz",
    storyId: "why-stories",
    title: "Why Mosquitoes Buzz in People's Ears",
    emoji: "🦟",
    content:
      "Long ago, Mosquito told Iguana a ridiculous lie — that he had seen a yam as big as a house. Iguana was so annoyed he put sticks in his ears so he wouldn't have to listen anymore. That made Python think Iguana was plotting something, so Python hid in a hole. Rabbit saw Python disappear and screamed in alarm. Crow warned all the birds, who woke Owl. Owl was so startled she forgot to call the sun to rise. The world stayed dark! Mother Owl would not wake the sun until she found out who started the trouble. Finally, all blame returned to Mosquito. Since then, guilty Mosquito flies in people's ears whispering, 'Is everyone still angry with me?' — and we slap her every time.",
    pages: [
      "One day, Mosquito told Iguana a ridiculous lie: 'I saw a yam as big as a house!' Iguana was so annoyed that he stuck sticks in his ears so he wouldn't have to listen. When Python saw Iguana acting strangely, he got frightened and hid deep in a hole. Rabbit saw Python disappear and screamed in alarm!",
      "Crow heard Rabbit scream and warned all the birds. The birds woke up Owl, who was so startled she forgot her most important job — calling the sun to rise! All night the world stayed dark and cold. All the animals huddled together, very scared. Nobody knew what had happened.",
      "Mother Owl refused to call the sun until she found out who had started all the trouble. One by one, the animals told their stories — until all the blame came back to Mosquito and her silly lie. Since that day, guilty Mosquito buzzes in people's ears asking, 'Is everyone still angry with me?' And that is why we always slap her! 🦟",
    ],
    questions: [
      {
        question: "What silly lie did Mosquito tell Iguana?",
        options: ["That a lion was chasing her", "That she had seen a yam as big as a house", "That it was going to rain for a year"],
        correctIndex: 1,
      },
      {
        question: "What terrible thing happened because Owl forgot her job?",
        options: ["All the animals fell asleep", "The world stayed dark and the sun did not rise", "All the food disappeared"],
        correctIndex: 1,
      },
      {
        question: "Why does Mosquito buzz in people's ears?",
        options: ["She is looking for food", "She wants to sing a song", "She is asking if everyone is still angry with her"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "why-sky-is-far-away",
    storyId: "why-stories",
    title: "Why the Sky is Far Away",
    emoji: "☁️",
    content:
      "Long ago, the sky hung so low over the earth that you could reach up and tear off pieces of cloud to eat. The sky was sweet like honeycomb, and people never needed to farm. But people grew lazy and wasteful. They tore off more sky than they could ever eat, leaving great chunks rotting on the ground. The sky god warned them again and again: 'Take only what you need!' But people did not listen. One day a greedy woman tore off an enormous piece, ate just one bite, and threw the rest away. The sky god was furious. With a mighty rumble, he rose far up beyond anyone's reach. Since that day, people have had to grow their own food and learn to be thankful for every meal.",
    pages: [
      "Long, long ago, the sky hung very low — so low you could reach up and tear off a piece of cloud to eat! The sky tasted sweet, like honeycomb and sugarcane. Nobody needed to plant crops or cook. Whenever you were hungry, you simply reached up and took a piece of sky.",
      "But people grew greedy and lazy. They tore off far more sky than they could ever eat. Great chunks of cloud were left rotting on the ground. The sky god warned the people again and again: 'Please — take only what you need!' But the people laughed and kept on wasting.",
      "One day, a very greedy woman tore off an enormous piece of sky — as big as a house! She took one tiny bite and threw the rest on the ground. The sky god had had enough. With a great BOOM, he rose up far above the earth, beyond anyone's reach. Since that day, people must plant seeds, water crops, and work hard for every meal. And we must always be grateful for the food we have. ☁️",
    ],
    questions: [
      {
        question: "What could people eat long ago by reaching up?",
        options: ["Fruit from the clouds", "Pieces of the sky", "Rain drops of honey"],
        correctIndex: 1,
      },
      {
        question: "Why was the sky god angry with the people?",
        options: ["They were too noisy", "They wasted sky food and left it to rot", "They forgot to say thank you"],
        correctIndex: 1,
      },
      {
        question: "What must people do now that the sky is far away?",
        options: ["Climb very tall trees to reach it", "Ask birds to bring them food", "Grow their own food and work hard"],
        correctIndex: 2,
      },
    ],
  },

  // panchatantra
  {
    id: "monkey-and-crocodile",
    storyId: "panchatantra",
    title: "The Monkey and the Crocodile",
    emoji: "🐊",
    content:
      "A cheerful monkey lived on a rose-apple tree by the river, and he shared the sweetest fruits with a friendly crocodile every day. The crocodile's wife grew jealous. 'If the fruit makes you so healthy, imagine how delicious the monkey's heart must be!' she said. The crocodile returned and invited the monkey for a swim to his home. Halfway across the river, he confessed the terrible plan. The monkey's heart hammered — but he stayed calm. 'Oh dear!' he cried. 'I left my heart hanging on the tree! We must go back!' The crocodile turned around. The moment they reached the bank, the monkey leapt to safety. 'A real friend would never betray you,' he called down. 'Goodbye forever!' And he never trusted that crocodile again.",
  },
  {
    id: "lion-and-hare",
    storyId: "panchatantra",
    title: "The Lion and the Hare",
    emoji: "🐇",
    content:
      "A mighty lion terrorized the jungle, eating animals every day without mercy. Finally the animals made a deal: one animal would come to the lion each day willingly. When it was the tiny hare's turn, she walked slowly and arrived very late. The furious lion roared. 'I was delayed by another lion who stole your food!' said Hare calmly. 'Show me this thief!' the lion bellowed. Hare led him to a deep well and pointed down. The lion saw his own reflection glaring back up. Certain it was a rival, he roared and leaped in — and was never seen again. The jungle celebrated. That day the animals learned that a quick mind is mightier than sharp claws.",
  },
  {
    id: "crow-and-snake",
    storyId: "panchatantra",
    title: "The Crow and the Snake",
    emoji: "🐦‍⬛",
    content:
      "A pair of crows built a beautiful nest in a tree, but a huge, wicked snake lived at the roots and ate their eggs every season. The crows were heartbroken. They went to their friend the jackal for advice. 'Go to the lake where the princess bathes,' said the jackal. 'Steal her necklace and drop it into the snake's hole.' The crows did exactly that. The king's guards came searching and found the precious necklace in the snake's hole. They dug it out — and killed the snake. The crows were free at last and raised many happy families in that tree. Remember: sometimes a clever plan can solve what strength cannot.",
  },

  // hitopadesha
  {
    id: "greedy-dog",
    storyId: "hitopadesha",
    title: "The Greedy Dog",
    emoji: "🐕",
    content:
      "A dog found a juicy bone at the butcher's market and ran off happily, his tail wagging with pride. He trotted across a narrow wooden bridge over a sparkling stream. Looking down, he saw another dog staring up at him — also holding a bone that looked even bigger and meatier than his own! The dog growled and barked, determined to grab that other bone too. The moment he opened his mouth, his own bone dropped into the water with a loud splash and sank to the bottom. He stared at the ripples. The 'other dog' was simply his own reflection. He had lost his lovely bone for nothing at all. Greed, he learned, turns plenty into nothing.",
  },
  {
    id: "foolish-heron",
    storyId: "hitopadesha",
    title: "The Foolish Heron",
    emoji: "🦢",
    content:
      "A tall heron lived beside a pond full of fish. But the heron was terribly fussy. Each morning he would stand at the water's edge turning down every fish that swam by. 'Too small,' he would mutter. 'Too bony. Too dark. Too plain.' He waited for the perfect fish. Days passed, and the fish grew wise to him and hid in the deep mud. The heron grew hungrier and hungrier. Finally, desperate with starvation, he snapped at a tiny crab — and the crab pinched his long neck so hard the heron cried out in pain. He had waited for perfection and ended up with nothing good at all. Those who are too choosy often lose everything.",
  },

  // jataka-tales
  {
    id: "monkey-king",
    storyId: "jataka-tales",
    title: "The Monkey King",
    emoji: "🐒",
    content:
      "A great monkey king led eighty thousand monkeys in a mango forest beside a river. He warned them never to let any mango fall into the water, lest humans discover their paradise. But one hidden mango escaped and floated downstream to the human king's palace. The human king tasted it and immediately sent hunters to find the tree. They surrounded the forest. To save his people, the monkey king stretched his body like a bridge across the river so all eighty thousand monkeys could run across his back to safety. His back was broken by the weight, but he did not cry out. The human king, moved to tears by such selfless love, honored the monkey king until his last breath.",
  },
  {
    id: "banyan-deer",
    storyId: "jataka-tales",
    title: "The Banyan Deer",
    emoji: "🦌",
    content:
      "In an ancient forest lived a golden deer who was king of a great herd. A human king loved to hunt them, and the deer king made a wise agreement: each day, one deer would go peacefully to the palace kitchen so the others could live in safety. One terrible day, a pregnant doe was chosen. She begged the deer king to spare her until her fawn was born. The deer king could not send another in her place, so he walked to the palace himself and lay down before the king's sword. The human king was so astonished by this bravery and compassion that he vowed never to hunt deer again — and later extended his mercy to all animals.",
  },
  {
    id: "wise-elephant",
    storyId: "jataka-tales",
    title: "The Wise Elephant",
    emoji: "🐘",
    content:
      "A noble white elephant lived peacefully in the forest, caring for his blind mother every day. One afternoon, a lost king stumbled into the forest, exhausted and terrified. The elephant guided the king gently back to his kingdom, lifting him carefully with his trunk across rivers and steep hillsides. The grateful king told his people about the elephant, and a greedy minister plotted to capture the magnificent creature for the royal stable. When elephant catchers arrived, the elephant came willingly — but once he reached the city he refused to eat or drink. He grew thin and sad. The king visited and asked why. 'My mother is blind and starving without me,' the elephant said softly. The king wept and set him free at once.",
  },

  // grimms-fairy-tales
  {
    id: "cinderella",
    storyId: "grimms-fairy-tales",
    title: "Cinderella",
    emoji: "👠",
    content:
      "Cinderella lived with her cruel stepmother and two mean stepsisters who made her cook, clean, and sleep by the ashes. When the prince announced a royal ball, the stepsisters dressed in silk and left her behind. But Cinderella's fairy godmother appeared and transformed a pumpkin into a gleaming coach, mice into horses, and Cinderella's rags into a breathtaking golden gown — with tiny glass slippers. At the ball, the prince danced with no one else. At the stroke of midnight, Cinderella fled, leaving one glass slipper on the palace steps. The prince searched every house in the kingdom. When the slipper fit Cinderella's foot perfectly, he knew he had found her. They were married and lived joyfully ever after.",
  },
  {
    id: "hansel-and-gretel",
    storyId: "grimms-fairy-tales",
    title: "Hansel and Gretel",
    emoji: "🏠",
    content:
      "Hansel and Gretel were left in the deep forest by their frightened father and wicked stepmother. Hansel dropped pebbles to mark the path home — but the second time, only breadcrumbs, which the birds ate. Lost and starving, the children found a house built entirely of gingerbread, candy, and cake. They ate hungrily until a withered witch invited them inside. The witch locked Hansel in a cage and planned to cook him for supper. But clever Gretel pretended not to understand the witch's instructions. When the witch bent down to check the oven herself, Gretel shoved her inside and slammed the door. The children found the witch's treasure, ran home, and their stepmother was gone. Their father embraced them with tears of joy.",
  },
  {
    id: "rapunzel",
    storyId: "grimms-fairy-tales",
    title: "Rapunzel",
    emoji: "👸",
    content:
      "A sorceress locked a girl named Rapunzel in a tall tower with no door and no stairs — only a window at the very top. Every day the sorceress called out, 'Rapunzel, Rapunzel, let down your golden hair!' and climbed up the long braided rope. One day a prince heard Rapunzel singing and called the same words. He climbed up and they fell in love. When the sorceress discovered him, she cut off Rapunzel's hair and banished her to a desert. She threw the prince from the tower, and thorns blinded him. He wandered for years until he heard Rapunzel's voice. Her tears of joy fell on his eyes — and he could see again. Together at last, they lived in happiness far from the tower.",
  },

  // struwwelpeter
  {
    id: "shock-headed-peter",
    storyId: "struwwelpeter",
    title: "Shock-Headed Peter",
    emoji: "✂️",
    content:
      "Peter would not let anyone cut his fingernails or comb his wild, tangled hair. Year after year they grew and grew. His nails curled into long twisting spirals. His hair rose up in a magnificent, towering shock around his head like a haystack caught in a gale. People would stop in the street and point. His mother pleaded. His father offered him cake. Still Peter refused, crossing his arms and turning away with a terrific frown. So Peter grew into the most magnificently unkempt boy anyone had ever seen — a boy so legendary in his messiness that children told stories about him for generations, using his name as a warning to brush hair and trim nails. Sometimes a cautionary tale is the most lasting tale of all.",
  },
  {
    id: "little-suck-a-thumb",
    storyId: "struwwelpeter",
    title: "Little Suck-a-Thumb",
    emoji: "👍",
    content:
      "Conrad's mama warned him every single morning before she left for the market: 'Whatever you do, do NOT suck your thumb!' Conrad nodded — but the moment she was gone, the thumb went straight into his mouth. Suddenly the door flew open and in rushed the Great Long-Legged Scissor-Man, waving his enormous shining shears with a terrible snip-snip-snip sound! He was very tall and very quick. Before Conrad could pull his hand away — SNIP! Both thumbs were gone. Conrad howled. When Mama returned and found him crying, she shook her head sadly and pointed to the scissors on the floor. 'I told you so,' she said quietly. And Conrad never, ever sucked his thumbs again.",
  },

  // irish-folk-tales
  {
    id: "leprechaun-gold",
    storyId: "irish-folk-tales",
    title: "The Leprechaun's Gold",
    emoji: "🍀",
    content:
      "Young Bridget was walking through a meadow when she heard the tiny tap-tap-tapping of a cobbler's hammer beneath a mushroom. She reached down and caught a leprechaun no bigger than her hand, stitching a tiny shoe. 'I've caught you fair and true!' she cried. 'Now take me to your pot of gold!' The leprechaun scowled but agreed. He led her through winding paths to a field of a thousand identical thistles and pointed to one. 'The gold is buried under that one!' Bridget tied her ribbon around it and ran for a spade. When she returned, every single thistle in the enormous field had a red ribbon tied around it. She looked and looked — but the leprechaun was long gone, laughing in the hills.",
  },
  {
    id: "selkie-wife",
    storyId: "irish-folk-tales",
    title: "The Selkie Wife",
    emoji: "🦭",
    content:
      "A lonely fisherman once found a shimmering seal-skin on the rocks by the sea. Nearby sat a beautiful woman with sad grey eyes, searching frantically. The fisherman knew she was a selkie — a seal who could become human on land. He hid the skin so she could not return to the sea, and she became his wife and bore him three children whom she loved dearly. But every evening she walked to the cliff edge and stared out at the grey waves. One day her youngest child found the hidden skin and showed it to his mother. She knelt, kissed each child gently, and pulled the skin around her shoulders. With tears streaming down her face, she slipped beneath the waves — returning at last to her true home.",
  },

  // celtic-fairy-tales
  {
    id: "fionn-salmon-knowledge",
    storyId: "celtic-fairy-tales",
    title: "Fionn and the Salmon of Knowledge",
    emoji: "🐟",
    content:
      "In Ireland long ago, there swam a magical Salmon of Knowledge in the River Boyne. It was said that whoever ate the first bite of that salmon would gain all the wisdom in the world. The poet Finnegas had been trying to catch it for seven years. At last it came to his hook! He gave it to his young apprentice Fionn to cook, warning him not to taste a single bite. While turning the fish, Fionn burned his thumb on a bubble of hot fat and instinctively stuck it in his mouth to cool it. In that instant, all the wisdom of the world flooded into him. Finnegas looked into the boy's shining eyes and knew. 'The salmon was meant for you,' he said gently, and from that day Fionn became the wisest hero in Ireland.",
  },
  {
    id: "children-of-lir",
    storyId: "celtic-fairy-tales",
    title: "The Children of Lir",
    emoji: "🦢",
    content:
      "King Lir had four beloved children — Fionnuala, Aodh, Fiachra, and Conn. Their stepmother, Aoife, was bitterly jealous of Lir's love for them. She drove them to a lake and cast a terrible spell, transforming them into swans for nine hundred years. Though they kept their human voices, they could never again take human form. They sang the most heartbreakingly beautiful songs across the lakes and seas of Ireland, and all who heard them wept with wonder and sorrow. When at last the nine hundred years ended and a saint's bell broke the enchantment, the children were very old. They were baptized, and with peaceful smiles they passed from the world — finally free, together, and at rest.",
  },

  // arthurian-legends
  {
    id: "sword-in-the-stone",
    storyId: "arthurian-legends",
    title: "The Sword in the Stone",
    emoji: "⚔️",
    content:
      "In the courtyard of a great cathedral stood a mysterious stone with a gleaming sword buried deep inside it. Written in golden letters were the words: 'Whosoever pulls this sword from this stone is the rightful king of all Britain.' Every knight in the land tried with all his might — grunting, straining, turning red in the face — but not one could move it even a hair's width. Young Arthur had come to the tournament only to fetch a sword for his older brother. He found the courtyard empty, spotted the sword, and pulled it out easily, as though it had been waiting just for him. The crowd gasped. Merlin the wizard stepped forward, eyes bright. 'The king,' he said quietly, 'has revealed himself at last.'",
  },
  {
    id: "lady-of-the-lake",
    storyId: "arthurian-legends",
    title: "The Lady of the Lake",
    emoji: "🏞️",
    content:
      "After his first sword broke in battle, King Arthur and Merlin walked to the edge of a still, silver lake. Out of the water rose a pale arm clothed in white samite, holding a magnificent sword aloft. Then a beautiful woman appeared, walking calmly across the surface of the water toward them. She was Viviane, the Lady of the Lake. She told Arthur the sword was called Excalibur and was his to wield — but he must return it when the time came. Arthur rowed a small boat to the middle of the lake and took the sword in both hands. It shone in the grey morning light like captured lightning. And though many battles lay ahead, Arthur always knew that Excalibur was not truly his to keep — only to borrow from the magic of the world.",
  },
  {
    id: "quest-holy-grail",
    storyId: "arthurian-legends",
    title: "The Quest for the Holy Grail",
    emoji: "🏆",
    content:
      "One evening at Camelot, a vision of the Holy Grail — a sacred cup said to grant immortality and healing — shimmered through the great hall and vanished. Every knight leapt up and swore to find it. They rode out in all directions across Britain and into strange, enchanted lands. Most failed. Sir Lancelot, bravest of all, came closest but was turned away for his pride. Only the purest knight, Sir Galahad, followed every clue with a humble heart and true courage. After years of searching, he reached the sacred chapel alone and lifted the Grail in trembling hands. Warmth and golden light filled him completely. The quest was over. Galahad was at peace — and in that moment understood that the journey had always mattered more than the prize.",
  },

  // momotaro
  {
    id: "peach-boy",
    storyId: "momotaro",
    title: "The Peach Boy",
    emoji: "🍑",
    content:
      "An old woman washing clothes by the river saw an enormous peach floating toward her. She carried it home for supper. When she and her husband went to cut it open, it split apart by itself — and inside sat a rosy, laughing baby boy! They named him Momotaro, Peach Boy, and raised him with great love. Momotaro grew strong and kind-hearted. When he learned that terrible Oni demons on a distant island were stealing treasure and frightening villagers, he strapped on his armor, filled a bag with the world's best millet dumplings, and set off bravely. His father wept with pride. His mother tucked an extra scarf around his shoulders. 'Come back safe,' she whispered. 'And be good.' Momotaro smiled and walked toward the horizon.",
  },
  {
    id: "battle-oni-island",
    storyId: "momotaro",
    title: "The Battle of Oni Island",
    emoji: "👹",
    content:
      "On his journey to Oni Island, Momotaro met a hungry dog, a clever monkey, and a proud pheasant. He shared his magical millet dumplings with each one, and they pledged to follow him. When the team reached the island's iron gate, the pheasant flew over the walls to peck the Oni guards' heads, the dog bit at their heels, and the monkey threw stones from above. In all the chaos, Momotaro leapt over the gate and fought the Oni king himself! The king begged for mercy and promised to return everything stolen. Momotaro tied the Oni leader with a rope and led him back across the sea. The village cheered and cried with joy. Momotaro bowed modestly and thanked his three brave friends.",
  },

  // tanuki-tales
  {
    id: "tanuki-teakettle",
    storyId: "tanuki-tales",
    title: "The Tanuki Teakettle",
    emoji: "🫖",
    content:
      "A priest found a tanuki — a mischievous raccoon-dog — and, not knowing what it was, sold it to a tinker. That night, the teakettle the tanuki had transformed into began sprouting a furry tail and four little legs! It shuffled across the floor and the tinker shrieked in fright. But the tanuki teakettle bowed politely and offered to help. It had learned to walk a tightrope! The tinker set up a little traveling show: 'See the Amazing Dancing Teakettle!' People came from every village to watch, laughing and clapping. The tinker made enough money to retire comfortably, and the tanuki — who had grown quite fond of performing — eventually changed back and trotted into the forest with a satisfied grin.",
  },
  {
    id: "grateful-tanuki",
    storyId: "tanuki-tales",
    title: "The Grateful Tanuki",
    emoji: "🦝",
    content:
      "A young farmer found a tanuki caught in a trap in the bamboo grove. Most people would have sold the creature at market, but the farmer had a gentle heart. He carefully opened the trap and set the tanuki free. The tanuki bowed its round head three times and disappeared into the shadows. That harvest was the most bountiful the farmer had ever seen — his fields glowed golden and his fruit trees bent low under the weight of their fruit. One evening, he saw a light in his barn. He crept to the door and peeked in. The tanuki was inside, using its magic to transform fallen leaves into coins and stacking them neatly in the corner. It spotted the farmer, winked, and bounded away into the moonlit woods.",
  },

  // urashima-taro
  {
    id: "kindness-of-urashima",
    storyId: "urashima-taro",
    title: "The Kindness of Urashima",
    emoji: "🎣",
    content:
      "Urashima Taro was a young fisherman with a laugh as warm as summer. One morning he found some children poking a small sea turtle with sticks on the beach. He shooed the children away and carried the turtle gently to the water, watching until it disappeared beneath the waves. The next day, a magnificent turtle surfaced beside his boat. 'I am the turtle you saved,' it said. 'The Dragon Princess of the sea palace wishes to thank you. Please, climb on my back.' Urashima had never heard a turtle speak before. He looked at the sea, shimmering blue and gold in the morning light, and thought of his parents waiting at home. Then he looked at the turtle's earnest ancient eyes — and slowly, he smiled and climbed on.",
  },
  {
    id: "dragon-palace",
    storyId: "urashima-taro",
    title: "The Dragon Palace",
    emoji: "🐉",
    content:
      "Beneath the waves lay Ryugu-jo, the Dragon Palace, shining with coral and pearl. The beautiful Dragon Princess Otohime welcomed Urashima with a great feast. Every day in the palace was a joy — music, dancing, food more delicious than dreams. But after what felt like three days, Urashima grew homesick. He asked to leave. Otohime was sad but gave him a lacquered box called a tamatebako. 'Never open it,' she said. When Urashima surfaced, his village was gone — replaced by strange new buildings. Three hundred years had passed in what felt like three days! Heartbroken and confused, he opened the forbidden box. White smoke curled out and instantly he became a frail old man. The secret of time had been in the box all along.",
  },

  // lion-and-mouse
  {
    id: "lion-and-mouse-tale",
    storyId: "lion-and-mouse",
    title: "The Lion and the Mouse",
    emoji: "🦁",
    content:
      "A great golden lion was sleeping under a shady acacia tree when a tiny mouse ran across his enormous paw. The lion woke with a roar, snatched the mouse up, and opened his jaws. 'Please!' squeaked the mouse. 'Spare me and someday I will help you!' The lion laughed so hard at the idea of such a tiny creature ever helping the King of Beasts that he set the mouse free just for the joke of it. Days later, the lion walked into a hunter's net hidden in the grass. He roared and struggled but only tangled himself tighter. The little mouse heard him and came running. She gnawed and gnawed at the thick ropes until they snapped apart one by one. The lion walked free and bowed his great golden head to his tiny friend.",
    pages: [
      "A great golden lion was sleeping peacefully under a shady acacia tree. Suddenly a tiny mouse ran right across his enormous nose! The lion woke with a thunderous ROAR. He snatched up the trembling mouse in his giant paw and opened his jaws wide.",
      "'Please spare me, great Lion!' squeaked the mouse. 'Let me go and one day I promise I will help you!' The lion burst out laughing. How could a tiny mouse ever help the King of all Beasts? He was laughing so hard that he simply opened his paw and let her scurry away.",
      "A few days later, the lion stepped into a hunter's net hidden in the tall grass. He roared and struggled, but the ropes only pulled tighter. The little mouse heard his roars and came running as fast as her tiny legs could carry her. She gnawed through the ropes one by one — snap, snap, snap! — until the lion walked free. He bowed his great golden head. No friend is ever too small. 🦁",
    ],
    questions: [
      {
        question: "Why did the lion let the mouse go free?",
        options: ["He was not hungry", "He laughed so hard at the idea of a mouse helping him", "The mouse promised him a gift"],
        correctIndex: 1,
      },
      {
        question: "What trapped the lion in the forest?",
        options: ["A deep hole", "A fallen tree", "A hunter's net hidden in the grass"],
        correctIndex: 2,
      },
      {
        question: "How did the mouse free the lion?",
        options: ["By calling other animals for help", "By gnawing through the ropes", "By scaring the hunter away"],
        correctIndex: 1,
      },
    ],
  },
];
