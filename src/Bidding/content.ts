// Late Check-in — node tree (15 nodes, 8 endings).
//
//   root  (hotel room doorway POV, a woman stands in the dark)
//   ├── A "step toward her"          ← approach route
//   │   ├── AA "touch her shoulder"
//   │   │   ├── AAA "kiss her"             → 💖 sensual
//   │   │   └── AAB "turn her face"        → 👹 horror
//   │   └── AB "step back"
//   │       ├── ABA "to the mirror"        → 👹 horror
//   │       └── ABB "watch the glass"      → 💖 sensual
//   └── B "pick up the phone"        ← distance route
//       ├── BA "stay on the line"
//       │   ├── BAA "to the window"        → 💖 sensual
//       │   └── BAB "hang up"              → 👹 horror
//       └── BB "turn to the wall"
//           ├── BBA "take the hand"        → 👹 horror
//           └── BBB "step through"         → 👹 horror
//
// Register: FULL SURREAL — every horror beat is an unambiguous supernatural
// manifestation (no realist ambiguity), per the register-single rule.
//
// Pin coords are in IMAGE-percent (0-100) relative to the freeze frame.
// Engine maps to viewport via `-13 + p × 1.26` for 3:4 hero on 9:19+ phone.

import type { EndingType, NodeDef, ChoiceDef } from './types';

export const ROOT_ID = 'root';

// Each video's first frame visually equals its parent's last frame (chain
// continuity), so we use the parent's end-frame as the <video poster=...> for
// each non-root node. This prevents the brief "wrong frame" flash before the
// video starts loading.
function parentOf(id: string): string | null {
  if (id === 'root') return null;
  if (id.length === 1) return 'root';   // A, B → root
  return id.slice(0, -1);                // AA → A, AAA → AA, etc.
}

function posterFor(id: string): string {
  const p = parentOf(id);
  return p ? `${p}_end.png` : 'root_start.png';
}

function branch(id: string, a: ChoiceDef, b: ChoiceDef): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    choices: [a, b],
  };
}

function ending(id: string, type: EndingType): NodeDef {
  return {
    id,
    video: `${id}.mp4`,
    posterFrame: posterFor(id),
    endFrame: `${id}_end.png`,
    isEnding: true,
    endingType: type,
    endingTitleKey: `ending.${id}.title`,
    endingTaglineKey: `ending.${id}.tagline`,
  };
}

// Helper: ChoiceDef factory with pin coords (image-percent).
const ch = (labelKey: string, nextId: string, pinX: number, pinY: number): ChoiceDef =>
  ({ labelKey, nextId, pinX, pinY });

export const NODES: Record<string, NodeDef> = {
  // root: doorway POV into the dark room, she stands at the foot of the bed.
  // A pin = her body (image-center-right). B pin = the phone on the nightstand (image-left).
  root: branch('root',
    ch('choice.step_to_her',    'A', 56, 52),
    ch('choice.pick_up_phone',  'B', 16, 46),
  ),

  // A: She's near now, facing you. AA = touch her shoulder. AB = step back.
  A: branch('A',
    ch('choice.touch_shoulder', 'AA', 52, 42),
    ch('choice.step_back',      'AB', 22, 50),
  ),

  // B: Phone to your ear, her shape still across the room. BA = stay on the line.
  // BB = turn to the wall (away from her).
  B: branch('B',
    ch('choice.stay_on_line',   'BA', 40, 72),
    ch('choice.turn_to_wall',   'BB', 55, 28),
  ),

  // AA: Close, your hand on her. AAA = kiss her. AAB = turn her face to you.
  AA: branch('AA',
    ch('choice.kiss_her',       'AAA', 45, 50),
    ch('choice.turn_her_face',  'AAB', 40, 30),
  ),

  // AB: Backed off, she hasn't moved. ABA = look to the mirror. ABB = keep watching the glass.
  AB: branch('AB',
    ch('choice.to_the_mirror',  'ABA', 62, 32),
    ch('choice.watch_glass',    'ABB', 60, 50),
  ),

  // BA: Still on the call, her voice in your ear. BAA = walk to the window. BAB = hang up.
  BA: branch('BA',
    ch('choice.to_the_window',  'BAA', 72, 40),
    ch('choice.hang_up',        'BAB', 62, 78),
  ),

  // BB: Facing the wall, the room behind you. BBA = take the hand on your shoulder.
  // BBB = step through the crack in the wall.
  BB: branch('BB',
    ch('choice.take_the_hand',  'BBA', 62, 32),
    ch('choice.step_through',   'BBB', 40, 28),
  ),

  // Layer 3 — endings (8): 3 sensual / 5 horror.
  AAA: ending('AAA', 'sensual'),
  AAB: ending('AAB', 'horror'),
  ABA: ending('ABA', 'horror'),
  ABB: ending('ABB', 'sensual'),
  BAA: ending('BAA', 'sensual'),
  BAB: ending('BAB', 'horror'),
  BBA: ending('BBA', 'horror'),
  BBB: ending('BBB', 'horror'),
};
