(() => {
  "use strict";

  const root = document.documentElement;

  // Copy

  // Bump when phone screens are re-shot, so browsers fetch the new images.
  const SCREENS_VERSION = 2;
  const screenSrc = (key, lang) => `assets/screens/${key}-${lang}.webp?v=${SCREENS_VERSION}`;

  const I18N = {
    en: {
      "meta.title": "Airpost: Letters worth waiting for",
      "meta.description": "Air mail for pen pals around the world. Airpost for iPhone and iPad.",
      "hero.title": "Letters worth <br>waiting for.",
      "hero.body": "Air mail for pen pals around the world.",
      "hero.hint": "Scroll",
      "write.title": "Handwritten letters.",
      "deco.title": "Which stamp this time?",
      "seal.title": "Sealed with wax.",
      "board.title": "Now boarding.",
      "flight.title": "In the sky, right now.",
      "arrive.title": "Your letter has landed.",
      "nav.friends": "Friends",
      "friends.title": "Make friends around the world.",
      "friends.body": "Say hi in any language.",
      "nav.faq": "FAQ",
      "m.0": "Messages arrive in a second.",
      "m.1": "Letters take as long as a real flight.",
      "m.2": "That's what makes them worth the wait.",
      "col.title": "Collect them all.",
      "col.body": "Stamps of cities, skies, animals and food. Wax seals in every color.",
      "chip.music": "🎵 Music",
      "chip.photo": "📷 Photography",
      "chip.travel": "✈️ Travel",
      "nav.find": "Pen pals",
      "nav.decorate": "Decorate",
      "find.title": "Find your kind of pen pal.",
      "find.public.title": "Public letters",
      "find.public.body": "Reply to open letters from all over the world.",
      "find.map.title": "Map",
      "find.map.body": "Trade letters with people from every corner of the map.",
      "find.interests.title": "Interests",
      "find.interests.body": "Find people who love the same things you do.",
      "find.languages.title": "Languages",
      "find.languages.body": "Learn each other's language and culture through heartfelt letters.",
      "chip.coffee": "☕ Coffee",
      "track.title": "Where's my letter?",
      "track.body": "Follow your letter's journey in real time.",
      "track.live": "In flight",
      "dec.title": "Make every letter yours.",
      "dec.fonts.title": "Fonts",
      "dec.stamps.title": "Stamps & seals",
      "dec.drawing.title": "Drawings",
      "dec.planes.title": "Planes",
      "faq.1.q": "What is Airpost?",
      "faq.1.a": "An app for writing to pen pals around the world. Every letter boards a plane, and arrives when it lands.",
      "faq.2.q": "How long does a letter take?",
      "faq.2.a": "It depends on the distance between your airports and the plane you choose. A nearby city takes minutes. The other side of the world takes about half a day.",
      "faq.3.q": "Is it safe to write to strangers?",
      "faq.3.a": "You can block anyone and report any letter from inside the app. Airpost is for people 18 and older.",
      "faq.4.q": "Can my pen pal see where I live?",
      "faq.4.a": "They see your home airport, nothing more. Airpost never stores your exact coordinates.",
      "close.title": "Someone is waiting<br>for your letter.",
      "close.body": "Airpost for iPhone and iPad.",
      "foot.contact": "Contact",
      "faq.note": "Anything else? Email us.",
      "store.short": "Coming soon",
      "store.long": "Coming soon on the App Store",
      "store.platforms": "iPhone · iPad",
      "t.seoul": "Seoul",
      "t.sydney": "Sydney",
      "t.dep": "Departs",
      "t.arr": "Arrives",
      "t.time": "Flight time",
      "t.dist": "Distance",
      "letter.0": "Hi Ruby,",
      "letter.1": "How have you been?",
      "letter.2": "Seoul got chilly this week,",
      "letter.3": "so I bought my first",
      "letter.4": "fish-shaped pastry of fall.",
      "letter.5": "Tell me about your town!",
      "letter.6": "Love, Jiwoo",
      "foot.tag": "Letters worth waiting for.",
      "foot.privacy": "Privacy Policy",
      "foot.terms": "Terms of Use",
      "href.privacy": "https://seungwoo313.github.io/airpost-legal/privacy-en/",
      "href.terms": "https://seungwoo313.github.io/airpost-legal/terms-en/",
      status: ["READY", "WRITING", "DECORATING", "SEALED", "BOARDING", "IN FLIGHT", "ARRIVED"],
    },
    ko: {
      "meta.title": "Airpost: 기다릴수록 설레는 편지",
      "meta.description": "세계 곳곳의 펜팔과 주고받는 항공우편. iPhone과 iPad용 Airpost.",
      "hero.title": "기다릴수록 <br>설레는 편지",
      "hero.body": "세계 곳곳의 펜팔과 주고받는 항공우편",
      "hero.hint": "스크롤",
      "write.title": "손글씨로 쓰는 편지",
      "deco.title": "오늘은 어떤 우표를 붙일까",
      "seal.title": "실링 왁스로 마무리",
      "board.title": "편지가 탑승합니다",
      "flight.title": "지금도 하늘을 나는 중",
      "arrive.title": "편지가 도착했습니다",
      "nav.friends": "친구",
      "friends.title": "세계 곳곳에 친구가 생깁니다",
      "friends.body": "인사는 각자의 언어로",
      "nav.faq": "FAQ",
      "m.0": "메시지는 1초면 도착합니다.",
      "m.1": "편지는 실제 비행시간만큼 날아갑니다.",
      "m.2": "그래서 더 기다려집니다.",
      "col.title": "모으는 재미",
      "col.body": "도시, 하늘, 동물, 음식을 담은 우표와 색색의 실링 왁스",
      "chip.music": "🎵 음악",
      "chip.photo": "📷 사진",
      "chip.travel": "✈️ 여행",
      "nav.find": "펜팔 찾기",
      "nav.decorate": "꾸미기",
      "find.title": "나와 잘 맞는 펜팔 찾기",
      "find.public.title": "공개편지",
      "find.public.body": "세계 곳곳에서 올라온 공개편지에 답장해보세요.",
      "find.map.title": "지도",
      "find.map.body": "다양한 지역에서 온 사람들과 편지를 나눠봐요.",
      "find.interests.title": "관심사",
      "find.interests.body": "좋아하는 것이 같은 사람을 찾아보세요.",
      "find.languages.title": "언어",
      "find.languages.body": "진심 어린 편지를 통해 서로의 언어와 문화를 배워보세요.",
      "chip.coffee": "☕ 커피",
      "track.title": "내 편지, 지금 어디쯤?",
      "track.body": "편지의 이동을 실시간으로 확인하세요.",
      "track.live": "비행 중",
      "dec.title": "내 취향대로 꾸미는 편지",
      "dec.fonts.title": "글씨체",
      "dec.stamps.title": "우표와 실링",
      "dec.drawing.title": "그림",
      "dec.planes.title": "비행기",
      "faq.1.q": "Airpost는 어떤 앱인가요?",
      "faq.1.a": "세계 곳곳의 펜팔과 편지를 주고받는 앱입니다. 보낸 편지는 비행기를 타고 날아가, 착륙할 때 도착합니다.",
      "faq.2.q": "편지는 얼마나 걸려서 도착하나요?",
      "faq.2.a": "두 공항 사이의 거리와 고른 비행기에 따라 달라집니다. 가까운 도시는 몇십 분, 지구 반대편은 반나절쯤 걸립니다.",
      "faq.3.q": "모르는 사람과 편지를 주고받아도 괜찮을까요?",
      "faq.3.a": "앱 안에서 언제든 상대를 차단하고 편지를 신고할 수 있습니다. Airpost는 만 18세 이상이 이용할 수 있습니다.",
      "faq.4.q": "상대가 내 위치를 알 수 있나요?",
      "faq.4.a": "상대에게는 허브 공항만 보입니다. Airpost는 정확한 좌표를 저장하지 않습니다.",
      "close.title": "누군가 내 편지를<br>기다리고 있어요",
      "close.body": "iPhone과 iPad용 Airpost",
      "foot.contact": "문의",
      "faq.note": "더 궁금한 점은 메일로 보내 주세요.",
      "store.short": "출시 예정",
      "store.long": "App Store 출시 예정",
      "store.platforms": "iPhone · iPad",
      "t.seoul": "서울",
      "t.sydney": "시드니",
      "t.dep": "출발",
      "t.arr": "도착",
      "t.time": "비행 시간",
      "t.dist": "거리",
      "letter.0": "Ruby에게,",
      "letter.1": "잘 지내?",
      "letter.2": "여기는 벌써 쌀쌀해졌어.",
      "letter.3": "오늘 퇴근길에 올해 첫",
      "letter.4": "붕어빵을 사 먹었어.",
      "letter.5": "너희 동네 이야기도 들려줘!",
      "letter.6": "지우가",
      "foot.tag": "기다릴수록 설레는 편지",
      "foot.privacy": "개인정보처리방침",
      "foot.terms": "이용약관",
      "href.privacy": "https://seungwoo313.github.io/airpost-legal/privacy/",
      "href.terms": "https://seungwoo313.github.io/airpost-legal/terms/",
      status: ["준비", "작성 중", "꾸미는 중", "봉인 완료", "탑승 수속", "비행 중", "도착"],
    },
  };

  let lang = "en";
  try { lang = localStorage.getItem("airpost.lang") || ""; } catch (_) { lang = ""; }
  if (lang !== "en" && lang !== "ko") {
    lang = (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
  }

  function applyLanguage(next) {
    lang = next;
    const dict = I18N[lang];
    root.lang = lang;
    document.title = dict["meta.title"];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = dict["meta.description"];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value != null) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = dict[el.dataset.i18nHtml];
      if (value != null) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const value = dict[el.dataset.i18nHref];
      if (value) el.href = value;
    });
    document.querySelectorAll(".lang button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    if (typeof syncFindCaption === "function") syncFindCaption();
    document.querySelectorAll("img[data-screen]").forEach((img) => {
      const src = screenSrc(img.dataset.screen, lang);
      if (img.getAttribute("src") !== src) img.setAttribute("src", src);
    });
    try { localStorage.setItem("airpost.lang", lang); } catch (_) { /* per-viewer convenience only */ }
    lastStatus = "";
    layout();
    draw(current);
  }

  document.querySelectorAll(".lang button").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  // Math

  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const seg = (p, a, b) => clamp((p - a) / (b - a));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const easeIn = (t) => t * t * t;
  const bump = (d) => Math.max(0, 1 - Math.abs(d));

  const S = (x, y, r = 0, s = 1, o = 1) => ({ x, y, r, s, o });
  const HIDDEN = S(0, 0, 0, 1, 0);
  const mix = (a, b, t) => S(lerp(a.x, b.x, t), lerp(a.y, b.y, t), lerp(a.r, b.r, t), lerp(a.s, b.s, t), lerp(a.o, b.o, t));

  function local(state, lx, ly) {
    const rad = (state.r * Math.PI) / 180;
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    return { x: state.x + (lx * c - ly * s) * state.s, y: state.y + (lx * s + ly * c) * state.s };
  }

  function hex(color) {
    const n = parseInt(color.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  const rgb = (c) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
  const mixColor = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

  // Elements

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const journey = $("#journey");
  const stage = $(".stage");
  const scene = $(".scene");
  const caps = $$(".cap");
  const board = $(".board");
  const boardFill = $(".b-fill");
  const boardPlane = $(".b-plane");
  const boardValue = $(".b-value");
  const sky = $(".sky");
  const hint = $(".hint");

  const paper = $("#paper");
  const slot = paper.querySelector(".p-slot");
  const lines = Array.from(paper.querySelectorAll(".p-line"));
  const interior = $("#env-interior");
  const body = $("#env-body");
  const flap = $("#env-flap");
  const cassette = $("#cassette");
  const postmark = $("#postmark");
  const ticket = $("#ticket");
  const globe = $("#globe");
  const route = globe.querySelector(".route");
  const stamps = $$(".fan-stamp");
  const seals = $$(".fan-seal");
  const planes = $$(".plane");

  const STAMP_PICK = 5; // koala
  const SEAL_PICK = 4; // lavender butterfly
  const PLANE_PICK = 1; // AP-201

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let u = 6;
  let halfW = 60;
  let halfH = 60;
  let centerY = 0;
  let current = 0;
  let raf = 0;
  let lastStatus = "";
  let lastChapter = -1;
  let routeLength = 0;
  const ENV_H = 41.2;

  function put(el, st, extra = "") {
    if (st.o <= 0.002) {
      if (el._shown !== false) {
        el.style.visibility = "hidden";
        el._shown = false;
      }
      return;
    }
    if (el._shown !== true) {
      el.style.visibility = "visible";
      el._shown = true;
    }
    el.style.transform = `translate3d(${(st.x * u).toFixed(2)}px,${(st.y * u).toFixed(2)}px,0) rotate(${st.r.toFixed(2)}deg) scale(${st.s.toFixed(4)})${extra}`;
    el.style.opacity = st.o >= 0.998 ? "1" : st.o.toFixed(3);
  }

  // Chapters: hero, write, decorate, seal, boarding, flight, arrival

  const CHAPTERS = [0, 0.06, 0.2, 0.395, 0.53, 0.62, 0.86];
  const SETTLE = [0, 0.19, 0.39, 0.528, 0.615, 0.79, 1];
  const chapterAt = (p) => {
    let c = 0;
    for (let i = 0; i < CHAPTERS.length; i += 1) if (p >= CHAPTERS[i]) c = i;
    return c;
  };

  // Route on the globe (SVG units, 512 viewBox).

  const P0 = { x: 212.8, y: 162.4 };
  const PC = { x: 330, y: 260 };
  const P1 = { x: 293.3, y: 427.4 };

  function routeAt(t) {
    const m = 1 - t;
    const x = m * m * P0.x + 2 * m * t * PC.x + t * t * P1.x;
    const y = m * m * P0.y + 2 * m * t * PC.y + t * t * P1.y;
    const dx = 2 * m * (PC.x - P0.x) + 2 * t * (P1.x - PC.x);
    const dy = 2 * m * (PC.y - P0.y) + 2 * t * (P1.y - PC.y);
    return { x: ((x - 256) * 100) / 512, y: ((y - 256) * 100) / 512, angle: (Math.atan2(dy, dx) * 180) / Math.PI };
  }

  const flightT = (p) => ease(seg(p, 0.675, 0.835));

  function globeState(p) {
    const follow = (t) => 6 - 0.55 * routeAt(t).y;
    const t = flightT(p);
    if (p < 0.64) return HIDDEN;
    if (p < 0.675) {
      const k = easeOut(seg(p, 0.64, 0.675));
      return S(0, lerp(110, follow(0), k), 0, 1, k);
    }
    if (p < 0.835) return S(0, follow(t), 0, 1, 1);
    if (p < 0.865) {
      const k = easeIn(seg(p, 0.835, 0.865));
      return S(0, lerp(follow(1), follow(1) + 110, k), 0, 1, 1 - k);
    }
    return HIDDEN;
  }

  function onGlobe(p, t) {
    const g = globeState(p);
    const r = routeAt(t);
    return { x: g.x + r.x * g.s, y: g.y + r.y * g.s, angle: r.angle };
  }

  // Aircraft

  const LINEUP_X = [-30, -10, 10, 30];

  function planeState(i, p) {
    const lineup = S(LINEUP_X[i], -38, 0, 1, 1);
    if (i === PLANE_PICK) {
      if (p < 0.535) return HIDDEN;
      if (p < 0.565) {
        const t = easeOut(seg(p, 0.535 + i * 0.004, 0.565 + i * 0.004));
        return mix(S(-80 - (3 - i) * 10, -38, 0, 1, 0), lineup, t);
      }
      if (p < 0.62) {
        const t = ease(seg(p, 0.565, 0.585));
        return S(lerp(lineup.x, 0, t), lerp(-38, -36, t), 0, lerp(1, 1.3, t), 1);
      }
      if (p < 0.65) {
        // Takes off to the right with the letter on board.
        const t = easeIn(seg(p, 0.62, 0.65));
        return S(t * 60, -36 - t * 10, -t * 10, lerp(1.3, 1, t), 1 - seg(p, 0.637, 0.65));
      }
      if (p < 0.675) {
        // Reappears over Incheon, already facing along the route.
        const start = onGlobe(p, 0);
        const t = easeOut(seg(p, 0.65, 0.675));
        return S(start.x, start.y, start.angle, lerp(0.4, 0.8, t), t);
      }
      if (p < 0.835) {
        const at = onGlobe(p, flightT(p));
        return S(at.x, at.y, at.angle, 0.8, 1);
      }
      const end = onGlobe(0.835, 1);
      const t = seg(p, 0.835, 0.9);
      const rad = (end.angle * Math.PI) / 180;
      const dist = easeOut(t) * 10;
      return S(end.x + Math.cos(rad) * dist, end.y + Math.sin(rad) * dist, end.angle, lerp(0.8, 0.5, t), 1 - easeIn(seg(p, 0.85, 0.9)));
    }
    if (p < 0.535) return HIDDEN;
    if (p < 0.565) {
      const t = easeOut(seg(p, 0.535 + i * 0.004, 0.565 + i * 0.004));
      return mix(S(-80 - (3 - i) * 10, -38, 0, 1, 0), lineup, t);
    }
    const dim = ease(seg(p, 0.565, 0.585));
    const away = easeIn(seg(p, 0.6, 0.625));
    // The planes that were not picked take off to the right, the way they face.
    return S(lineup.x + away * 70, lineup.y - dim * 2 - away * 14, -away * 12, lerp(1, 0.82, dim), lerp(1, 0.35, dim) * (1 - away));
  }

  // Envelope

  function envState(p) {
    const base = S(0, 12, 0, 1, 1);
    const boarding = S(0, -10, 0, 0.6, 1);
    if (p < 0.395) return HIDDEN;
    if (p < 0.43) return mix(S(0, 70, 0, 1, 0), base, easeOut(seg(p, 0.395, 0.43)));
    if (p < 0.53) return base;
    if (p < 0.56) return mix(base, boarding, ease(seg(p, 0.53, 0.56)));
    if (p < 0.62) return boarding;
    if (p < 0.645) {
      const pl = planeState(PLANE_PICK, p);
      return mix(boarding, S(pl.x, pl.y, 0, 0.06, 0), easeIn(seg(p, 0.62, 0.645)));
    }
    if (p < 0.865) return HIDDEN;
    const arrived = S(0, 8, 0, 1, 1);
    if (p < 0.9) {
      const from = planeState(PLANE_PICK, 0.865);
      return mix(S(from.x, from.y, 0, 0.08, 0), arrived, easeOut(seg(p, 0.865, 0.9)));
    }
    if (p < 0.955) return arrived;
    return mix(arrived, S(0, 75, 0, 1, 0), easeIn(seg(p, 0.955, 0.985)));
  }

  const onEnv = (env, lx, ly, r = 0, s = 1) => {
    const at = local(env, lx, ly);
    return S(at.x, at.y, env.r + r, env.s * s, env.o);
  };

  function flapFold(p) {
    if (p < 0.49) return -1;
    if (p < 0.505) return -Math.cos(Math.PI * seg(p, 0.49, 0.505));
    if (p < 0.91) return 1;
    if (p < 0.93) return Math.cos(Math.PI * seg(p, 0.91, 0.93));
    return -1;
  }

  // Letter paper

  const PAPER_HERO = S(0, 70, 6, 0.9, 0);
  const PAPER_WRITE = S(0, 0, -1.5, 1);
  const PAPER_DECO = S(0, -19, -1.5, 0.66);
  const PAPER_ABOVE = S(0, -22, 0, 0.52);
  const PAPER_FINAL = S(0, -2, -1, 0.86);
  const SLOT = { x: 23 - 4.2 + 1 - 5.25, y: -28.75 + 3.2 + 5.75 };

  function paperState(p) {
    if (p < 0.04) return HIDDEN;
    if (p < 0.12) {
      const st = mix(PAPER_HERO, PAPER_WRITE, easeOut(seg(p, 0.04, 0.12)));
      st.o = seg(p, 0.04, 0.07);
      return st;
    }
    if (p < 0.2) return PAPER_WRITE;
    if (p < 0.23) return mix(PAPER_WRITE, PAPER_DECO, ease(seg(p, 0.2, 0.23)));
    if (p < 0.41) return PAPER_DECO;
    if (p < 0.44) return mix(PAPER_DECO, PAPER_ABOVE, ease(seg(p, 0.41, 0.44)));
    const inside = onEnv(envState(Math.max(p, 0.43)), 0, 3, 0, 0.52);
    if (p < 0.47) return mix(PAPER_ABOVE, inside, ease(seg(p, 0.44, 0.47)));
    if (p < 0.93) return onEnv(envState(p), 0, 3, 0, 0.52);
    const env = envState(p);
    const out = S(0, -24, 0, 0.52, 1);
    if (p < 0.955) return mix(onEnv(env, 0, 3, 0, 0.52), out, ease(seg(p, 0.93, 0.955)));
    return mix(out, PAPER_FINAL, ease(seg(p, 0.955, 0.985)));
  }

  // Stamps and seals

  function arc(i, n, spread, radius, baseY) {
    const a = lerp(-spread / 2, spread / 2, i / (n - 1));
    const rad = (a * Math.PI) / 180;
    return S(radius * Math.sin(rad), baseY + radius * (1 - Math.cos(rad)), a, 1, 1);
  }

  // Hero collage: positions are fractions of the screen half-size, so the
  // headline in the middle stays clear on every screen shape.
  // Around the two pen pals: wide screens keep the corners, tall screens the free diagonal.
  const HERO_WIDE = {
    stamps: { 5: [-0.84, -0.3, -12, 1.1], 0: [0.82, -0.4, 9, 1.0], 1: [-0.88, 0.46, 7, 0.95], 2: [0.86, 0.4, -8, 0.95] },
    seals: { 4: [-0.74, 0.08, 0, 1.05], 0: [0.78, 0.04, 0, 1.0] },
  };
  const HERO_TALL = {
    stamps: { 5: [-0.66, 0.7, -10, 0.85], 0: [0.68, 0.72, 9, 0.8] },
    seals: { 4: [-0.36, 0.84, 0, 0.72] },
  };
  const heroSet = () => (root.dataset.layout === "tall" ? HERO_TALL : HERO_WIDE);

  const screen = (fx, fy) => ({ x: fx * halfW, y: fy * halfH - centerY });

  function heroScatter(h, p) {
    if (!h) return HIDDEN;
    const at = screen(h[0], h[1]);
    const t = ease(seg(p, 0.03, 0.1));
    const drift = Math.sin(p * 40 + h[0] * 3) * 0.6;
    return S(at.x * (1 + 0.35 * t), at.y * (1 + 0.35 * t) + drift, h[2] * (1 + t), h[3], 1 - t);
  }

  function fan(i, n, p, a, picked, arcState) {
    // a: [inStart, inEnd, sweepStart, sweepEnd, outStart, outEnd]
    const tin = easeOut(seg(p, a[0] + i * 0.003, a[1] + i * 0.003));
    const cursor = lerp(-0.8, picked, ease(seg(p, a[2], a[3])));
    const lift = bump(cursor - i);
    const out = easeIn(seg(p, a[4] + i * 0.002, a[5] + i * 0.002));
    const st = arcState;
    return S(st.x, st.y + (1 - tin) * 42 - lift * 4.5 + out * 48, st.r * (1 - lift * 0.6), 1 + lift * 0.12, tin * (1 - out));
  }

  function stampState(i, p) {
    if (p < 0.12) return heroScatter(heroSet().stamps[i], p);
    if (p < 0.21) return HIDDEN;
    const base = arc(i, stamps.length, 72, 64, 23);
    const steps = [0.21, 0.24, 0.24, 0.28, 0.3, 0.33];
    if (i !== STAMP_PICK) return fan(i, stamps.length, p, steps, STAMP_PICK, base);
    const held = fan(i, stamps.length, Math.min(p, 0.28), steps, STAMP_PICK, base);
    if (p < 0.28) return held;
    const target = local(PAPER_DECO, SLOT.x, SLOT.y);
    const landed = S(target.x, target.y, PAPER_DECO.r, (10.5 / 13) * PAPER_DECO.s, 1);
    if (p < 0.31) {
      const t = ease(seg(p, 0.28, 0.31));
      const st = mix(held, landed, t);
      st.s *= 1 + Math.sin(t * Math.PI) * 0.25;
      return st;
    }
    return HIDDEN;
  }

  const SEAL_HOVER = S(24, -3, -8, 1.15, 1);
  const SEAL_TIP = { x: 0, y: -1.2 };

  function sealState(i, p) {
    if (p < 0.12) return heroScatter(heroSet().seals[i], p);
    if (p < 0.32) return HIDDEN;
    const base = arc(i, seals.length, 66, 64, 25);
    const steps = [0.32, 0.35, 0.35, 0.37, 0.385, 0.405];
    if (i !== SEAL_PICK) return fan(i, seals.length, p, steps, SEAL_PICK, base);
    const held = fan(i, seals.length, Math.min(p, 0.37), steps, SEAL_PICK, base);
    if (p < 0.37) return held;
    if (p < 0.395) return mix(held, SEAL_HOVER, ease(seg(p, 0.37, 0.395)));
    if (p < 0.505) {
      const bob = Math.sin(seg(p, 0.395, 0.505) * Math.PI * 2) * 0.8;
      return S(SEAL_HOVER.x, SEAL_HOVER.y + bob, SEAL_HOVER.r, SEAL_HOVER.s, 1);
    }
    const env = envState(p);
    const pressed = onEnv(env, SEAL_TIP.x, SEAL_TIP.y, 0, 1.1);
    if (p < 0.52) {
      const t = seg(p, 0.505, 0.52);
      const st = mix(SEAL_HOVER, pressed, ease(Math.min(1, t * 1.25)));
      st.s *= t < 0.8 ? lerp(1.2, 1, ease(t / 0.8)) : 1 - Math.sin(((t - 0.8) / 0.2) * Math.PI) * 0.08;
      return st;
    }
    if (p < 0.9) return pressed;
    if (p < 0.915) {
      const t = easeOut(seg(p, 0.9, 0.915));
      return S(pressed.x + t * 9, pressed.y - t * 12, pressed.r + t * 40, pressed.s, 1 - t);
    }
    return HIDDEN;
  }

  // Cassette, postmark, ticket

  function cassetteState(p) {
    if (p < 0.465) return HIDDEN;
    const inside = onEnv(envState(p), 0, 7);
    if (p < 0.49) {
      const st = mix(S(0, -30, -10, 1, 1), inside, ease(seg(p, 0.465, 0.49)));
      st.o = seg(p, 0.465, 0.471);
      return st;
    }
    return inside;
  }

  function postmarkState(p) {
    if (p < 0.52) return HIDDEN;
    const env = envState(p);
    const st = onEnv(env, -15, 10.5, -12);
    if (p < 0.535) {
      const t = easeOut(seg(p, 0.52, 0.535));
      st.s *= lerp(1.35, 1, t);
      st.o *= t;
    }
    return st;
  }

  function ticketState(p) {
    if (p < 0.57) return HIDDEN;
    const shown = S(0, 21, 0, 1, 1);
    if (p < 0.6) {
      const t = easeOut(seg(p, 0.57, 0.6));
      return S(0, lerp(-8, 21, t), 0, lerp(0.55, 1, t), Math.min(1, t * 3));
    }
    if (p < 0.62) return shown;
    if (p < 0.645) {
      const pl = planeState(PLANE_PICK, p);
      return mix(shown, S(pl.x, pl.y, 0, 0.05, 0), easeIn(seg(p, 0.62, 0.645)));
    }
    return HIDDEN;
  }

  // Sky

  // A calm paper tone that only warms, cools and warms again with the time of day.
  const SKY = [
    [0.0, "#f5ede3", "#f8f2ea", "#fbf7f1"],
    [0.4, "#f4e6da", "#f7eee5", "#fbf6f0"],
    [0.58, "#ece4e6", "#f2ece9", "#f8f4f0"],
    [0.7, "#e2e6ee", "#ebedf1", "#f5f4f2"],
    [0.84, "#e2e6ee", "#ebedf1", "#f5f4f2"],
    [0.94, "#f3e5df", "#f7eee8", "#fbf6f1"],
    [1.0, "#f5ede3", "#f8f2ea", "#fbf7f1"],
].map(([at, ...colors]) => ({ at, colors: colors.map(hex) }));

  function skyAt(p) {
    let i = 0;
    while (i < SKY.length - 2 && p > SKY[i + 1].at) i += 1;
    const a = SKY[i];
    const b = SKY[i + 1];
    const t = ease(seg(p, a.at, b.at));
    return a.colors.map((c, k) => mixColor(c, b.colors[k], t));
  }

  // Layout

  function layout() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    const wide = w >= 860 && w / h >= 1.05;
    root.dataset.layout = wide ? "wide" : "tall";
    let capBottom = 0;
    caps.forEach((cap, i) => {
      if (i === 0) return;
      capBottom = Math.max(capBottom, cap.offsetTop + cap.offsetHeight);
    });
    const top = capBottom + (wide ? 18 : 12);
    const bottom = h - (w <= 560 ? 106 : 86);
    const size = Math.max(Math.min(w * (wide ? 0.9 : 1.08), bottom - top), Math.min(w * 0.8, 280));
    const cy = top + Math.max(bottom - top, size) / 2;
    u = size / 100;
    halfW = w / 2 / u;
    halfH = h / 2 / u;
    centerY = (cy - h / 2) / u;
    scene.style.setProperty("--u", `${u}px`);
    scene.style.left = `${w / 2}px`;
    scene.style.top = `${cy}px`;
    if (typeof layoutHero === "function") layoutHero();
  }

  // Frame

  function progress() {
    const rect = journey.getBoundingClientRect();
    const total = journey.offsetHeight - stage.clientHeight;
    return total > 0 ? clamp(-rect.top / total) : 0;
  }

  function quantize(p) {
    return SETTLE[chapterAt(p)];
  }

  function draw(p) {
    const chapter = chapterAt(p);
    if (chapter !== lastChapter) {
      caps.forEach((cap, i) => cap.classList.toggle("on", i === chapter));
      root.dataset.ch = String(chapter);
      lastChapter = chapter;
    }

    hint.classList.toggle("off", p > 0.02);
    if (typeof drawHero === "function") drawHero(p);

    // sky
    const [top, mid, bottom] = skyAt(p);
    sky.style.background = `linear-gradient(180deg, ${rgb(top)} 0%, ${rgb(mid)} 55%, ${rgb(bottom)} 100%)`;
    ticket.style.setProperty("--notch", rgb(mixColor(mid, bottom, 0.4)));

    // paper and handwriting
    const ps = paperState(p);
    put(paper, ps);
    paper.style.zIndex = p >= 0.955 ? "30" : "";
    const writeStart = 0.12;
    const per = (0.198 - writeStart) / (lines.length - 1);
    lines.forEach((line, i) => {
      const t = seg(p, writeStart + (i - 1) * per, writeStart + i * per);
      line.style.clipPath = t >= 1 ? "none" : `inset(0 ${(100 - t * 100).toFixed(1)}% 0 0)`;
    });
    slot.classList.toggle("filled", p >= 0.31);

    // envelope
    const env = envState(p);
    put(interior, env);
    put(body, env);
    const fold = flapFold(p);
    const half = (ENV_H * u) / 2;
    const k = Math.abs(fold) < 0.02 ? (fold < 0 ? -0.02 : 0.02) : fold;
    put(flap, env, ` translateY(${-half}px) scaleY(${k.toFixed(4)}) translateY(${half}px)`);
    const side = fold >= 0 ? "front" : "back";
    if (flap.dataset.side !== side) flap.dataset.side = side;
    flap.style.zIndex = fold >= 0 ? "15" : "11";
    put(cassette, cassetteState(p));
    put(postmark, postmarkState(p));
    put(ticket, ticketState(p));

    stamps.forEach((el, i) => put(el, stampState(i, p)));
    seals.forEach((el, i) => put(el, sealState(i, p)));
    planes.forEach((el, i) => put(el, planeState(i, p)));

    // globe and route
    put(globe, globeState(p));
    const t = flightT(p);
    if (routeLength) route.style.strokeDashoffset = String(routeLength * (1 - (p < 0.675 ? 0 : t)));

    // board
    board.classList.toggle("on", p > 0.06);
    const travel = p < 0.675 ? 0 : t;
    boardFill.style.width = `${(travel * 100).toFixed(2)}%`;
    boardPlane.style.left = `${(travel * 100).toFixed(2)}%`;
    const labels = I18N[lang].status;
    let status = labels[chapter];
    if (chapter === 5) {
      const minutes = Math.round(travel * 659);
      status = `${labels[5]} ${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
    }
    if (status !== lastStatus) {
      boardValue.textContent = status;
      lastStatus = status;
    }
  }

  function frame() {
    const target = progress();
    if (reduceMotion.matches) {
      current = quantize(target);
    } else {
      current += (target - current) * 0.14;
      if (Math.abs(target - current) < 0.0004) current = target;
    }
    draw(current);
    raf = current !== target && !reduceMotion.matches ? requestAnimationFrame(frame) : 0;
  }

  const request = () => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", () => {
    layout();
    draw(current);
    request();
  });
  reduceMotion.addEventListener?.("change", request);

  if (route.getTotalLength) {
    routeLength = route.getTotalLength();
    route.style.strokeDasharray = String(routeLength);
    route.style.strokeDashoffset = String(routeLength);
  }

  // Collection strips

  const COLLECTION = {
    a: ["city-seoul", "city-tokyo", "city-paris", "city-london", "city-newyork", "city-kualalumpur", "brazil-christ-redeemer",
      "canada-moraine-lake", "egypt-pyramids", "greece-parthenon", "india-taj-mahal", "italy-colosseum-asset", "nepal-himalayas",
      "netherlands-windmills", "peru-machu-picchu", "switzerland-matterhorn", "vietnam-ha-long-bay", "lighthouse"],
    b: ["animal-cat", "food-strawberry-cake", "sky-rainbow", "animal-koala", "food-gimbap", "flower-sunflower", "animal-penguin",
      "space-saturn", "food-croissant", "animal-rabbit", "city-aurora", "art-violin", "food-ramen", "animal-red-fox", "city-dusk",
      "flower-rose", "sky-crescent-moon", "animal-giraffe", "food-pasta", "city-night", "transport-airplane"],
    seals: ["seal-pink-ribbon", "seal-blue-swan", "seal-peach-tulip", "seal-pine-fern", "seal-lavender-butterfly", "seal-champagne-compass",
      "seal-seafoam-shell", "seal-burgundy-rose", "seal-sky-sailboat", "seal-mauve-moon", "seal-ivory-lily", "seal-plum-key", "seal-terracotta-sun"],
  };

  document.querySelectorAll(".marquee").forEach((strip) => {
    const names = COLLECTION[strip.dataset.row] || [];
    const track = document.createElement("div");
    track.className = "marquee-track";
    for (let copy = 0; copy < 2; copy += 1) {
      names.forEach((name, i) => {
        const item = document.createElement("span");
        item.className = "marquee-item";
        item.style.setProperty("--tilt", `${((i * 37) % 9) - 4}deg`);
        const img = document.createElement("img");
        img.src = `assets/collection/${name}.webp`;
        img.alt = "";
        img.loading = "lazy";
        img.decoding = "async";
        if (copy) item.setAttribute("aria-hidden", "true");
        item.appendChild(img);
        track.appendChild(item);
      });
    }
    strip.appendChild(track);
  });

  // Reveal on enter

  const revealables = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -12% 0px" });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("in"));
  }

  // Hero globe: pen pals pinned to their cities, letters flying between them.

  const heroArt = $(".hero-art");
  const globeBox = heroArt.querySelector(".hero-globe");
  const globeCanvas = heroArt.querySelector(".globe-canvas");
  const pinLayer = heroArt.querySelector(".globe-pins");
  const planeLayer = heroArt.querySelector(".globe-planes");
  const DEG = Math.PI / 180;

  const PEOPLE = [
    { id: "jiwoo", lat: 37.46, lon: 126.44, flag: "🇰🇷" },
    { id: "yuki", lat: 35.55, lon: 139.78, flag: "🇯🇵" },
    { id: "paolo", lat: 14.51, lon: 121.02, flag: "🇵🇭" },
    { id: "linh", lat: 21.22, lon: 105.81, flag: "🇻🇳" },
    { id: "nadia", lat: 2.74, lon: 101.7, flag: "🇲🇾" },
    { id: "putri", lat: -8.75, lon: 115.17, flag: "🇮🇩" },
    { id: "priya", lat: 19.09, lon: 72.87, flag: "🇮🇳" },
    { id: "aruzhan", lat: 43.35, lon: 77.04, flag: "🇰🇿" },
    { id: "omar", lat: 25.25, lon: 55.36, flag: "🇦🇪" },
    { id: "ruby", lat: -33.94, lon: 151.18, flag: "🇦🇺" },
    { id: "chloe", lat: -31.94, lon: 115.97, flag: "🇦🇺" },
    { id: "ethan", lat: -37.01, lon: 174.79, flag: "🇳🇿" },
    { id: "losana", lat: -17.76, lon: 177.44, flag: "🇫🇯" },
    { id: "kai", lat: 21.32, lon: -157.92, flag: "🇺🇸" },
    { id: "nora", lat: 61.17, lon: -150.0, flag: "🇺🇸" },
    { id: "liam", lat: 49.2, lon: -123.18, flag: "🇨🇦" },
    { id: "maya", lat: 33.94, lon: -118.41, flag: "🇺🇸" },
    { id: "jordan", lat: 41.98, lon: -87.9, flag: "🇺🇸" },
    { id: "grace", lat: 40.64, lon: -73.78, flag: "🇺🇸" },
    { id: "mateo", lat: 19.44, lon: -99.07, flag: "🇲🇽" },
    { id: "sofia", lat: 9.99, lon: -84.2, flag: "🇨🇷" },
    { id: "camila", lat: 4.7, lon: -74.15, flag: "🇨🇴" },
    { id: "diego", lat: -12.02, lon: -77.11, flag: "🇵🇪" },
    { id: "valentina", lat: -33.39, lon: -70.79, flag: "🇨🇱" },
    { id: "tomas", lat: -34.82, lon: -58.54, flag: "🇦🇷" },
    { id: "lucas", lat: -23.44, lon: -46.47, flag: "🇧🇷" },
    { id: "yasmin", lat: 33.37, lon: -7.59, flag: "🇲🇦" },
    { id: "awa", lat: 14.74, lon: -17.49, flag: "🇸🇳" },
    { id: "tunde", lat: 6.58, lon: 3.32, flag: "🇳🇬" },
    { id: "youssef", lat: 30.12, lon: 31.41, flag: "🇪🇬" },
    { id: "amara", lat: -1.32, lon: 36.93, flag: "🇰🇪" },
    { id: "zara", lat: -33.97, lon: 18.6, flag: "🇿🇦" },
  ];
  // The fleet in rotation: cream defaults mixed with paints, skins and the gold AP-301.
  const SPRITES = [
    "airliner-cream", "ap301-gold", "airliner-blue", "ap120-heritage", "ap220-cream", "propeller-yellow",
    "jet-cream", "ap310-carbon", "ap110-cream", "ap220-coral", "ap320-cream", "ap110-orange",
    "ap310-cream", "ap310-midnight", "propeller-cream", "jet-mint", "ap130-cream",
  ];
  const LANES = 7;

  const unit = (lat, lon) => [Math.cos(lat * DEG) * Math.cos(lon * DEG), Math.cos(lat * DEG) * Math.sin(lon * DEG), Math.sin(lat * DEG)];
  const people = {};
  PEOPLE.forEach((person) => {
    const el = document.createElement("span");
    el.className = "hpin";
    el.innerHTML = `<img src="assets/avatars/p-${person.id}.webp" alt=""><i>${person.flag}</i><b>✉️</b>`;
    pinLayer.appendChild(el);
    people[person.id] = { ...person, el, v: unit(person.lat, person.lon) };
  });

  const lanes = Array.from({ length: LANES }, (_, i) => {
    const el = document.createElement("img");
    el.className = "gplane";
    el.alt = "";
    planeLayer.appendChild(el);
    return { el, flight: null, start: 0, dur: 0, delay: i * 900, sprite: "" };
  });
  const spriteSrc = (sprite) => `assets/aircraft/globe/${sprite}.webp`;
  SPRITES.forEach((sprite) => { new Image().src = spriteSrc(sprite); });
  let spriteCursor = 0;

  // Walk through the fleet so every model gets a turn, skipping ones already in the air.
  function nextSprite() {
    const flying = new Set(lanes.filter((lane) => lane.flight).map((lane) => lane.sprite));
    for (let k = 0; k < SPRITES.length; k += 1) {
      const sprite = SPRITES[(spriteCursor + k) % SPRITES.length];
      if (!flying.has(sprite)) {
        spriteCursor = (spriteCursor + k + 1) % SPRITES.length;
        return sprite;
      }
    }
    return SPRITES[0];
  }

  // Fewer letters in the air on a phone-sized globe.
  const activeLanes = () => (root.dataset.layout === "wide" ? LANES : 5);

  let landRings = null;
  let gctx = null;
  let globeR = 200;
  let globeDpr = 1;
  let globeRaf = 0;
  let globeLast = 0;
  let flightCursor = 0;
  let heroShown = true;
  const view = { lon: 175 * DEG, lat: 12 * DEG, sinLat: 0, cosLat: 1 };
  const SPIN_START = 175;
  const SPIN_PER_MS = 360 / 96000;
  let spinZero = null;

  fetch("assets/countries.json")
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      if (!data) return;
      landRings = [];
      Object.values(data.countries).forEach((polygons) => polygons.forEach((polygon) => polygon.forEach((ring) => {
        const n = ring.length / 2;
        const lon = new Float64Array(n);
        const cl = new Float64Array(n);
        const sl = new Float64Array(n);
        for (let i = 0; i < n; i += 1) {
          lon[i] = ring[2 * i] * DEG;
          cl[i] = Math.cos(ring[2 * i + 1] * DEG);
          sl[i] = Math.sin(ring[2 * i + 1] * DEG);
        }
        landRings.push({ lon, cl, sl, n, px: new Float32Array(n), py: new Float32Array(n) });
      })));
      requestGlobe();
    })
    .catch(() => {});

  // Orthographic projection of a point given by longitude (radians), cos and sin of latitude.
  function viewXYZ(lon, cosLat, sinLat) {
    const dl = lon - view.lon;
    const c = Math.cos(dl);
    return [cosLat * Math.sin(dl), view.cosLat * sinLat - view.sinLat * cosLat * c, view.sinLat * sinLat + view.cosLat * cosLat * c];
  }

  function viewOfVector(v) {
    const len = Math.hypot(v[0], v[1], v[2]);
    const sinLat = v[2] / len;
    const cosLat = Math.hypot(v[0], v[1]) / len;
    const p = viewXYZ(Math.atan2(v[1], v[0]), cosLat, sinLat);
    return [p[0] * len, p[1] * len, p[2] * len, len];
  }

  function slerp(a, b, t, omega) {
    if (omega < 1e-6) return a.slice();
    const k1 = Math.sin((1 - t) * omega) / Math.sin(omega);
    const k2 = Math.sin(t * omega) / Math.sin(omega);
    return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
  }

  function flightPoint(lane, t) {
    const f = lane.flight;
    const base = slerp(f.a, f.b, t, f.omega);
    const lift = 1 + f.height * Math.sin(Math.PI * t);
    return viewOfVector([base[0] * lift, base[1] * lift, base[2] * lift]);
  }

  function facing(person) {
    const p = viewXYZ(person.lon * DEG, Math.cos(person.lat * DEG), Math.sin(person.lat * DEG));
    return p[2];
  }

  function nextFlight(lane, now) {
    view.sinLat = Math.sin(view.lat);
    view.cosLat = Math.cos(view.lat);
    // Anyone can send one letter and receive another at the same time.
    const others = lanes.filter((other) => other !== lane && other.flight);
    const sending = new Set(others.map((other) => other.flight.from));
    const receiving = new Set(others.map((other) => other.flight.to));
    const list = Object.values(people).filter((person) => facing(person) >= 0.35);
    const options = [];
    list.forEach((a) => list.forEach((b) => {
      if (a === b || sending.has(a.id) || receiving.has(b.id)) return;
      if (others.some((other) => other.flight.from === b.id && other.flight.to === a.id)) return;
      const dot = a.v[0] * b.v[0] + a.v[1] * b.v[1] + a.v[2] * b.v[2];
      const omega = Math.acos(Math.min(1, Math.max(-1, dot)));
      if (omega < 18 * DEG || omega > 95 * DEG) return;
      if (lane.lastPair === `${a.id}>${b.id}`) return;
      options.push({ a, b, omega });
    }));
    if (!options.length) {
      lane.flight = null;
      lane.delay = now + 800;
      return;
    }
    const pick = options[Math.floor(Math.random() * options.length)];
    flightCursor += 1;
    lane.flight = { a: pick.a.v, b: pick.b.v, omega: pick.omega, height: 0.06 + 0.16 * (pick.omega / Math.PI), from: pick.a.id, to: pick.b.id };
    lane.lastPair = `${pick.a.id}>${pick.b.id}`;
    lane.sprite = nextSprite();
    lane.el.src = spriteSrc(lane.sprite);
    lane.start = now;
    lane.dur = 3400 + 4200 * (pick.omega / Math.PI);
    lane.arrived = false;
  }

  function layoutGlobe() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    const wide = root.dataset.layout === "wide";
    const capBottom = caps[0].offsetTop + caps[0].offsetHeight;
    let d = wide ? Math.min((h - capBottom - 16) / 0.9, w * 0.7, 940) : Math.min(w * 1.08, (h - capBottom - 64) / 0.96);
    d = Math.max(d, 260);
    globeR = d / 2;
    globeBox.style.setProperty("--gd", `${d.toFixed(1)}px`);
    globeBox.style.setProperty("--gy", `${(capBottom - (wide ? 0.1 : 0.02) * d).toFixed(1)}px`);
    globeBox.style.setProperty("--ps", `${wide ? 46 : 34}px`);
    globeBox.style.setProperty("--pl", `${wide ? 40 : 30}px`);
    globeDpr = Math.min(2, window.devicePixelRatio || 1);
    const size = Math.round(d * 1.3 * globeDpr);
    if (globeCanvas.width !== size) {
      globeCanvas.width = size;
      globeCanvas.height = size;
    }
    gctx = globeCanvas.getContext("2d");
    requestGlobe();
  }

  function drawLand(ctx, cx, cy, R) {
    ctx.beginPath();
    for (const ring of landRings) {
      let front = false;
      for (let i = 0; i < ring.n; i += 1) {
        const p = viewXYZ(ring.lon[i], ring.cl[i], ring.sl[i]);
        let x = p[0];
        let y = p[1];
        if (p[2] < 0) {
          // Points past the horizon are pulled onto the rim, which clips the shape there.
          const len = Math.hypot(x, y) || 1;
          x /= len;
          y /= len;
        } else {
          front = true;
        }
        ring.px[i] = cx + R * x;
        ring.py[i] = cy - R * y;
      }
      if (!front) continue;
      ctx.moveTo(ring.px[0], ring.py[0]);
      for (let i = 1; i < ring.n; i += 1) ctx.lineTo(ring.px[i], ring.py[i]);
      ctx.closePath();
    }
    ctx.fillStyle = "#c4d9ad";
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 0.7 * globeDpr;
    ctx.stroke();
  }

  function drawGraticule(ctx, cx, cy, R) {
    ctx.beginPath();
    const line = (points) => {
      let pen = false;
      points.forEach(([lat, lon]) => {
        const p = viewXYZ(lon * DEG, Math.cos(lat * DEG), Math.sin(lat * DEG));
        if (p[2] <= 0) { pen = false; return; }
        const x = cx + R * p[0];
        const y = cy - R * p[1];
        if (pen) ctx.lineTo(x, y); else ctx.moveTo(x, y);
        pen = true;
      });
    };
    for (let lon = -180; lon < 180; lon += 30) line(Array.from({ length: 41 }, (_, i) => [-80 + i * 4, lon]));
    for (let lat = -60; lat <= 60; lat += 30) line(Array.from({ length: 91 }, (_, i) => [lat, -180 + i * 4]));
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 0.8 * globeDpr;
    ctx.stroke();
  }

  function drawGlobe(now) {
    if (!gctx) return;
    const ctx = gctx;
    const size = globeCanvas.width;
    const s = globeDpr;
    const cx = size / 2;
    const cy = size / 2;
    const R = globeR * s;
    view.sinLat = Math.sin(view.lat);
    view.cosLat = Math.cos(view.lat);
    ctx.clearRect(0, 0, size, size);

    const glow = ctx.createRadialGradient(cx, cy, R * 0.94, cx, cy, R * 1.14);
    glow.addColorStop(0, "rgba(150, 190, 230, 0.42)");
    glow.addColorStop(1, "rgba(150, 190, 230, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, R * 1.14, 0, Math.PI * 2);
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    const ocean = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
    ocean.addColorStop(0, "#e4f0f9");
    ocean.addColorStop(0.7, "#bdd5ea");
    ocean.addColorStop(1, "#a2bfdc");
    ctx.fillStyle = ocean;
    ctx.fill();
    ctx.clip();
    drawGraticule(ctx, cx, cy, R);
    if (landRings) drawLand(ctx, cx, cy, R);
    const shade = ctx.createRadialGradient(cx - R * 0.45, cy - R * 0.5, R * 0.15, cx, cy, R * 1.04);
    shade.addColorStop(0, "rgba(255, 255, 255, 0.24)");
    shade.addColorStop(0.55, "rgba(255, 255, 255, 0)");
    shade.addColorStop(1, "rgba(28, 46, 84, 0.24)");
    ctx.fillStyle = shade;
    ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
    ctx.restore();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
    ctx.lineWidth = 1.2 * s;
    ctx.stroke();

    // Pins in box coordinates: the box is the globe's square, the canvas overhangs it by 15%.
    const half = globeR;
    Object.values(people).forEach((person) => {
      const p = viewXYZ(person.lon * DEG, Math.cos(person.lat * DEG), Math.sin(person.lat * DEG));
      person.screen = [half + globeR * p[0], half - globeR * p[1]];
      const fade = clamp((p[2] - 0.06) / 0.16);
      if (fade <= 0) {
        if (person.shown !== false) { person.el.style.visibility = "hidden"; person.shown = false; }
        return;
      }
      if (person.shown !== true) { person.el.style.visibility = "visible"; person.shown = true; }
      person.el.style.opacity = fade.toFixed(3);
      person.el.style.transform = `translate3d(${person.screen[0].toFixed(1)}px,${person.screen[1].toFixed(1)}px,0) scale(${(0.82 + 0.18 * p[2]).toFixed(3)})`;
    });

    // Letters in flight, with a dotted trail behind each plane.
    const frozen = reduceMotion.matches;
    const active = activeLanes();
    lanes.forEach((lane, i) => {
      if (i >= active && !lane.flight) { lane.el.style.opacity = "0"; return; }
      if (frozen) {
        // Without motion, each plane rests halfway along its own route.
        if (!lane.flight) nextFlight(lane, 0);
        if (!lane.flight) return;
        renderLane(ctx, lane, 0.5, 1, cx, cy, R, s, half);
        return;
      }
      if (!lane.flight) {
        if (now < lane.delay) { lane.el.style.opacity = "0"; return; }
        nextFlight(lane, now);
        if (!lane.flight) { lane.el.style.opacity = "0"; return; }
      }
      const elapsed = now - lane.start;
      if (elapsed < 0) { lane.el.style.opacity = "0"; return; }
      const t = clamp(elapsed / lane.dur);
      if (t >= 1 && !lane.arrived) {
        lane.arrived = true;
        const pin = people[lane.flight.to].el;
        pin.classList.remove("got");
        void pin.offsetWidth;
        pin.classList.add("got");
      }
      const trailFade = t < 1 ? 1 : 1 - clamp((elapsed - lane.dur) / 900);
      if (t >= 1 && trailFade <= 0) {
        lane.el.style.opacity = "0";
        if (i >= active) lane.flight = null;
        else nextFlight(lane, now + 600);
        return;
      }
      renderLane(ctx, lane, t, trailFade, cx, cy, R, s, half);
    });
  }

  function renderLane(ctx, lane, t, trailFade, cx, cy, R, s, half) {
    const steps = 30;
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = 2.2 * s;
    ctx.setLineDash([0.1, 6.5 * s]);
    ctx.strokeStyle = "#2f4f9a";
    let prev = null;
    for (let k = 0; k <= steps; k += 1) {
      const q = flightPoint(lane, (t * k) / steps);
      const visible = q[2] >= 0 || q[0] * q[0] + q[1] * q[1] > 1;
      const pt = [cx + R * q[0], cy - R * q[1]];
      if (prev && visible && prev.visible) {
        ctx.globalAlpha = (0.12 + 0.6 * (k / steps)) * trailFade;
        ctx.beginPath();
        ctx.moveTo(prev.pt[0], prev.pt[1]);
        ctx.lineTo(pt[0], pt[1]);
        ctx.stroke();
      }
      prev = { pt, visible };
    }
    ctx.restore();

    const here = flightPoint(lane, t);
    const ahead = flightPoint(lane, Math.min(1, t + 0.01));
    const behind = flightPoint(lane, Math.max(0, t - 0.01));
    const visible = here[2] >= 0 || here[0] * here[0] + here[1] * here[1] > 1;
    const opacity = visible && t < 1 ? clamp(Math.min(t / 0.06, (1 - t) / 0.06)) : 0;
    // The sprites face right, so the rotation is simply the direction of travel on screen.
    const angle = (Math.atan2(-(ahead[1] - behind[1]), ahead[0] - behind[0]) * 180) / Math.PI;
    const bx = half + globeR * here[0];
    const by = half - globeR * here[1];
    lane.el.style.opacity = opacity.toFixed(3);
    lane.el.style.transform = `translate3d(${bx.toFixed(1)}px,${by.toFixed(1)}px,0) rotate(${angle.toFixed(1)}deg)`;
  }

  function globeFrame(now) {
    globeRaf = 0;
    if (!heroShown) return;
    if (now - globeLast >= 24) {
      globeLast = now;
      if (!reduceMotion.matches) {
        if (spinZero === null) spinZero = now;
        view.lon = (SPIN_START - (now - spinZero) * SPIN_PER_MS) * DEG;
      }
      drawGlobe(reduceMotion.matches ? 0 : now);
    }
    if (!reduceMotion.matches) globeRaf = requestAnimationFrame(globeFrame);
  }

  function requestGlobe() {
    if (!globeRaf) globeRaf = requestAnimationFrame(globeFrame);
  }

  function layoutHero() { layoutGlobe(); }

  function drawHero(p) {
    const fade = 1 - seg(p, 0.005, 0.05);
    heroArt.style.opacity = fade.toFixed(3);
    heroArt.style.transform = `translate3d(0,${(-seg(p, 0, 0.06) * 40).toFixed(1)}px,0) scale(${(1 + seg(p, 0, 0.06) * 0.04).toFixed(4)})`;
    heroArt.classList.toggle("gone", fade <= 0.001);
    heroShown = fade > 0.001;
    if (heroShown) requestGlobe();
  }

  // Find pen pals: four tabs share one phone.

  const findSection = $(".find");
  const findTabs = $$(".find-tab");
  const findPhone = findSection ? findSection.querySelector(".find-phone .screen") : null;
  const findStage = $("#find-stage");
  const findDecos = $$(".find-deco");
  const findCaption = $(".find-caption");
  let findIndex = 0;
  let findPreloaded = "";

  function syncFindCaption() {
    if (!findCaption || !findTabs.length) return;
    const body = findTabs[findIndex].querySelector(".ft-body");
    findCaption.textContent = body ? body.textContent : "";
  }

  function preloadFind() {
    if (findPreloaded === lang) return;
    findPreloaded = lang;
    findTabs.forEach((tab) => { new Image().src = screenSrc(tab.dataset.tab, lang); });
  }

  function selectFind(index) {
    if (!findSection || !findPhone) return;
    findIndex = Math.max(0, Math.min(findTabs.length - 1, index));
    const tab = findTabs[findIndex];
    const key = tab.dataset.tab;
    findTabs.forEach((other, i) => {
      const on = i === findIndex;
      other.setAttribute("aria-selected", String(on));
      other.tabIndex = on ? 0 : -1;
    });
    findSection.dataset.active = key;
    findStage.setAttribute("aria-labelledby", tab.id);
    findDecos.forEach((deco) => deco.classList.toggle("on", deco.dataset.for === key));
    syncFindCaption();
    const src = screenSrc(key, lang);
    if (findPhone.getAttribute("src") === src) return;
    findPhone.classList.add("swap");
    window.setTimeout(() => {
      findPhone.dataset.screen = key;
      findPhone.onload = () => findPhone.classList.remove("swap");
      findPhone.setAttribute("src", src);
      if (findPhone.complete) findPhone.classList.remove("swap");
    }, 180);
  }

  // The active tab advances on its own; hovering or focusing the section holds it.
  const FIND_DWELL = 6000;
  let findElapsed = 0;
  let findLast = 0;
  let findHeld = false;
  let findVisible = false;
  let findRaf = 0;

  function tickFind(now) {
    findRaf = 0;
    if (!findVisible || reduceMotion.matches) return;
    if (findLast && !findHeld) findElapsed += now - findLast;
    findLast = now;
    const k = clamp(findElapsed / FIND_DWELL);
    const bar = findTabs[findIndex].querySelector(".ft-progress");
    if (bar) bar.style.setProperty("--p", k.toFixed(3));
    if (k >= 1) {
      findElapsed = 0;
      selectFind((findIndex + 1) % findTabs.length);
    }
    findRaf = requestAnimationFrame(tickFind);
  }

  function runFind() {
    if (!findRaf && findVisible && !reduceMotion.matches) {
      findLast = 0;
      findRaf = requestAnimationFrame(tickFind);
    }
  }

  function goToFind(index) {
    findElapsed = 0;
    findTabs.forEach((tab) => tab.querySelector(".ft-progress")?.style.setProperty("--p", "0"));
    selectFind(index);
  }

  findTabs.forEach((tab, i) => {
    tab.addEventListener("click", () => goToFind(i));
    tab.addEventListener("keydown", (event) => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
      if (!step) return;
      event.preventDefault();
      const next = Math.max(0, Math.min(findTabs.length - 1, findIndex + step));
      goToFind(next);
      findTabs[next].focus();
    });
  });

  if (findSection) {
    const grid = findSection.querySelector(".find-grid");
    grid.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") findHeld = true; });
    grid.addEventListener("pointerleave", () => { findHeld = false; });
    grid.addEventListener("focusin", () => { findHeld = true; });
    grid.addEventListener("focusout", () => { findHeld = false; });
  }

  if (findSection && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) preloadFind();
    }, { rootMargin: "600px 0px" }).observe(findSection);
    new IntersectionObserver((entries) => {
      findVisible = entries.some((entry) => entry.isIntersecting);
      if (findVisible) runFind();
    }, { threshold: 0.35 }).observe(findSection);
  }
  syncFindCaption();

  // Looping decorations only run while their section is on screen.

  const animated = $$(".friends, .collection, .find, .solo, .decorate, .closing");
  if ("IntersectionObserver" in window) {
    const live = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("idle", !entry.isIntersecting));
    }, { rootMargin: "120px 0px" });
    animated.forEach((section) => {
      section.classList.add("idle");
      live.observe(section);
    });
  }

  // Manifesto lines light up one by one as they pass the middle of the screen.

  const manifestoLines = $$(".m-line");
  let manifestoRaf = 0;
  const topbar = $(".top");
  function drawManifesto() {
    manifestoRaf = 0;
    const vh = window.innerHeight;
    topbar.classList.toggle("solid", journey.getBoundingClientRect().bottom < vh * 0.6);
    manifestoLines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      const t = reduceMotion.matches ? 1 : clamp((vh * 0.82 - rect.top) / (vh * 0.3));
      line.style.opacity = (0.14 + 0.86 * t).toFixed(3);
      line.style.transform = `translate3d(0,${((1 - t) * 18).toFixed(1)}px,0)`;
    });
  }
  window.addEventListener("scroll", () => {
    if (!manifestoRaf) manifestoRaf = requestAnimationFrame(drawManifesto);
  }, { passive: true });
  drawManifesto();

  if (new URLSearchParams(location.search).has("debug")) {
    window.airpostSeek = (p) => {
      window.removeEventListener("scroll", request);
      cancelAnimationFrame(raf);
      raf = -1;
      current = p;
      draw(p);
      return p;
    };
  }

  current = progress();
  applyLanguage(lang);
  request();
})();
