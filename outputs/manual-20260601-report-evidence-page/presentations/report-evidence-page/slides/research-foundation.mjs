import { C, slide, box, roundBox, rule, txt, label, pill, arrow } from "./foundation.mjs";

export const R = {
  chapter: "RESEARCH SYSTEM / AI INSIGHT",
  sections: [
    "封面",
    "产品概况",
    "用户痛点",
    "产品方案",
    "核心流程",
    "关键设计",
    "报告结构",
    "MVP",
    "数据评估",
  ],
};

export function researchSlide(presentation) {
  return slide(presentation);
}

export function researchBase(ctx, s, fill = C.paper) {
  box(ctx, s, 0, 0, 1280, 720, fill);
}

export function researchTop(ctx, s, step, title, subtitle = "") {
  researchBase(ctx, s);
  txt(ctx, s, `${String(step).padStart(2, "0")} / 09`, 52, 20, 170, 18, 12, C.pink, true);
  txt(ctx, s, R.chapter, 850, 20, 376, 18, 12, C.green, true, "right");
  txt(ctx, s, title, 52, 68, 900, 50, 39, C.ink, true);
  if (subtitle) txt(ctx, s, subtitle, 54, 126, 1050, 30, 16, C.text);
}

export function researchFooter(ctx, s, step) {
  const y = 646;
  const start = 140;
  const itemW = 116;
  box(ctx, s, 0, y, 1280, 74, C.deep);
  roundBox(ctx, s, 18, y + 9, 70, 56, C.pink);
  txt(ctx, s, "RESEARCH", 22, y + 14, 62, 10, 7, C.deep, true, "center");
  txt(ctx, s, String(step).padStart(2, "0"), 18, y + 25, 70, 29, 23, C.white, true, "center");
  box(ctx, s, start + 8, y + 27, itemW * 8, 2, "#648879");
  R.sections.forEach((name, i) => {
    const x = start + i * itemW;
    const current = i + 1 === step;
    const done = i + 1 < step;
    roundBox(ctx, s, x, y + 20, 18, 18, done || current ? C.pink : C.deep, done || current ? C.pink : C.white, 2);
    if (current) roundBox(ctx, s, x + 5, y + 25, 8, 8, C.deep);
    txt(ctx, s, name, x - 38, y + 48, itemW - 4, 16, 10, current ? C.pink : C.white, current, "center");
  });
}

export function researchPage(ctx, s, step, title, subtitle = "") {
  researchTop(ctx, s, step, title, subtitle);
  researchFooter(ctx, s, step);
}

export function miniCard(ctx, s, x, y, w, h, tag, title, body, active = false) {
  roundBox(ctx, s, x, y, w, h, active ? C.green : C.white, active ? C.green : C.border, 1.2);
  pill(ctx, s, tag, x + 18, y + 18, 54, true);
  txt(ctx, s, title, x + 88, y + 17, w - 110, 28, 19, active ? C.white : C.green, true);
  txt(ctx, s, body, x + 22, y + 58, w - 44, h - 72, 16, active ? "#E6F0E9" : C.text);
}

export function processNode(ctx, s, x, y, w, title, body, active = false) {
  roundBox(ctx, s, x, y, w, 88, active ? C.green : C.panel, active ? C.green : C.border, 1.2);
  txt(ctx, s, title, x + 18, y + 17, w - 36, 22, 17, active ? C.white : C.green, true);
  txt(ctx, s, body, x + 18, y + 46, w - 36, 30, 14, active ? "#E6F0E9" : C.text);
}

export function evidenceQuote(ctx, s, x, y, w, quote, source) {
  roundBox(ctx, s, x, y, w, 88, C.white, C.border, 1);
  txt(ctx, s, "“", x + 16, y + 6, 22, 28, 30, C.pink, true);
  txt(ctx, s, quote, x + 42, y + 18, w - 62, 34, 15, C.ink);
  txt(ctx, s, source, x + 42, y + 61, w - 62, 15, 10, C.green, true);
}

export { C, box, roundBox, rule, txt, label, pill, arrow };
