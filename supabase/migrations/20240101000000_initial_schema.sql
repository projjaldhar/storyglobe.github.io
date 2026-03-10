-- ============================================================
-- StoryGlobe — Initial Schema
-- Run this in your Supabase SQL Editor (or via supabase db push)
-- ============================================================

-- Countries
create table if not exists public.countries (
  id          text primary key,
  name        text not null,
  emoji       text not null,
  color       text not null,
  image_key   text not null,
  description text not null,
  lat         double precision not null,
  lng         double precision not null,
  sort_order  integer not null default 0
);

-- Stories
create table if not exists public.stories (
  id               text primary key,
  country_id       text not null references public.countries(id) on delete cascade,
  title            text not null,
  summary          text not null,
  origin           text not null,
  emoji            text not null,
  moral            text,
  illustration_key text,
  sort_order       integer not null default 0
);

-- Authors
create table if not exists public.authors (
  id          text primary key,
  country_id  text not null references public.countries(id) on delete cascade,
  name        text not null,
  bio         text not null,
  emoji       text not null,
  famous_books text[] not null default '{}',
  birth_year  text,
  sort_order  integer not null default 0
);

-- ---- Row Level Security ----
alter table public.countries enable row level security;
alter table public.stories   enable row level security;
alter table public.authors   enable row level security;

create policy "Public read countries" on public.countries for select using (true);
create policy "Public read stories"   on public.stories   for select using (true);
create policy "Public read authors"   on public.authors   for select using (true);

-- ============================================================
-- Seed Data
-- ============================================================

insert into public.countries (id, name, emoji, color, image_key, description, lat, lng, sort_order) values
  ('india',      'India',       '🇮🇳', 'story-warm',    'india',      'A land of ancient wisdom, colorful festivals, and timeless fables passed down for thousands of years.',                                              20.5937,  78.9629, 1),
  ('germany',    'Germany',     '🇩🇪', 'story-forest',  'germany',    'Deep enchanted forests, fairy tale castles, and magical stories that have captivated children for centuries.',                                        51.1657,  10.4515, 2),
  ('uk-ireland', 'UK & Ireland','🇬🇧', 'story-sky',     'uk-ireland', 'Rolling green hills, ancient castles, and a rich tradition of fairy tales, legends, and beloved children''s literature.',                            54.3781,  -3.4360, 3),
  ('japan',      'Japan',       '🇯🇵', 'story-lavender','japan',      'A land of cherry blossoms, ancient temples, and beautiful folktales about honor, nature, and magical creatures.',                                     36.2048, 138.2529, 4),
  ('west-africa','West Africa', '🌍', 'story-sunset',  'west-africa','A vibrant land of rich oral traditions, where griots (storytellers) have been sharing wisdom through tales for centuries.',                            9.0820,  -8.7832, 5)
on conflict (id) do nothing;

insert into public.stories (id, country_id, title, summary, origin, emoji, moral, illustration_key, sort_order) values
  -- India
  ('panchatantra',    'india', 'Panchatantra',
   'A collection of ancient Indian animal fables that teach wisdom and life lessons through clever stories about monkeys, crocodiles, turtles, and more. Written over 2,000 years ago, these tales have traveled across the world and inspired stories in many cultures! The Panchatantra contains five books, each teaching different aspects of wise living through interconnected animal tales.',
   'Ancient India (~200 BCE)', '🐒', 'True wisdom comes from understanding both friends and foes.', 'panchatantra', 1),

  ('hitopadesha',     'india', 'Hitopadesha',
   'Meaning ''Friendly Advice,'' these delightful tales use talking animals to teach children about friendship, cleverness, and making good decisions. Each story is like a puzzle that reveals a wise lesson at the end! Kings, ministers, and even common birds and beasts share their wisdom in these enchanting stories.',
   'Medieval India (~12th century)', '🦚', 'A friend in need is a friend indeed.', 'panchatantra', 2),

  ('jataka-tales',    'india', 'Jataka Tales',
   'Stories about the previous lives of the Buddha, where he appears as different animals and people. These tales teach kindness, bravery, and compassion through exciting adventures in forests and kingdoms. From wise monkeys to generous elephants, each tale shows how small acts of goodness can change the world.',
   'Ancient India (~300 BCE)', '🪷', 'Kindness and compassion are the greatest strengths.', 'lion-mouse', 3),

  -- Germany
  ('grimms-fairy-tales','germany', 'Grimm''s Fairy Tales',
   'The most famous collection of fairy tales in the world! From Cinderella to Rapunzel, Snow White to Hansel and Gretel — these magical stories take you through enchanted forests filled with witches, princes, and talking animals. Originally collected from storytellers across Germany, these tales have been translated into over 160 languages!',
   'Germany (1812)', '🏰', 'Goodness and bravery always triumph over evil.', 'grimm', 1),

  ('struwwelpeter',   'germany', 'Struwwelpeter',
   'A collection of wonderfully wild cautionary tales about naughty children! With colorful illustrations and rhyming verses, these funny (and sometimes spooky) stories have been making children laugh and gasp since 1845. Each tale teaches a lesson through hilariously exaggerated consequences!',
   'Germany (1845)', '✂️', 'Actions have consequences — even silly ones!', 'grimm', 2),

  -- UK & Ireland
  ('irish-folk-tales','uk-ireland', 'Irish Folk Tales',
   'Magical stories of leprechauns hiding pots of gold at the end of rainbows, brave warriors, and enchanted creatures called selkies who can transform from seals to humans. Ireland''s stories are full of mystery, wonder, and the magic of the emerald isle!',
   'Ireland (Ancient)', '🍀', 'Magic is everywhere if you know where to look.', 'celtic', 1),

  ('celtic-fairy-tales','uk-ireland', 'Celtic Fairy Tales',
   'Ancient stories from Scotland, Wales, and Ireland about brave heroes, magical creatures, and enchanted lands. These tales speak of a world where fairies live in hills and animals can talk! From the mighty Cú Chulainn to the wise salmon of knowledge, these stories are full of adventure.',
   'Celtic Lands (Ancient)', '🧚', 'Courage and honor are the greatest treasures.', 'celtic', 2),

  ('arthurian-legends','uk-ireland', 'King Arthur Legends',
   'The legendary tales of King Arthur, the sword Excalibur, the Knights of the Round Table, and the wizard Merlin. These epic stories of courage, friendship, and magic have inspired people for over a thousand years! The quest for the Holy Grail remains one of the greatest adventure stories ever told.',
   'Britain (Medieval)', '⚔️', 'True leadership means serving others with honor.', 'celtic', 3),

  -- Japan
  ('momotaro',        'japan', 'Momotarō (Peach Boy)',
   'A boy born from a giant peach grows up to be brave and kind. With his friends — a dog, a monkey, and a pheasant — he journeys to Ogre Island to defeat the demons and bring back stolen treasure! This is Japan''s most beloved folk tale, teaching that friendship and courage can overcome any obstacle.',
   'Japan (Ancient)', '🍑', 'With loyal friends by your side, you can overcome any challenge.', 'momotaro', 1),

  ('tanuki-tales',    'japan', 'Tanuki Tales',
   'Funny and mischievous stories about the tanuki (raccoon dog), a shapeshifting trickster from Japanese folklore. These playful creatures love to play pranks on humans and have magical powers! Sometimes their tricks go wrong in the funniest ways.',
   'Japan (Ancient)', '🦝', 'Cleverness without kindness can lead to trouble.', 'momotaro', 2),

  ('urashima-taro',   'japan', 'Urashima Tarō',
   'A kind fisherman rescues a sea turtle and is taken to a magical underwater palace. The Dragon Princess thanks him with wonderful gifts, but when he returns home, he discovers that hundreds of years have passed! A bittersweet tale about the passage of time.',
   'Japan (8th century)', '🐢', 'Be grateful for the present moment, for time waits for no one.', 'momotaro', 3),

  -- West Africa
  ('anansi-stories',  'west-africa', 'Anansi the Spider',
   'Anansi is the cleverest spider in the world! These West African tales follow the tricky spider as he outsmarts animals much bigger and stronger than him using nothing but his wits. Sometimes his tricks backfire — and that''s when the funniest stories happen! Anansi stories traveled with enslaved Africans to the Caribbean and Americas, where they continue to be told today.',
   'West Africa (Ancient)', '🕷️', 'Cleverness can overcome strength, but wisdom knows when not to be too clever.', 'anansi', 1),

  ('why-stories',     'west-africa', 'Why Stories (Pourquoi Tales)',
   'Ever wondered why the leopard has spots or why mosquitoes buzz in people''s ears? These creative and funny African tales explain how things in nature came to be! Each story is a wonderful blend of humor, imagination, and observation of the natural world.',
   'West Africa (Ancient)', '🐆', 'There is always a story behind everything in nature.', 'anansi', 2),

  ('lion-and-mouse',  'west-africa', 'The Lion and the Mouse',
   'A tiny mouse wakes up a sleeping lion, and the lion lets the mouse go. Later, the mouse saves the lion from a hunter''s net by chewing through the ropes! This ancient fable from Aesop''s collection reminds us that even the smallest creatures can make the biggest difference.',
   'Aesop''s Fables (Ancient)', '🦁', 'Kindness is never wasted — even the smallest friend can be the greatest help.', 'lion-mouse', 3)

on conflict (id) do nothing;

insert into public.authors (id, country_id, name, bio, emoji, famous_books, birth_year, sort_order) values
  ('ruskin-bond',    'india',      'Ruskin Bond',
   'A beloved author who writes about life in the Indian hills. His stories about nature, animals, and everyday adventures have enchanted children for over 60 years. Living in the misty mountains of Mussoorie, he finds magic in rain, trees, and the changing seasons. He loves his cat, long walks, and watching the clouds go by!',
   '🏔️', array['The Blue Umbrella','The Room on the Roof','Rusty the Boy from the Hills','The Cherry Tree','Angry River'], '1934', 1),

  ('rk-narayan',     'india',      'R. K. Narayan',
   'Creator of the magical fictional town of Malgudi, where ordinary people have extraordinary adventures. His simple, warm stories paint a picture of life in a small Indian town where every character feels like someone you might know. From the mischievous Swami to the wise Margayya, his characters stay with you forever!',
   '📖', array['Swami and Friends','The Guide','Malgudi Days','The English Teacher','The Man-Eater of Malgudi'], '1906', 2),

  ('brothers-grimm', 'germany',    'Brothers Grimm',
   'Jacob and Wilhelm Grimm traveled across Germany collecting fairy tales from storytellers. They wrote down over 200 stories, preserving magical tales that might have been lost forever! They were also brilliant scholars who worked on the first German dictionary. Their fairy tales have become part of the world''s shared imagination.',
   '👬', array['Cinderella','Snow White','Rapunzel','Hansel and Gretel','The Bremen Town Musicians'], '1785 & 1786', 1),

  ('michael-ende',   'germany',    'Michael Ende',
   'Author of ''The Neverending Story'' and ''Momo,'' he created fantastical worlds where imagination has real power. His books remind us that stories can change the world! He believed that the most important thing in life is to never stop dreaming and imagining.',
   '📚', array['The Neverending Story','Momo','Jim Button and Luke the Engine Driver'], '1929', 2),

  ('roald-dahl',     'uk-ireland', 'Roald Dahl',
   'The master of mischief! He created Charlie and the Chocolate Factory, Matilda, The BFG, and many more wonderfully wicked stories. His books are full of humor, imagination, and just the right amount of grossness! He wrote in a tiny hut in his garden, wrapped in a sleeping bag, using a special board on his lap.',
   '🍫', array['Charlie and the Chocolate Factory','Matilda','The BFG','James and the Giant Peach','The Witches'], '1916', 1),

  ('cs-lewis',       'uk-ireland', 'C. S. Lewis',
   'Creator of the magical land of Narnia, where children step through a wardrobe into a world of talking animals, brave adventures, and the great lion Aslan. Seven books of pure wonder! He was best friends with J.R.R. Tolkien, and they used to read their stories to each other.',
   '🦁', array['The Lion, the Witch and the Wardrobe','Prince Caspian','The Voyage of the Dawn Treader','The Horse and His Boy'], '1898', 2),

  ('beatrix-potter', 'uk-ireland', 'Beatrix Potter',
   'The creator of Peter Rabbit and many other beloved animal characters! She painted the most beautiful watercolor illustrations and told stories about naughty rabbits, curious kittens, and busy hedgehogs. She also became a champion sheep farmer and conservationist in England''s Lake District.',
   '🐰', array['The Tale of Peter Rabbit','The Tale of Jemima Puddle-Duck','The Tale of Mrs. Tiggy-Winkle','The Tale of Squirrel Nutkin'], '1866', 3),

  ('kenji-miyazawa', 'japan',      'Kenji Miyazawa',
   'A poet and storyteller who wrote magical tales about nature, animals, and the stars. His story ''Night on the Galactic Railroad'' takes you on a train ride through the Milky Way! He believed that art and science were connected, and his stories blend wonder with wisdom about the natural world.',
   '🌌', array['Night on the Galactic Railroad','The Restaurant of Many Orders','Gauche the Cellist'], '1896', 1),

  ('chinua-achebe',  'west-africa','Chinua Achebe',
   'Known as the ''Father of African Literature,'' he told stories that celebrated African culture and traditions. His children''s books bring the wisdom of Nigerian folklore to young readers everywhere. He believed that storytelling was the most powerful way to preserve culture and teach future generations.',
   '🌳', array['Things Fall Apart','How the Leopard Got His Claws','The Drum','The Flute'], '1930', 1)

on conflict (id) do nothing;
