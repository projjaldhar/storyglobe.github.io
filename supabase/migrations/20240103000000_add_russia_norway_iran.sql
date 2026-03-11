-- ============================================================
-- StoryGlobe — Add Russia, Norway, Iran
-- ============================================================

-- Countries
insert into public.countries (id, name, emoji, color, image_key, description, lat, lng, sort_order) values
  ('russia',  'Russia',  '🇷🇺', 'story-lavender', 'germany',  'A vast land of deep forests, long winters, and magical folk tales — home to fearsome witches, firebirds, and brave heroes.',                              61.5240, 105.3188, 15),
  ('norway',  'Norway',  '🇳🇴', 'story-sky',      'uk',       'A land of fjords, northern lights, and ancient Norse myths where gods, giants, and trolls shaped the very world.',                                         60.4720,   8.4689, 16),
  ('iran',    'Iran',    '🇮🇷', 'story-warm',     'india',    'Ancient Persia — birthplace of epic poetry, mystical wisdom, and the greatest storyteller in history: Scheherazade.',                                       32.4279,  53.6880, 17)
on conflict (id) do nothing;

-- Stories — Russia
insert into public.stories (id, country_id, title, summary, origin, emoji, moral, illustration_key, sort_order) values
  ('baba-yaga', 'russia', 'Baba Yaga',
   'Deep in the dark Russian forest lives Baba Yaga — a terrifying witch who flies in a mortar and pestle and lives in a hut that stands on chicken legs. She is a test for all who seek her: the foolish she eats, the brave and clever she helps. Her tales have haunted Russian children for centuries and inspired some of the world''s greatest fantasy writing.',
   'Russia (Ancient Slavic)', '🏚️', 'Courage and cleverness can turn even the most fearsome encounter into a blessing.', 'https://picsum.photos/seed/babayaga/800/450', 1),

  ('firebird', 'russia', 'The Firebird',
   'A luminous bird of blazing light steals golden apples from a tsar''s garden. When the tsar''s youngest son Ivan sets out to catch it, he is drawn into a magical world of impossible tasks, enchanted horses, and the beautiful Tsarevna. With wisdom and a loyal horse by his side, Ivan must outwit the immortal Koschei — a sorcerer who cannot die because he has hidden his soul outside his body.',
   'Russia (Ancient)', '🔥', 'Even the smallest and least expected hero can achieve the impossible.', 'https://picsum.photos/seed/firebird/800/450', 2)
on conflict (id) do nothing;

-- Stories — Norway
insert into public.stories (id, country_id, title, summary, origin, emoji, moral, illustration_key, sort_order) values
  ('norse-mythology', 'norway', 'Norse Mythology',
   'In the beginning there was nothing but ice and fire — and from their meeting, the first giants were born. Odin, the one-eyed king of the gods, sacrificed himself on the world tree Yggdrasil to gain the secret of the runes. His son Thor swings the mighty hammer Mjölnir to protect humanity from giants. And Loki, the trickster, causes chaos and laughter in equal measure across the nine worlds.',
   'Norse / Scandinavia (Ancient)', '⚡', 'Wisdom requires sacrifice, and even the greatest gods have weaknesses.', 'https://picsum.photos/seed/norsemyth/800/450', 1),

  ('norway-trolls', 'norway', 'Trolls of Norway',
   'Norwegian trolls are unlike any other creatures in folklore — enormous, slow-witted, and dangerous. They lurk under bridges demanding tolls, guard mountains full of treasure, and turn to stone if caught in sunlight. But clever farmers, youngest sons, and quick-thinking goats have outsmarted them for centuries in tales collected by Asbjørnsen and Moe, Norway''s great storytelling duo.',
   'Norway (Ancient folk tradition)', '🧌', 'Wits and courage will always outwit brute strength.', 'https://picsum.photos/seed/norwaytrolls/800/450', 2)
on conflict (id) do nothing;

-- Stories — Iran
insert into public.stories (id, country_id, title, summary, origin, emoji, moral, illustration_key, sort_order) values
  ('shahnameh', 'iran', 'Shahnameh — The Book of Kings',
   'Written by the poet Ferdowsi over 30 years, the Shahnameh is the longest epic poem ever written by a single person — over 60,000 verses! It tells the history of Persia from the creation of the world to the Arab conquest, full of mythical heroes, fire-worshipping kings, dragons, and the greatest tragic duel in all literature: the warrior Rostam who unknowingly fights and kills his own son Sohrab.',
   'Persia / Iran (~1000 CE)', '👑', 'Even the greatest heroes are bound by fate — wisdom lies in how we face it.', 'https://picsum.photos/seed/shahnameh/800/450', 1),

  ('thousand-nights', 'iran', 'One Thousand and One Nights',
   'A cruel king swore to marry a new woman every night and execute her at dawn — until the brilliant Scheherazade volunteered to be his bride. Each night she told him a story so captivating that he could not bear to kill her before hearing the ending. Night after night, story inside story inside story, she wove tales of Sinbad the Sailor, Aladdin, Ali Baba, and countless others — until one thousand and one nights had passed and the king''s heart was changed forever.',
   'Persia / Arabia (~9th century CE)', '🌙', 'A story told well is the most powerful force in the world.', 'https://picsum.photos/seed/thousandnights/800/450', 2)
on conflict (id) do nothing;

-- Authors — Russia
insert into public.authors (id, country_id, name, bio, emoji, famous_books, birth_year, sort_order) values
  ('leo-tolstoy', 'russia', 'Leo Tolstoy',
   'One of the greatest novelists in all of history, he wrote War and Peace and Anna Karenina — but also wrote beautiful short stories and fables for children and peasants. He believed that simple people often understood life better than the rich and powerful, and his folk-tale style stories carry deep moral wisdom.',
   '📖', array['War and Peace', 'Anna Karenina', 'The Death of Ivan Ilyich', 'Childhood', 'Fables and Folk Tales'], '1828', 1),

  ('alexander-pushkin', 'russia', 'Alexander Pushkin',
   'Russia''s most beloved poet and storyteller, often called the father of modern Russian literature. He retold ancient Russian folk tales in magnificent verse — including The Tale of Tsar Saltan and The Tale of the Fisherman and the Fish. His words gave Russian fairy tales an immortal literary form that still enchants readers today.',
   '🪶', array['The Tale of Tsar Saltan', 'Ruslan and Ludmila', 'The Tale of the Fisherman and the Fish', 'Eugene Onegin'], '1799', 2)
on conflict (id) do nothing;

-- Authors — Norway
insert into public.authors (id, country_id, name, bio, emoji, famous_books, birth_year, sort_order) values
  ('henrik-ibsen', 'norway', 'Henrik Ibsen',
   'Norway''s greatest playwright, whose works shook the foundations of European theatre. His play Peer Gynt, based on Norwegian folk tales, features trolls, mountain spirits, and a restless hero searching for his true self. Often called the father of modern drama, he believed stories should ask difficult questions about how people really live.',
   '🎭', array['Peer Gynt', 'A Doll''s House', 'Hedda Gabler', 'The Wild Duck', 'Ghosts'], '1828', 1),

  ('asbjornsen-moe', 'norway', 'Asbjørnsen & Moe',
   'Peter Christen Asbjørnsen and Jørgen Moe were Norway''s answer to the Brothers Grimm. They travelled across Norway in the 1830s and 40s collecting folk tales from farmers and fishermen, preserving stories about trolls, princesses, and clever youngest sons that would otherwise have been lost. Their collection is the foundation of Norwegian folk literature.',
   '🪵', array['Norwegian Folk Tales', 'The Three Billy Goats Gruff', 'East of the Sun and West of the Moon', 'Boots and His Brothers'], '1812 & 1813', 2)
on conflict (id) do nothing;

-- Authors — Iran
insert into public.authors (id, country_id, name, bio, emoji, famous_books, birth_year, sort_order) values
  ('rumi', 'iran', 'Rumi',
   'Jalal ad-Din Rumi was a 13th-century Persian poet whose verses on love, loss, and the search for God have made him one of the best-selling poets in the world today. His masterwork the Masnavi — six books of spiritual poetry told through stories and fables — is called ''the Quran in Persian.'' His words leap across centuries to touch the hearts of people of every background.',
   '🌹', array['The Masnavi', 'Divan-e Shams-e Tabrizi', 'Fihi Ma Fihi'], '1207', 1),

  ('ferdowsi', 'iran', 'Ferdowsi',
   'Hakim Abu''l-Qasim Ferdowsi dedicated thirty years of his life to writing the Shahnameh — the Book of Kings — to preserve the Persian language and history at a time when it was under threat. He received almost nothing for his work, yet his poem survived for over a thousand years and is still recited from memory across Iran, Afghanistan, and Tajikistan. A true hero of words.',
   '📜', array['Shahnameh (The Book of Kings)'], '940', 2)
on conflict (id) do nothing;
