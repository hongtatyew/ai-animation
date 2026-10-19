# Kuala Lumpur to Copenhagen, by bike — brief

- **Spec:** 72.5s, 16:9 (1920x1080), 24fps, 120 BPM, cut paper, no audio (silent; export with `--no-audio`), no voice.
- **Format:** F5 fixed-hero journey (proven). The rider holds his screen spot (his face at about 657, 416); the world cuts around him.
- **Hero:** the rider himself, drawn from the user's photo (`image.png`): black vented helmet, dark glasses, a big grin, a cobalt jacket, a loaded bike with black bags and a blue bungee.
- **Device:** a sticker lands on his rear pannier for every country completed: none at the start in Kuala Lumpur, 15 on the Danish approach, the 16th on arrival in Copenhagen.
- **Colour rule:** cobalt (`#2447c4`) = the rider only (jacket, bungee cords, progress marker). The red thread and red dots on the passport band = the ridden path.
- **Beat:** every place is exactly 1.5s (3 beats, `PLACE` in `src/head.html`), 41 places, 0–61.5s, every cut on the beat. No camera zoom or push-in: shots are static, a few framed closer. Some places are framed as close-ups (the ferries, Khiva, Brixen, Kosel) for scale variety; the rider stays pinned.
- **Source of the route:** the rider's own log (`route.json`, 192 stops, 31 Dec 2023 – 30 Aug 2024). Day number counts 31 Dec 2023 as DAY 1 (30 Aug 2024 = DAY 244). Three German stops were dropped to fit one place per second (Ilmenau, Sangerhausen, Helmstedt).

## Beats

| time | beat | what | sound plan |
|---|---|---|---|
| 0–61.5 | the ride, one place per 1.5s | Kuala Lumpur, Sekinchan (first ride), Hat Yai, Bangkok, Thakhek, Viet Tri, Lao Cai, Yuanyang, Kunming, Chengdu, Dujiangyan, Zhangye, Hami, Ürümqi, Almaty, Bishkek, Samarkand, Khiva, Aktau ferry, Baku, Tbilisi, Trabzon, Göreme, Izmir, Chios ferry, Athens, Patras ferry, Rome, Florence, Venice, Brixen, Innsbruck, Munich, Nuremberg, Bad Staffelstein, Bad Bevensen, Lübeck, Kosel, Baltic ferry, Middelfart, Nyborg at dusk. A pluck and a sticker on every border. | a flat groove, a rising pluck per country, one hard stop before 36.0 |
| 36–38 | silence | the dawn signpost "København", counter frozen, the sticker pannier one short | nothing: a hard stop, a faint room tone at most |
| 38–41 | payoff | Nyhavn, the 16th sticker lands, DAY 244, confetti | the loudest hit of the piece (stab + sub), then a flat chord |
| 41–44 | the whole thread | the Eurasia map; the day counter replays 1 to 244 while the red thread draws from KL to Copenhagen | decay |
| 44–45 | the end is the start, changed | a close-up on the sticker pannier and the grin, Nyhavn behind; loops to KL dawn | fading |

## Claims on screen, and sources

| claim | source |
|---|---|
| 16 countries visited; 244 days (31 Dec 2023 – 30 Aug 2024 inclusive); each shot's place, date and day number | the rider's own log (`route.json`) |
| Sekinchan is a rice-paddy area | Wikipedia, Sekinchan |
| Yuanyang County has the Honghe Hani rice terraces | Wikipedia, Honghe Hani Rice Terraces |
| Zhangye Danxia is known for striped coloured rock | Wikipedia, Zhangye National Geopark |
| Nyhavn: brightly coloured townhouses on a canal | Wikipedia, Nyhavn |
| Aktau – Baku scheduled ferries exist (shown as a ferry deck) | Wikipedia, Caspian Sea → Transportation |

Pictures of other places (Petronas Towers, Registan, Flame Towers, Colosseum, Duomo, Holstentor, ...) are drawn landmarks with no text claim. The sea crossings (Caspian, Çeşme to Chios, Patras to Italy, the Baltic) are drawn as ferries because the log has no road leg for them; the rider has not confirmed the vessel types.
