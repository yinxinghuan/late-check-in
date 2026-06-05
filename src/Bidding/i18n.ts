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
    'choice.pick_up_phone':   'pick up the room phone',
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
    'ending.AAB.tagline': 'You turned her to face you. There was no face — and it was already standing across the room, watching.',
    'ending.ABA.title':   'the smooth reflection',
    'ending.ABA.tagline': 'You looked to the mirror. It kept her body and gave back a blank, faceless oval.',
    'ending.ABB.title':   'the second guest',
    'ending.ABB.tagline': 'You kept watching the glass. A second her stepped out of it. Now there are two — both watching you, neither leaving.',
    'ending.BAA.title':   'the window',
    'ending.BAA.tagline': 'You set the phone down and crossed to her at the glass. Forty floors down, the city held still — just for the two of you.',
    'ending.BAB.title':   'the wake-up call',
    'ending.BAB.tagline': 'You hung up. It rang again. The face in the window was still screaming when you answered.',
    'ending.BBA.title':   'the hand from the wall',
    'ending.BBA.tagline': 'A hand reached out of the crack in the wall. You took it. On the other side: the same room, and her, already waiting.',
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
    'intro.hint':    'You check in past midnight. The front desk is empty; a key sits waiting on the counter. The room was not supposed to have anyone in it. Five minutes — your call. Some doors open soft. Some open wrong.',
    'intro.cta':     'tap to check in',
  },

  zh: {
    'choice.step_to_her':     '朝她走过去',
    'choice.pick_up_phone':   '拿起房间电话',
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
    'ending.AAB.tagline': '你把她转过来面对你。那里没有脸 — 而它早已站在房间另一头, 看着你。',
    'ending.ABA.title':   '光滑的倒影',
    'ending.ABA.tagline': '你看向镜子。它留下了她的身体, 还回来一张空白的、没有脸的椭圆。',
    'ending.ABB.title':   '第二位客人',
    'ending.ABB.tagline': '你一直盯着那面玻璃。第二个她从里面走了出来。现在有两个 — 都在看你, 谁都不走。',
    'ending.BAA.title':   '窗边',
    'ending.BAA.tagline': '你放下电话, 走到窗边她身旁。四十层楼下, 整座城静止了 — 只为你们两个。',
    'ending.BAB.title':   '叫醒服务',
    'ending.BAB.tagline': '你挂了。它又响了。你接起来时, 窗里那张脸还在尖叫。',
    'ending.BBA.title':   '墙里伸出的手',
    'ending.BBA.tagline': '一只手从墙上的裂缝里伸出来。你握住了它。另一头: 是同一间屋子, 而她, 早已在里面等着。',
    'ending.BBB.title':   '每一间都是这一间',
    'ending.BBB.tagline': '今晚你会再次入住这里。明晚也是。还有她, 和她, 和她。',

    'ui.replay':         '再住一晚',
    'ui.ending_label':   '结局',
    'ui.sensual_label':  '沉沦',
    'ui.horror_label':   '不对劲',
    'ui.brand_sig':      'alteru · after dark',

    // ── Intro ──────────────────────────────────────────────────────────────
    'intro.title':   '深夜入住',
    'intro.hint':    '你在午夜后办理入住。前台空无一人, 钥匙搁在台面上等你。这房间本不该有人。五分钟, 你来决定。有的门通向温柔, 有的门, 不对劲。',
    'intro.cta':     '点屏幕入住',
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE][key] ?? STRINGS.en[key] ?? key;
}

export function locale(): Locale { return LOCALE; }
