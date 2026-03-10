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
];
