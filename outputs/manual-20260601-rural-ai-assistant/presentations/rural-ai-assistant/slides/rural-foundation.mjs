import { C, slide, box, roundBox, txt, pill } from "./foundation.mjs";

export const RC = {
  ...C,
  lotus: "#EC78A6",
  lotusSoft: "#F7D7E4",
  teaSoft: "#E6EFE7",
  cream: "#FBF9F3",
  line: "#9DBBA8",
};

export const SECTIONS = ["项目背景与价值", "需求拆解", "MVP 产品化方案"];

export function ruralSlide(presentation) {
  return slide(presentation);
}

export function pageBase(ctx, s, step, title, subtitle = "") {
  box(ctx, s, 0, 0, 1280, 720, RC.cream);
  txt(ctx, s, `${String(step).padStart(2, "0")} / 03`, 52, 20, 150, 18, 12, RC.lotus, true);
  txt(ctx, s, "RURAL CULTURE / AI PRODUCTIZATION", 840, 20, 386, 18, 12, RC.green, true, "right");
  txt(ctx, s, title, 52, 66, 1000, 48, 36, RC.ink, true);
  if (subtitle) txt(ctx, s, subtitle, 54, 120, 1080, 26, 15, RC.text);
  footer(ctx, s, step);
}

export function footer(ctx, s, step) {
  const y = 646;
  box(ctx, s, 0, y, 1280, 74, RC.deep);
  roundBox(ctx, s, 18, y + 9, 70, 56, RC.lotus);
  txt(ctx, s, "RURAL", 22, y + 14, 62, 10, 7, RC.deep, true, "center");
  txt(ctx, s, String(step).padStart(2, "0"), 18, y + 25, 70, 29, 23, RC.white, true, "center");
  const start = 250;
  const gap = 290;
  box(ctx, s, start + 8, y + 28, gap * 2 + 8, 2, "#668A79");
  SECTIONS.forEach((name, i) => {
    const x = start + i * gap;
    const current = i + 1 === step;
    const done = i + 1 < step;
    roundBox(ctx, s, x, y + 20, 18, 18, done || current ? RC.lotus : RC.deep, done || current ? RC.lotus : RC.white, 2);
    if (current) roundBox(ctx, s, x + 5, y + 25, 8, 8, RC.deep);
    txt(ctx, s, name, x - 70, y + 48, 160, 16, 10, current ? RC.lotus : RC.white, current, "center");
  });
}

export function tag(ctx, s, text, x, y, w = 92, pink = false) {
  pill(ctx, s, text, x, y, w, pink);
}

export function card(ctx, s, x, y, w, h, title, body, active = false) {
  roundBox(ctx, s, x, y, w, h, active ? RC.green : RC.white, active ? RC.green : RC.border, 1.2);
  txt(ctx, s, title, x + 20, y + 18, w - 40, 24, 18, active ? RC.white : RC.green, true);
  txt(ctx, s, body, x + 20, y + 52, w - 40, h - 62, 15, active ? "#E6F0E9" : RC.text);
}

export function imagePlaceholder(ctx, s, x, y, w, h, title, note) {
  roundBox(ctx, s, x, y, w, h, RC.greenSoft, RC.line, 1.2);
  roundBox(ctx, s, x + 18, y + 18, 74, 28, RC.lotus);
  txt(ctx, s, "IMAGE", x + 18, y + 26, 74, 10, 9, RC.deep, true, "center");
  txt(ctx, s, title, x + 22, y + h - 64, w - 44, 22, 18, RC.green, true);
  txt(ctx, s, note, x + 22, y + h - 34, w - 44, 18, 12, RC.text);
  box(ctx, s, x + 26, y + 66, w - 52, 2, RC.line);
  box(ctx, s, x + 26, y + 66, 2, h - 150, RC.line);
  box(ctx, s, x + w - 28, y + 66, 2, h - 150, RC.line);
  box(ctx, s, x + 26, y + h - 86, w - 52, 2, RC.line);
  txt(ctx, s, "待替换为原展板 / 总平面 / 鸟瞰图裁图", x + 34, y + 126, w - 68, 34, 20, RC.muted, true, "center");
}

export function arrowDown(ctx, s, x, y) {
  box(ctx, s, x, y, 2, 28, RC.lotus);
  roundBox(ctx, s, x - 5, y + 24, 12, 12, RC.lotus);
}
