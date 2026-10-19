# LOG — kl-cph

## Look check (step 2)
- 16:9 head, one scene file per region (`src/places-*.js`), the rider and HUD in `src/rider.js` and `src/hero-person.js`, shot table in `src/head.html`.
- Frames were reviewed through image-capable subagents (the main session's image budget runs out fast), several rounds. Fixed: suns and clouds hidden under tags, trees crowding the rear wheel, water drawn under the ground, bunting through the rider, snow caps floating off peaks, a flat Colosseum, a Bangkok roof that read as a tent, a palm in Venice, the Eurasia map crossed by the HUD.
- User feedback: (1) hero changed to the rider himself from `image.png` (cobalt jacket, black helmet, glasses, grin, black bags with a blue bungee). Previewed, approved, switched on; the spark is gone. (2) consistent beat: every place is exactly 1.0s (2 beats), 36 places, every cut on the beat. The 0.25s rush, the 16th flicker and the 6s dusk brake were removed; Ilmenau, Sangerhausen and Helmstedt were dropped to fit.
- Device now: a sticker lands on the rear pannier for every country completed (none at the start, 16 on arrival). Cobalt is the rider's colour only.

## Storyboard (step 3), round 1
- 20 panels. Redrawn after review: dawn signpost (plum sky, pink/peach bands, lighter ground), Baku (sand ground, mauve hills), Middelfart (lower bridge trusses), Yuanyang (yellow-green ground), ferry deck (darker), closing frame (a close-up on the pannier stickers instead of repeating the payoff), seven shots reframed as close-ups for scale variety.
- Map shot: the day counter replays 1 to 244 while the red thread draws (so a panel mid-draw shows e.g. DAY 133).

## Not yet done
- The score (`src/score.js` is a placeholder), export, `review.mjs`, contact sheets.
- Fonts: the tags use "Ink Free" on Windows; check the export machine has it.

## Weakest shots so far
- Dawn signpost (rider contrast against a dark sky), the ferry close-ups (pale sea), the map (sparse by nature).

## User feedback, round 2
- Removed the Puchong shot. Removed the slow push-in zoom (cameras are static; the few close-up framings stay as static cuts).
- Slower pace: 45s became 63.5s. Every place is 1.5s (`PLACE`), 35 places to 52.5s, then silence 2s, payoff 3s, map 4s, closing frame 2s. All times derive from `PLACE`, so changing it re-times everything.
- `src/head.html` and `src/shots.js` had gone missing from disk; restored from the built `index.html`.

## User feedback, round 3
- Added six stops from the rider's log: Hat Yai (6 Jan), Viet Tri (1 Feb), Kunming (9 Feb), Chengdu (18 Mar), Dujiangyan (21 Mar), Hami (13 Apr). Scenes in `src/places-more.js` (shophouses and lanterns, pagoda and sampan, lake and twin pagodas, panda and bamboo, suspension bridge and water wheel, melon stall and camel).
- 41 places now; 72.5s (61.5s of places, then silence 2s, payoff 3s, map 4s, closing 2s).
- Two image-subagent review rounds on the new scenes; floating pagodas grounded, flag brought inside the frame, palm and pine removed where they sat on water or crowded the wheel.

## User feedback, round 4
- Dolomites: the existing mountain shot (was tagged just "Brixen") is now tagged "Brixen, Dolomites". The log has no stop named Dolomites; Brixen (6 Aug) is the closest.
- Audio dropped: `src/score.js` is empty and the piece is exported with `--no-audio`. The sound notes in the storyboard and the brief's sound plan no longer apply; review's SOUND checks will not apply.
