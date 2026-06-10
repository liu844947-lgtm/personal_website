export const C = {
  green: "#005331",
  deep: "#003C24",
  greenSoft: "#DDE8DF",
  paper: "#FBF9F3",
  panel: "#F1F4EE",
  white: "#FFFFFF",
  pink: "#EC78A6",
  pinkSoft: "#F7D7E4",
  ink: "#102119",
  text: "#40564B",
  muted: "#718379",
  border: "#B6CBBE",
};

export const IMG = {
  home: "E:/vibe_coding/profilo/demo_pic/首页.png",
  route: "E:/vibe_coding/profilo/demo_pic/行程详情.png",
  chat: "E:/vibe_coding/profilo/demo_pic/ai对话.png",
  refine: "E:/vibe_coding/profilo/demo_pic/ai二次优化.png",
  form: "E:/vibe_coding/profilo/demo_pic/填表界面.png",
  loading: "E:/vibe_coding/profilo/demo_pic/生成等候页面.png",
  edit: "E:/vibe_coding/profilo/demo_pic/二次编辑行程.png",
  list: "E:/vibe_coding/profilo/demo_pic/行程列表.png",
  test: "E:/vibe_coding/profilo/demo_pic/测试页.png",
  result: "E:/vibe_coding/profilo/demo_pic/测试结果.png",
  routeCut: "E:/vibe_coding/profilo/assets/travel-flow/route-web.png",
  discoverCut: "E:/vibe_coding/profilo/assets/travel-flow/discover-web.png",
  chatCut: "E:/vibe_coding/profilo/assets/travel-flow/chat-web.png",
};

export function slide(presentation) {
  return presentation.slides.add();
}

export function box(ctx, s, x, y, w, h, fill, stroke = null, width = 0) {
  return ctx.addShape(s, {
    x, y, w, h, geometry: "rect", fill,
    line: stroke ? ctx.line(stroke, width || 1) : ctx.line(),
  });
}

export function roundBox(ctx, s, x, y, w, h, fill, stroke = null, width = 0) {
  return ctx.addShape(s, {
    x, y, w, h, geometry: "roundRect", fill,
    line: stroke ? ctx.line(stroke, width || 1) : ctx.line(),
  });
}

export function rule(ctx, s, x, y, w, h, fill) {
  return box(ctx, s, x, y, w, h, fill);
}

export function txt(ctx, s, value, x, y, w, h, size, color = C.ink, bold = false, align = "left", face = "Microsoft YaHei") {
  return ctx.addText(s, {
    text: value, x, y, w, h, fontSize: size, color, bold, align,
    typeface: face, insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

export function base(ctx, s, fill = C.paper) {
  box(ctx, s, 0, 0, 1280, 720, fill);
}

export function topbar(ctx, s, tag, chapter = "XIAOJI / AI TRAVEL AGENT") {
  txt(ctx, s, tag, 52, 20, 400, 18, 12, C.pink, true);
  txt(ctx, s, chapter, 854, 20, 372, 18, 12, C.green, true, "right");
}

export function footer(ctx, s, index, section) {
  const items = [
    { label: "产品概况", slides: [3] },
    { label: "用户痛点", slides: [4] },
    { label: "竞品分析", slides: [5] },
    { label: "产品方案", slides: [6] },
    { label: "用户核心体验", slides: [7, 8] },
    { label: "时序图", slides: [9] },
    { label: "Agent 工作流", slides: [10] },
    { label: "旅行灵魂", slides: [11] },
    { label: "测试与迭代", slides: [12, 13, 14] },
  ];
  const active = Math.max(0, items.findIndex((item) => item.slides.includes(index)));
  const y = 646;
  const badgeW = 88;
  const start = 118;
  const itemW = 126;
  box(ctx, s, 0, y, 1280, 74, C.deep);
  roundBox(ctx, s, 14, y + 9, 66, 56, C.pink);
  txt(ctx, s, "PAGE", 29, y + 14, 36, 10, 7, C.deep, true, "center");
  txt(ctx, s, String(index).padStart(2, "0"), 14, y + 25, 66, 29, 23, C.white, true, "center");
  box(ctx, s, start + 8, y + 27, itemW * 8, 2, "#648879");
  items.forEach((item, i) => {
    const x = start + i * itemW;
    const completed = i < active;
    const current = i === active;
    if (completed) roundBox(ctx, s, x, y + 21, 16, 16, C.pink);
    if (!completed && !current) roundBox(ctx, s, x, y + 21, 16, 16, C.deep, C.white, 2);
    if (current) {
      roundBox(ctx, s, x - 4, y + 17, 24, 24, C.pink);
      roundBox(ctx, s, x + 3, y + 24, 10, 10, C.deep);
    }
    txt(ctx, s, item.label, x - 42, y + 48, itemW - 3, 17, 10, current ? C.pink : C.white, current, "center");
  });
}

export function interior(ctx, s, index, tag, title, subtitle = "", chapter = "XIAOJI / AI TRAVEL AGENT") {
  base(ctx, s);
  topbar(ctx, s, tag, chapter);
  txt(ctx, s, title, 52, 68, 1130, 48, 38, C.ink, true);
  if (subtitle) txt(ctx, s, subtitle, 54, 122, 1140, 28, 15, C.text, false);
  footer(ctx, s, index, tag);
}

export function label(ctx, s, value, x, y, w, color = C.pink) {
  txt(ctx, s, value.toUpperCase(), x, y, w, 13, 10, color, true);
}

export function card(ctx, s, x, y, w, h, num, title, body, active = false) {
  roundBox(ctx, s, x, y, w, h, active ? C.green : C.white, active ? C.green : C.border, 1);
  roundBox(ctx, s, x + 15, y + 15, 29, 24, C.pink);
  txt(ctx, s, num, x + 15, y + 21, 29, 14, 10, C.deep, true, "center");
  txt(ctx, s, title, x + 56, y + 16, w - 70, 26, 17, active ? C.white : C.ink, true);
  txt(ctx, s, body, x + 20, y + 53, w - 36, h - 67, 16, active ? "#E6F0E9" : C.text);
}

export function pill(ctx, s, value, x, y, w, pink = false) {
  roundBox(ctx, s, x, y, w, 26, pink ? C.pink : C.greenSoft, pink ? C.pink : C.greenSoft);
  txt(ctx, s, value, x, y + 7, w, 13, 10, pink ? C.deep : C.green, true, "center");
}

export async function phone(ctx, s, path, x, y, w, h, caption = "") {
  box(ctx, s, x - 5, y - 5, w + 10, h + 10, C.deep);
  await ctx.addImage(s, { path, x, y, w, h, fit: "contain", alt: caption || "product interface" });
  if (caption) txt(ctx, s, caption, x - 8, y + h + 10, w + 16, 16, 10, C.green, true, "center");
}

export function headingBlock(ctx, s, small, title, body, x, y, w) {
  label(ctx, s, small, x, y, w);
  txt(ctx, s, title, x, y + 26, w, 94, 42, C.ink, true);
  txt(ctx, s, body, x, y + 135, w, 62, 14, C.text);
}

export function arrow(ctx, s, x, y, w) {
  box(ctx, s, x, y + 10, w - 12, 2, C.pink);
  box(ctx, s, x + w - 13, y + 6, 10, 10, C.pink);
}
