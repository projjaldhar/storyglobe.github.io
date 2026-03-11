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
    pages: [
      "A cheerful monkey lived on a rose-apple tree by the river and shared his sweetest fruits with a crocodile every single day. They became the best of friends. But the crocodile's wife grew jealous and greedy. 'If the fruit is so good, imagine how delicious that monkey's heart must be!' she hissed. 'Bring it to me!' The crocodile felt terrible — but he obeyed.",
      "The crocodile returned to the tree and invited his friend for a swim to his riverside home. The monkey climbed onto the crocodile's back happily. But halfway across the river, the crocodile confessed the awful plan. The monkey's heart hammered with fear — yet he stayed very, very calm.",
      "'Oh no!' cried the monkey. 'I left my heart hanging safely on the tree! We must go back and fetch it!' The foolish crocodile turned around at once. The moment they reached the bank, the monkey leapt high into the branches to safety. 'A true friend never betrays you,' he called down. 'Goodbye forever, crocodile!' 🐊",
    ],
    questions: [
      {
        question: "What did the monkey share with the crocodile every day?",
        options: ["River fish", "Rose-apple fruits", "Honey from a beehive"],
        correctIndex: 1,
      },
      {
        question: "Why did the crocodile's wife want the monkey's heart?",
        options: ["She was angry at the monkey", "She thought it would taste delicious because of all the sweet fruit", "She wanted to use it as medicine"],
        correctIndex: 1,
      },
      {
        question: "How did the monkey trick the crocodile into going back to shore?",
        options: ["He pretended to fall into the water", "He said he had left his heart hanging on the tree", "He called for help from other animals"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "lion-and-hare",
    storyId: "panchatantra",
    title: "The Lion and the Hare",
    emoji: "🐇",
    content:
      "A mighty lion terrorized the jungle, eating animals every day without mercy. Finally the animals made a deal: one animal would come to the lion each day willingly. When it was the tiny hare's turn, she walked slowly and arrived very late. The furious lion roared. 'I was delayed by another lion who stole your food!' said Hare calmly. 'Show me this thief!' the lion bellowed. Hare led him to a deep well and pointed down. The lion saw his own reflection glaring back up. Certain it was a rival, he roared and leaped in — and was never seen again. The jungle celebrated. That day the animals learned that a quick mind is mightier than sharp claws.",
    pages: [
      "A mighty lion terrorized the jungle, eating whichever animal he pleased every day without mercy. Finally all the animals made him a deal: one animal would come to the lion each day peacefully. When the tiny hare's turn arrived, she walked as slowly as she could and reached the lion very, very late.",
      "The lion roared in fury. But the clever hare stayed calm. 'I am sorry, great Lion!' she said. 'I was stopped by another lion who stole the food meant for you! He is enormous and says this jungle belongs to him!' 'SHOW ME THIS THIEF!' bellowed the lion, trembling with rage.",
      "The hare led the lion to a deep well and pointed down. The lion peered in and saw a furious lion glaring right back — his own reflection! Certain it was a rival, he gave a mighty roar and leaped in. He was never seen again. The jungle celebrated and cheered. A quick mind, the animals agreed, is always mightier than sharp claws. 🐇",
    ],
    questions: [
      {
        question: "What deal did the animals make with the lion?",
        options: ["One animal would come to him peacefully each day", "They would build him a grand palace", "They would share their fruit with him"],
        correctIndex: 0,
      },
      {
        question: "What did Hare tell the lion to explain her late arrival?",
        options: ["She said she had been sleeping", "She said a flood had blocked the road", "She said another lion stole the food meant for him"],
        correctIndex: 2,
      },
      {
        question: "What did the lion see when he looked into the deep well?",
        options: ["A river of gold", "His own reflection, which he thought was a rival lion", "The hare hiding below"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "crow-and-snake",
    storyId: "panchatantra",
    title: "The Crow and the Snake",
    emoji: "🐦‍⬛",
    content:
      "A pair of crows built a beautiful nest in a tree, but a huge, wicked snake lived at the roots and ate their eggs every season. The crows were heartbroken. They went to their friend the jackal for advice. 'Go to the lake where the princess bathes,' said the jackal. 'Steal her necklace and drop it into the snake's hole.' The crows did exactly that. The king's guards came searching and found the precious necklace in the snake's hole. They dug it out — and killed the snake. The crows were free at last and raised many happy families in that tree. Remember: sometimes a clever plan can solve what strength cannot.",
    pages: [
      "A pair of crows built a beautiful nest high in a tall tree. But a huge, wicked snake lived at the roots and crept up every season to eat their eggs. No matter how loudly the crows cried or how hard they pecked, the snake was too big and too strong. The crows were brokenhearted and went to their wise friend the jackal for help.",
      "'Here is what you must do,' said the jackal with a sly smile. 'Go to the royal lake where the princess bathes each morning. Steal her golden necklace and drop it into the snake's hole.' The crows thought the plan was very daring — but they trusted the jackal, and they did exactly as he said.",
      "The king's guards came searching for the precious necklace. They followed its trail right to the snake's dark hole and dug it out — and killed the snake in the process. The crows were safe at last! They raised many happy families in that same tree. Sometimes a clever plan can solve what strength never could. 🐦‍⬛",
    ],
    questions: [
      {
        question: "What problem did the crows have in their tree?",
        options: ["Their tree was hit by lightning", "A wicked snake ate their eggs every season", "Hunters wanted to cut down the tree"],
        correctIndex: 1,
      },
      {
        question: "Who gave the crows their clever plan?",
        options: ["A wise old elephant", "The king's gardener", "Their friend the jackal"],
        correctIndex: 2,
      },
      {
        question: "What did the crows steal and drop into the snake's hole?",
        options: ["The princess's golden necklace", "A shiny coin from the market", "A piece of the king's crown"],
        correctIndex: 0,
      },
    ],
  },

  // hitopadesha
  {
    id: "greedy-dog",
    storyId: "hitopadesha",
    title: "The Greedy Dog",
    emoji: "🐕",
    content:
      "A dog found a juicy bone at the butcher's market and ran off happily, his tail wagging with pride. He trotted across a narrow wooden bridge over a sparkling stream. Looking down, he saw another dog staring up at him — also holding a bone that looked even bigger and meatier than his own! The dog growled and barked, determined to grab that other bone too. The moment he opened his mouth, his own bone dropped into the water with a loud splash and sank to the bottom. He stared at the ripples. The 'other dog' was simply his own reflection. He had lost his lovely bone for nothing at all. Greed, he learned, turns plenty into nothing.",
    pages: [
      "A lucky dog found a big, juicy bone at the butcher's market and ran off at top speed, his tail wagging proudly. He trotted along a narrow wooden bridge over a bright, sparkling stream. He was very pleased with himself — it was the finest bone he had ever found!",
      "Halfway across the bridge, the dog looked down at the water. There below him was another dog, staring right back up — and that dog was holding a bone that looked even bigger and meatier than his own! The dog's eyes went wide with greed. He growled and snapped, determined to grab that extra bone for himself.",
      "The moment he opened his mouth to bark — SPLASH! His own bone dropped into the stream and sank straight to the bottom. The dog stared at the ripples. The 'other dog' had been nothing but his own reflection all along. He had lost his fine bone for nothing at all. Greed, he learned, turns plenty into nothing. 🐕",
    ],
    questions: [
      {
        question: "Where did the dog find his juicy bone?",
        options: ["In the forest", "At the butcher's market", "By a riverside cave"],
        correctIndex: 1,
      },
      {
        question: "What did the dog see when he looked into the stream?",
        options: ["A fish stealing his bone", "His own reflection holding a bone", "Another real dog swimming below"],
        correctIndex: 1,
      },
      {
        question: "What lesson did the greedy dog learn?",
        options: ["Bridges are dangerous places", "Always run faster than other dogs", "Greed turns plenty into nothing"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "foolish-heron",
    storyId: "hitopadesha",
    title: "The Foolish Heron",
    emoji: "🦢",
    content:
      "A tall heron lived beside a pond full of fish. But the heron was terribly fussy. Each morning he would stand at the water's edge turning down every fish that swam by. 'Too small,' he would mutter. 'Too bony. Too dark. Too plain.' He waited for the perfect fish. Days passed, and the fish grew wise to him and hid in the deep mud. The heron grew hungrier and hungrier. Finally, desperate with starvation, he snapped at a tiny crab — and the crab pinched his long neck so hard the heron cried out in pain. He had waited for perfection and ended up with nothing good at all. Those who are too choosy often lose everything.",
    pages: [
      "A tall heron lived beside a pond bursting with fat, silvery fish. Every morning he stood at the water's edge waiting to eat — but he was terribly, terribly fussy. Fish after fish swam by, and he turned each one down. 'Too small,' he muttered. 'Too bony. Too dark. Too plain. I will wait for the perfect fish.'",
      "Days passed. The fish grew wise to the heron and hid deep in the cool mud at the bottom of the pond. The heron stood and waited, growing thinner and weaker. His stomach growled loudly. Still he refused to settle for anything less than the most perfect fish.",
      "Finally, desperate with hunger, the heron snapped at the only creature left — a tiny, hard crab. SNAP! The crab pinched his long neck so hard the heron shrieked in pain and dropped it. He was left with nothing at all. Those who wait for perfection, the pond creatures whispered, often lose everything they already had. 🦢",
    ],
    questions: [
      {
        question: "Why did the heron refuse to eat the fish in the pond?",
        options: ["He was not hungry enough yet", "He was too fussy and kept finding something wrong with each fish", "The pond water was too cold for fishing"],
        correctIndex: 1,
      },
      {
        question: "What happened to the fish while the heron waited?",
        options: ["They swam to a different lake", "They grew too big to catch", "They hid deep in the mud at the bottom of the pond"],
        correctIndex: 2,
      },
      {
        question: "What did the heron finally try to eat — and what went wrong?",
        options: ["A crab, which pinched his neck hard", "A frog, which jumped away", "A small turtle, which bit his beak"],
        correctIndex: 0,
      },
    ],
  },

  // jataka-tales
  {
    id: "monkey-king",
    storyId: "jataka-tales",
    title: "The Monkey King",
    emoji: "🐒",
    content:
      "A great monkey king led eighty thousand monkeys in a mango forest beside a river. He warned them never to let any mango fall into the water, lest humans discover their paradise. But one hidden mango escaped and floated downstream to the human king's palace. The human king tasted it and immediately sent hunters to find the tree. They surrounded the forest. To save his people, the monkey king stretched his body like a bridge across the river so all eighty thousand monkeys could run across his back to safety. His back was broken by the weight, but he did not cry out. The human king, moved to tears by such selfless love, honored the monkey king until his last breath.",
    pages: [
      "A great monkey king led eighty thousand monkeys in a lush mango forest beside a wide river. He warned them every day: never let a mango fall into the water, for if humans tasted it, they would find their paradise. But one hidden mango escaped — it floated all the way downstream to the human king's palace.",
      "The human king tasted the mango and declared it the most delicious thing he had ever eaten. He immediately sent hunters to find the tree. They surrounded the entire forest, trapping all the monkeys. There was no way out — except across the river. The monkey king had to act fast.",
      "The monkey king stretched his own body like a living bridge from one bank to the other. All eighty thousand monkeys ran across his back to safety. The weight broke his back, but he did not make a sound. The human king, seeing this incredible selfless love, wept and honored the brave monkey king until his very last breath. 🐒",
    ],
    questions: [
      {
        question: "What did the monkey king warn his people never to do?",
        options: ["Never fight with the human king", "Never let a mango fall into the river", "Never eat fruit from the tallest trees"],
        correctIndex: 1,
      },
      {
        question: "How did the human king discover the monkey forest?",
        options: ["His hunters were exploring the jungle", "A mango floated downstream to his palace", "A bird told him about it"],
        correctIndex: 1,
      },
      {
        question: "How did the monkey king save his people?",
        options: ["He led them to a secret cave", "He tricked the hunters with a disguise", "He stretched his body as a bridge for them to cross the river"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "banyan-deer",
    storyId: "jataka-tales",
    title: "The Banyan Deer",
    emoji: "🦌",
    content:
      "In an ancient forest lived a golden deer who was king of a great herd. A human king loved to hunt them, and the deer king made a wise agreement: each day, one deer would go peacefully to the palace kitchen so the others could live in safety. One terrible day, a pregnant doe was chosen. She begged the deer king to spare her until her fawn was born. The deer king could not send another in her place, so he walked to the palace himself and lay down before the king's sword. The human king was so astonished by this bravery and compassion that he vowed never to hunt deer again — and later extended his mercy to all animals.",
    pages: [
      "In an ancient forest lived a beautiful golden deer who was king of a great herd. A powerful human king loved to hunt them for his palace feasts. The golden deer king made a wise agreement: every day, one deer would go peacefully to the palace kitchen — and in return, all the rest could live safely in the forest.",
      "One terrible day, the chosen deer was a pregnant doe. She came to the deer king trembling and begged him to let her wait until her fawn was born. The deer king's heart ached. He could not send another deer in her place — that would be unfair. So he made the only choice a true leader could make.",
      "The golden deer king walked to the palace himself and lay down before the human king's sword. The human king stared in amazement. Never had he seen such bravery and compassion! He was so moved that he vowed never to hunt deer again — and soon extended his mercy to every creature in his kingdom. 🦌",
    ],
    questions: [
      {
        question: "What agreement did the deer king make with the human king?",
        options: ["One deer would go to the palace each day so the others could live safely", "The deer would share their forest with the king's horses", "The deer would guide the king when he got lost"],
        correctIndex: 0,
      },
      {
        question: "Why did the pregnant doe beg to be spared?",
        options: ["She was the fastest runner in the herd", "She wanted to wait until her fawn was born", "She had already been to the palace once before"],
        correctIndex: 1,
      },
      {
        question: "What did the human king vow after he saw the deer king's bravery?",
        options: ["To build the deer a golden statue", "To give the deer king his crown", "Never to hunt deer — and later to spare all animals"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "wise-elephant",
    storyId: "jataka-tales",
    title: "The Wise Elephant",
    emoji: "🐘",
    content:
      "A noble white elephant lived peacefully in the forest, caring for his blind mother every day. One afternoon, a lost king stumbled into the forest, exhausted and terrified. The elephant guided the king gently back to his kingdom, lifting him carefully with his trunk across rivers and steep hillsides. The grateful king told his people about the elephant, and a greedy minister plotted to capture the magnificent creature for the royal stable. When elephant catchers arrived, the elephant came willingly — but once he reached the city he refused to eat or drink. He grew thin and sad. The king visited and asked why. 'My mother is blind and starving without me,' the elephant said softly. The king wept and set him free at once.",
    pages: [
      "A noble white elephant lived peacefully in a great forest, bringing food and water every day to his blind mother. He was the kindest creature in the forest. One afternoon, a king stumbled out of the trees, lost, exhausted, and terrified. The elephant gently guided the king all the way home, lifting him safely across rivers and steep hillsides with his strong trunk.",
      "The grateful king told everyone about the magnificent white elephant. But a greedy minister decided he wanted the elephant for the royal stable. He sent elephant catchers to the forest. The elephant came willingly — he was too noble to fight. But once he arrived in the city, he stopped eating and drinking. Day by day he grew thin and sad.",
      "The king visited and asked, 'Dear elephant, why won't you eat?' The elephant replied softly, 'My mother is blind and alone in the forest. She is starving without me.' The king's eyes filled with tears. He set the elephant free at once, and the elephant ran back joyfully to care for his mother. 🐘",
    ],
    questions: [
      {
        question: "Who did the white elephant care for every day in the forest?",
        options: ["A baby elephant he had found", "His blind mother", "The other animals in the forest"],
        correctIndex: 1,
      },
      {
        question: "How did the elephant help the lost king?",
        options: ["He carried the king's heavy bags to the palace", "He guided the king home and lifted him across rivers with his trunk", "He called other animals to form a search party"],
        correctIndex: 1,
      },
      {
        question: "Why did the elephant refuse to eat in the city?",
        options: ["He did not like the palace food", "He missed the mango trees of the forest", "His blind mother was alone and starving without him"],
        correctIndex: 2,
      },
    ],
  },

  // grimms-fairy-tales
  {
    id: "cinderella",
    storyId: "grimms-fairy-tales",
    title: "Cinderella",
    emoji: "👠",
    content:
      "Cinderella lived with her cruel stepmother and two mean stepsisters who made her cook, clean, and sleep by the ashes. When the prince announced a royal ball, the stepsisters dressed in silk and left her behind. But Cinderella's fairy godmother appeared and transformed a pumpkin into a gleaming coach, mice into horses, and Cinderella's rags into a breathtaking golden gown — with tiny glass slippers. At the ball, the prince danced with no one else. At the stroke of midnight, Cinderella fled, leaving one glass slipper on the palace steps. The prince searched every house in the kingdom. When the slipper fit Cinderella's foot perfectly, he knew he had found her. They were married and lived joyfully ever after.",
    pages: [
      "Cinderella lived with her cruel stepmother and two unkind stepsisters who made her cook, clean, and sleep in the cold ashes by the hearth. When the prince announced a grand royal ball, the stepsisters dressed in their finest silk gowns and swept out the door — leaving Cinderella alone, covered in cinders.",
      "But Cinderella's fairy godmother appeared in a shimmer of light! She transformed a plump pumpkin into a gleaming golden coach, scurrying mice into fine white horses, and Cinderella's rags into the most breathtaking gown in the land — with tiny, perfect glass slippers. 'Be home before midnight!' the godmother warned. At the ball, the prince danced with no one but Cinderella.",
      "When the clock began to strike midnight, Cinderella fled down the palace steps — losing one glass slipper in her hurry. The prince searched every home in the kingdom with the tiny slipper. When it slipped perfectly onto Cinderella's foot and no one else's, he knew he had found her at last. They were married and lived joyfully ever after. 👠",
    ],
    questions: [
      {
        question: "What did Cinderella's fairy godmother turn into a golden coach?",
        options: ["A large wooden chest", "A pumpkin", "A basket of flowers"],
        correctIndex: 1,
      },
      {
        question: "What did Cinderella leave on the palace steps when she fled at midnight?",
        options: ["Her golden crown", "Her magic wand", "One glass slipper"],
        correctIndex: 2,
      },
      {
        question: "How did the prince find Cinderella after the ball?",
        options: ["He followed her footprints through the snow", "He searched every home until the glass slipper fit her foot", "A bluebird led him to her door"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "hansel-and-gretel",
    storyId: "grimms-fairy-tales",
    title: "Hansel and Gretel",
    emoji: "🏠",
    content:
      "Hansel and Gretel were left in the deep forest by their frightened father and wicked stepmother. Hansel dropped pebbles to mark the path home — but the second time, only breadcrumbs, which the birds ate. Lost and starving, the children found a house built entirely of gingerbread, candy, and cake. They ate hungrily until a withered witch invited them inside. The witch locked Hansel in a cage and planned to cook him for supper. But clever Gretel pretended not to understand the witch's instructions. When the witch bent down to check the oven herself, Gretel shoved her inside and slammed the door. The children found the witch's treasure, ran home, and their stepmother was gone. Their father embraced them with tears of joy.",
    pages: [
      "Hansel and Gretel were led deep into the dark forest and left behind by their wicked stepmother. The first time, Hansel had dropped white pebbles to find the way home. But the second time, he could only drop breadcrumbs — and hungry birds ate every single one. Lost and starving, the children stumbled upon the most amazing sight: a house built entirely of gingerbread, candy, and cake!",
      "They ate eagerly — until an old witch appeared at the door and invited them inside with a sweet smile. But the witch was wicked. She locked Hansel in a cage, planning to fatten him up and cook him for supper. Every day she ordered Gretel to do the cooking. But clever Gretel pretended not to understand even the simplest instructions.",
      "When the witch bent down to check the hot oven herself, Gretel seized her chance and shoved the witch inside — SLAM! went the door. The children found the witch's treasure, filled their pockets, and ran all the way home. Their stepmother was gone. Their father rushed out and embraced them with tears streaming down his face. 🏠",
    ],
    questions: [
      {
        question: "What did Hansel drop on the second trip into the forest to mark the path home?",
        options: ["White pebbles", "Breadcrumbs", "Pieces of his coat"],
        correctIndex: 1,
      },
      {
        question: "What was the witch's house made of?",
        options: ["Logs and mud", "Bricks and glass", "Gingerbread, candy, and cake"],
        correctIndex: 2,
      },
      {
        question: "How did Gretel defeat the witch?",
        options: ["She ran away and left Hansel behind", "She called the forest animals for help", "She shoved the witch into her own oven"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "rapunzel",
    storyId: "grimms-fairy-tales",
    title: "Rapunzel",
    emoji: "👸",
    content:
      "A sorceress locked a girl named Rapunzel in a tall tower with no door and no stairs — only a window at the very top. Every day the sorceress called out, 'Rapunzel, Rapunzel, let down your golden hair!' and climbed up the long braided rope. One day a prince heard Rapunzel singing and called the same words. He climbed up and they fell in love. When the sorceress discovered him, she cut off Rapunzel's hair and banished her to a desert. She threw the prince from the tower, and thorns blinded him. He wandered for years until he heard Rapunzel's voice. Her tears of joy fell on his eyes — and he could see again. Together at last, they lived in happiness far from the tower.",
    pages: [
      "A wicked sorceress locked a girl named Rapunzel in a tall tower in the middle of the forest. There was no door and no staircase — only a tiny window at the very top. Each day the sorceress stood below and called, 'Rapunzel, Rapunzel, let down your golden hair!' and climbed up Rapunzel's long, braided locks to visit.",
      "One day a prince rode past and heard the most beautiful singing drifting from the tower. He waited until the sorceress left, then called out the same words. Rapunzel lowered her hair, and the prince climbed up. They talked for hours and fell deeply in love. But the sorceress discovered the secret. In her fury, she cut off Rapunzel's hair and sent her far away to a lonely desert.",
      "The sorceress threw the prince from the tower into a thornbush that blinded him. He wandered the land for years — until one day he heard a voice singing the same song. It was Rapunzel! Her tears of joy fell onto his eyes, and he could see again. Together at last, they journeyed far from the dark tower and lived in happiness. 👸",
    ],
    questions: [
      {
        question: "How did the sorceress climb up to Rapunzel's tower?",
        options: ["She flew on a broomstick", "She used a magic ladder", "She climbed up Rapunzel's long golden hair"],
        correctIndex: 2,
      },
      {
        question: "What happened to the prince when the sorceress found out about him?",
        options: ["He was locked in a dungeon", "He was thrown into thorns that blinded him", "He was turned into a frog"],
        correctIndex: 1,
      },
      {
        question: "How was the prince's sight restored?",
        options: ["A magic potion healed him", "Rapunzel's tears of joy fell onto his eyes", "Sunlight from the tower window cured him"],
        correctIndex: 1,
      },
    ],
  },

  // struwwelpeter
  {
    id: "shock-headed-peter",
    storyId: "struwwelpeter",
    title: "Shock-Headed Peter",
    emoji: "✂️",
    content:
      "Peter would not let anyone cut his fingernails or comb his wild, tangled hair. Year after year they grew and grew. His nails curled into long twisting spirals. His hair rose up in a magnificent, towering shock around his head like a haystack caught in a gale. People would stop in the street and point. His mother pleaded. His father offered him cake. Still Peter refused, crossing his arms and turning away with a terrific frown. So Peter grew into the most magnificently unkempt boy anyone had ever seen — a boy so legendary in his messiness that children told stories about him for generations, using his name as a warning to brush hair and trim nails. Sometimes a cautionary tale is the most lasting tale of all.",
    pages: [
      "Peter refused to let anyone cut his fingernails or comb his hair. Not once. Not ever. Year after year, his nails curled into long, twisting spirals and his hair grew upward in a wild, towering shock — like a haystack caught in a terrible gale. He looked quite extraordinary.",
      "His mother pleaded with him every morning. His father offered cake, sweets, and all his favourite things. Neighbours stopped in the street to stare and shake their heads. But Peter just crossed his arms, turned away, and frowned his most terrific frown. There would be no combing and no cutting — not for anyone.",
      "And so Peter grew into the most magnificently unkempt boy anyone had ever seen. Parents told stories about him to their children for generations. 'Brush your hair,' they would say, 'or you'll end up like Shock-Headed Peter!' His name became a legend — proof that sometimes a cautionary tale is the most lasting tale of all. ✂️",
    ],
    questions: [
      {
        question: "What two things did Peter absolutely refuse to do?",
        options: ["Go to school and eat his vegetables", "Cut his fingernails and comb his hair", "Wash his face and tie his shoes"],
        correctIndex: 1,
      },
      {
        question: "What did Peter's father offer to try to persuade him?",
        options: ["A new toy and extra pocket money", "Cake and sweets", "A trip to the fairground"],
        correctIndex: 1,
      },
      {
        question: "Why do parents still tell stories about Peter today?",
        options: ["Because he later became a famous inventor", "Because his portrait hung in the town hall", "Because his name became a warning to children to keep themselves tidy"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "little-suck-a-thumb",
    storyId: "struwwelpeter",
    title: "Little Suck-a-Thumb",
    emoji: "👍",
    content:
      "Conrad's mama warned him every single morning before she left for the market: 'Whatever you do, do NOT suck your thumb!' Conrad nodded — but the moment she was gone, the thumb went straight into his mouth. Suddenly the door flew open and in rushed the Great Long-Legged Scissor-Man, waving his enormous shining shears with a terrible snip-snip-snip sound! He was very tall and very quick. Before Conrad could pull his hand away — SNIP! Both thumbs were gone. Conrad howled. When Mama returned and found him crying, she shook her head sadly and pointed to the scissors on the floor. 'I told you so,' she said quietly. And Conrad never, ever sucked his thumbs again.",
    pages: [
      "Every single morning before she left for the market, Conrad's mama gave him the same warning: 'Whatever you do, Conrad — do NOT suck your thumb!' Conrad nodded very seriously each time. But the moment the door clicked shut, his thumb went straight into his mouth. He just couldn't help it.",
      "Suddenly the door flew open with a BANG! In rushed the Great Long-Legged Scissor-Man — terrifyingly tall, waving his enormous shining shears above his head with a dreadful SNIP-SNIP-SNIP! He was far too fast. Before Conrad could pull his hand away — SNIP! Both thumbs were gone.",
      "Conrad howled with all his might. When Mama returned from the market and found him crying, she saw the scissors on the floor and shook her head very sadly. 'I told you so,' she said quietly. Conrad stared at his hands. He never, ever sucked his thumbs again. 👍",
    ],
    questions: [
      {
        question: "What did Conrad's mama warn him every morning before leaving?",
        options: ["Not to suck his thumb", "Not to open the front door to strangers", "Not to eat sweets before dinner"],
        correctIndex: 0,
      },
      {
        question: "Who burst through the door to punish Conrad?",
        options: ["A tall policeman with a stick", "A giant with a bag", "The Great Long-Legged Scissor-Man with enormous shears"],
        correctIndex: 2,
      },
      {
        question: "What happened to Conrad because he sucked his thumb?",
        options: ["He was sent to bed without supper", "The Scissor-Man snipped off both his thumbs", "He had to stand in the corner for an hour"],
        correctIndex: 1,
      },
    ],
  },

  // irish-folk-tales
  {
    id: "leprechaun-gold",
    storyId: "irish-folk-tales",
    title: "The Leprechaun's Gold",
    emoji: "🍀",
    content:
      "Young Bridget was walking through a meadow when she heard the tiny tap-tap-tapping of a cobbler's hammer beneath a mushroom. She reached down and caught a leprechaun no bigger than her hand, stitching a tiny shoe. 'I've caught you fair and true!' she cried. 'Now take me to your pot of gold!' The leprechaun scowled but agreed. He led her through winding paths to a field of a thousand identical thistles and pointed to one. 'The gold is buried under that one!' Bridget tied her ribbon around it and ran for a spade. When she returned, every single thistle in the enormous field had a red ribbon tied around it. She looked and looked — but the leprechaun was long gone, laughing in the hills.",
    pages: [
      "Young Bridget was strolling through a sunny meadow when she heard a tiny sound: tap-tap-tap, tap-tap-tap. She crept closer and looked under a mushroom — and there sat a leprechaun no bigger than her hand, happily stitching a tiny shoe! Quick as a flash, she reached down and grabbed him before he could disappear.",
      "'I've caught you fair and true!' Bridget cried. 'Now you must take me to your pot of gold!' The leprechaun scowled terribly, but he had no choice. He led her through twisting paths to an enormous field filled with a thousand identical thistles. He pointed to one. 'The gold is buried right under that one!' Bridget quickly tied her red hair ribbon around the thistle and sprinted home for a spade.",
      "When Bridget returned, she stopped and stared. Every single thistle in the whole enormous field had a bright red ribbon tied around it! She searched and searched until the sun went down — but she never found the gold, and the leprechaun was long gone, laughing in the hills. 🍀",
    ],
    questions: [
      {
        question: "What was the leprechaun doing when Bridget found him?",
        options: ["Dancing on a mushroom", "Counting coins in the grass", "Stitching a tiny shoe"],
        correctIndex: 2,
      },
      {
        question: "What did Bridget tie around the thistle to mark where the gold was buried?",
        options: ["Her red hair ribbon", "A piece of string", "A strip of her apron"],
        correctIndex: 0,
      },
      {
        question: "What did Bridget find when she came back with a spade?",
        options: ["The pot of gold had already been dug up", "Every thistle in the field had a red ribbon on it", "The leprechaun was waiting to help her dig"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "selkie-wife",
    storyId: "irish-folk-tales",
    title: "The Selkie Wife",
    emoji: "🦭",
    content:
      "A lonely fisherman once found a shimmering seal-skin on the rocks by the sea. Nearby sat a beautiful woman with sad grey eyes, searching frantically. The fisherman knew she was a selkie — a seal who could become human on land. He hid the skin so she could not return to the sea, and she became his wife and bore him three children whom she loved dearly. But every evening she walked to the cliff edge and stared out at the grey waves. One day her youngest child found the hidden skin and showed it to his mother. She knelt, kissed each child gently, and pulled the skin around her shoulders. With tears streaming down her face, she slipped beneath the waves — returning at last to her true home.",
    pages: [
      "One morning a lonely fisherman found a shimmering seal-skin lying on the rocks by the sea. Nearby sat a beautiful woman with sad, grey eyes, searching desperately for something she had lost. The fisherman knew the old stories — she was a selkie, a seal who could walk as a human when she shed her skin on land.",
      "The fisherman hid the seal-skin deep under the floorboards so she could not return to the ocean. She became his wife and, in time, the mother of three children she loved with all her heart. But every single evening she would walk to the cliff edge alone and stare out at the grey, churning waves with longing in her eyes.",
      "One day her youngest child discovered the hidden skin and brought it to his mother. She knelt down and kissed each child softly on the forehead. Then, with tears streaming down her face, she pulled the seal-skin around her shoulders and slipped beneath the cold waves — returning at last to her true home in the sea. 🦭",
    ],
    questions: [
      {
        question: "What is a selkie?",
        options: ["A sea witch who grants wishes", "A seal that can become human on land by shedding its skin", "A mermaid who lives in a castle under the ocean"],
        correctIndex: 1,
      },
      {
        question: "What did the fisherman do with the selkie's skin?",
        options: ["He gave it back to her as a gift", "He hid it under the floorboards so she couldn't return to the sea", "He burned it so no one would find out her secret"],
        correctIndex: 1,
      },
      {
        question: "Who found the hidden seal-skin and gave it back to her?",
        options: ["The oldest child", "A kind neighbour", "Her youngest child"],
        correctIndex: 2,
      },
    ],
  },

  // celtic-fairy-tales
  {
    id: "fionn-salmon-knowledge",
    storyId: "celtic-fairy-tales",
    title: "Fionn and the Salmon of Knowledge",
    emoji: "🐟",
    content:
      "In Ireland long ago, there swam a magical Salmon of Knowledge in the River Boyne. It was said that whoever ate the first bite of that salmon would gain all the wisdom in the world. The poet Finnegas had been trying to catch it for seven years. At last it came to his hook! He gave it to his young apprentice Fionn to cook, warning him not to taste a single bite. While turning the fish, Fionn burned his thumb on a bubble of hot fat and instinctively stuck it in his mouth to cool it. In that instant, all the wisdom of the world flooded into him. Finnegas looked into the boy's shining eyes and knew. 'The salmon was meant for you,' he said gently, and from that day Fionn became the wisest hero in Ireland.",
    pages: [
      "In Ireland long ago, there lived a magical Salmon of Knowledge in the River Boyne. Legend said that whoever ate the very first bite of that fish would gain all the wisdom in the world. The old poet Finnegas had spent seven long years trying to catch it. At last, one misty morning, it came to his hook!",
      "Finnegas was overjoyed, but he was too tired to cook the fish himself. He handed it to his young apprentice Fionn and gave him a very strict warning: 'Cook this carefully — but do NOT taste a single bite!' Fionn agreed solemnly and set to work. But while he was turning the fish, a bubble of hot fat splashed onto his thumb. Without thinking, he stuck his thumb in his mouth to cool the burn.",
      "In that single instant, all the wisdom of the world flooded into Fionn. When Finnegas looked into the boy's bright, shining eyes, he understood immediately. 'It was meant for you all along,' the old poet said softly. And from that day forward, Fionn mac Cumhaill became the wisest and greatest hero Ireland had ever known. 🐟",
    ],
    questions: [
      {
        question: "What would happen to whoever ate the first bite of the Salmon of Knowledge?",
        options: ["They would become immortal and never grow old", "They would gain all the wisdom in the world", "They would be able to breathe underwater"],
        correctIndex: 1,
      },
      {
        question: "How did Fionn accidentally taste the salmon?",
        options: ["He took a bite when Finnegas wasn't looking", "He burned his thumb on hot fat and stuck it in his mouth", "He dropped a piece and ate it off the ground"],
        correctIndex: 1,
      },
      {
        question: "How did Finnegas react when he saw what had happened to Fionn?",
        options: ["He was furious and sent Fionn away forever", "He demanded Fionn give the wisdom back", "He said gently that the salmon was meant for Fionn all along"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "children-of-lir",
    storyId: "celtic-fairy-tales",
    title: "The Children of Lir",
    emoji: "🦢",
    content:
      "King Lir had four beloved children — Fionnuala, Aodh, Fiachra, and Conn. Their stepmother, Aoife, was bitterly jealous of Lir's love for them. She drove them to a lake and cast a terrible spell, transforming them into swans for nine hundred years. Though they kept their human voices, they could never again take human form. They sang the most heartbreakingly beautiful songs across the lakes and seas of Ireland, and all who heard them wept with wonder and sorrow. When at last the nine hundred years ended and a saint's bell broke the enchantment, the children were very old. They were baptized, and with peaceful smiles they passed from the world — finally free, together, and at rest.",
    pages: [
      "King Lir loved his four children more than anything in the world: Fionnuala, Aodh, Fiachra, and little Conn. But their stepmother Aoife burned with jealousy at how dearly Lir adored them. One day she drove the children to the edge of a cold lake and raised her hands. With a terrible spell, she transformed all four children into white swans.",
      "The children of Lir were cursed to remain swans for nine hundred years, roaming the lakes and stormy seas of Ireland. Though their bodies were those of birds, they kept their human voices. They sang the most heartbreakingly beautiful songs anyone had ever heard. All who passed by stopped to listen — and wept with sorrow and wonder.",
      "When nine hundred long years finally passed, a saint's bell rang out across the water and broke the ancient spell. The swans became human again — but they were very, very old. They were baptized together, and with peaceful smiles on their faces, they passed quietly from the world. At last they were free, together, and at rest. 🦢",
    ],
    questions: [
      {
        question: "Why did Aoife cast a spell on the children of Lir?",
        options: ["They had been unkind to her", "She was bitterly jealous of how much their father loved them", "The king had asked her to teach them a lesson"],
        correctIndex: 1,
      },
      {
        question: "What did the children keep even after being turned into swans?",
        options: ["Their human eyes", "Their human voices", "Their human hands"],
        correctIndex: 1,
      },
      {
        question: "What broke the spell on the children of Lir after nine hundred years?",
        options: ["Their father's tears falling into the lake", "A kiss from a prince", "A saint's bell ringing across the water"],
        correctIndex: 2,
      },
    ],
  },

  // arthurian-legends
  {
    id: "sword-in-the-stone",
    storyId: "arthurian-legends",
    title: "The Sword in the Stone",
    emoji: "⚔️",
    content:
      "In the courtyard of a great cathedral stood a mysterious stone with a gleaming sword buried deep inside it. Written in golden letters were the words: 'Whosoever pulls this sword from this stone is the rightful king of all Britain.' Every knight in the land tried with all his might — grunting, straining, turning red in the face — but not one could move it even a hair's width. Young Arthur had come to the tournament only to fetch a sword for his older brother. He found the courtyard empty, spotted the sword, and pulled it out easily, as though it had been waiting just for him. The crowd gasped. Merlin the wizard stepped forward, eyes bright. 'The king,' he said quietly, 'has revealed himself at last.'",
    pages: [
      "In the courtyard of a great cathedral in Britain stood a huge stone with a gleaming sword buried deep inside it. Carved in golden letters were the words: 'Whosoever pulls this sword from this stone is the rightful king of all Britain.' Every mighty knight in the land had tried — grunting and straining and turning red in the face — but not one could move it even a hair's width.",
      "Young Arthur had come to the tournament simply to fetch a spare sword for his older brother. The courtyard was empty and quiet. He noticed the sword in the stone and thought nothing of it — his brother needed a sword, after all. He reached out, gripped the hilt firmly, and pulled. It slid free as easily as pulling a knife from soft butter.",
      "Arthur walked back holding the sword. Then he heard the gasps. A crowd had gathered, open-mouthed. Merlin the wizard stepped forward with bright, knowing eyes. 'The king,' he said quietly, 'has revealed himself at last.' Arthur stared at the sword in his hand and slowly understood. He had not been searching for a kingdom — but a kingdom had been waiting for him. ⚔️",
    ],
    questions: [
      {
        question: "What did the words on the stone say would happen to whoever pulled the sword free?",
        options: ["They would be granted three wishes by Merlin", "They would become the rightful king of all Britain", "They would lead Britain's greatest army"],
        correctIndex: 1,
      },
      {
        question: "Why did Arthur reach for the sword in the first place?",
        options: ["He wanted to prove he was the strongest knight", "He needed to fetch a spare sword for his older brother", "Merlin told him to pull it out"],
        correctIndex: 1,
      },
      {
        question: "Who announced to the crowd that Arthur was the true king?",
        options: ["Arthur's older brother", "The Archbishop of Canterbury", "Merlin the wizard"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "lady-of-the-lake",
    storyId: "arthurian-legends",
    title: "The Lady of the Lake",
    emoji: "🏞️",
    content:
      "After his first sword broke in battle, King Arthur and Merlin walked to the edge of a still, silver lake. Out of the water rose a pale arm clothed in white samite, holding a magnificent sword aloft. Then a beautiful woman appeared, walking calmly across the surface of the water toward them. She was Viviane, the Lady of the Lake. She told Arthur the sword was called Excalibur and was his to wield — but he must return it when the time came. Arthur rowed a small boat to the middle of the lake and took the sword in both hands. It shone in the grey morning light like captured lightning. And though many battles lay ahead, Arthur always knew that Excalibur was not truly his to keep — only to borrow from the magic of the world.",
    pages: [
      "King Arthur's first sword had shattered in battle, leaving him without a weapon. He and Merlin walked together to the edge of a still, silver lake in the grey morning mist. As they stood there watching, a pale arm rose from the water — clothed in shining white cloth — holding a magnificent sword high above the surface.",
      "Then a beautiful woman appeared, walking calmly across the top of the water as if it were solid ground. She was Viviane, the Lady of the Lake. She told Arthur that the sword was called Excalibur and was his to carry into battle. 'But you must promise to return it when the time comes,' she said.",
      "Arthur rowed a small boat to the middle of the lake and took Excalibur in both hands. It blazed in the grey morning light like captured lightning. He knew it was the most powerful sword in the world — and he knew, deep in his heart, that it was never truly his to keep. It was only his to borrow from the magic of the world. 🏞️",
    ],
    questions: [
      {
        question: "Why did Arthur need a new sword when he came to the lake?",
        options: ["He had lost his sword in the forest", "His first sword had shattered in battle", "He gave his sword away to a poor knight"],
        correctIndex: 1,
      },
      {
        question: "What was the name of the sword given to Arthur by the Lady of the Lake?",
        options: ["Durendal", "Excalibur", "Joyeuse"],
        correctIndex: 1,
      },
      {
        question: "What condition did the Lady of the Lake place on giving Arthur the sword?",
        options: ["He must use it only to protect the weak", "He must keep it secret from all his knights", "He must return it when the time came"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "quest-holy-grail",
    storyId: "arthurian-legends",
    title: "The Quest for the Holy Grail",
    emoji: "🏆",
    content:
      "One evening at Camelot, a vision of the Holy Grail — a sacred cup said to grant immortality and healing — shimmered through the great hall and vanished. Every knight leapt up and swore to find it. They rode out in all directions across Britain and into strange, enchanted lands. Most failed. Sir Lancelot, bravest of all, came closest but was turned away for his pride. Only the purest knight, Sir Galahad, followed every clue with a humble heart and true courage. After years of searching, he reached the sacred chapel alone and lifted the Grail in trembling hands. Warmth and golden light filled him completely. The quest was over. Galahad was at peace — and in that moment understood that the journey had always mattered more than the prize.",
    pages: [
      "One evening in the great hall of Camelot, a blinding vision of the Holy Grail — a sacred cup said to hold the power of healing and eternal life — shimmered through the air and vanished. Every knight of the Round Table leapt to his feet. They each swore a solemn oath to search every corner of Britain until the Grail was found.",
      "The knights rode out in every direction, into strange forests, across mountains, and through enchanted kingdoms. Most gave up or failed. Sir Lancelot, the bravest of all, came agonizingly close — but he was turned away at the final moment because of his pride and secret sins. Only one knight continued with a truly humble and pure heart: Sir Galahad.",
      "After years of searching, Sir Galahad arrived alone at a sacred chapel. He lifted the Holy Grail in trembling hands. Warmth and golden light filled every corner of his heart. The long quest was over at last. In that peaceful moment, Galahad understood — it was the journey of courage and humility, not the prize itself, that had always mattered most. 🏆",
    ],
    questions: [
      {
        question: "What was the Holy Grail said to be able to do?",
        options: ["Grant its holder invisible armour", "Give healing and eternal life", "Summon an army of knights"],
        correctIndex: 1,
      },
      {
        question: "Why was Sir Lancelot turned away from the Grail?",
        options: ["He was not strong enough to carry it", "He arrived too late and it had moved on", "He was turned away because of his pride and secret sins"],
        correctIndex: 2,
      },
      {
        question: "Which knight was pure enough to finally reach the Holy Grail?",
        options: ["Sir Galahad", "Sir Gawain", "Sir Percival"],
        correctIndex: 0,
      },
    ],
  },

  // momotaro
  {
    id: "peach-boy",
    storyId: "momotaro",
    title: "The Peach Boy",
    emoji: "🍑",
    content:
      "An old woman washing clothes by the river saw an enormous peach floating toward her. She carried it home for supper. When she and her husband went to cut it open, it split apart by itself — and inside sat a rosy, laughing baby boy! They named him Momotaro, Peach Boy, and raised him with great love. Momotaro grew strong and kind-hearted. When he learned that terrible Oni demons on a distant island were stealing treasure and frightening villagers, he strapped on his armor, filled a bag with the world's best millet dumplings, and set off bravely. His father wept with pride. His mother tucked an extra scarf around his shoulders. 'Come back safe,' she whispered. 'And be good.' Momotaro smiled and walked toward the horizon.",
    pages: [
      "An old woman was washing clothes by the river when an enormous peach came floating toward her on the current. She carried it home, and when she and her husband tried to cut it open, it burst apart all by itself. Inside, a rosy laughing baby boy was sitting! They named him Momotaro — Peach Boy — and raised him with all the love in their hearts.",
      "Momotaro grew up strong, brave, and kind. When he heard that terrible Oni demons on a faraway island were stealing treasure and frightening villages, he could not sit still. He put on his armor, packed a bag full of the world's finest millet dumplings, and prepared to leave.",
      "His father's eyes glistened with pride. His mother tucked an extra warm scarf around his shoulders and whispered, 'Come back safely — and be good.' Momotaro bowed low, smiled his warmest smile, and set off bravely toward the horizon and whatever adventures lay ahead. 🍑",
    ],
    questions: [
      {
        question: "How did Momotaro arrive into the world?",
        options: ["He was found floating in a basket on the river", "He hatched from a giant egg in the forest", "He was discovered inside an enormous peach"],
        correctIndex: 2,
      },
      {
        question: "What did Momotaro pack to take on his journey?",
        options: ["A magic bow and golden arrows", "A bag full of the world's finest millet dumplings", "A sword given to him by his father"],
        correctIndex: 1,
      },
      {
        question: "Why did Momotaro decide to go on his adventure?",
        options: ["He wanted to find his true parents", "Oni demons were stealing treasure and scaring villages", "He heard there was treasure buried on a distant island"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "battle-oni-island",
    storyId: "momotaro",
    title: "The Battle of Oni Island",
    emoji: "👹",
    content:
      "On his journey to Oni Island, Momotaro met a hungry dog, a clever monkey, and a proud pheasant. He shared his magical millet dumplings with each one, and they pledged to follow him. When the team reached the island's iron gate, the pheasant flew over the walls to peck the Oni guards' heads, the dog bit at their heels, and the monkey threw stones from above. In all the chaos, Momotaro leapt over the gate and fought the Oni king himself! The king begged for mercy and promised to return everything stolen. Momotaro tied the Oni leader with a rope and led him back across the sea. The village cheered and cried with joy. Momotaro bowed modestly and thanked his three brave friends.",
    pages: [
      "On his way to Oni Island, Momotaro met a hungry dog, a clever monkey, and a proud pheasant. He shared one of his magical millet dumplings with each of them, and in return every one pledged to fight by his side. Together the four companions sailed across the sea until the fearsome dark island appeared on the horizon.",
      "When the team reached the island's enormous iron gate, the pheasant swooped over the walls and pecked the Oni guards' heads. The dog leapt and bit at their heels. The monkey scrambled up high and pelted them with stones from above. In all the uproar and confusion, Momotaro vaulted clean over the gate and faced the Oni king himself in single combat!",
      "The Oni king was powerful — but he had never fought anyone as brave as Momotaro. Soon he fell to his knees and begged for mercy, promising to return every treasure he had stolen. Momotaro bound the king with rope and led him back across the sea. The whole village came out cheering and weeping with joy. Momotaro bowed and quietly thanked his three brave friends. 👹",
    ],
    questions: [
      {
        question: "Which three animals joined Momotaro on his journey to Oni Island?",
        options: ["A bear, a fox, and a crane", "A dog, a monkey, and a pheasant", "A tiger, a rabbit, and an eagle"],
        correctIndex: 1,
      },
      {
        question: "What did Momotaro give the animals in exchange for their loyalty?",
        options: ["A share of the Oni treasure", "A magical millet dumpling each", "A promise to build them a fine home"],
        correctIndex: 1,
      },
      {
        question: "What happened when Momotaro defeated the Oni king?",
        options: ["The king escaped into the sea", "The king promised to return everything he had stolen", "The king turned into a harmless crow"],
        correctIndex: 2,
      },
    ],
  },

  // tanuki-tales
  {
    id: "tanuki-teakettle",
    storyId: "tanuki-tales",
    title: "The Tanuki Teakettle",
    emoji: "🫖",
    content:
      "A priest found a tanuki — a mischievous raccoon-dog — and, not knowing what it was, sold it to a tinker. That night, the teakettle the tanuki had transformed into began sprouting a furry tail and four little legs! It shuffled across the floor and the tinker shrieked in fright. But the tanuki teakettle bowed politely and offered to help. It had learned to walk a tightrope! The tinker set up a little traveling show: 'See the Amazing Dancing Teakettle!' People came from every village to watch, laughing and clapping. The tinker made enough money to retire comfortably, and the tanuki — who had grown quite fond of performing — eventually changed back and trotted into the forest with a satisfied grin.",
    pages: [
      "A priest discovered a tanuki — a mischievous magical raccoon-dog — but he didn't realize what it was. He sold it to a travelling tinker. The tanuki, feeling cheeky, had disguised itself as an ordinary teakettle. The tinker carried it home, very pleased with his new purchase.",
      "That very night, the teakettle began to change. A furry tail sprouted from the spout, then four little legs appeared from underneath. The kettle shuffled across the floor! The tinker shrieked and leapt onto his bed in fright. But the tanuki-kettle bowed politely and explained it could walk a tightrope and would love to help earn some money.",
      "The tinker set up a travelling show: 'See the Amazing Dancing Teakettle!' People came from every village around, laughing and clapping with delight. The tinker earned enough to retire very comfortably. The tanuki had grown fond of performing — but eventually it changed back to its true form and trotted happily into the forest with a very satisfied grin. 🫖",
    ],
    questions: [
      {
        question: "What had the tanuki disguised itself as when the priest found it?",
        options: ["A wooden rice bowl", "An ordinary teakettle", "A clay water jug"],
        correctIndex: 1,
      },
      {
        question: "What happened to the teakettle that night in the tinker's home?",
        options: ["It flew around the room and would not stop", "It grew a furry tail and four little legs and started moving", "It began singing songs in a strange language"],
        correctIndex: 1,
      },
      {
        question: "How did the tinker use the tanuki-kettle to earn money?",
        options: ["He sold it to the emperor for a huge price", "He used it to brew a magic potion people paid to taste", "He set up a travelling show for people to watch the dancing teakettle"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "grateful-tanuki",
    storyId: "tanuki-tales",
    title: "The Grateful Tanuki",
    emoji: "🦝",
    content:
      "A young farmer found a tanuki caught in a trap in the bamboo grove. Most people would have sold the creature at market, but the farmer had a gentle heart. He carefully opened the trap and set the tanuki free. The tanuki bowed its round head three times and disappeared into the shadows. That harvest was the most bountiful the farmer had ever seen — his fields glowed golden and his fruit trees bent low under the weight of their fruit. One evening, he saw a light in his barn. He crept to the door and peeked in. The tanuki was inside, using its magic to transform fallen leaves into coins and stacking them neatly in the corner. It spotted the farmer, winked, and bounded away into the moonlit woods.",
    pages: [
      "One morning a young farmer found a tanuki — a plump, magical raccoon-dog — caught in a trap in his bamboo grove. The creature looked up at him with frightened eyes. Most people would have taken it to market and sold it, but the farmer had a kind and gentle heart. He carefully opened the trap and set the tanuki free without asking for anything in return.",
      "The tanuki bowed its round little head three times solemnly and disappeared into the shadowy bamboo. That same year, the harvest was the most extraordinary the farmer had ever seen. His rice fields glowed deep gold. His fruit trees bent so low under the weight of their fruit that the branches almost touched the ground. Neighbours came from all around to admire his incredible fortune.",
      "One evening the farmer noticed a warm glow coming from inside his barn. He crept to the door and peeked through a crack. There was the tanuki, busily using its magic to transform handfuls of fallen leaves into shining coins — stacking them neatly in the corner as a gift! It spotted the farmer, gave a cheerful wink, and bounded away into the moonlit woods. 🦝",
    ],
    questions: [
      {
        question: "Where did the farmer find the tanuki?",
        options: ["Swimming in the river behind his house", "Caught in a trap in the bamboo grove", "Hiding in his rice store room"],
        correctIndex: 1,
      },
      {
        question: "What did the tanuki do to thank the farmer?",
        options: ["It brought him a magical seed that grew overnight", "It chased away all the animals eating his crops", "It transformed fallen leaves into coins and left them in his barn"],
        correctIndex: 2,
      },
      {
        question: "How many times did the tanuki bow to the farmer before disappearing?",
        options: ["Once", "Twice", "Three times"],
        correctIndex: 2,
      },
    ],
  },

  // urashima-taro
  {
    id: "kindness-of-urashima",
    storyId: "urashima-taro",
    title: "The Kindness of Urashima",
    emoji: "🎣",
    content:
      "Urashima Taro was a young fisherman with a laugh as warm as summer. One morning he found some children poking a small sea turtle with sticks on the beach. He shooed the children away and carried the turtle gently to the water, watching until it disappeared beneath the waves. The next day, a magnificent turtle surfaced beside his boat. 'I am the turtle you saved,' it said. 'The Dragon Princess of the sea palace wishes to thank you. Please, climb on my back.' Urashima had never heard a turtle speak before. He looked at the sea, shimmering blue and gold in the morning light, and thought of his parents waiting at home. Then he looked at the turtle's earnest ancient eyes — and slowly, he smiled and climbed on.",
    pages: [
      "Urashima Taro was a young fisherman whose laugh was as warm as summer sunshine. One morning on the beach he came across some children poking a small sea turtle with sticks. Urashima felt sorry for the creature right away. He shooed the children off gently and carried the turtle carefully down to the waves, watching until it had safely disappeared beneath the sea.",
      "The very next morning, as Urashima sat fishing in his boat, a magnificent large turtle surfaced beside him. 'I am the turtle you saved yesterday,' it said in a calm, deep voice. 'The Dragon Princess of the underwater sea palace wishes to thank you for your kindness. She invites you to visit. Please — climb onto my back.'",
      "Urashima had never heard a turtle speak before. He gazed at the shimmering blue-and-gold sea and thought for a moment of his parents waiting at home. Then he looked into the turtle's ancient, earnest eyes. Something in his heart answered yes. Slowly, with a smile, he put down his fishing rod and climbed on. 🎣",
    ],
    questions: [
      {
        question: "Why did Urashima Taro help the sea turtle on the beach?",
        options: ["He wanted to sell it at the market for a good price", "He felt sorry for it being poked by children and carried it gently to the sea", "A wise old man on the beach told him it was a magic creature"],
        correctIndex: 1,
      },
      {
        question: "Who wanted to thank Urashima for his kindness?",
        options: ["The turtle's mother, who was a sea goddess", "The Dragon Princess of the underwater sea palace", "The king of the fishing village"],
        correctIndex: 1,
      },
      {
        question: "What did Urashima do after hearing the turtle's invitation?",
        options: ["He said no and rowed quickly home to his parents", "He asked the turtle to wait while he fetched his friends", "He put down his fishing rod and climbed onto the turtle's back"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "dragon-palace",
    storyId: "urashima-taro",
    title: "The Dragon Palace",
    emoji: "🐉",
    content:
      "Beneath the waves lay Ryugu-jo, the Dragon Palace, shining with coral and pearl. The beautiful Dragon Princess Otohime welcomed Urashima with a great feast. Every day in the palace was a joy — music, dancing, food more delicious than dreams. But after what felt like three days, Urashima grew homesick. He asked to leave. Otohime was sad but gave him a lacquered box called a tamatebako. 'Never open it,' she said. When Urashima surfaced, his village was gone — replaced by strange new buildings. Three hundred years had passed in what felt like three days! Heartbroken and confused, he opened the forbidden box. White smoke curled out and instantly he became a frail old man. The secret of time had been in the box all along.",
    pages: [
      "Beneath the waves lay Ryugu-jo — the Dragon Palace — glittering with coral and mother-of-pearl. The beautiful Dragon Princess Otohime welcomed Urashima with a magnificent feast. Every day was filled with music, dancing, and food more delicious than anything he had ever tasted. Time seemed to drift like a warm dream.",
      "After what felt like only three days, Urashima's heart began to ache for home. He asked Otohime if he could leave. She was deeply sad, but she gave him a beautiful lacquered box called a tamatebako as a parting gift. 'You may keep this,' she said seriously, 'but you must promise never to open it, no matter what happens.'",
      "When Urashima surfaced, his village had completely vanished — replaced by strange buildings and unfamiliar faces. Three hundred years had passed while he was in the palace, though it had felt like three days! Heartbroken and confused, he forgot his promise and opened the box. White smoke curled out — and in an instant he became a frail, trembling old man. The years he had skipped had been inside the box all along. 🐉",
    ],
    questions: [
      {
        question: "What was the Dragon Palace called in Japanese?",
        options: ["Fuji-jo", "Ryugu-jo", "Edo-jo"],
        correctIndex: 1,
      },
      {
        question: "What gift did Princess Otohime give Urashima when he left?",
        options: ["A magical fishing rod that always caught fish", "A lacquered box called a tamatebako that he must never open", "A coat of shining armour to protect him"],
        correctIndex: 1,
      },
      {
        question: "What happened when Urashima opened the forbidden box?",
        options: ["Gold coins poured out and filled his hands", "A beautiful bird flew out and showed him the way home", "White smoke curled out and he instantly became a very old man"],
        correctIndex: 2,
      },
    ],
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

  // ── China ──────────────────────────────────────────────────────────────────

  {
    id: "sun-wukong-dragon-king",
    storyId: "journey-to-the-west",
    title: "Sun Wukong and the Dragon King",
    emoji: "🐉",
    content: "Sun Wukong, the bold Monkey King, dives into the underwater palace of the Dragon King to demand a worthy weapon. He tests staff after staff, finding them all too light, until he spots the massive iron pillar that holds up the ocean floor — the legendary Ruyi Jingu Bang. With a word, the staff shrinks to fit his hand, and Sun Wukong leaps back to shore, the most powerful monkey in the world.",
    pages: [
      "Deep beneath the roaring waves lived the Dragon King of the East Sea, surrounded by treasure beyond counting. Sun Wukong, the mischievous Monkey King, had heard that the palace held the greatest weapons ever made. He took one enormous breath, dived into the cold green water, and knocked on the giant golden gate. 'I need a weapon!' he announced. 'Nothing in the world is strong enough for me!'",
      "The Dragon King smiled nervously and ordered his guards to bring out spear after spear, sword after sword. Sun Wukong lifted each one and snapped it like a twig. The Dragon King began to sweat. Then an old advisor pointed to a glowing iron pillar in the corner of the throne room — it was the very pillar that kept the ocean floor from crumbling. No one had ever dared to touch it.",
      "Sun Wukong bounded over and wrapped both hands around the pillar. It was as thick as a tree and taller than a mountain. 'Shrink!' he commanded — and to everyone's amazement, the pillar shrank down to the size of a walking stick, then smaller still, until it was a slim red-tipped staff that fit perfectly behind his ear. The Dragon King's mouth fell open.",
      "Sun Wukong grinned his widest grin, tucked the Ruyi Jingu Bang behind his ear, and somersaulted out of the palace in a stream of bubbles. The ocean trembled as he shot back to shore. From that day on, the magical staff could grow tall enough to poke the clouds or shrink small enough to hide in a monkey's fur — and it obeyed only Sun Wukong.",
    ],
    questions: [
      {
        question: "Why did Sun Wukong visit the Dragon King's palace?",
        options: ["To steal treasure", "To demand a worthy weapon", "To challenge the Dragon King to a fight"],
        correctIndex: 1,
      },
      {
        question: "What was the Ruyi Jingu Bang before Sun Wukong took it?",
        options: ["A magical sword hanging on the wall", "A golden spear used by the guards", "An iron pillar holding up the ocean floor"],
        correctIndex: 2,
      },
      {
        question: "What special power did the staff have?",
        options: ["It could shoot lightning", "It could shrink or grow on command", "It could turn into any animal"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "sun-wukong-72-transformations",
    storyId: "journey-to-the-west",
    title: "Sun Wukong's 72 Transformations",
    emoji: "🐒",
    content: "Hungry for wisdom and power, Sun Wukong travels across the sea to find the immortal Master Patriarch Subodhi. After years of patient study, the master secretly teaches him the 72 Earthly Transformations — a dazzling magic that lets him become any creature, any object, or any person he imagines. Sun Wukong celebrates by turning into everything from a pine tree to a tiny mosquito, delighting his fellow students but worrying the master.",
    pages: [
      "Sun Wukong was the cleverest monkey on Flower-Fruit Mountain, but he wanted more than cleverness — he wanted immortality and magic. He built a raft out of bamboo, sailed across a stormy sea for many weeks, and finally found the cave of Master Patriarch Subodhi, an ancient immortal who lived inside a mountain of peach trees. 'Teach me everything!' Sun Wukong begged, bowing so fast his head thumped the ground.",
      "The master sighed but saw something special in the little monkey's eyes. For years, Sun Wukong swept floors, carried water, and tended the garden while listening to lessons. He learned poems, breathing exercises, and the secrets of the sky. Then one quiet night, the master tapped Sun Wukong three times on the head and whispered, 'Come to my room at midnight.' That tap was a secret signal.",
      "At midnight the master taught him the 72 Transformations — a magical art so powerful it could change any part of the body into anything at all. Sun Wukong practised all night. By morning he could turn into a fish, a bird, a boulder, a breeze, or even a tiny flea. He leapt outside and transformed into a pine tree right in front of his classmates. They gasped and clapped with delight.",
      "But the master called him back sternly. 'If you show off your magic, others will want it, and danger will follow you,' he warned. Sun Wukong promised to be careful — though everyone who knew him suspected he would not keep that promise for long. He packed his things, somersaulted back across the sea, and arrived home on Flower-Fruit Mountain ready to astound the world.",
    ],
    questions: [
      {
        question: "Why did Sun Wukong travel to find Master Subodhi?",
        options: ["To win a magic staff", "To learn immortality and magic", "To find the Dragon King's treasure"],
        correctIndex: 1,
      },
      {
        question: "How did the master signal that he would teach Sun Wukong the secret magic?",
        options: ["He wrote it in the sand", "He tapped Sun Wukong three times on the head", "He gave him a glowing scroll"],
        correctIndex: 1,
      },
      {
        question: "What did the master warn Sun Wukong about after teaching him the 72 Transformations?",
        options: ["That the magic would wear off in rain", "That showing off would bring danger", "That he could only transform at night"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "journey-begins",
    storyId: "journey-to-the-west",
    title: "The Journey Begins",
    emoji: "🧧",
    content: "The gentle monk Xuanzang receives a sacred mission from the Emperor: travel west to India and bring back the holy scriptures that will bring peace to the land. The road is filled with monsters and magic, so Heaven sends the reformed trickster Sun Wukong to be his protector. With a golden headband that keeps the mischievous monkey in check, the unlikely pair set off on the greatest adventure in Chinese legend.",
    pages: [
      "In the golden capital of Tang China, the Emperor had a dream: a golden light from the west carried scrolls of wisdom that could heal the kingdom. He summoned the kind monk Xuanzang and said, 'You must travel to India and bring back the holy scriptures.' The road west was the most dangerous in the world, full of demon-filled mountains and monster-haunted rivers, but Xuanzang bowed and accepted without fear.",
      "The Goddess Guanyin appeared in the sky like a cloud made of light. She told Xuanzang that three special disciples would join him on the road. The first was Sun Wukong, the Monkey King, who had spent five hundred years trapped under a mountain as punishment for his wild behaviour. When Xuanzang pulled away the magic seal, Sun Wukong burst free and somersaulted in the air with joy.",
      "But Guanyin was clever. She gave Xuanzang a golden headband and a special chant. When Sun Wukong put the headband on — thinking it was a lovely gift — Xuanzang recited the chant, and the band tightened around the monkey's head until he howled. 'That,' said Xuanzang calmly, 'is to remind you to behave.' Sun Wukong grumbled, but he had no choice.",
      "And so the journey began. Xuanzang rode his white horse, Sun Wukong bounded ahead with his magic staff, and the mountains of the west waited full of adventure. They would face eighty-one great trials before they reached India, but together — gentle monk and wild monkey — they were ready for every one.",
    ],
    questions: [
      {
        question: "What was Xuanzang's mission?",
        options: ["To defeat the Monkey King", "To travel west and bring back holy scriptures", "To build a new temple for the Emperor"],
        correctIndex: 1,
      },
      {
        question: "Why had Sun Wukong been trapped under a mountain?",
        options: ["He had stolen the Dragon King's staff", "He had been punished for his wild behaviour", "He had refused to help the Goddess Guanyin"],
        correctIndex: 1,
      },
      {
        question: "What did the golden headband do to Sun Wukong?",
        options: ["It gave him extra strength", "It made him invisible to demons", "It tightened painfully when Xuanzang recited a chant"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "white-snake-herbalist",
    storyId: "legend-white-snake",
    title: "The White Snake and the Herbalist",
    emoji: "🐍",
    content: "Bai Suzhen, a gentle white snake spirit who has lived for a thousand years, falls in love with a kind young herbalist named Xu Xian. When Xu Xian falls gravely ill, Bai Suzhen risks everything — climbing a dangerous holy mountain to steal a magical herb guarded by immortal cranes — and brings him back from the brink of death. Her bravery reveals the depth of her love, though it also reveals her secret power.",
    pages: [
      "On the misty West Lake, a beautiful young woman named Bai Suzhen shared an umbrella with a kind herbalist named Xu Xian during a sudden rainstorm. She smiled, he blushed, and before long they were married and living happily above a little medicine shop. The neighbours said they had never seen a couple so perfectly matched. What the neighbours did not know was that Bai Suzhen was really a thousand-year-old white snake spirit in human form.",
      "One cold winter, Xu Xian drank a cup of rice wine and collapsed. His face turned pale as paper. Bai Suzhen pressed her hand to his forehead — he was burning with a fever that no herb in the shop could cure. Only the magical lingzhi mushroom, which grew near the peak of Mount Kunlun, could save him. The mountain was guarded by fierce immortal cranes and one terrifying white deer spirit.",
      "Bai Suzhen flew to the mountain before dawn. She fought off the cranes, dodged the white deer's sharp horns, and finally reached the sacred garden where the glowing red lingzhi mushroom grew. She plucked it quickly, tucked it inside her robe, and raced home through the sky like a comet. Her hands were shaking, but her eyes were determined.",
      "She brewed the mushroom into a medicine and spooned it gently into Xu Xian's mouth. Within an hour, his eyes fluttered open and colour returned to his cheeks. 'What happened?' he asked weakly. 'You were ill,' she said simply, taking his hand. 'But you are safe now.' Xu Xian did not yet know what his wife truly was — but he knew, beyond any doubt, that she loved him.",
    ],
    questions: [
      {
        question: "What was Bai Suzhen's true form?",
        options: ["A fox spirit", "A thousand-year-old white snake spirit", "A river goddess"],
        correctIndex: 1,
      },
      {
        question: "What medicine did Bai Suzhen need to cure Xu Xian?",
        options: ["A magical lingzhi mushroom from Mount Kunlun", "A golden fish from the West Lake", "A rare flower from the Emperor's garden"],
        correctIndex: 0,
      },
      {
        question: "Who guarded the sacred garden on Mount Kunlun?",
        options: ["Dragons and tigers", "Immortal cranes and a white deer spirit", "Ten warrior monks"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "battle-with-fa-hai",
    storyId: "legend-white-snake",
    title: "The Battle with Fa Hai",
    emoji: "⛩️",
    content: "The stern Buddhist monk Fa Hai believes that snake spirits can never truly love humans and sets out to separate Bai Suzhen and Xu Xian forever. When he lures Xu Xian to the safety of his temple, Bai Suzhen arrives with her loyal companion Xiao Qing and unleashes a flood to break the temple walls. The battle shakes the earth and sky, testing whether love or law will prove stronger.",
    pages: [
      "Fa Hai was a powerful monk who lived in Jinshan Temple on the river. He had seen many dangerous spirits in his long life, and when he heard that Xu Xian had married a snake demon, he was furious. 'Spirits and humans must not mix!' he thundered. He sent a message to Xu Xian, full of clever warnings, and invited him to the temple — where he promptly locked the poor man inside.",
      "Bai Suzhen arrived at the riverbank with her loyal green-snake friend Xiao Qing and called out to Xu Xian, but the temple gates were barred. Fa Hai appeared on the temple wall and shouted that Xu Xian would never leave. Bai Suzhen's eyes filled with tears — then with fire. She raised her arms wide, called upon all the water spirits of the river, and commanded the flood to rise.",
      "Waves crashed against the temple walls. Soldiers made of water charged up the steps. Fish and crabs and river dragons swirled through the streets as the flood rose higher and higher. Fa Hai stood firm, chanting powerful spells to hold back the water. The two forces — love and law — clashed like thunder, and the whole city trembled.",
      "In the end, Fa Hai's magic was stronger that day. The flood receded and Bai Suzhen was weakened. But she never gave up hope. Xiao Qing vowed to grow more powerful and return. The story of Bai Suzhen's fierce love spread across China — people lit incense in her honour, saying that a love brave enough to flood a temple was a love worth remembering forever.",
    ],
    questions: [
      {
        question: "Why did Fa Hai want to separate Bai Suzhen and Xu Xian?",
        options: ["He wanted Xu Xian's medicine shop", "He believed spirits and humans must not be together", "He was jealous of their happiness"],
        correctIndex: 1,
      },
      {
        question: "What did Bai Suzhen do when Fa Hai locked Xu Xian in the temple?",
        options: ["She asked the Emperor for help", "She called upon water spirits and caused a great flood", "She turned into her snake form and broke down the gate"],
        correctIndex: 1,
      },
      {
        question: "Who was Xiao Qing?",
        options: ["Bai Suzhen's sister", "Xu Xian's brother", "Bai Suzhen's loyal green-snake companion"],
        correctIndex: 2,
      },
    ],
  },

  // ── United Kingdom ─────────────────────────────────────────────────────────

  {
    id: "arthur-sword-stone",
    storyId: "arthurian-legends",
    title: "The Sword in the Stone",
    emoji: "⚔️",
    content: "A young squire named Arthur is sent scrambling to find a replacement sword for his older brother's tournament and stumbles upon a mysterious sword buried in a stone in a churchyard. While knights from across England have failed to pull it free, Arthur draws it out effortlessly — revealing to the astonished crowd that this humble boy is the true-born King of Britain.",
    pages: [
      "The great tournament in London was about to begin, and every knight in England had come to compete. Arthur was only a squire — a helper — for his older foster-brother Sir Kay. When Kay realised he had left his sword at the inn, he sent Arthur racing back to fetch it. But the inn was locked up tight. Arthur ran through the streets looking everywhere for a spare sword.",
      "In a quiet churchyard, Arthur spotted something extraordinary: a gleaming sword stuck point-down inside a large smooth stone. Around the stone were words carved in gold: WHOEVER DRAWS THIS SWORD FROM THIS STONE IS THE TRUE-BORN KING OF ALL ENGLAND. Dozens of famous knights had tried and failed to move it even a hair's width. Arthur had never heard of the sword — he just needed to borrow it for Kay.",
      "Arthur grabbed the handle and pulled. The sword slid out as easily as a knife from soft butter. He blinked, shrugged, and ran back to the tournament. When the great wizard Merlin saw the sword in Arthur's hand, he stopped absolutely still. The Archbishop walked over, read the inscription, and called the crowd to attention.",
      "Kay tried to claim he had pulled the sword himself, but when he was asked to put it back and draw it again, he could not move it. Then Arthur stepped up, touched the handle, and drew it free once more — smooth as silk. The crowd roared. Knights knelt in the mud. Old Merlin smiled his long slow smile. A boy raised among farmers had just become the King of Britain.",
    ],
    questions: [
      {
        question: "Why did Arthur pull the sword from the stone in the first place?",
        options: ["He wanted to prove he was king", "He needed a spare sword for his brother's tournament", "Merlin told him to pull it"],
        correctIndex: 1,
      },
      {
        question: "What words were carved on the stone?",
        options: ["Only the bravest knight may take this sword", "Whoever draws this sword is the true-born King of all England", "This sword belongs to the Dragon of Camelot"],
        correctIndex: 1,
      },
      {
        question: "How did the crowd finally accept Arthur was king?",
        options: ["Merlin cast a spell on everyone", "Arthur fought and beat every knight", "Arthur put the sword back and drew it out again in front of everyone"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "gawain-green-knight",
    storyId: "arthurian-legends",
    title: "Sir Gawain and the Green Knight",
    emoji: "🌿",
    content: "On a wild New Year's night, a giant green knight rides into King Arthur's hall and issues an outrageous challenge: any knight may strike off his head — if that knight agrees to receive the same blow one year later. The young Sir Gawain accepts, swings the axe, and watches in horror as the headless knight picks up his own head and rides away laughing, reminding Gawain of their appointment.",
    pages: [
      "It was New Year's night and King Arthur's great hall blazed with firelight and laughter. Suddenly the doors crashed open and an enormous knight rode in on horseback. From head to toe — his skin, his armour, his horse, even his holly branch — everything about him was a deep, vivid green. The hall fell silent. The Green Knight laughed a booming laugh and called out a challenge to any knight brave enough to accept.",
      "'Here is the game,' said the Green Knight, swinging a glittering axe. 'Strike my head off now — but in one year, you must come to the Green Chapel and let me return the blow.' The hall was so quiet you could hear the candles flicker. King Arthur was about to step forward himself when the young Sir Gawain leapt from his seat and said, 'Let me take the challenge, my lord.'",
      "Gawain gripped the axe with both hands and brought it down in one clean stroke. The Green Knight's head rolled across the floor. The hall erupted in cheers — but then stopped dead. The headless body calmly walked over, reached down, and picked up its own head. The Green Knight's eyes opened in his severed head, and his lips curved into a grin.",
      "'Remember, Sir Gawain,' the head called out cheerfully as the knight rode back toward the door, 'the Green Chapel — one year from today!' And then he was gone into the snowy night. Gawain sat back down at the table, his hands trembling, the heavy axe still in his lap. He had one year to enjoy every feast and every sunrise — and one very frightening appointment to keep.",
    ],
    questions: [
      {
        question: "What was the Green Knight's challenge?",
        options: ["A jousting tournament to win a golden crown", "Strike his head off, then receive the same blow a year later", "Solve three riddles before midnight"],
        correctIndex: 1,
      },
      {
        question: "What did the Green Knight do after his head was cut off?",
        options: ["He fell to the ground and disappeared", "He picked up his own head and rode away", "He turned into a dragon"],
        correctIndex: 1,
      },
      {
        question: "Where did the Green Knight say Gawain must meet him in a year?",
        options: ["The Dark Forest", "The Green Chapel", "The Castle of the North Wind"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "peter-pan-and-wendy",
    storyId: "peter-pan",
    title: "Peter Pan and Wendy",
    emoji: "✨",
    content: "Peter Pan, the boy who never grows up, flies into the nursery window of the Darling house and whisks Wendy, John, and little Michael away to the magical island of Neverland. Sprinkled with Tinker Bell's golden fairy dust, the children soar over London rooftops and out across the starlit sea toward a world of mermaids, fairies, and the Lost Boys — where bedtime is just an adventure waiting to begin.",
    pages: [
      "Wendy Darling was eleven years old and still believed in fairies, which was just as well. One night she woke to find a boy hovering outside the nursery window, chasing a tiny ball of light. The ball of light was his fairy, Tinker Bell, who darted about the room jealously while the boy — Peter Pan — tried to stick his shadow back onto his feet with soap.",
      "Peter Pan had come to listen to Wendy's stories, for the Lost Boys in Neverland had no mother to tell them tales. 'Come with me!' he said, his eyes bright. 'I'll teach you to fly.' Wendy woke her brothers John and Michael, and Peter sprinkled all three of them with Tinker Bell's golden fairy dust — just a pinch on each shoulder. 'Now think of something wonderful,' Peter said.",
      "One by one they rose from the floor. Michael giggled as he bumped the ceiling. John knocked over a lamp and did not even care. Wendy stretched her arms wide and found herself floating toward the open window. Below, the lights of London glittered like stars. Peter pointed straight ahead — 'Second star to the right, and straight on till morning!'",
      "They flew all night above ships and whales and singing mermaids, and when sunrise turned the sea gold, a wild green island rose out of the waves below. It had a lagoon and a forest and a mountain with smoke curling from its peak. 'Neverland!' crowed Peter, doing a loop-the-loop. The children held hands and dived toward it, hearts pounding with the best kind of fear.",
    ],
    questions: [
      {
        question: "Why did Peter Pan want Wendy to come to Neverland?",
        options: ["To fight Captain Hook", "To tell stories to the Lost Boys", "To help Tinker Bell find more fairy dust"],
        correctIndex: 1,
      },
      {
        question: "What made the children able to fly?",
        options: ["A magic wand from Tinker Bell", "A potion Wendy drank", "Tinker Bell's golden fairy dust sprinkled on their shoulders"],
        correctIndex: 2,
      },
      {
        question: "What directions did Peter give for reaching Neverland?",
        options: ["Follow the moon until dawn", "Second star to the right, and straight on till morning", "Turn left at the top of the clouds"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "captain-hook-revenge",
    storyId: "peter-pan",
    title: "Captain Hook's Revenge",
    emoji: "🏴‍☠️",
    content: "Captain Hook, the cunning pirate captain of the Jolly Roger, has never forgiven Peter Pan for cutting off his hand and feeding it to a saltwater crocodile — who now follows the ship everywhere, waiting for the rest of him. Hook hatches a plan to capture Wendy and the Lost Boys, luring Peter into a final showdown on the deck of the pirate ship where only the sound of a ticking clock can save the day.",
    pages: [
      "Captain James Hook was the most feared pirate on all the seven seas — except for one sound. Tick, tock, tick, tock. Somewhere in the waters of Neverland swam a very large crocodile with a clock inside its stomach. The crocodile had once eaten Captain Hook's hand (thrown to it by Peter Pan after a sword fight) and had enjoyed the taste so much that it followed the Jolly Roger everywhere, hoping for more. Hook turned pale every time he heard it.",
      "Hook's revenge was carefully planned. He captured Tiger Lily's message and discovered the hideout of the Lost Boys. One by one, while Peter slept, his pirates seized Wendy, John, Michael, and all the Lost Boys and dragged them to the Jolly Roger in chains. Hook then left a poisoned cake near Peter's bed — but a faithful fairy warned Peter just in time.",
      "Peter flew to the ship at midnight, silent as an owl. He freed the prisoners and hid them below deck, then called out to Hook: 'I'm here, you old codfish!' Hook spun around, his hook gleaming in the moonlight. Their swords rang out across the water in a furious duel — Peter laughing, Hook snarling — back and forth across the deck.",
      "Then — tick, tock, tick, tock — the crocodile surfaced beside the ship, its yellow eyes glowing. Hook's face went white as a sail. His sword arm trembled. In that one distracted moment Peter gave him a shove, and Hook toppled overboard with a tremendous splash — straight toward the waiting crocodile. The pirates fled, the children cheered, and Peter crowed his victory call across the stars.",
    ],
    questions: [
      {
        question: "Why was Captain Hook afraid of the crocodile?",
        options: ["It had swallowed his sword", "It had eaten his hand and followed him wanting more", "It was sent by the mermaids to punish him"],
        correctIndex: 1,
      },
      {
        question: "How did Peter know not to eat the poisoned cake?",
        options: ["Wendy warned him in a letter", "He smelled the poison", "A faithful fairy warned him in time"],
        correctIndex: 2,
      },
      {
        question: "What caused Hook to lose his balance and fall overboard?",
        options: ["Peter hit him with a cannonball", "He slipped on a wet rope", "He was distracted by the sound of the ticking crocodile"],
        correctIndex: 2,
      },
    ],
  },

  // ── Ireland ─────────────────────────────────────────────────────────────────

  {
    id: "seamus-leprechaun-gold",
    storyId: "irish-folk-tales",
    title: "The Leprechaun's Gold",
    emoji: "🍀",
    content: "Young Seamus spots a tiny leprechaun cobbling shoes under a mushroom and grabs him tight — because everyone knows a leprechaun must grant three wishes if caught. Seamus demands to be taken to the leprechaun's pot of gold, but the wily little fellow uses every trick in the book to outsmart the boy, proving that leprechaun cunning is more than a match for human greed.",
    pages: [
      "Seamus was walking home through the meadow one bright morning when he heard a faint tap-tap-tapping near a cluster of toadstools. He crept closer and peered under the biggest mushroom. There sat a tiny man no taller than a milk bottle, wearing a green coat and a buckled hat, hammering a shoe the size of a thimble. It was a leprechaun — and Seamus knew exactly what to do.",
      "He grabbed the leprechaun with both hands before the creature could vanish. 'Gotcha!' Seamus cried. The leprechaun wriggled and squirmed. 'Let me go, you great clumsy boy!' he squeaked. 'Not until you show me your gold,' said Seamus firmly. The leprechaun sighed the deepest sigh and pointed across the field. 'It's buried under that oak tree over there. But you must not take your eyes off me!'",
      "Seamus marched across the field, leprechaun in one fist, eyes locked on the tiny green face. They reached the oak tree. 'You'll need a spade,' said the leprechaun innocently. 'I'll tie my red ribbon to this exact root so you can find the right spot.' Seamus thought this was very helpful. He turned just for a second to find his spade — and the leprechaun was gone. Vanished like morning mist.",
      "Seamus ran back to the tree. The red ribbon was there — tied to every single root of the enormous oak. Hundreds of ribbons. He would have to dig up the whole field. He could hear tiny laughter bubbling up from somewhere deep in the earth. 'Thank you for the ribbons, boy!' called a faraway voice. Seamus sat down in the mud and laughed too. You had to admire the cheek of it.",
    ],
    questions: [
      {
        question: "What must a leprechaun do if a human catches him?",
        options: ["Sing three songs", "Grant the human's wishes or show them gold", "Turn the human into a frog"],
        correctIndex: 1,
      },
      {
        question: "What trick did the leprechaun use to escape?",
        options: ["He cast a sleeping spell on Seamus", "He got Seamus to look away for a moment", "He turned invisible"],
        correctIndex: 1,
      },
      {
        question: "What did Seamus find when he returned to the oak tree?",
        options: ["A pot of gold and a note", "The leprechaun waiting for him", "Red ribbons tied to every root of the tree"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "selkie-song",
    storyId: "irish-folk-tales",
    title: "The Selkie's Song",
    emoji: "🦭",
    content: "Old Ciarán the fisherman walks the beach at dawn and finds a folded seal skin hidden among the rocks — a selkie's skin. He takes it home and hides it, and soon a beautiful woman appears at his door, unable to return to the sea. They build a life together for many years, but the selkie never stops listening for the sound of waves, and her children know her secret long before she finds her skin again.",
    pages: [
      "Before the sun was fully up, old Ciarán walked his usual path along the rocky shore. The seals were out early, barking on the black rocks, their dark eyes watching him. Then he spotted something strange: a grey skin, soft as velvet, folded neatly in a crevice. He knew at once what it was — a selkie's skin. A seal-woman had come ashore and left her sea-coat behind.",
      "Ciarán took the skin home and hid it in the thatch of his roof, high where no one could find it. That very afternoon, a woman with dark eyes and sea-green hair knocked on his door, shivering in the cold wind. She had nowhere to go. Ciarán gave her a warm shawl, and she stayed. They were married before the autumn storms, and in time they had three children with silver-grey eyes.",
      "The selkie was a good mother and a kind wife, but she was always listening. She would stand at the door in the evenings, her head tilted, her eyes far away. The children noticed she could hold her breath longer than anyone, and that seals would swim right up to the shore when she called. The youngest daughter climbed up to the thatch one wet afternoon looking for a lost toy and found the folded grey skin.",
      "The daughter said nothing to her father — but slipped the skin under her mother's pillow. That night, the selkie pressed her face against her children's hair for a long time. Then she walked to the shore in the moonlight, pulled on her skin, and slid into the waves with barely a splash. She never forgot her children — every year on the same night, three seals would swim close to the shore and watch the cottage with dark, familiar eyes.",
    ],
    questions: [
      {
        question: "What did Ciarán find on the beach at dawn?",
        options: ["A golden ring", "A selkie's seal skin folded in a crevice", "A message in a bottle"],
        correctIndex: 1,
      },
      {
        question: "How did the selkie's children know their mother was different?",
        options: ["She never ate fish", "She could hold her breath longer than anyone and seals came when she called", "She glowed in the dark"],
        correctIndex: 1,
      },
      {
        question: "Who found the hidden seal skin?",
        options: ["Ciarán while fixing the roof", "The youngest daughter while looking for a lost toy", "The selkie herself after searching for years"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "salmon-of-knowledge",
    storyId: "celtic-fairy-tales",
    title: "The Salmon of Knowledge",
    emoji: "🐟",
    content: "For seven years the poet Finnéces has sat beside the River Boyne trying to catch the legendary Salmon of Knowledge — the fish that contains all the wisdom in the world. When young Fionn MacCool arrives as his student and accidentally tastes the salmon's juice, all that ancient knowledge floods into the boy in a single blazing moment, and Finnéces understands that the wisdom was never meant for him.",
    pages: [
      "The River Boyne sparkled through green hills, and beside it sat old Finnéces, his fishing line dangling in the water. He had been sitting there for seven years. Long ago, a druid had prophesied that a man named Fionn would one day eat the Salmon of Knowledge and gain all the wisdom in the world. Finnéces believed he was that Fionn — but the salmon had never been caught.",
      "Then a young boy arrived at the riverbank. His name was Fionn MacCool. He had bright eyes and quick hands, and Finnéces took him on as a student. The very day after Fionn arrived, the old man's line went taut. He pulled and pulled and hauled up a great silver salmon with scales that shimmered like starlight. 'I've caught it at last!' he gasped. 'Cook it carefully, boy — and do NOT taste a single bite.'",
      "Fionn built a fire and cooked the salmon with great care. But as he turned it on the spit, a blister rose on the fish's skin. Without thinking, Fionn pressed it down with his thumb to smooth it — and the hot juice burned him. He stuck his thumb in his mouth to soothe the pain. In that instant, the whole world opened up inside his mind.",
      "When Finnéces came to eat his meal, he looked at Fionn and saw something new in the boy's eyes — a deep, ancient brightness. 'Did you taste it?' he asked quietly. Fionn showed him his thumb. Finnéces was silent for a long time. Then he smiled slowly. 'It was always meant for you,' he said, and pushed the whole salmon toward the boy. Fionn MacCool ate it all — and grew up to be the wisest hero in all of Ireland.",
    ],
    questions: [
      {
        question: "How long had Finnéces been trying to catch the Salmon of Knowledge?",
        options: ["Three months", "Seven years", "One whole winter"],
        correctIndex: 1,
      },
      {
        question: "How did Fionn accidentally taste the salmon?",
        options: ["He sneaked a bite when Finnéces was not looking", "He burnt his thumb on a blister and put it in his mouth", "He fell into the cooking pot"],
        correctIndex: 1,
      },
      {
        question: "What happened the moment Fionn tasted the salmon's juice?",
        options: ["He turned into a fish", "He fell asleep for one hundred years", "All the wisdom in the world flooded into his mind"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "lir-swans-aoife",
    storyId: "celtic-fairy-tales",
    title: "The Children of Lir",
    emoji: "🦢",
    content: "The four beloved children of the Irish sea-god Lir are turned into swans by their jealous stepmother Aoife. Condemned to spend nine hundred years on the cold lakes and seas of Ireland, they keep their human voices and spend the centuries singing songs so beautiful that everyone who hears them weeps. Only a church bell and the love of a kind monk can finally break the spell.",
    pages: [
      "King Lir loved his four children more than anything under the Irish sky. Their names were Fionnuala, Aodh, Fiachra, and Conn, and they had their father's bright laugh and their dead mother's kind eyes. When Lir married again, the children were happy at first — but their new stepmother Aoife watched them with cold, jealous eyes. They were too beloved. Everyone loved them more than her.",
      "One sunny morning Aoife took the children to the Lake of Derravaragh, saying they would swim and play. But when the children waded into the water, Aoife raised her druid's staff and whispered a terrible spell. Four white swans burst from the rippling surface where the children had been. Aoife's voice rang out across the water: 'You will be swans for nine hundred years — three hundred on this lake, three hundred on the Sea of Moyle, and three hundred on the western ocean.'",
      "But Aoife could not take their voices. The four swan-children kept the gift of human speech — and more than that, they could sing. Their songs were so achingly beautiful that deer would stop in the forest to listen, and fishermen would forget to pull in their nets. Word spread across Ireland: if you heard four swans singing together on the lake at dawn, it meant the children of Lir were near.",
      "Nine hundred years passed like a slow dream. At last a monk named Mochaomhóg heard four swans singing outside his chapel. He rang his small silver bell to call them in, and the moment its tone touched the water, the spell broke. Four ancient, gentle people stood in the shallows where the swans had been. The monk wrapped them in his cloak, and they smiled for the first time in nine hundred years.",
    ],
    questions: [
      {
        question: "Why did Aoife turn the children of Lir into swans?",
        options: ["They had been rude to her", "She was jealous because everyone loved them more than her", "A druid told her it was the only way to be queen"],
        correctIndex: 1,
      },
      {
        question: "What gift did the children keep even after being turned into swans?",
        options: ["The ability to breathe fire", "Their human voices and the ability to sing", "The power to call storms"],
        correctIndex: 1,
      },
      {
        question: "What broke the spell after nine hundred years?",
        options: ["Lir found a cure in an ancient book", "The sound of a monk's silver bell", "The children touched dry land for the first time"],
        correctIndex: 1,
      },
    ],
  },

  // ── Egypt ───────────────────────────────────────────────────────────────────

  {
    id: "osiris-and-isis",
    storyId: "ancient-egyptian-myths",
    title: "Osiris and the Clever Isis",
    emoji: "𓂀",
    content: "The great god Osiris rules Egypt wisely and justly until his jealous brother Set tricks him into a beautiful coffin, seals it shut, and throws it into the Nile. His devoted wife Isis searches all of Egypt and beyond to find him, using her extraordinary magic to bring Osiris back to life long enough to ensure that their son Horus will one day reclaim the throne.",
    pages: [
      "Osiris was the greatest king Egypt had ever known. He taught people to farm the land, bake bread, and live by fair laws. His wife Isis stood beside him, wise and full of magic. But Osiris's brother Set burned with jealousy. Set secretly measured Osiris's body and built a magnificent golden chest exactly the right size. At a feast, he announced a game: whoever fit perfectly inside the chest would win it.",
      "Guest after guest tried the chest — it was always a little too big or too small. Then Osiris stepped forward and lay down inside it, because it was made just for him. Set slammed the lid, hammered it shut with iron nails, poured molten lead around the edges, and threw it into the Nile. The chest floated out to sea. Osiris was gone.",
      "Isis wept, but she did not give up. She searched every shore, every marsh, every cedar forest until she found the chest tangled in the roots of a great tree in a distant land. She brought it home on a boat, her tears falling like warm rain into the river. Alone in the marshes of the delta, she used the deepest magic she knew — breathing life back into Osiris just long enough.",
      "Set found the body and tore it apart, scattering the pieces across all of Egypt. But Isis gathered every piece and bandaged them back together with linen wrappings, creating the first mummy. She fanned her great wings over Osiris and breathed life into him one last time. Osiris became the king of the land of the dead, and their son Horus grew up to take back the throne of the living.",
    ],
    questions: [
      {
        question: "How did Set trick Osiris into the golden chest?",
        options: ["He told Osiris there was treasure inside", "He announced that whoever fit the chest perfectly would win it", "He drugged Osiris's drink at the feast"],
        correctIndex: 1,
      },
      {
        question: "What did Isis do when she found Osiris's body?",
        options: ["She buried it in a golden pyramid", "She used magic to bring him back to life and later bandaged him as a mummy", "She asked Ra to restore him"],
        correctIndex: 1,
      },
      {
        question: "What did Osiris become after Isis's magic?",
        options: ["The god of the sun", "The king of the land of the dead", "A great star in the sky"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "ra-and-apep",
    storyId: "ancient-egyptian-myths",
    title: "Ra and the Serpent Apep",
    emoji: "☀️",
    content: "Every single night the sun-god Ra climbs into his sacred barque and sails through the dark underworld, battling the enormous chaos serpent Apep who tries to swallow him whole and stop the sun from ever rising again. With the help of the gods Set, Thoth, and the spells of every priest in Egypt, Ra fights the same battle every night — and every morning his victory fills the sky with golden light.",
    pages: [
      "Every evening, when the last golden light faded from the Nile, the sun-god Ra stepped into his sacred barque — a boat made of pure light — and began his journey through the Duat, the dark underworld beneath the earth. The Duat was full of shadows and strange creatures, but Ra had to pass through it to reach the eastern horizon and rise again in the morning.",
      "In the deepest part of the underworld lurked Apep — a serpent so enormous that his coils could block out all light forever. His scales scraped the cavern walls, his breath was chaos and darkness, and every night he lay in wait, mouth wide open, ready to swallow Ra's barque whole. If Apep ever succeeded, the sun would never rise again and the world would end.",
      "But Ra was never alone. The god Set stood at the prow of the barque, his great spear ready. Thoth carried powerful words of magic. The crew chanted protective spells, and in every temple across Egypt, priests burned incense and recited the secret names of Apep to weaken him. Together they fought — Set's spear driving into the great serpent's body, Thoth's words binding its coils.",
      "Every night the battle raged in the dark, and every morning the golden prow of Ra's barque broke through the eastern horizon. The sky turned pink, then orange, then blazing gold, and the people of Egypt who had prayed through the night lifted their hands with relief and joy. Ra had won again. The sun was back. And somewhere deep below the earth, a very angry serpent was already planning his next attempt.",
    ],
    questions: [
      {
        question: "Why did Ra have to travel through the underworld every night?",
        options: ["To visit the land of the dead and give blessings", "To reach the eastern horizon and rise again in the morning", "To rest after a long day in the sky"],
        correctIndex: 1,
      },
      {
        question: "Who stood at the prow of Ra's barque to fight Apep?",
        options: ["Isis with her wings", "Set with his great spear", "Osiris with a golden shield"],
        correctIndex: 1,
      },
      {
        question: "How did the priests of Egypt help Ra fight Apep?",
        options: ["By sailing boats on the Nile all night", "By building walls around the temples", "By burning incense and reciting the secret names of Apep to weaken him"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "sinuhe-flees-egypt",
    storyId: "tales-of-sinuhe",
    title: "Sinuhe Flees Egypt",
    emoji: "🏺",
    content: "Sinuhe is a trusted official of the Egyptian court when he overhears a secret message about the Pharaoh's death. Seized by a sudden panic he cannot explain, he flees into the desert, crosses rivers, and stumbles through foreign lands until a kind Bedouin chief takes him in. For years Sinuhe lives in exile, homesick and full of shame, wondering if Egypt will ever call him home.",
    pages: [
      "Sinuhe served the royal family of Egypt faithfully for many years. He was trusted, well-fed, and respected. Then one afternoon, while waiting near the palace gardens, he overheard a hurried message from the frontier: the great Pharaoh had died on a distant campaign. Sinuhe did not stop to think. Something like cold water poured through his chest, and his feet moved before his mind did.",
      "He slipped out of the palace, crossed the Nile alone at night on a small reed boat, and ran north into the desert. He did not know why he was running — he had done nothing wrong — but the fear was larger than reason. He crawled through dust and thorns, nearly dying of thirst, until the desert opened into a flat plain where Bedouin tents glowed like fireflies in the dark.",
      "A chief named Ammunenshi found Sinuhe collapsed at the edge of his camp and brought him water and goat's milk. When Sinuhe told him he was an Egyptian court official, Ammunenshi smiled broadly. 'Then you are welcome,' he said. 'Stay with us.' Sinuhe married the chief's daughter, commanded warriors, and was given fine land covered with figs and vines.",
      "But every night Sinuhe lay awake listening to the wind and thinking of Egypt — of the Nile at flood, of the smell of river mud and baking bread, of the temples in the morning light. He had a good life, but it was not his life. Slowly, painfully, he began to write a letter to the new Pharaoh, confessing everything, hoping against hope that Egypt would forgive him and take him home.",
    ],
    questions: [
      {
        question: "What news did Sinuhe overhear that caused him to flee?",
        options: ["That he was going to be arrested", "That the great Pharaoh had died", "That an enemy army was approaching the palace"],
        correctIndex: 1,
      },
      {
        question: "Who saved Sinuhe when he collapsed in the desert?",
        options: ["A wandering Egyptian trader", "A Bedouin chief named Ammunenshi", "A group of Nubian soldiers"],
        correctIndex: 1,
      },
      {
        question: "What did Sinuhe miss most during his years in exile?",
        options: ["His palace job and his salary", "Egypt — the Nile, the temples, and the life he had known", "His horse and armour"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "sinuhe-great-duel",
    storyId: "tales-of-sinuhe",
    title: "The Great Duel",
    emoji: "🗡️",
    content: "After years of peaceful life in the land of Retjenu, Sinuhe's reputation as a brave warrior attracts the envy of a local champion who challenges him to a public duel to the death. Sinuhe prays to the gods of Egypt, faces the giant warrior on the field of honour, and wins a stunning victory that seals his fame in a foreign land — though his heart still aches for home.",
    pages: [
      "Sinuhe had lived so long in the land of Retjenu that he had grown a beard and learned to throw a curved bow. Chief Ammunenshi's men followed him into battle, and he had won so many fights that his name was spoken around campfires with respect. But fame has a cost. A great champion of the land — tall as a cedar, proud as a bull — sent a message to Sinuhe: 'Fight me, Egyptian, or admit you are a coward.'",
      "That night Sinuhe could not sleep. He stretched out on his mat and prayed to every Egyptian god he could remember: Amun, Ra, Ptah, Hathor. He thought of the Nile and the sound of priests chanting in the cool stone temples. In the morning, his hands were steady. He chose his weapons carefully: a bow for distance, an axe and a knife for close work, and a shield of polished wood.",
      "The whole tribe gathered to watch. The champion strode out first, his weapons flashing, jeering at the small Egyptian. Sinuhe moved in silence. His first arrow nicked the champion's shield. His second slid past his ear. Then, before the man could charge, Sinuhe drove his axe into the champion's weapon with a crack, stepped inside his reach, and knocked him down with a sharp strike.",
      "The champion lay defeated. A great shout went up from the crowd. Sinuhe took the fallen man's cattle and weapons as was the custom and gave silent thanks to his Egyptian gods. Ammunenshi embraced him and called him son. Sinuhe smiled and accepted the praise — but that night he sat alone and looked east toward Egypt, thinking that a victory far from home still feels a little like being lost.",
    ],
    questions: [
      {
        question: "Why did the champion challenge Sinuhe to a duel?",
        options: ["Sinuhe had insulted him at a feast", "Sinuhe's growing fame made the champion envious", "They were fighting over land rights"],
        correctIndex: 1,
      },
      {
        question: "What did Sinuhe do the night before the duel?",
        options: ["He practised sword fighting all night", "He prayed to the Egyptian gods he remembered", "He asked Ammunenshi to fight for him"],
        correctIndex: 1,
      },
      {
        question: "What happened after Sinuhe won the duel?",
        options: ["He was made the new chief of the tribe", "He received the champion's cattle and weapons as was the custom", "He was given permission to return to Egypt immediately"],
        correctIndex: 1,
      },
    ],
  },

  // ── USA ─────────────────────────────────────────────────────────────────────

  {
    id: "coyote-stole-fire",
    storyId: "native-american-legends",
    title: "How Coyote Stole Fire",
    emoji: "🔥",
    content: "In the days when only the selfish Fire Beings on the mountaintop had fire, the people on the plain froze through every winter. Coyote the trickster comes up with a daring relay-race plan: he will steal an ember from the fire and pass it to his animal friends one by one until it reaches safety. His sharp wits and brave friends change the world forever.",
    pages: [
      "Long ago the world was cold for the people of the plain. High on a mountaintop lived the three Fire Beings, who kept all the fire for themselves, warming their hands and roasting their meals while the people below shivered under thin deer-hide blankets. Coyote watched the distant orange glow from the valley and thought hard. He was the best trickster in the world. Surely he could think of something.",
      "Coyote climbed toward the mountain, and along the way he placed his friends at different points along the trail, each one ready to run. Squirrel waited by the pine trees. Frog waited by the stream. Wood waited near the bottom. Coyote himself crept close to the Fire Beings' camp and watched their routine for many days, waiting for the right moment.",
      "One foggy morning, when one Fire Being dozed off, Coyote darted in and snatched a glowing ember in his mouth. He ran as fast as his four legs could carry him, the Fire Beings shrieking behind him. When they were about to catch him, he tossed the ember to Squirrel. Squirrel grabbed it and ran, but the fire was so hot it singed her tail into a permanent curl.",
      "Squirrel threw it to Frog, who swallowed it. The Fire Beings grabbed Frog's tail and pulled — and it tore right off. That is why frogs have no tails today. Frog spat the ember into Wood, and the Fire Beings could not get it back. Coyote stepped up and showed the people how to rub two sticks together until Wood released the fire inside. The people were never cold again.",
    ],
    questions: [
      {
        question: "Who had fire before Coyote stole it?",
        options: ["The Eagle People on the high cliffs", "The three selfish Fire Beings on the mountaintop", "The Fish People in the deep river"],
        correctIndex: 1,
      },
      {
        question: "Why does Squirrel's tail curl today, according to the story?",
        options: ["She fell from a tall tree as a baby", "The hot ember singed it when she carried the fire", "A Fire Being grabbed her and twisted it"],
        correctIndex: 1,
      },
      {
        question: "How was the fire finally kept safe from the Fire Beings?",
        options: ["Coyote buried the ember in the ground", "An eagle carried it to the moon", "Frog spat it into Wood, and the Fire Beings could not get it out"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "raven-brings-light",
    storyId: "native-american-legends",
    title: "Raven Brings Light",
    emoji: "🌅",
    content: "In the time before the sun, Raven discovers that the Sky Chief keeps all the light in the world locked inside three carved boxes in his longhouse. Using his extraordinary shapeshifting power, Raven transforms himself into a spruce needle, slips inside, and tricks his way into the boxes one by one until he can fly out with starlight, moonlight, and finally the blazing sun — releasing all of them into the sky.",
    pages: [
      "In the beginning the world was dark. There were no stars, no moon, and no sun. People stumbled about in blackness and bumped into each other and the trees. High in the clouds, the Sky Chief lived in a great longhouse and kept all the light in the world stored in three beautifully carved wooden boxes on his highest shelf. He liked having everything for himself.",
      "Raven, who was jet black and very clever, decided the darkness was unacceptable. He discovered that the Sky Chief had a daughter who drank water from a stream each day. Raven turned himself into a tiny spruce needle, floated into the water pail, and was swallowed by the daughter. He was born again as her baby grandson — a small human boy with bright eyes.",
      "The Sky Chief adored his grandchild and gave him whatever he asked for. First Raven played with the smallest box. The Sky Chief relented and let him open it — stars burst into the air and scattered across the dark sky. Then Raven cried for the second box and released the moon, which rolled up into the sky and lit the world with silver light.",
      "Finally Raven grabbed the third and biggest box and ran for the smoke-hole in the roof. As the Sky Chief lunged for him, Raven transformed back into his bird form, the box in his talons. He burst out of the smoke-hole, cracked the box open, and the sun roared into the sky in an explosion of golden fire. The world lit up from horizon to horizon. Raven's feathers were scorched black — and they have been that colour ever since.",
    ],
    questions: [
      {
        question: "Where did the Sky Chief keep all the light in the world?",
        options: ["In a cave beneath the sea", "In three carved wooden boxes in his longhouse", "Inside a giant crystal on a mountain peak"],
        correctIndex: 1,
      },
      {
        question: "How did Raven sneak into the Sky Chief's longhouse?",
        options: ["He disguised himself as a servant", "He flew in through the smoke-hole at night", "He turned into a spruce needle and was swallowed by the Sky Chief's daughter"],
        correctIndex: 2,
      },
      {
        question: "Why are Raven's feathers black?",
        options: ["He was painted black by the Sky Chief as punishment", "His feathers were scorched by the sun when he released it", "He was born that way as a mark of his cleverness"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "paul-bunyan-babe",
    storyId: "american-tall-tales",
    title: "Paul Bunyan and Babe the Blue Ox",
    emoji: "🪓",
    content: "Paul Bunyan is so enormous that his cradle was a ship rocking on the ocean and his hiccups cause hurricanes. When a great blue snow falls on the northern forests, he discovers a baby ox buried in a snowdrift — Babe, who turns completely blue from the cold and grows to match Paul's impossible size. Together this legendary pair flatten mountains, dig rivers, and log whole forests in a single swinging morning.",
    pages: [
      "Paul Bunyan was born in the state of Maine, and he was big from the very start. As a baby his cradle was so large that his parents moored it off the coast — every time baby Paul rolled over, the waves swamped seven fishing villages. By the time he was a week old he wore his father's clothes, and by the time he was a month old he was chopping down trees to make room for himself.",
      "One winter the snow fell blue. Nobody could explain it — the flakes were as blue as a summer sky, and they piled up twenty feet deep. Paul was trudging through the blue drifts when he heard a small sound. He dug into the snowbank and found a baby ox, completely frozen and entirely blue from the cold. Paul tucked the calf inside his shirt to warm it up.",
      "The calf grew — and grew — and grew. It grew so fast that every morning Paul had to move the barn further from the house. When Babe the Blue Ox was fully grown, the distance between his eyes was forty-two axe handles, and Paul used him to haul whole forests out by the roots in one pull. When Babe swished his tail, it knocked over trees for a mile in each direction.",
      "They worked all across America. When Paul wanted to move a winding river to make logging easier, Babe grabbed one end and pulled it straight. That is why some of America's rivers changed course. When Paul dug his boot out of the mud, the holes he left filled up with water — those are the Great Lakes. Everywhere Paul and Babe walked, the landscape was never quite the same again.",
    ],
    questions: [
      {
        question: "Why was Paul Bunyan's cradle kept in the ocean?",
        options: ["He loved the sound of waves", "It was so large that when he rolled over it caused floods on land", "The ocean was the only place big enough for his family's farm"],
        correctIndex: 1,
      },
      {
        question: "How did Babe the Blue Ox get his colour?",
        options: ["He was painted blue by Paul Bunyan", "He was frozen blue in the strange blue snowfall", "He was born that way because of a magic winter"],
        correctIndex: 1,
      },
      {
        question: "According to the story, how were the Great Lakes formed?",
        options: ["Paul dug them as fish ponds for his lunch", "The holes left when Paul pulled his boots out of the mud filled with water", "Babe's footprints sank so deep they hit underground rivers"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "pecos-bill-tornado",
    storyId: "american-tall-tales",
    title: "Pecos Bill Rides the Tornado",
    emoji: "🌪️",
    content: "Pecos Bill grew up raised by coyotes in the Texas wilderness, and there is not a horse, a rattlesnake, or a mountain lion in the west that can best him. But when the biggest tornado in recorded history comes roaring across Texas, Bill does not run for cover — he lassoes it, climbs on its back, and rides the howling storm all the way across three states until the tornado gives up and wrings itself out into the desert below.",
    pages: [
      "Pecos Bill fell out of a wagon as a baby and was raised by a pack of coyotes in the hills of Texas. By the time he was grown, he could outrun a mustang, outfight a grizzly bear, and use a rattlesnake as a lasso. He invented most of the cowboy tricks that cowboys use today. His horse was named Widow-Maker, and the only thing on Earth that gave Bill a moment of pause was a tornado the cowboys called the Big One.",
      "The Big One came out of Kansas like a grey mountain walking on its feet. Lightning crackled along its sides and chunks of Oklahoma fell out of its top. Every cowboy on the range galloped away in every direction except Pecos Bill, who stood in the middle of the plain with his hat tilted back, watching the funnel come closer with an interested expression on his face.",
      "As the tornado came within range, Bill pulled out his lasso — the one made from the dried skin of a twenty-foot rattlesnake — and threw. The loop settled perfectly around the tornado's neck. Bill leaped onto its spinning back and dug in his heels. The tornado bucked and whirled, shooting lightning sideways, tearing up trees, and hollering like a rodeo bull.",
      "Across Texas it went, then New Mexico, then Arizona. Bill stayed on through all of it, whooping and yee-hawing. At last the tornado, exhausted and embarrassed, sagged down over the Arizona desert and wrung itself out until all its water splashed onto the cracked earth below — and that water, the old-timers say, is what made Death Valley. Bill landed lightly in California, dusted off his hat, and looked for something else to do.",
    ],
    questions: [
      {
        question: "Who raised Pecos Bill when he was a baby?",
        options: ["A family of bears in the Rocky Mountains", "A pack of coyotes in the Texas hills", "A band of outlaws in New Mexico"],
        correctIndex: 1,
      },
      {
        question: "What did Pecos Bill use as a lasso?",
        options: ["A length of barbed wire", "The dried skin of a twenty-foot rattlesnake", "A rope made from twisted lightning bolts"],
        correctIndex: 1,
      },
      {
        question: "What did the tornado create when it wrung itself out over the desert?",
        options: ["The Grand Canyon", "Death Valley", "The Mississippi River"],
        correctIndex: 1,
      },
    ],
  },

  // ── Mexico ──────────────────────────────────────────────────────────────────

  {
    id: "quetzalcoatl-corn",
    storyId: "aztec-creation-myths",
    title: "Quetzalcoatl and the Corn",
    emoji: "🌽",
    content: "The people are hungry and the gods argue among themselves about how to feed them. The great feathered serpent Quetzalcoatl sets out alone to find the precious corn that the ants have been hiding inside a mountain, discovers how to smash the mountain open, and brings this golden gift to humanity — changing the course of civilisation and earning his place among the greatest of all Aztec gods.",
    pages: [
      "After the gods created people, they realised they had forgotten something important: food. The people wandered about looking thin and confused. Quetzalcoatl — the feathered serpent, covered in shimmering green and gold feathers — watched them with a worried golden eye. He noticed a long line of red ants carrying tiny white and yellow seeds into a crack in a mountain. He stopped one ant. 'What are those?' The ant refused to say.",
      "Quetzalcoatl transformed himself into a black ant and followed the column deep inside the mountain. Inside was an enormous cavern filled with corn — yellow, white, red, and black — in piles as high as hills. The ants had been hiding the corn from the gods for ages. Quetzalcoatl turned back into his serpent form, gathered as much as he could carry, and flew back to the other gods.",
      "The gods tasted the corn and agreed it was perfect. But they needed to open the whole mountain to get all of it. Quetzalcoatl tried wrapping his serpent body around the mountain and squeezing — it did not work. He tried blowing his divine breath at it — still nothing. Finally the four rain gods agreed to help. They struck the mountain with their lightning bolts until it cracked open with a thunderous boom.",
      "Corn poured out of the mountain in every colour. Quetzalcoatl taught the people to grind it into dough, press it into flat cakes, and cook it over fire. He showed them how to plant it in the earth and watch it grow taller than a man's shoulder. The people ate and were full for the first time. They called Quetzalcoatl the greatest gift-giver of all the gods — the lord of life and learning.",
    ],
    questions: [
      {
        question: "How did Quetzalcoatl discover the corn hidden inside the mountain?",
        options: ["A dream told him where to look", "He transformed into a black ant and followed the ants inside", "An old grandmother showed him the hidden entrance"],
        correctIndex: 1,
      },
      {
        question: "Who helped Quetzalcoatl open the mountain?",
        options: ["The wind gods blew the top off", "The four rain gods struck it with their lightning bolts", "The ants gnawed it open from inside"],
        correctIndex: 1,
      },
      {
        question: "What did Quetzalcoatl teach the people to do with the corn?",
        options: ["Offer it to the sun as a gift", "Grind it, press it into flat cakes, and cook it", "Plant it only during the full moon"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "five-suns",
    storyId: "aztec-creation-myths",
    title: "The Five Suns",
    emoji: "🌞",
    content: "Before our world, say the Aztecs, there were four earlier worlds — each called a Sun — and each was destroyed by the quarrelling of the gods. Giants, great winds, fiery rain, and floods each ended an age. Only when the gods gathered at Teotihuacán and sacrificed themselves to create a fifth sun did the world finally persist — but only because the sun and moon must be fed with the energy of life.",
    pages: [
      "In the beginning the great gods gathered and argued over who should rule the world. The first world they made was called the Jaguar Sun. In it lived giants who ate only acorns — and the giant jaguars of the gods devoured them all when the gods grew angry. The world ended. The gods began again.",
      "The second world, the Wind Sun, was ruled by Quetzalcoatl. A great hurricane destroyed it, and the people left behind were turned into monkeys. The third world, the Rain Sun, ended when the sky rained fire, and humans became birds to escape the flames. The fourth world drowned in a great flood, and the people became fish. Four worlds, all destroyed by the endless quarrels of the gods.",
      "At Teotihuacán, the gods held a council by a great fire. This time they would do it properly. Two gods — one proud and arrogant, one humble and covered in sores — were chosen to leap into the flames to become the new sun and moon. The proud god hesitated. The humble, spotted god leapt first, blazing up as the sun. The proud god followed and became the dimmer moon.",
      "But the sun and moon stood still in the sky. They needed energy to move. And so the other gods sacrificed themselves, giving their strength to set the sun in motion. That is why the Aztecs believed the sun required offerings to keep moving — if the sun stopped, the world's fifth age would end just like the four before it. Every sunrise, they said, was a victory won through sacrifice.",
    ],
    questions: [
      {
        question: "How many worlds existed before our current world, according to the Aztecs?",
        options: ["Two", "Three", "Four"],
        correctIndex: 2,
      },
      {
        question: "Who became the sun at Teotihuacán?",
        options: ["The proud arrogant god who leapt in first", "The humble spotted god who leapt in first", "Quetzalcoatl, who was the bravest of all"],
        correctIndex: 1,
      },
      {
        question: "Why did the Aztecs believe the sun needed offerings?",
        options: ["To keep it warm enough to give off light", "Because the gods sacrificed themselves to set it moving and it needed energy to continue", "To prevent the rain gods from putting it out"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "the-weeping-woman",
    storyId: "la-llorona",
    title: "The Weeping Woman",
    emoji: "🌊",
    content: "Long ago a beautiful woman named María fell in love with a wealthy nobleman, but when he left her and her two children for a richer woman, grief twisted into something darker. After a terrible act by the river she could never undo, María's spirit was condemned to wander the waterways forever, weeping and calling for the children she had lost — and no one who hears her cry is safe near the water at night.",
    pages: [
      "In a village by a wide river there lived a woman everyone called the most beautiful in the valley. Her name was María, and she had two bright-eyed children she loved dearly. For a while she was happy. Then a wealthy nobleman came riding through, and he was charming and said all the right words. María fell in love, and for a time he visited often and laughed with her children.",
      "But one spring the nobleman rode through again — this time with a fine carriage and a new bride in silk and pearls. He barely glanced at María. He smiled at the children for a moment, then rode on without stopping. Something inside María broke like a clay pot dropped on stone. She walked down to the river in the darkness, weeping and weeping, and what happened there that night was something she could never take back.",
      "The next morning the village woke to a terrible wailing from the river. Then silence. María was gone. They say her spirit was called before the spirit world's judges, who asked her: 'Where are your children?' She could not answer. She was sent back to the living world to search for them forever — walking the rivers and lakes at night in her white dress, crying their names in the darkness.",
      "Now people call her La Llorona — the Weeping Woman. You can hear her on still nights near rivers, a cry like the wind that gets inside your chest and makes you cold. Parents warn their children: if you hear weeping near the water after dark, do not go close. La Llorona is searching for what she has lost, and she does not always remember that other children are not hers.",
    ],
    questions: [
      {
        question: "What caused María's grief that changed her forever?",
        options: ["Her house burned down in a great fire", "The nobleman she loved rode away with a new bride and ignored her", "Her children were taken away by the village elder"],
        correctIndex: 1,
      },
      {
        question: "Why was María's spirit sent back to the world to wander?",
        options: ["She had stolen gold from the church", "She could not answer where her children were when the spirit judges asked", "She refused to cross the river to the afterlife"],
        correctIndex: 1,
      },
      {
        question: "What warning do parents give children about La Llorona?",
        options: ["Never look into a river at night or you will see her face", "Do not go near the water after dark if you hear weeping", "Always carry a candle or she will follow you home"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "child-who-listened",
    storyId: "la-llorona",
    title: "The Child Who Listened",
    emoji: "👂",
    content: "Eight-year-old Rosa loves playing by the river near her village, but her grandmother has always warned her about La Llorona and given her a charm of dried herbs and prayers. One warm evening Rosa hears weeping rising from the river bank and feels a cold pull toward the water — but her grandmother's voice comes back to her just in time, and she learns that love and wisdom can protect even the most curious child.",
    pages: [
      "Rosa was eight years old and not afraid of much. She could climb the tallest guava tree and wasn't even scared of the big bull in the corner field. But every evening her grandmother, Abuela Concha, would braid her hair and whisper the same words: 'Stay away from the river after the sun goes down. If you hear weeping near the water, come home immediately. Do not turn around. Do not call back.' Then she would press a small pouch of dried herbs and prayers into Rosa's pocket.",
      "One golden evening Rosa was throwing stones into the river, watching the ripples widen, when the sun slipped behind the hill faster than she expected. The sky turned purple and then grey. A mist rolled off the water. Rosa turned to go home — and then she heard it. A sound like wind, like a woman crying, like someone calling her name from far away. It was the most sorrowful sound she had ever heard.",
      "Rosa's feet stopped moving. The sound seemed to be pulling her toward the water like a gentle hand. She took one step toward the river, then another. The weeping grew louder and more beautiful and more terrible at the same time. The mist shaped itself into something white at the water's edge, and the voice whispered, 'Come, my child, come—'",
      "Then Abuela Concha's voice came back to her — clear as a bell in her memory: 'Do not turn around. Come home immediately.' Rosa pressed the herb pouch tight in her fist, turned her back on the water, and ran. She did not stop until she was through the door with the bolt drawn. Abuela Concha held her tightly and said nothing for a long time. She did not need to. Rosa never played near the river at dusk again.",
    ],
    questions: [
      {
        question: "What did Abuela Concha give Rosa to protect her?",
        options: ["A silver cross on a chain", "A pouch of dried herbs and prayers", "A special song to sing by the river"],
        correctIndex: 1,
      },
      {
        question: "What did Rosa feel when she heard La Llorona's weeping?",
        options: ["She felt very sleepy and wanted to lie down", "She felt a pull drawing her toward the water", "She felt angry and wanted to shout back"],
        correctIndex: 1,
      },
      {
        question: "What did Rosa do to stay safe?",
        options: ["She threw her herbs into the water to break the spell", "She remembered her grandmother's words and ran home without looking back", "She called for the priest from the village chapel"],
        correctIndex: 1,
      },
    ],
  },

  // ── Brazil ──────────────────────────────────────────────────────────────────

  {
    id: "saci-and-the-farmer",
    storyId: "saci-perere",
    title: "Saci and the Farmer",
    emoji: "🧤",
    content: "Old Benedito the farmer is the most stubborn man in his village — he will not share his harvest, will not fix his fence, and refuses to listen to anyone's advice. Then Saci arrives: the one-legged trickster spirit who spins in a dust devil, tangles horses' manes, and turns milk sour. After a week of chaos, Benedito learns the hard way that kindness and community make a stronger farm than stubbornness.",
    pages: [
      "Benedito had the biggest farm in the valley and was very proud of it. He kept every pumpkin, every bag of rice, every bunch of bananas strictly for himself. When neighbours' fences broke, he would not lend his tools. When floods came, he would not share his high ground. 'My farm, my rules,' he said every time. The other farmers shook their heads but said nothing — until strange things began to happen.",
      "First, Benedito's horses were found with their manes knotted into tight little braids every morning, no matter how many times he combed them straight. Then his salt went missing, then his favourite hat, then every jar in his kitchen was moved two centimetres to the left. He heard laughter in the night — a high, wild laugh — and glimpsed a flash of red cap and one leg whirling in a dust devil across his yard. Saci!",
      "The tricks got worse. His milk curdled before dawn. His chickens laid their eggs in the neighbours' yards. His corn kept spinning itself off its cobs. Benedito stomped and shouted but nothing helped. A wise old woman from the village came to his gate. 'Saci troubles those who are selfish,' she said. 'Lend your neighbour that fence post. Share your harvest with the family down the road. Saci respects generosity.'",
      "Benedito grumbled all the way to his neighbour's house, fence post under his arm. He left a basket of sweet potatoes on the doorstep of the family who had gone hungry. That night — for the first time in a week — his horses' manes were smooth and his milk stayed fresh and the laughter in the dark was gone. Benedito did not become a saint overnight, but he never again forgot that a farm surrounded by good neighbours is worth more than any locked-up harvest.",
    ],
    questions: [
      {
        question: "What kind of spirit is Saci?",
        options: ["A helpful river spirit who brings rain", "A one-legged trickster spirit who causes mischief", "A frightening forest giant"],
        correctIndex: 1,
      },
      {
        question: "What trick first told Benedito that Saci was near?",
        options: ["His crops all turned yellow overnight", "His horses were found with knotted braided manes every morning", "His farmhouse moved three metres to the left"],
        correctIndex: 1,
      },
      {
        question: "How did Benedito finally stop Saci's tricks?",
        options: ["He caught Saci in a trap and made him promise to leave", "He lent his neighbour a fence post and shared his harvest", "He burned a special herb that Saci hated"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "how-to-catch-a-saci",
    storyId: "saci-perere",
    title: "How to Catch a Saci",
    emoji: "🎩",
    content: "Twelve-year-old Luzia has been pranked one too many times by Saci — who stole her grandmother's knitting, hid her school shoes, and whistled in her ear all night. Determined, she researches the old methods, collects a special sieve and a length of red cord, and sets a proper trap. When she finally has Saci in her power, the negotiation that follows teaches both of them something unexpected.",
    pages: [
      "Saci had been in Luzia's house for three weeks, and she had had enough. Her grandmother's knitting had vanished. Her school shoes turned up in the fig tree. Twice she had woken at midnight to a whistling in her ear and a smell of pipe smoke. Her grandmother said, 'You cannot catch Saci, child.' But Luzia was the kind of girl who treated that kind of remark as a personal challenge.",
      "She went to the oldest book in her grandmother's chest and read the chapter on folk spirits. To trap Saci you needed three things: a sieve with exactly the right number of holes, a length of red cord tied in the old knotted pattern, and the patience to wait at a crossroads at noon when his dust devil spun past. 'I can do that,' said Luzia, and got to work.",
      "At noon on a hot Tuesday, Luzia stood at the crossroads with her sieve and her cord. A dust devil came spinning down the road in a cloud of orange earth. Luzia threw the sieve over it and pulled the red cord tight in the knotted pattern. The spinning stopped. Out of the dust appeared a small boy with one leg, a red cap, and the most offended expression she had ever seen. 'Let me go!' he yelled. 'You caught me by luck!'",
      "'I caught you by research,' said Luzia calmly. Saci glared. Then he laughed — the high wild laugh she recognised from the night-time. 'What do you want?' he asked. 'My grandmother's knitting back, my shoes out of the tree, three nights of quiet sleep, and you to leave our house alone,' said Luzia. Saci bargained hard but agreed in the end, and he kept his word — mostly. He also, Luzia noticed, never pranked her grandmother again.",
    ],
    questions: [
      {
        question: "What three things did Luzia need to trap Saci?",
        options: ["A mirror, a black cat, and a full moon", "A sieve, a length of red cord tied in a special pattern, and patience at a crossroads at noon", "Holy water, dried chilli, and a prayer book"],
        correctIndex: 1,
      },
      {
        question: "Where had Saci hidden Luzia's school shoes?",
        options: ["Under the floorboards", "In the fig tree", "Inside the water barrel"],
        correctIndex: 1,
      },
      {
        question: "What did Luzia demand from Saci in exchange for releasing him?",
        options: ["Three wishes and a bag of gold", "Her grandmother's knitting back, her shoes, three quiet nights, and for him to leave their house alone", "For Saci to help her with her chores for a month"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "fisherman-and-iara",
    storyId: "legend-of-iara",
    title: "The Fisherman and Iara",
    emoji: "🎣",
    content: "Young fisherman Tupã rows out onto the great Amazon river alone at dusk, despite the warnings of everyone in his village. When Iara's voice rises from the water — sweet, warm, impossible — he nearly dives in to find her. Only the shaman's charm tied to his wrist burns hot enough to break the enchantment and drag him back to the boat, changed forever by what he heard.",
    pages: [
      "Every fisherman in the village knew the rule: come off the water before sunset. Iara lived in the deep middle of the river, and her song rose at dusk like warm breath off the water. No man who heard it could resist the urge to dive in and follow her down into the current. Tupã was twenty years old and thought the old stories were just stories. One evening he stayed out just a little too late.",
      "The sun went orange and slid toward the trees. Tupã started paddling home, but the water went completely still — not a ripple, not a frog sound, not a bird. Then he heard it. It did not sound like danger. It sounded like the nicest thing he had ever heard: a voice from beneath the surface, gentle as warm river water, calling his name as if it had always known him.",
      "Tupã put down his paddle and leaned over the side of the canoe. The water was dark below but something moved in it, something with long green hair and copper skin and eyes like two pools of river light. His hand trailed in the water. The charm on his wrist — a twist of cord and dried seeds that old Shaman Jaci had made him tie on before he left — suddenly grew hot, burning like a coal.",
      "The pain jolted him upright. He grabbed his paddle and drove it into the water, paddling as hard as he had ever paddled. The voice followed him to the bank, then faded slowly like music going away. He hauled the canoe up on the grass and sat there shaking until the stars came out. He never went on the river alone at dusk again — and he never told the shaman what he had seen, because he knew that the shaman already knew.",
    ],
    questions: [
      {
        question: "What was the rule every fisherman in the village knew?",
        options: ["Never fish alone without a partner", "Come off the water before sunset because Iara sang at dusk", "Always leave an offering of flowers at the river's edge"],
        correctIndex: 1,
      },
      {
        question: "What saved Tupã from diving into the river?",
        options: ["His mother called from the bank", "The shaman's charm on his wrist burned hot and jolted him awake", "A storm blew up and drove him to shore"],
        correctIndex: 1,
      },
      {
        question: "What did Iara look like when Tupã saw her in the water?",
        options: ["A large golden fish with a woman's face", "A figure with long green hair, copper skin, and river-light eyes", "A white spirit floating just above the surface"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "iara-loneliness",
    storyId: "legend-of-iara",
    title: "Iara's Loneliness",
    emoji: "🌿",
    content: "Before she was a river spirit, Iara was a great warrior's daughter — braver and more skilled than her brothers, which made them bitterly jealous. When her brothers attack her at night in the forest, Iara fights them off and falls into the river, and the river itself claims her, transforming her into something neither fully human nor fully spirit, doomed to be beautiful and lonely at the bottom of the Amazon forever.",
    pages: [
      "Iara's father was the greatest warrior in her tribe, and from the time she could walk, she trained beside him. She was faster than her brothers, fiercer with a spear, and braver in the face of danger. Her father said openly that she was the finest of all his children. Her brothers smiled at the feasts and sharpened their jealousy in the dark.",
      "One moonless night, when the tribe slept and only the forest insects hummed, her two oldest brothers crept up behind her on the forest path. They had decided that a sister could not be more celebrated than them — it was not right, they told themselves. Iara heard the crack of a stick and turned. She fought them both, hard and fast, but there were two of them and the bank was slippery with rain.",
      "She fell backward into the great river. The water was black and deep and moved fast. Iara was a strong swimmer but the current caught her and pulled her down into the cold, slow part of the river where the light filtered green through the water like sunlight through leaves. The river spirits saw her — brave and wronged and neither living nor dead — and they kept her.",
      "She became Iara: part woman, part river, eternally young. She learned to sing from the fish and the current and the rain, and her voice rose to the surface at dusk. She was not cruel — she was lonely. Every fisherman she called was someone she hoped might sit with her at the river's floor and understand what it meant to be brave and misunderstood and lost between two worlds. None of them ever could.",
    ],
    questions: [
      {
        question: "Why were Iara's brothers jealous of her?",
        options: ["She was given her father's best horse", "She was faster, fiercer, and more celebrated than them", "She was allowed to travel to distant villages while they stayed home"],
        correctIndex: 1,
      },
      {
        question: "What happened to Iara when she fell into the river?",
        options: ["She was rescued by a river god and given magic powers", "The river spirits kept her and transformed her into something between human and spirit", "She swam to the opposite bank and was never seen again"],
        correctIndex: 1,
      },
      {
        question: "Why did Iara call to fishermen from the deep river?",
        options: ["She was angry and wanted to pull them in as punishment", "She was lonely and hoped someone might understand her", "She needed their help to become human again"],
        correctIndex: 1,
      },
    ],
  },

  // ── Peru ────────────────────────────────────────────────────────────────────

  {
    id: "manco-capac-mama-ocllo",
    storyId: "inca-legends",
    title: "Manco Cápac and Mama Ocllo",
    emoji: "☀️",
    content: "The sun god Inti sends his two children — the golden Manco Cápac and the wise Mama Ocllo — up from the depths of Lake Titicaca, carrying a golden staff. Their mission is to walk the earth and push the staff into the ground at every step; wherever it sinks in up to the handle on the very first push, that is where they must build the great city of the Inca. Their journey ends in a fertile valley in the mountains, and a civilisation is born.",
    pages: [
      "The sun god Inti looked down from the sky and saw that the people of the earth were living without law, without warmth, and without knowledge of farming or weaving. His heart was heavy. He called his two beloved children to him at the edge of the heavens. 'Go down to the earth,' he said, placing a heavy golden staff in Manco Cápac's hands. 'Walk and push this staff into the ground. Where it sinks in with a single push, build my city.'",
      "Manco Cápac and Mama Ocllo rose from the shimmering waters of Lake Titicaca as the sun hit the surface and turned it to gold. They were clothed in light and walked with steady steps. Through valleys and over hills they went, stopping every so often to drive the golden staff into the earth. Each time it met hard rock or thin soil and would not sink.",
      "They walked north and west for many days. They taught people in every village they passed — Mama Ocllo taught women to spin wool and weave cloth, Manco Cápac taught men to till the soil and plant seeds. Wherever they stopped, the people were a little better off than before. But still the staff had not found its place.",
      "At last, in a broad valley surrounded by mountains — a valley green and warm with two rivers running through it — Manco Cápac pressed the golden staff into the earth of the valley floor and it slid down to the hilt in a single smooth push. 'Here,' he said. Mama Ocllo spread her arms and smiled. They called the place Cusco, which means the navel of the world, and built a great temple to the sun where the staff had sunk. That was the beginning of the Inca empire.",
    ],
    questions: [
      {
        question: "What mission did Inti give to Manco Cápac and Mama Ocllo?",
        options: ["To defeat the mountain spirits and make the land safe", "To push a golden staff into the ground and build a city where it sank in easily", "To find the tallest mountain and place a temple on its peak"],
        correctIndex: 1,
      },
      {
        question: "What did Mama Ocllo teach to the people she met on the journey?",
        options: ["How to read the stars and predict harvests", "How to spin wool and weave cloth", "How to build stone walls that would last a thousand years"],
        correctIndex: 1,
      },
      {
        question: "What did Manco Cápac and Mama Ocllo call the place where the staff sank?",
        options: ["Machu Picchu", "Titicaca", "Cusco"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "the-golden-staff",
    storyId: "inca-legends",
    title: "The Golden Staff",
    emoji: "🏔️",
    content: "A young shepherd named Cusi witnesses Manco Cápac's arrival at the valley of Cusco and follows the two shining figures at a safe distance, watching as the golden staff finds its place and the first stones of a great city are laid. When Cusi helps clear the ground for the sun temple, Manco Cápac gives him a task that will keep his family honoured for generations — to guard the staff forever.",
    pages: [
      "Cusi was tending his llamas on the hillside when the valley below suddenly lit up with a strange warm light. He shaded his eyes. Two figures were walking through the valley — a man in golden cloth and a woman in silver — and the man was carrying something that flashed like a piece of the sun itself. Cusi had heard the elders' stories about the children of Inti. He left his llamas on the hill and crept closer.",
      "He watched from behind a boulder as Manco Cápac pushed the golden staff into the earth of the valley floor. He watched it sink smoothly, watched the two figures embrace, watched them begin to mark out the shape of a great plaza on the green ground. Then Manco Cápac turned and looked directly at the boulder where Cusi was hiding. 'Come out, boy,' he said, not unkindly. 'We need strong hands.'",
      "Cusi came out, embarrassed, and bowed so low his forehead touched the grass. Manco Cápac laughed and pointed at a pile of heavy stones. 'Help us lay the foundations.' Cusi worked harder than he had ever worked, carrying stones, packing earth, dragging tree trunks for the first roof posts. When the sun set, Mama Ocllo brought him a bowl of warm maize porridge and said his work had been worthy.",
      "As the stars came out, Manco Cápac pulled the golden staff from the ground and handed it to Cusi. 'Your family will keep this,' he said. 'Guard it as you would guard the sun itself.' Cusi held the staff carefully — it was heavier than he expected, and warm. He looked up at the stars and understood that he had just become part of something that would outlast mountains.",
    ],
    questions: [
      {
        question: "What drew Cusi's attention to the valley below?",
        options: ["He heard drums and singing", "The valley lit up with a strange warm light from the two shining figures", "His llamas ran down the hill toward the strangers"],
        correctIndex: 1,
      },
      {
        question: "How did Cusi help Manco Cápac and Mama Ocllo?",
        options: ["He guided them to the right valley using his knowledge of the mountains", "He carried stones, packed earth, and dragged tree trunks for the first building", "He brought food from his village to feed all the workers"],
        correctIndex: 1,
      },
      {
        question: "What honour did Manco Cápac give to Cusi's family?",
        options: ["To live in the sun temple as its first priests", "To rule the valley as its first mayor", "To guard the golden staff forever"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "fox-and-condor",
    storyId: "andean-folk-tales",
    title: "The Fox and the Condor",
    emoji: "🦅",
    content: "High in the Andes, the clever fox and the mighty condor have always argued about who is wiser. When they make a bet — each must solve a problem the other sets — the fox uses cunning and the condor uses perspective, and the whole mountain community must decide which kind of wisdom matters more. The answer, as the oldest alpaca in the flock knows, is that you cannot separate the two.",
    pages: [
      "On the high plateau where the wind never stops, Fox and Condor had an argument that had lasted, in one form or another, for many years. 'I am wiser,' said Condor, spreading enormous wings. 'I see everything from above — I can see three valleys at once, rivers, roads, and danger.' 'Seeing is not wisdom,' said Fox with a flick of his bushy tail. 'I solve problems on the ground, where problems actually live.' The other animals grew tired of the argument and suggested a bet.",
      "The animals chose two problems. First problem: a farmer's llama had wandered away and was lost. Fox would solve this one. Fox trotted in circles, sniffed the ground, tasted the air, spoke to a mouse who had seen the llama pass, spoke to a frog near the stream, and by afternoon had led the farmer to the llama behind a distant rock. The animals clapped. 'Good,' said Condor calmly. 'Now try mine.'",
      "Second problem: two villages on opposite sides of a mountain were fighting over which path the new road should take, and no one could agree. Condor spread his wings and rose up until he was a black dot against the blue sky. From up there he could see both villages, the mountain between them, the existing paths, and — most importantly — a pass through the mountain that neither village knew existed.",
      "Condor landed and described the hidden pass. The farmers dug it out and both villages used the new road. No one could say Condor was wrong. The oldest alpaca chewed slowly and said: 'Fox smelled where something was hidden. Condor saw what had never been noticed. One without the other is only half a solution.' Fox and Condor looked at each other. Neither won and neither lost — and the argument became, from that day on, a great deal more friendly.",
    ],
    questions: [
      {
        question: "What was Condor's argument for being wiser than Fox?",
        options: ["He was older and had seen more seasons", "He could see three valleys at once from the air", "He had solved more problems than Fox over the years"],
        correctIndex: 1,
      },
      {
        question: "How did Fox find the lost llama?",
        options: ["He used his speed to search every corner of the plateau", "He sniffed the ground, asked a mouse and a frog, and followed the trail", "He climbed the tallest rock and spotted it from above"],
        correctIndex: 1,
      },
      {
        question: "What was the oldest alpaca's conclusion about Fox and Condor?",
        options: ["That Fox was cleverer because ground problems matter more", "That Condor was wiser because seeing the big picture is always better", "That one without the other was only half a solution"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "ukukus-secret",
    storyId: "andean-folk-tales",
    title: "The Ukuku's Secret",
    emoji: "🐻",
    content: "The Ukuku is a strange creature of the high Andes — half bear, half human, dressed in shaggy fur with a high, childlike voice — who walks between the worlds of the living and the spirits. When a village boy named Wayra is chosen to become an Ukuku at the great festival of Qoyllur Riti, he climbs the glacier above the clouds and learns the secret that only those who walk between worlds can know.",
    pages: [
      "Every year, when the stars of the Pleiades returned to the Andean sky, the great festival of Qoyllur Riti blazed on the slopes of the holy mountain. Thousands of pilgrims came through the mist, singing, carrying candles, wearing their finest woven cloth. But the most important figures at the festival were the Ukukus: dancers who wore shaggy bear-skin costumes, spoke in high whining voices, and carried whips to keep order between the human world and the spirit world.",
      "This year, the elders of Wayra's village chose him. 'You have been between two worlds your whole life,' his grandmother told him, straightening his furry hood. 'You dream things before they happen. You hear the mountain breathe. You are ready.' Wayra pulled on the mask and the long fur coat. Looking through the eyeholes, the mountain looked different — larger, older, breathing.",
      "At midnight, the Ukukus climbed the glacier above the festival, high where no other pilgrims went. The ice was blue-white in the starlight and cracked underfoot. Wayra climbed until his lungs burned. At the top, where the glacier ended and the stars began, he lay face-down on the ice as all Ukukus did, and he listened. The mountain spoke — not in words, but in a vibration that moved through the ice into his chest.",
      "When he came down at dawn, his fellow Ukukus asked what he had heard. The rule was clear: the secret of the glacier could not be told in words. It could only be carried. Wayra nodded and said nothing. But from that year on, people in his village noticed that when Wayra walked past, the bread in the oven always rose a little higher, the seeds in the field germinated a little faster, and the children slept a little easier. Some secrets, it turns out, do not need to be spoken to be shared.",
    ],
    questions: [
      {
        question: "What is an Ukuku?",
        options: ["A mountain eagle that carries messages between villages", "A half-bear, half-human figure who walks between the human and spirit worlds", "A type of woven mask worn only by the village chief"],
        correctIndex: 1,
      },
      {
        question: "Why did the elders choose Wayra to be an Ukuku?",
        options: ["He was the strongest and fastest runner in the village", "He dreamed things before they happened and could hear the mountain breathe", "He had made the best woven costume at the festival"],
        correctIndex: 1,
      },
      {
        question: "What happened after Wayra came down from the glacier with the secret?",
        options: ["He became the new village chief and gave speeches", "He told only his grandmother what the mountain had said", "Good things happened quietly around him — bread rose, seeds grew, children slept well"],
        correctIndex: 2,
      },
    ],
  },

  // ── Australia ───────────────────────────────────────────────────────────────

  {
    id: "rainbow-serpent",
    storyId: "dreamtime-stories",
    title: "The Rainbow Serpent",
    emoji: "🌈",
    content: "In the Dreamtime, before rivers or mountains or valleys existed, the great Rainbow Serpent slept beneath a flat and featureless earth. When she woke and began to move, her enormous body carved the riverbeds, pushed up the hills, and scooped out the valleys. Where she rested, water filled the hollows and life followed in her wake — making her the mother of the living landscape itself.",
    pages: [
      "In the very beginning, the earth was flat and quiet and nothing moved. There were no rivers, no mountains, no valleys — just a vast plain stretching to the edge of the sky in every direction. Beneath the surface, curled in a sleep as deep as time, lay the Rainbow Serpent. Her scales were every colour at once — red, orange, yellow, green, blue, and violet — and she was longer than any river you have ever seen.",
      "When the Rainbow Serpent woke, she pushed upward through the earth. Where her head surfaced, a spring of fresh water bubbled up. She began to travel across the flat land, and where she moved, the earth moved with her. The curves of her enormous body carved great valleys. The pressure of her sides pushed up ridges of rock that became mountain ranges. The trail she left behind filled slowly with rainwater and became the rivers.",
      "She called to the frogs first. They came up from underground where they had been sleeping, their bellies full of water. She tickled them until they laughed, and all the water came pouring out of the frogs' mouths, filling the river channels she had carved. Fish swam in. Birds landed. Grasses and trees grew along the banks. The Rainbow Serpent watched and was pleased.",
      "She found places she loved and rested there — and those places became the waterholes and billabongs that her people have respected ever since. If you are near a waterhole and the water trembles with no wind, some say the Rainbow Serpent is sleeping beneath it. You must speak respectfully and walk quietly, because she shaped the land you live on, and she remembers the time before there was anything at all.",
    ],
    questions: [
      {
        question: "What happened when the Rainbow Serpent moved across the flat earth?",
        options: ["The sky filled with clouds and the first rain fell", "Her body carved valleys, pushed up mountains, and left river channels behind", "She breathed fire and melted rock into rivers of gold"],
        correctIndex: 1,
      },
      {
        question: "How did the river channels fill with water?",
        options: ["The sky opened and rain fell for forty days", "The Rainbow Serpent called frogs from underground and tickled them until they released the water in their bellies", "She directed underground springs to rise to the surface"],
        correctIndex: 1,
      },
      {
        question: "What do some people say is happening when a waterhole trembles with no wind?",
        options: ["A great storm is coming from the north", "Fish are jumping in large numbers below the surface", "The Rainbow Serpent is sleeping beneath it"],
        correctIndex: 2,
      },
    ],
  },

  {
    id: "kangaroo-pouch",
    storyId: "dreamtime-stories",
    title: "How the Kangaroo Got Her Pouch",
    emoji: "🦘",
    content: "In the Dreamtime, kangaroos had no pouches. When a kind kangaroo mother stops to comfort a crying wombat who has lost his way, and then helps an old woman carry her heavy load across the plain, the spirits watching from the sky are moved by her generous heart. They give her the most wonderful gift they can imagine — a cosy pouch on her belly so her joey will always be safe and close.",
    pages: [
      "Long ago in the Dreamtime, kangaroos looked quite different from today. They had the same long back legs and warm brown fur, but there was no pocket on their bellies. Kangaroo mothers carried their joeys on their backs, which was awkward and made them tumble off when mother hopped at full speed. But one kangaroo was known across the plain for her kindness, which mattered more to the spirits than any physical thing.",
      "One hot afternoon, the kind kangaroo heard crying near the dry creek bed. It was a young wombat, short and round, trudging in circles and sniffling. He had wandered away from his family and did not know the way home. The kangaroo could see her own family waiting in the shade far across the plain — but she turned toward the wombat instead. She nuzzled him gently and said, 'Come on, little one, I know where the wombat burrows are. I'll take you.'",
      "She went out of her way by half a day's walk. When she finally said goodbye to the wombat at his family's burrow, she turned to head home. On the dusty track she found an old woman struggling with two enormous baskets of food, bent nearly in half with the weight. Again the kangaroo paused. She balanced the baskets on her broad shoulders and walked the old woman home, arriving back at her own family only at nightfall.",
      "That night, as the stars came out, she felt a warmth on her belly. She looked down and found a soft, deep pouch had grown where there had been none before. Her tiny joey crawled in and curled up inside it, perfectly warm and perfectly safe. The spirits watching from the stars had been moved by what they had seen. Every kangaroo since that day has carried the gift that one kind mother earned on a hot afternoon long ago.",
    ],
    questions: [
      {
        question: "Why did the kind kangaroo stop to help the young wombat?",
        options: ["She needed help finding her own way home", "He was crying and lost, and she knew where the wombat burrows were", "He was sick and she knew where to find healing plants"],
        correctIndex: 1,
      },
      {
        question: "What was the second kind act the kangaroo did that afternoon?",
        options: ["She shared her food with a family of lizards", "She helped an old woman carry two heavy baskets home", "She let a flock of birds rest on her back during a long flight"],
        correctIndex: 1,
      },
      {
        question: "How was the kangaroo rewarded for her kindness?",
        options: ["She was given the fastest legs in all the land", "A soft, deep pouch grew on her belly to carry her joey safely", "She was chosen to be the leader of all the animals"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "bunyip-billabong",
    storyId: "bunyip-tales",
    title: "The Bunyip of the Billabong",
    emoji: "🌙",
    content: "The children of a river camp know they are not to swim in the deep billabong after dark. The rules are old and serious, and the elders explain why: something vast and ancient lives in the deep water, and it does not welcome night-time visitors. When young Barri sneaks down to the billabong after sunset on a dare, he comes close enough to the truth to understand, finally, why some rules exist for very good reasons.",
    pages: [
      "Every child in the river camp knew the rule: the billabong was for daytime only. When the sun went down and the sky turned purple and the frogs began their evening chorus, you came home. You did not linger. You did not wade in to look for yabbies by moonlight. The elders had said it for as long as anyone could remember, and the reason had only one word: Bunyip.",
      "Barri was ten years old and had never seen a Bunyip and had started to wonder — the way you do when you are ten — whether Bunyips were real at all. His cousin dared him and he accepted. After the camp fire burned low and the adults slept, Barri crept down the path through the paperbarks to the edge of the billabong. The water was absolutely still. The moon floated on its surface like a white stone.",
      "He squatted at the edge and waited. A frog jumped in. Something large moved in the reeds on the far side — a bird settling, probably. Then the surface of the billabong, six metres out from shore, began to rise. Not a wave — a mound. Something broad and dark was lifting below the water's surface, slow and steady. A smell like deep mud and old river water rolled across to him on the still air.",
      "Barri did not run. He was too frightened to run. He simply could not move for a full five seconds, which felt like five years. Then the rising stopped and whatever it was sank back down into the dark, and the water stilled again. Barri walked back to camp with legs like water. In the morning he said nothing to his cousin about winning the dare. Some things are not worth winning. He never went near the billabong at night again.",
    ],
    questions: [
      {
        question: "What was the rule about the billabong in the river camp?",
        options: ["Only adults were allowed to swim in it", "No one was to swim there after dark because of the Bunyip", "Children needed to ask permission before using it at any time"],
        correctIndex: 1,
      },
      {
        question: "Why had Barri started to doubt whether Bunyips were real?",
        options: ["His older brother told him they were just made-up stories", "He was ten and had never seen one and wondered about things that way", "An elder admitted to him that no one had ever truly seen one"],
        correctIndex: 1,
      },
      {
        question: "What did Barri see in the billabong at night?",
        options: ["A huge creature splashing and roaring on the surface", "Something broad and dark slowly rising beneath the surface of the water", "Two glowing eyes watching him from across the water"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "boy-who-saw-bunyip",
    storyId: "bunyip-tales",
    title: "The Boy Who Saw the Bunyip",
    emoji: "👁️",
    content: "Twelve-year-old Jarli is out fishing alone when a flash flood sweeps him into the deep pool at the river bend — the place where no one fishes because everyone says a Bunyip lives there. Jarli grabs a root to stop himself drowning and comes face to face in the churning water with something enormous and ancient. He survives and lives to tell the tale — but is careful, always, to tell it with the respect the creature deserves.",
    pages: [
      "Jarli was the best young fisherman in his family and had the good sense never to fish in the deep pool at the bend of the river. That pool had no name because people preferred not to draw attention to it. The water was dark green and very still even in floods, and nothing that went to the bottom ever came back up. Jarli fished fifty metres upstream and caught plenty of fish and was happy.",
      "One afternoon in the wet season the sky went black in the space of a breath and the rain came down like a waterfall. The river rose. Jarli grabbed his fish and ran for higher ground, but the bank crumbled under his feet and the current snatched him. He tumbled and rolled in the brown churning water, completely lost in foam and noise, until his hand found a thick root growing out of the bank of the deep pool.",
      "He held on and caught his breath and opened his eyes underwater. The pool was deep and clear even in the flood. Five metres below him, in the green darkness, something stirred. It was enormous — more enormous than he had words for. It had a broad, dark shape and moved with a slow, deliberate power, not like an animal afraid of anything. Its eyes — if they were eyes — were deep amber, and they looked directly at Jarli.",
      "Jarli climbed the root hand over hand and hauled himself onto the bank, shaking. The flood rushed past below. When the rain stopped and the river settled, the deep pool was still and dark as always. Jarli went home and told his grandmother exactly what he had seen. She nodded and was not surprised. 'You are the first young person in three generations to see it,' she said, 'and come home. Show it respect and it will show you the same.' He always did.",
    ],
    questions: [
      {
        question: "Why did Jarli end up in the deep pool at the river bend?",
        options: ["He was exploring on a dare from his friends", "A flash flood swept him in when the river bank crumbled", "He slipped while trying to rescue a fish he had dropped"],
        correctIndex: 1,
      },
      {
        question: "What did the Bunyip look like when Jarli saw it?",
        options: ["A giant snake with a horse's head on the river surface", "An enormous broad dark shape with deep amber eyes that moved with slow power", "A shimmering spirit made of water and light"],
        correctIndex: 1,
      },
      {
        question: "What did Jarli's grandmother tell him after he described what he had seen?",
        options: ["That he had imagined it because of the fright of the flood", "That he was the first young person in three generations to see it and come home", "That she would take him back to see it properly when he was older"],
        correctIndex: 1,
      },
    ],
  },

  // ── New Zealand ─────────────────────────────────────────────────────────────

  {
    id: "maui-lassoes-sun",
    storyId: "maui-legends",
    title: "Māui Lassoes the Sun",
    emoji: "🌞",
    content: "The days are too short. The sun races across the sky so fast that fishermen cannot dry their fish, weavers cannot finish their mats, and the night swallows everything before the day's work is done. The young demi-god Māui has had enough. He plaits a magical rope from his sister's hair, travels east to the sun's rising place with his brothers, and lassoes the sun, beating it until it promises to travel more slowly across the sky forever.",
    pages: [
      "Long ago, the sun moved so fast across the sky that each day lasted no longer than the blink of an eye. The people were always rushing — fishing, cooking, weaving — and still ran out of light before anything was finished. Māui watched his mother's barkcloth lie wet and unfinished because there was never enough sun to dry it. He made up his mind: someone needed to slow the sun down, and he was exactly the right person for the job.",
      "Māui asked his sister Hina for some of her hair — magical hair, long and strong — and he plaited it into an enormous rope with a loop at the end. He roused his brothers before dawn and they all set out walking east, toward the pit in the earth where the sun slept each night. They carried flaxen ropes and clubs and kept low to the ground, because the sun is not an easy thing to ambush.",
      "Just before dawn they spread out around the pit and lay flat, ropes ready. The sun came roaring up from below, blazing and furious and very, very fast. Māui leapt up and threw the magical loop — it settled perfectly over the sun's rays. He pulled it tight and his brothers threw their ropes too. The sun bucked and screamed like a wild bull, burning the ropes black at the edges.",
      "Māui beat the sun with his magic jawbone club — hard and steady — until the sun cried out and promised to travel slowly enough for the world's work to be done. Māui released the ropes and the sun climbed into the sky, slower, more careful. That is why the days are long enough to fish and cook and weave and tell stories — because Māui would not let the world be hurried.",
    ],
    questions: [
      {
        question: "What was the problem with the sun before Māui caught it?",
        options: ["It was too hot and burned the crops", "It moved so fast that the days were too short to get any work done", "It rose too late and the mornings were always dark"],
        correctIndex: 1,
      },
      {
        question: "What material did Māui use to make the magical rope?",
        options: ["Flax fibres woven through the night", "The long magical hair of his sister Hina", "The tail hairs of the strongest horse in the village"],
        correctIndex: 1,
      },
      {
        question: "How did Māui force the sun to promise to travel more slowly?",
        options: ["He trapped it in the underground pit and would not let it rise", "He beat it with his magic jawbone club until it agreed", "He asked all the gods to tie their ropes until the sun gave in"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "maui-and-the-fish",
    storyId: "maui-legends",
    title: "Māui and the Fish",
    emoji: "🐟",
    content: "Māui's brothers refuse to take him fishing because they think he is too young and too mischievous. So Māui hides in the bottom of the canoe under a mat and only reveals himself when they are far out to sea. Using his grandmother's jawbone as a hook and his own blood as bait, he drops his line into the deep ocean and hauls up the greatest catch in history — the entire North Island of New Zealand rising from the sea.",
    pages: [
      "Māui's older brothers were excellent fishermen and let him know it — loudly and often. They set off before dawn without him, and this happened so many times that Māui decided to do something about it. The night before one expedition, he crept into the canoe and hid under a pile of mats right in the bow, barely breathing. In the dark before dawn, the brothers launched the canoe and paddled out to sea without checking underneath the mats.",
      "When the brothers were so far from land that nothing could be done about it, Māui popped up from under the mat. The brothers were furious. They threatened to paddle back. But Māui pointed out that they were already further out than they usually fished, and in fact this was an ideal spot. The brothers grumbled and dropped their lines, and they began pulling in fish — more than they had ever caught in one morning.",
      "When his brothers would not share their bait, Māui punched his own nose, covered his hook with his blood, and dropped his line — a line made from special cord, with a hook carved from his grandmother Murirangawhenua's jawbone. The line sank down, and down, and down, further than any fishing line had ever gone. Then it went taut. The canoe tilted. Something extraordinary was pulling back.",
      "Māui hauled and hauled. The sea churned and bubbled. Slowly, massively, the land rose from the water — hills and valleys and forests and streams, dripping with ocean water. His brothers stared, speechless. Māui had fished up Te Ika-a-Māui — the fish of Māui — which today is the North Island of New Zealand. He told his brothers to wait while he went to make offerings to the gods, but they did not wait, and began cutting into the fish — which is why the island has the irregular, hilly shape it has today.",
    ],
    questions: [
      {
        question: "How did Māui manage to join his brothers' fishing trip?",
        options: ["He swam out to the canoe and climbed aboard in the open sea", "He hid under a pile of mats in the canoe the night before", "He challenged his brothers to a race and won his place"],
        correctIndex: 1,
      },
      {
        question: "What did Māui use as a fish hook?",
        options: ["A hook carved from his grandmother Murirangawhenua's jawbone", "A golden hook given to him by the sea god Tangaroa", "A bent piece of driftwood wrapped with his sister's hair"],
        correctIndex: 0,
      },
      {
        question: "Why does the North Island have an irregular, hilly shape?",
        options: ["Māui carved it with his magic club to make it beautiful", "The brothers began cutting into the fish before Māui returned from making offerings", "Waves from the great hauling broke it into the shape it has today"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "taniwha-river",
    storyId: "taniwha-tales",
    title: "The Taniwha of the River",
    emoji: "🌊",
    content: "The village of Ngāti Tūhoe has a taniwha — a great guardian spirit — living in the deep bend of their river. He is not feared but respected, fed offerings of food, and consulted before canoes travel downstream. When a group of strangers tries to dam the river upstream without asking permission, the taniwha rises and makes his presence known in a way that reminds everyone that the river has a protector who has lived there since before memory.",
    pages: [
      "The people of the village had lived beside the river for more generations than anyone could count. They knew every rock in its bed, every pool where eels gathered, every current that could tip a canoe. And they knew about the taniwha — the great guardian who lived in the deep green pool at the big bend, where the river turned and slowed and the water was always a little colder than anywhere else. They left food at the water's edge each season and asked his blessing before long journeys.",
      "The taniwha had protected them many times. Twice he had churned the water at the bend to warn the village that floodwaters were coming from the mountains. Once he had blocked a fallen tree that might have swept away a child's canoe. He was not a monster — he was a guardian, old and vast and bound to that particular bend of that particular river in a way that went back to the beginning of everything.",
      "Then, one autumn, a group of travellers from a distant region arrived upstream and began building a dam. They had not asked. They had not left offerings. They had not even listened when the village sent a messenger to explain about the taniwha. 'Old stories,' one of them said, and went back to stacking stones. That night the pool at the bend boiled. The river rose six feet in an hour with no rain.",
      "The dam tore loose from its foundations and scattered downstream like kindling. In the morning the travellers found deep grooves in the mud of the riverbank — something enormous had come very close to the shore in the night. They left that afternoon without taking a single stone. The village elder walked to the pool and left a double portion of food at the edge. 'Thank you,' he said to the dark water. The surface rippled once, gently, in reply.",
    ],
    questions: [
      {
        question: "How did the village show respect for the taniwha?",
        options: ["By never fishing in the river at all", "By leaving food at the water's edge each season and asking his blessing before journeys", "By choosing one young person each year to swim in the deep pool"],
        correctIndex: 1,
      },
      {
        question: "Why did the taniwha destroy the strangers' dam?",
        options: ["The dam was blocking fish that the village needed", "The strangers had built without asking permission or respecting the taniwha", "The taniwha wanted to prove he was stronger than any human construction"],
        correctIndex: 1,
      },
      {
        question: "What did the travellers find in the morning that made them leave?",
        options: ["Their tools and canoes had vanished overnight", "Deep grooves in the mud showing something enormous had come very close to shore", "A message written in the sand telling them to go"],
        correctIndex: 1,
      },
    ],
  },

  {
    id: "lost-canoe",
    storyId: "taniwha-tales",
    title: "The Lost Canoe",
    emoji: "🛶",
    content: "A trading canoe carrying five paddlers is caught in a sudden storm far from shore and loses all sense of direction in the dark. When the steering paddle breaks and hope seems lost, something vast nudges the canoe from beneath — steering it gently but unmistakably toward the smell of land and the sound of breaking surf. By dawn the crew are safely ashore, and every one of them knows they did not find their way alone.",
    pages: [
      "Five paddlers set out at dawn on a trading journey — Tama, Hemi, Rangi, Aroha, and old Koro who knew every current. The sea was calm and the sky was clear. By midday they had traded their goods and were heading home with full baskets. Then the clouds came from the south, fast and grey, and the sea went from flat to rough in the time it took to say a prayer.",
      "The storm hit properly at dusk. Rain came sideways. The waves were taller than the canoe was long. Tama bailed, Aroha and Rangi paddled hard, Hemi held the baskets down — and then old Koro's steering paddle cracked across a wave and broke in two. Without steering, the canoe spun in the water like a leaf. The shore was somewhere in the dark but no one could tell which direction dark it was in.",
      "They lashed what was left of the paddle into a rough rudder and paddled in a direction that felt right — but the storm had turned them around so many times that right was only a guess. Koro prayed quietly. The others prayed loudly. Then something enormous pressed against the bottom of the canoe — not a rock, because rocks do not move. Something living, slow and deliberate, pressing upward just enough to change their heading.",
      "The canoe moved on the new bearing as if the paddlers had found perfect rhythm. The wind was still wild but the direction held. By the deep of the night they heard surf. By dawn they saw the familiar black rocks of their home shore. When they dragged the canoe up onto the beach, Koro turned and looked out at the still-rough sea. A dark shape moved once in the water near the headland, then was gone. 'Taniwha,' said Koro quietly, and bowed his head.",
    ],
    questions: [
      {
        question: "What problem left the canoe unable to steer?",
        options: ["The canoe filled with water and rode too low", "Old Koro's steering paddle cracked and broke in the storm", "The rope holding the outrigger snapped in the waves"],
        correctIndex: 1,
      },
      {
        question: "How did the taniwha help the lost canoe?",
        options: ["It appeared above the water and pointed toward shore with its tail", "It pressed against the bottom of the canoe to change their heading toward home", "It calmed the storm so they could see the stars again"],
        correctIndex: 1,
      },
      {
        question: "How did old Koro know it was a taniwha that had helped them?",
        options: ["He saw its face clearly when it surfaced beside the canoe", "Something enormous and living had moved the canoe deliberately, and a dark shape was seen near the headland as they landed", "The taniwha left a sign on the beach for them to find"],
        correctIndex: 1,
      },
    ],
  },

  // ── baba-yaga ─────────────────────────────────────────────
  {
    id: "baba-yaga-vasilisa",
    storyId: "baba-yaga",
    title: "Vasilisa the Beautiful",
    emoji: "🪆",
    content: "Vasilisa was a kind girl whose dying mother gave her a tiny wooden doll. 'Feed her a little,' said her mother, 'and she will help you in times of trouble.' When Vasilisa's cruel stepmother sent her alone into the dark forest to fetch fire from the terrifying witch Baba Yaga, the little doll guided her safely along the path. At Baba Yaga's hut on chicken legs, Vasilisa worked hard and answered all the witch's riddles honestly. Impressed by her goodness, Baba Yaga gave her a skull with burning eyes that carried fire home — and when Vasilisa brought it to her stepmother, the skull's gaze burned the wicked woman to ash.",
    pages: [
      "When Vasilisa was very small, her mother fell gravely ill. Before she died, she pressed a tiny carved wooden doll into Vasilisa's hands. 'Feed her a little bread each day,' she whispered, 'and she will help you whenever you are in need.' Years passed. Vasilisa grew kind and beautiful, but her new stepmother and stepsisters were jealous and cruel.",
      "One dark night, the stepmother put out every light in the house and sent Vasilisa alone into the deep forest to fetch fire from Baba Yaga — the terrifying bone-legged witch. Vasilisa was frightened, but her little doll glowed warm in her pocket and guided her safely along the path, step by step, until the terrible hut on chicken legs appeared before her.",
      "Vasilisa worked hard for Baba Yaga — cooking, cleaning, and sorting grain from sand. She answered every riddle truthfully and never complained. Baba Yaga was so impressed she gave Vasilisa a glowing skull on a stick, its eyes burning with firelight. When Vasilisa carried it home, the skull's fiery gaze fell upon her wicked stepmother — and burned away every last drop of her cruelty forever. 🪆",
    ],
    questions: [
      {
        question: "What did Vasilisa's dying mother give her?",
        options: ["A golden ring", "A tiny wooden doll", "A map of the forest"],
        correctIndex: 1,
      },
      {
        question: "Why did the stepmother send Vasilisa to Baba Yaga?",
        options: ["To learn magic", "To fetch fire for the house", "To bring back treasure"],
        correctIndex: 1,
      },
      {
        question: "What gift did Baba Yaga give Vasilisa for her hard work?",
        options: ["A bag of gold coins", "A magical horse", "A glowing skull that carried fire"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "baba-yaga-ivan",
    storyId: "baba-yaga",
    title: "Ivan and the Hut on Chicken Legs",
    emoji: "🐔",
    content: "Ivan was lost in the enchanted forest when he stumbled upon a hut spinning slowly on two enormous chicken legs. Inside sat Baba Yaga, her nose touching the ceiling, her teeth like iron. She sniffed the air and cried, 'I smell Russian bones!' But Ivan was bold. 'Before you eat me, old woman, give me food and drink and a warm place to sleep — as any good host would!' Taken aback by his boldness, Baba Yaga fed him and listened to his quest. She gave him a magical ball of yarn to lead his way and told him exactly what dangers lay ahead. Ivan bowed politely and walked on — and the yarn led him true.",
    pages: [
      "Ivan had been walking through the enchanted forest for three days when he heard a strange creaking sound. Around a bend in the path stood the strangest house he had ever seen — a small hut perched on two enormous chicken legs, slowly turning in a circle. The door had no handle, the windows had no glass, and from inside came the sound of someone muttering.",
      "'Hut, hut, turn your back to the forest and your front to me!' called Ivan. The hut gave a great shudder, the chicken legs scraped the earth, and the door swung open. Inside sat Baba Yaga — bony, terrible, with teeth like iron and a nose that nearly touched the ceiling. 'I smell Russian bones!' she shrieked. But Ivan stood straight. 'Before you eat me, grandmother, give me food and drink and a bed — as any proper host would!' Baba Yaga blinked. No one had ever called her grandmother before.",
      "Something softened in the old witch. She fed Ivan black bread and hot soup, she gave him a warm corner to sleep, and in the morning she handed him a ball of magic yarn. 'Throw it before you and follow where it rolls,' she said. 'It will lead you true.' Ivan bowed, thanked her, and walked on. The yarn led him exactly where he needed to go — and all because he had the courage to be polite to a witch. 🐔",
    ],
    questions: [
      {
        question: "What was unusual about Baba Yaga's hut?",
        options: ["It was made of candy", "It stood on two enormous chicken legs", "It floated above the ground"],
        correctIndex: 1,
      },
      {
        question: "How did Ivan stop Baba Yaga from eating him?",
        options: ["He cast a spell on her", "He challenged her to a riddle contest", "He boldly asked her to be a proper host and give him food first"],
        correctIndex: 2,
      },
      {
        question: "What did Baba Yaga give Ivan to help him on his journey?",
        options: ["A sword of fire", "A magical ball of yarn", "A flying horse"],
        correctIndex: 1,
      },
    ],
  },

  // ── firebird ──────────────────────────────────────────────
  {
    id: "firebird-ivan",
    storyId: "firebird",
    title: "Ivan and the Firebird",
    emoji: "🔥",
    content: "Every night a radiant bird with feathers of living flame swooped into the Tsar's garden and stole his golden apples. The Tsar sent his sons to catch it. The oldest two fell asleep on watch. But youngest Ivan stayed awake and grabbed a tail feather as the Firebird flew away. The feather glowed like a torch. The Tsar sent Ivan to capture the Firebird itself, and then to find the beautiful Tsarevna Elena, and then to defeat the immortal Koschei. Each task seemed impossible — but a grateful grey wolf appeared to help Ivan, for the young prince had once spared its life in the forest.",
    pages: [
      "The Tsar's garden held a tree of pure gold, and every night its golden apples were stolen by a creature of blazing light — the Firebird. The Tsar sent his eldest son to guard it. He fell asleep before midnight. The second son was sent — he too slept through the theft. On the third night, youngest Ivan sat in the cold and watched. At midnight the garden blazed like sunrise as the Firebird descended.",
      "Ivan lunged and caught one glowing tail feather before the bird wrenched free and vanished into the sky. The feather lit the room like a torch. The Tsar was grateful — but not satisfied. 'You will catch the Firebird itself,' he commanded, 'or you will never return to my kingdom.' Ivan set off into the world, not knowing which way to go.",
      "In the deep forest, Ivan encountered a grey wolf and raised his sword — but then lowered it and walked away. The wolf was grateful. 'I will repay your mercy,' it said, and ran to his side. Together they outwitted the immortal Koschei, rescued the Tsarevna Elena, and captured the Firebird in a cage of starlight. Ivan returned home in triumph, and the wolf slipped back into the forest — its debt repaid. 🔥",
    ],
    questions: [
      {
        question: "What was the Firebird stealing from the Tsar's garden?",
        options: ["Silver coins", "Golden apples", "Magic seeds"],
        correctIndex: 1,
      },
      {
        question: "Why did the grey wolf choose to help Ivan?",
        options: ["Ivan gave it food", "Ivan had spared its life in the forest", "The wolf was under a magic spell to serve him"],
        correctIndex: 1,
      },
      {
        question: "What made Koschei so hard to defeat?",
        options: ["He could fly faster than any horse", "He was immortal because he had hidden his soul outside his body", "He had an army of enchanted soldiers"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "firebird-golden-feather",
    storyId: "firebird",
    title: "The Golden Feather",
    emoji: "🪶",
    content: "A woodcutter found a single feather burning gold in the snow and brought it to the Tsar, who declared that whoever brought him the whole bird would receive half the kingdom. Three brothers set out. The oldest two stopped at every tavern and forgot their quest. The youngest, Aleksei, shared his last crust of bread with an old woman on the road, who revealed herself as a forest spirit. She gave him a whistle: blow it once to calm any creature, twice to make it sleep, three times to bind it. Using the whistle, Aleksei tamed the Firebird gently, brought it home unharmed, and returned it to the wild the very next day — having first asked the Tsar whether he truly needed it, or only thought he did.",
    pages: [
      "A single feather lay in the snow of the forest, glowing warm gold like a coal that would not die. The woodcutter who found it carried it to the Tsar, who held it up in wonder. 'Whoever brings me the whole bird,' declared the Tsar, 'shall receive half my kingdom.' Three brothers set off the very next morning.",
      "The two elder brothers stopped at the first tavern for a drink, and then another, and gradually forgot all about the Firebird. But youngest Aleksei walked on through hunger and cold. On the third day he met a ragged old woman sitting in the snow. He gave her the last crust in his pack. She smiled — and was suddenly tall and bright and not old at all. She pressed a small wooden whistle into his hand. 'One blow to calm, two to sleep, three to bind,' she said, and was gone.",
      "Aleksei found the Firebird at dawn, blazing like a second sun. He blew the whistle once — the bird stilled. He blew it twice — the bird settled gently into his arms and closed its eyes. He carried it to the Tsar. But then he asked a question no one had thought to ask: 'Your Majesty — do you truly need this bird, or only want it because it is beautiful and rare?' The Tsar thought for a long time. Then he laughed. 'Let it go,' he said. Aleksei released the Firebird into the sky, and the kingdom was brighter for it. 🪶",
    ],
    questions: [
      {
        question: "What reward did the Tsar offer for capturing the Firebird?",
        options: ["A bag of gold", "Half the kingdom", "The hand of his daughter in marriage"],
        correctIndex: 1,
      },
      {
        question: "What did the whistle do when blown three times?",
        options: ["Called the Firebird to land", "Bound a creature in place", "Opened a magical door"],
        correctIndex: 1,
      },
      {
        question: "What did Aleksei do with the Firebird at the end?",
        options: ["Kept it in a golden cage", "Traded it for treasure", "Released it back into the sky"],
        correctIndex: 2,
      },
    ],
  },

  // ── norse-mythology ───────────────────────────────────────
  {
    id: "thor-hammer",
    storyId: "norse-mythology",
    title: "How Thor Got His Hammer Back",
    emoji: "🔨",
    content: "One morning Thor woke to find Mjölnir — his great hammer — stolen. Without it the gods were helpless against the giants. Loki discovered that the frost giant Thrym had taken it and buried it deep underground. Thrym's price for returning it: the goddess Freyja as his bride. Freyja refused furiously. So Loki hatched a plan — Thor himself would dress as the bride! Disguised in a wedding gown, with Loki as the bridesmaid, Thor sat at the giants' feast. When Thrym placed Mjölnir on the 'bride's' lap to bless the marriage, Thor's fingers closed around the handle. He rose to his full height, swung the hammer, and not one giant in the hall survived.",
    pages: [
      "Thor woke before dawn and reached instinctively for Mjölnir — his great war hammer, gift of the dwarves, the weapon that held back the frost giants from Asgard. His hand found nothing. He sat up. He looked. He searched the entire hall. The hammer was gone. Without it, the gods were defenceless. All of Asgard went pale with fear.",
      "Loki investigated and returned with bad news — and worse news. The bad news: the hammer had been stolen by Thrym, king of the frost giants. The worse news: Thrym's price for returning it was the goddess Freyja herself as his bride. Freyja was so furious the mountains shook. Then Loki smiled. 'I have a plan,' he said. Everyone groaned. Loki's plans were either brilliant or catastrophic. Sometimes both.",
      "Thor sat in the great hall of the giants, dressed in a bridal gown with a veil over his red beard, Loki giggling at his side dressed as the bridesmaid. When Thrym placed Mjölnir on the 'bride's' lap to bless the wedding, Thor's hand closed around the handle. He stood to his full, enormous height. The veil fell. Thrym had just enough time to say 'oh' before Thor's hammer sang through the air. Every giant in the hall was defeated — and Mjölnir came home. 🔨",
    ],
    questions: [
      {
        question: "Who stole Thor's hammer Mjölnir?",
        options: ["Loki the trickster", "Thrym, the frost giant king", "The dwarves who made it"],
        correctIndex: 1,
      },
      {
        question: "What was Thrym's price for returning the hammer?",
        options: ["All of Asgard's gold", "The goddess Freyja as his bride", "Thor's belt of strength"],
        correctIndex: 1,
      },
      {
        question: "How did Thor get close enough to Thrym to reclaim Mjölnir?",
        options: ["He snuck into the giant's hall in disguise at night", "He disguised himself as Freyja the bride", "He challenged Thrym to a wrestling match"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "odin-runes",
    storyId: "norse-mythology",
    title: "Odin and the Runes",
    emoji: "🌳",
    content: "Odin, king of the Norse gods, knew that wisdom was the greatest power in all the nine worlds — but the secret of the runes was locked away in the deep roots of Yggdrasil, the world tree. To earn them, Odin hung himself from a branch of the great tree for nine days and nine nights, wounded by his own spear, with no food or drink, staring into the dark abyss below. On the ninth night, the runes blazed up from the depths and Odin seized them with a cry. He paid with one eye for another gift of wisdom — a drink from the well of Mimir, where all knowledge was stored. Odin gave much, but he knew: nothing worth having is free.",
    pages: [
      "Odin ruled the gods of Asgard from his high seat Hlidskjalf, from which he could see all nine worlds. He had great power — but Odin always hungered for more wisdom. He knew that deep in the roots of Yggdrasil, the great world tree that held all of existence together, lay the secret of the runes — symbols of power that could bend reality itself. But to reach them, the price was terrible.",
      "Odin took his spear Gungnir and wounded himself with it. Then he climbed the world tree and hung from its branches, staring downward into the void — no food, no water, for nine days and nine days. The other gods watched in silence, unable to help him. Night after night the wind screamed through the branches. Odin did not let go.",
      "On the ninth night, shapes blazed up from the deep roots below him — the runes, ancient symbols of immense power. Odin reached down with the last of his strength and seized them. He fell from the tree, alive, changed forever. He could now write, cast spells, read fate, and unlock the secrets of the dead. Later he gave one of his eyes to drink from Mimir's well of all-knowledge. He never regretted either sacrifice. 🌳",
    ],
    questions: [
      {
        question: "What did Odin sacrifice to gain the secret of the runes?",
        options: ["His golden throne", "Nine days hanging from the world tree, wounded and without food", "His magic ravens Huginn and Muninn"],
        correctIndex: 1,
      },
      {
        question: "What is Yggdrasil?",
        options: ["Odin's magical spear", "The great world tree that holds the nine worlds together", "The land of the dead"],
        correctIndex: 1,
      },
      {
        question: "What did Odin give up to drink from Mimir's well of knowledge?",
        options: ["His hammer", "One of his eyes", "His immortality for one year"],
        correctIndex: 1,
      },
    ],
  },

  // ── norway-trolls ─────────────────────────────────────────
  {
    id: "three-billy-goats",
    storyId: "norway-trolls",
    title: "The Three Billy Goats Gruff",
    emoji: "🐐",
    content: "On one side of a rushing river grew the sweetest, greenest grass in all of Norway. Three Billy Goats Gruff — small, medium, and large — longed to cross the bridge to reach it. But under the bridge lived a great ugly troll with eyes as big as saucers and a nose as long as a poker, who ate anyone who tried to cross. The small goat talked the troll out of eating him by promising a bigger meal was coming. The medium goat did the same. But when the largest billy goat stepped onto the bridge and the whole valley shook, he knocked the troll clean off the bridge with his great horns, into the rushing river, never to be seen again.",
    pages: [
      "In a valley in Norway there was a bridge over a roaring river, and beyond the bridge grew the greenest, sweetest grass you could ever imagine. Three brothers — the Billy Goats Gruff — were very hungry and longed to cross. But under the bridge lived a horrible troll, enormous and ugly, with eyes like dinner plates and a voice like a landslide. He ate every creature that tried to cross.",
      "The smallest Billy Goat Gruff stepped onto the bridge. TRIP TRAP TRIP TRAP! 'Who's that tripping over my bridge?' roared the troll. 'Only I, the smallest Billy Goat Gruff,' said the goat. 'I'm too small to be worth eating — wait for my bigger brother, he'll make a much better meal!' The troll grumbled but let him pass. The middle goat crossed the same way, promising the troll to wait for an even larger goat. The troll agreed again.",
      "Then the great big Billy Goat Gruff stepped onto the bridge. TRIP TRAP TRIP TRAP — the planks shook, the river trembled, and the troll leapt up certain of his finest feast. The great goat lowered his enormous horns, charged at full speed, and sent the troll spinning through the air and down into the river with an enormous splash. The troll was never seen again. And the three Billy Goats Gruff ate green grass on the hillside happily for the rest of their days. 🐐",
    ],
    questions: [
      {
        question: "What did the smallest Billy Goat tell the troll to stop it from eating him?",
        options: ["That he tasted terrible", "That a bigger goat was coming who would make a better meal", "That he had a magic horn that would curse the troll"],
        correctIndex: 1,
      },
      {
        question: "What happened to the troll at the end of the story?",
        options: ["He ran away into the mountains", "The largest billy goat knocked him into the river with his horns", "He shrank to the size of a mouse"],
        correctIndex: 1,
      },
      {
        question: "What were the three goats trying to reach?",
        options: ["A golden apple tree on the other side", "The sweet green grass across the river", "A warm barn for the winter"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "east-sun-west-moon",
    storyId: "norway-trolls",
    title: "East of the Sun and West of the Moon",
    emoji: "🌙",
    content: "A great white bear came to a poor farmer's house and offered wealth in exchange for his youngest daughter. The girl agreed and rode on the bear's back to an enchanted castle. Each night in the darkness a man slept beside her, but she could never see his face. One night she lit a candle — and saw the most handsome prince, released from a troll curse by day in the form of a bear but enchanted by night. Three drops of wax fell on his shirt. The curse was broken partway but not fully. The prince vanished, taken to a castle east of the sun and west of the moon. The girl walked to the ends of the earth to find him, questioned the four winds themselves, and at last broke the curse entirely.",
    pages: [
      "A great white bear stood at the farmer's door in the middle of winter. 'Give me your youngest daughter,' said the bear, 'and your family will never go hungry again.' The farmer was poor and the winter was long. His youngest daughter, brave and kind, said she would go. She climbed onto the white bear's broad back and they rode into the deep cold forest and beyond.",
      "In the enchanted castle, she was given everything she could want. But each night in the darkness, a man lay beside her, and no matter how she listened, he was gone before dawn. One night, burning with curiosity, she lit a small candle — and by its light saw a young man of such beauty she caught her breath. He was a prince, held under a troll queen's curse. But three drops of hot wax fell on his white shirt. He woke with a cry and was gone — taken back to a castle that lay east of the sun and west of the moon.",
      "The girl set out on a journey to the end of the world. She wore out three pairs of iron shoes walking. She questioned the East Wind, the West Wind, the South Wind, and at last the great North Wind, who carried her on his back to the very castle. There she outwitted the long-nosed troll princess and washed the wax from the white shirt where the princess could not. The curse broke. The troll castle crumbled, and the prince and the girl walked out together into the light. 🌙",
    ],
    questions: [
      {
        question: "What form did the enchanted prince take during the day?",
        options: ["A great wolf", "A white bear", "A golden eagle"],
        correctIndex: 1,
      },
      {
        question: "How did the girl accidentally break part of the curse the wrong way?",
        options: ["She spoke the prince's name aloud", "Three drops of candle wax fell on his shirt", "She opened the forbidden door of the castle"],
        correctIndex: 1,
      },
      {
        question: "Who finally carried the girl to the castle east of the sun and west of the moon?",
        options: ["The East Wind", "A magical reindeer", "The North Wind"],
        correctIndex: 2,
      },
    ],
  },

  // ── shahnameh ─────────────────────────────────────────────
  {
    id: "rostam-sohrab",
    storyId: "shahnameh",
    title: "Rostam and Sohrab",
    emoji: "⚔️",
    content: "Rostam was the greatest warrior in all of Persia — mighty, brave, and beloved. Years before, on a journey, he had loved a princess and left before knowing she was expecting his child. The boy was born and named Sohrab, and he grew to be a warrior of terrifying strength, searching the world for the father he had never met. By a cruel twist of fate, the two met on opposite sides of a battlefield. They fought three days of heroic combat, each sensing something in the other but not knowing what. On the third day, Rostam dealt the mortal blow — and then found the amulet his son wore, the amulet he himself had sent. Nothing in all of Persian literature is more heartbreaking.",
    pages: [
      "Rostam was the greatest hero Persia had ever known. Songs were sung of his battles. Children were named after him. His horse Rakhsh was the finest in the world. But Rostam had a secret grief — long ago he had loved a princess in a distant land and ridden away not knowing she carried his child. Across the years, a boy named Sohrab had grown up burning to find his legendary father.",
      "Sohrab became a warrior of extraordinary strength and rode at the head of an army searching for Rostam. War brought them to opposite sides of a battlefield. Each heard of the other's deeds and each felt a strange pull — a recognition they could not name. They agreed to single combat. Three days they fought in the dust, and each day the battle was even. On each evening they parted with a strange sadness.",
      "On the third day, Rostam found an opening and drove his spear home. As Sohrab fell, he said, 'My father Rostam will avenge my death.' Rostam went cold. He tore open Sohrab's armour and found the amulet — the amulet he had left for his son before he ever knew one existed. The world's greatest warrior collapsed over his son's body and wept. In all the Shahnameh's sixty thousand verses, no moment is more still, or more sorrowful. ⚔️",
    ],
    questions: [
      {
        question: "Why had Rostam never met his son Sohrab?",
        options: ["He had abandoned them deliberately", "He had left before knowing the princess was expecting his child", "Sohrab had been hidden from him by an enemy"],
        correctIndex: 1,
      },
      {
        question: "How did Rostam discover that Sohrab was his son?",
        options: ["Sohrab told him his mother's name", "He found the amulet he had left for his child on Sohrab's body", "A prophet had warned him beforehand"],
        correctIndex: 1,
      },
      {
        question: "How long did Rostam and Sohrab's single combat last?",
        options: ["One day", "Two days", "Three days"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "zal-simurgh",
    storyId: "shahnameh",
    title: "Zal and the Simurgh",
    emoji: "🦅",
    content: "Zal was born with hair as white as snow, and his father the great warrior Sam was so ashamed of the strange child that he abandoned him on the slopes of the Alborz Mountains to die. But the magical Simurgh — a vast, ancient bird of paradise who had lived since the beginning of time — found the baby and raised him in her nest at the top of the world's highest peak. Zal grew strong and wise, and when he was full-grown he returned to the human world. The Simurgh gave him three of her feathers: 'When you are in desperate need, burn one. I will come.' Years later, when his wife lay near death in childbirth, Zal burned a feather — and the Simurgh came and saved them both. Their child was Rostam.",
    pages: [
      "Sam was the mightiest warrior in Persia, and he wept with shame when his son was born — for the boy's hair was as white as frost, white as ash, white as old bones. Such a child must be cursed, the people whispered. Sam hardened his heart and carried the baby to the wild slopes of the Alborz Mountains, placing him on a cold rock and riding away without looking back.",
      "High above in a nest of gold, the ancient Simurgh heard a sound — so small, so human. She spread her vast wings and descended. The bird was enormous, older than memory, with feathers the colours of dawn. She found the white-haired baby alive and crying and carried him gently up to her nest. She named him Zal and raised him alongside her own young, teaching him the wisdom of the sky and the patience of mountains.",
      "When Zal was grown, the Simurgh told him it was time to return to the world of men. She gave him three of her own feathers. 'Burn one whenever you face the impossible, and I will come.' Zal returned to Persia, found his father, and became a great lord. The day his wife was dying in childbirth, he burned the first feather. The Simurgh arrived on a rush of wind and saved both mother and child. The child born that night — the child of miracle — was Rostam. 🦅",
    ],
    questions: [
      {
        question: "Why did Sam abandon his baby son Zal?",
        options: ["He was too poor to raise a child", "He was ashamed because Zal was born with white hair", "A prophecy told him the child would be dangerous"],
        correctIndex: 1,
      },
      {
        question: "What gift did the Simurgh give Zal when he returned to the world?",
        options: ["A magical sword", "Three of her feathers to call her in times of need", "The ability to speak with all animals"],
        correctIndex: 1,
      },
      {
        question: "Who was the child born the night Zal burned the first feather?",
        options: ["Sohrab", "Rostam", "Sam"],
        correctIndex: 1,
      },
    ],
  },

  // ── thousand-nights ───────────────────────────────────────
  {
    id: "scheherazade",
    storyId: "thousand-nights",
    title: "Scheherazade and the King",
    emoji: "🌙",
    content: "King Shahryar had been betrayed and grew so bitter that he swore to marry a new woman every night and execute her at dawn — so she could never betray him. The kingdom lived in terror. When it was the vizier's turn to find a bride, his own daughter Scheherazade volunteered. 'I have a plan,' she told her sister. That night, she began a story so captivating, so full of twists and wonders, that when dawn came the king could not bear to end it. 'One more night,' he said. And so it went, for one thousand and one nights, until the king's heart was healed and he set aside his cruelty forever.",
    pages: [
      "King Shahryar had once been kind, but betrayal had turned his heart to stone. He made a terrible vow: he would marry a woman each evening and have her executed at dawn, before she could ever betray him. Night after night, the kingdom wept. The vizier — the king's closest advisor — was ordered to find new brides, and he trembled every time. His own daughter Scheherazade saw the grief in his eyes and said, 'Father. Let me go to the king.'",
      "'I have a plan,' she told her younger sister Dunyazad. 'Come with me, and at midnight ask me to tell a story.' That night, as the palace fell quiet and dawn drew closer, Dunyazad said softly, 'Sister — won't you tell us a tale?' Scheherazade began. She wove a story of merchants and genies, of hidden treasure and magical horses, of adventures so vivid the king sat up and his eyes grew bright. When the first pale light appeared at the window, Scheherazade paused — right at the most thrilling moment.",
      "The king could not order her execution. 'What happens next?' he demanded. 'Tomorrow night,' said Scheherazade calmly, 'if you wish to hear it.' And so it went — for one thousand and one nights. Sinbad sailed his seven voyages. Ali Baba outwitted the forty thieves. Aladdin discovered his lamp. Story after story after story, and with each one, a little of the king's hardness softened. On the one thousand and first night, he told Scheherazade she would live — and that he had never loved anyone more. 🌙",
    ],
    questions: [
      {
        question: "Why did King Shahryar make his terrible vow?",
        options: ["He was bored and wanted entertainment each night", "He had been betrayed and became bitterly afraid of being hurt again", "A sorcerer had placed a curse on him"],
        correctIndex: 1,
      },
      {
        question: "What was Scheherazade's strategy to survive each night?",
        options: ["She flattered the king with compliments until he forgot his vow", "She ended each story at the most thrilling moment so the king had to let her live to hear the ending", "She had her sister sneak a sleeping potion into the king's wine"],
        correctIndex: 1,
      },
      {
        question: "How many nights did Scheherazade tell stories?",
        options: ["Seven hundred nights", "One thousand nights", "One thousand and one nights"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "sinbad-voyage",
    storyId: "thousand-nights",
    title: "Sinbad's First Voyage",
    emoji: "⛵",
    content: "Sinbad the Sailor was born rich, spent his fortune, and put to sea to restore it. On his first voyage, the ship anchored at what seemed to be a small, pleasant island. The sailors lit fires and began to cook. Then the island moved. It was a whale — the largest creature alive — who had slept so long that soil and trees had grown on its back. The fires had woken it. It dove. Every man scrambled for the ship. Sinbad was left behind, clinging to a wooden tub, tossed on the ocean for three days and nights until a wave cast him up on the shore of a magical island, where a king's mare had just given birth to a sea horse — and where fortune would begin to turn.",
    pages: [
      "In Baghdad there lived a porter named Hindbad, poor and envious, who once complained bitterly about the unfairness of fate outside the gate of a magnificent mansion. The owner of the mansion called him inside. 'I am Sinbad the Sailor,' said the old man, 'and I was not always rich. Let me tell you how I earned every coin.' He poured wine and began his tale.",
      "Sinbad had inherited a fortune and spent every last dirham on feasting and friends. When it was gone, he loaded a ship with trade goods and set out to sea. For many days they sailed in fair weather until they sighted a green and pleasant island. They anchored, went ashore, lit fires, and started cooking. Then — very slowly — the island sank. It was not an island at all. It was an enormous whale, ancient as the deep sea, who had slept so long that soil and trees had grown on its back. The fires had finally woken it. With a tremendous lurch, it dove beneath the waves.",
      "The ship rowed desperately away. Sinbad clung to a wooden washtub as the ocean swallowed everything around him. For three days and three nights he drifted, praying, half-mad with thirst. Then a great wave picked him up and threw him gently — almost kindly — onto a shore of soft grass. He lay there breathing. He had nothing. But he was alive. And for Sinbad the Sailor, that was always enough to begin again. ⛵",
    ],
    questions: [
      {
        question: "What had Sinbad done with the fortune he inherited?",
        options: ["Invested it in ships and trade", "Spent it all on feasting and friends", "Given it away to the poor"],
        correctIndex: 1,
      },
      {
        question: "What did the sailors mistake for a small island?",
        options: ["A sandbar covered in seaweed", "An ancient whale who had slept so long trees grew on its back", "A floating garden from a sunken city"],
        correctIndex: 1,
      },
      {
        question: "What kept Sinbad afloat after the whale dove beneath the waves?",
        options: ["A piece of the ship's mast", "A wooden washtub he grabbed as the island sank", "A magical net thrown by a sea spirit"],
        correctIndex: 1,
      },
    ],
  },
];
