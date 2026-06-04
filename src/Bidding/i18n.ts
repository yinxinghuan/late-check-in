// Late Check-in — minimal i18n (en / zh). Choice labels + 8 endings only.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'latecheckin_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    // ── Choices ────────────────────────────────────────────────────────────
    'choice.step_to_her':     'step toward her',
    'choice.pick_up_phone':   'pick up the phone',
    'choice.touch_shoulder':  'touch her shoulder',
    'choice.step_back':       'step back',
    'choice.stay_on_line':    'stay on the line',
    'choice.turn_to_wall':    'turn to the wall',
    'choice.kiss_her':        'kiss her',
    'choice.turn_her_face':   'turn her face to you',
    'choice.to_the_mirror':   'look to the mirror',
    'choice.watch_glass':     'keep watching the glass',
    'choice.to_the_window':   'walk to the window',
    'choice.hang_up':         'hang up',
    'choice.take_the_hand':   'take the hand',
    'choice.step_through':    'step through the crack',

    // ── Endings ────────────────────────────────────────────────────────────
    'ending.AAA.title':   'checked in',
    'ending.AAA.tagline': 'Her lips are warm. You never gave the front desk your name — and you never will.',
    'ending.AAB.title':   'no face to check out',
    'ending.AAB.tagline': 'You lifted her face like a mask. Behind it, the room kept smiling.',
    'ending.ABA.title':   'the smooth reflection',
    'ending.ABA.tagline': 'The mirror kept her body and gave back no face.',
    'ending.ABB.title':   'the second guest',
    'ending.ABB.tagline': 'Two of her in the glass, both watching you, neither in any hurry to leave.',
    'ending.BAA.title':   'the one at the window',
    'ending.BAA.tagline': 'Her voice in the receiver, her warmth already at the glass — and the city below holds its breath for you.',
    'ending.BAB.title':   'the wake-up call',
    'ending.BAB.tagline': 'You hung up. It rang again. The face in the window was still screaming when you answered.',
    'ending.BBA.title':   'the room behind the room',
    'ending.BBA.tagline': 'You took the hand on your shoulder. Through the crack, the same room — and her, already waiting in it.',
    'ending.BBB.title':   'every room is this room',
    'ending.BBB.tagline': 'You will check in here again tonight. And tomorrow. And her, and her, and her.',

    // ── UI ─────────────────────────────────────────────────────────────────
    'ui.replay':         'check in again',
    'ui.ending_label':   'ending',
    'ui.sensual_label':  'sensual',
    'ui.horror_label':   'wrong',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   'late check-in',
    'intro.hint':    'You check in past midnight. The room was supposed to be empty. Five minutes, your call. Some doors open soft. Some open wrong.',
    'intro.cta':     'tap to check in',
  },

  zh: {
    'choice.step_to_her':     '朝她走过去',
    'choice.pick_up_phone':   '拿起电话',
    'choice.touch_shoulder':  '触她的肩',
    'choice.step_back':       '退后一步',
    'choice.stay_on_line':    '别挂, 继续听',
    'choice.turn_to_wall':    '转向墙壁',
    'choice.kiss_her':        '吻她',
    'choice.turn_her_face':   '把她的脸转过来',
    'choice.to_the_mirror':   '看向镜子',
    'choice.watch_glass':     '继续盯着那面玻璃',
    'choice.to_the_window':   '走向窗边',
    'choice.hang_up':         '挂掉电话',
    'choice.take_the_hand':   '握住那只手',
    'choice.step_through':    '钻进墙上的裂缝',

    'ending.AAA.title':   '已入住',
    'ending.AAA.tagline': '她的唇是温的。你从没把名字告诉前台 — 以后也不会了。',
    'ending.AAB.title':   '无脸退房',
    'ending.AAB.tagline': '你像揭面具一样掀起她的脸。面具后面, 整间屋子还在笑。',
    'ending.ABA.title':   '光滑的倒影',
    'ending.ABA.tagline': '镜子留下了她的身体, 还回来一张没有脸的倒影。',
    'ending.ABB.title':   '第二位客人',
    'ending.ABB.tagline': '玻璃里有两个她, 都在看你, 谁都不急着离开。',
    'ending.BAA.title':   '窗边的那一个',
    'ending.BAA.tagline': '她的声音在听筒里, 她的体温已经在窗边 — 楼下整座城都为你屏住了呼吸。',
    'ending.BAB.title':   '叫醒服务',
    'ending.BAB.tagline': '你挂了。它又响了。你接起来时, 窗里那张脸还在尖叫。',
    'ending.BBA.title':   '房间后面的房间',
    'ending.BBA.tagline': '你握住了肩上那只手。裂缝那头, 是同一间屋子 — 而她, 早已在里面等着。',
    'ending.BBB.title':   '每一间都是这一间',
    'ending.BBB.tagline': '今晚你会再次入住这里。明晚也是。还有她, 和她, 和她。',

    'ui.replay':         '再住一晚',
    'ui.ending_label':   '结局',
    'ui.sensual_label':  '沉沦',
    'ui.horror_label':   '不对劲',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   '深夜入住',
    'intro.hint':    '你在午夜后办理入住。这房间本该是空的。五分钟, 你来决定。有的门通向温柔, 有的门, 不对劲。',
    'intro.cta':     '点屏幕入住',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE][key] ?? STRINGS.en[key] ?? key;
}

export function locale(): Locale { return LOCALE; }
