// =====================================================================
//  shots.js — which picture each shot uses, how a shot is drawn (world, rider, HUD), and the cameras.
//  Every camera is centred on the spark so it holds its screen spot while the world changes around it.
// =====================================================================
const PLACES = {
  kl: (s) => placeKl(s, false), klEnd: (s) => placeNyhavn(s, true), paddy: placePaddy, bangkok: placeBangkok, karst: placeKarst, vnhills: placeVnHills,
  hatyai: placeHatYai, vietri: placeVietTri, kunming: placeKunming, chengdu: placeChengdu, dujiangyan: placeDujiangyan, hami: placeHami,
  terraces: placeTerraces, danxia: placeDanxia, tianshan: placeTianShan, almaty: placeAlmaty, bishkek: placeBishkek, registan: placeRegistan, khiva: placeKhiva,
  ferryCaspian: placeFerryCaspian, baku: placeBaku, tbilisi: placeTbilisi, trabzon: placeTrabzon, cappadocia: placeCappadocia, izmir: placeIzmir, ferryChios: placeFerryChios,
  athens: placeAthens, ferryPatras: placeFerryPatras, rome: placeRome, florence: placeFlorence, venice: placeVenice, dolomites: placeDolomites, innsbruck: placeInnsbruck,
  munich: placeMunich, nuremberg: placeNuremberg, village: placeVillage, heath: placeHeath, lubeck: placeLubeck, kosel: placeKosel, ferryBaltic: placeFerryBaltic,
  middelfart: placeMiddelfart, dusk: placeDusk, sign: placeSign, nyhavn: placeNyhavn, map: placeMap,
};
const NO_RIDER = { map: true };
function moodOf(s) {
  if (s.kind === 'nyhavn') return TT < s.t0 + 0.7 ? 'wow' : 'smile';
  if (s.kind === 'klEnd') return 'smile';
  return 'smile';
}
function drawShot(s) {
  const fg = PLACES[s.kind](s);
  if (!NO_RIDER[s.kind]) riderPerson({ ...s, mood: moodOf(s) });
  if (typeof fg === 'function') fg();
  hud(s);
}

// ---- cameras: every shot is a static framing centred on the hero (no push-in); a few places are framed closer for scale
const HERO = [HSX, HSY + 90];
TIMELINE.anchor = { t0: 6 * PLACE, t1: T_SIGN, x: HSX, y: HSY, tolerance: 40, minShare: 0.95 };   // the hero's face holds its screen spot
const CAMS = { wide: null, close: { z: 1.5, p: HERO, to: HERO }, xclose: { z: 2.2, p: HERO, to: HERO }, pannier: { z: 1.75, p: [540, 590], to: [900, 520] } };   // pannier: an extreme close-up on the 16 stickers and the grin
function pieceCam(era) {
  const s = SD[era];
  return s.cam && CAMS[s.cam] ? camOf(CAMS[s.cam]) : null;
}
const ERA_BG = SD.map(() => '#efe5cf');
const BRIDGES = [];

