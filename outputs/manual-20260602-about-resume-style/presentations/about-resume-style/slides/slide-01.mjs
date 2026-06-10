import { slide, box, roundBox, txt } from "./foundation.mjs";

const S = {
  paper: "#FCFBF7",
  wash: "#E9E0D3",
  brown: "#4A2D1F",
  taupe: "#A99884",
  soft: "#EFE8DE",
  ink: "#2F2924",
  muted: "#6D6258",
  line: "#BBAE9E",
  dark: "#3A2419",
};

function heading(ctx, s, text, x, y, w = 280) {
  txt(ctx, s, text, x, y, w, 30, 25, S.brown, true, "left", "Arial");
  box(ctx, s, x, y + 35, 160, 2, S.line);
}

function timelineItem(ctx, s, x, y, title, year, school, body = "") {
  box(ctx, s, x + 8, y - 2, 2, 102, S.line);
  roundBox(ctx, s, x, y + 4, 18, 18, S.brown);
  txt(ctx, s, title, x + 28, y, 230, 18, 16, S.brown, true);
  txt(ctx, s, year, x + 28, y + 23, 130, 18, 15, S.ink);
  txt(ctx, s, school, x + 28, y + 45, 260, 19, 15, S.ink);
  if (body) txt(ctx, s, body, x + 28, y + 66, 260, 36, 13, S.ink);
}

function languageItem(ctx, s, x, y, text) {
  box(ctx, s, x + 8, y - 6, 2, 44, S.line);
  roundBox(ctx, s, x, y, 18, 18, S.brown);
  txt(ctx, s, text, x + 28, y - 1, 150, 18, 15, S.ink);
}

function twoColText(ctx, s, left, right, x, y) {
  left.forEach((t, i) => txt(ctx, s, t, x, y + i * 24, 150, 18, 15, S.ink));
  right.forEach((t, i) => txt(ctx, s, t, x + 172, y + i * 24, 160, 18, 15, S.ink));
}

function skillBar(ctx, s, x, y, label, value, color = S.brown) {
  roundBox(ctx, s, x, y, 30, 30, color);
  txt(ctx, s, label, x, y + 8, 30, 10, 9, "#FFFFFF", true, "center");
  box(ctx, s, x + 42, y + 12, 116, 8, "#CBBEAF");
  box(ctx, s, x + 42, y + 12, Math.round(116 * value), 8, S.brown);
}

function interest(ctx, s, x, icon, text) {
  box(ctx, s, x + 28, 438, 1, 42, S.line);
  roundBox(ctx, s, x, 478, 58, 58, S.taupe);
  txt(ctx, s, icon, x, 494, 58, 16, 18, "#FFFFFF", true, "center");
  txt(ctx, s, text, x - 34, 540, 126, 16, 12, S.brown, false, "center");
}

export default async function resumeStyleAbout(presentation, ctx) {
  const s = slide(presentation);
  box(ctx, s, 0, 0, 1280, 720, S.paper);
  box(ctx, s, 0, 0, 118, 198, S.wash);
  box(ctx, s, 0, 198, 118, 522, "#FFFFFF");

  // Left portrait block
  roundBox(ctx, s, 31, 60, 292, 382, "#FFFFFF");
  await ctx.addImage(s, {
    path: "E:/vibe_coding/profilo/outputs/manual-20260602-about-resume-style/presentations/about-resume-style/assets/portrait-arch.png",
    x: 31,
    y: 60,
    w: 292,
    h: 382,
    fit: "cover",
    alt: "刘颖头像",
  });
  txt(ctx, s, "Hello!!", 78, 486, 210, 36, 30, S.brown, false, "center", "Comic Sans MS");
  txt(ctx, s, "我是刘颖，城乡规划背景，正在转向 AI 产品经理方向。\n\n我相信好的产品来自真实场景理解：从用户角色、需求冲突和系统关系中，拆解出清晰的产品流程、AI 工作流与可视化表达。", 40, 544, 250, 130, 15, S.brown, true, "center");

  // Middle column
  heading(ctx, s, "EDUCATION", 416, 52, 250);
  timelineItem(ctx, s, 414, 112, "UNDERGRADUATE", "2022.09 - 2027.06", "安徽建筑大学", "城乡规划本科 / GPA 3.7/5（前 20%）");
  timelineItem(ctx, s, 414, 232, "PRODUCT TRANSITION", "2025 - 2026", "AI 产品经理方向", "AI Agent / 用户洞察 / 复杂场景产品化");

  heading(ctx, s, "LANGUAGE", 416, 386, 250);
  languageItem(ctx, s, 414, 450, "中文");
  languageItem(ctx, s, 414, 498, "English");
  languageItem(ctx, s, 414, 546, "AI / Product Vocabulary");

  heading(ctx, s, "EXPERIENCE", 416, 620, 250);
  txt(ctx, s, "乡村规划竞赛、省级一等奖 / 国家佳作奖；AI 产品作品集包含用户自调研系统、AI 旅行规划 Agent、乡村文旅 AI 助手。", 416, 666, 330, 34, 13, S.ink);

  // Right column
  heading(ctx, s, "ANALOGUE SKILLS", 800, 52, 330);
  twoColText(ctx, s,
    ["真实场景理解", "用户需求拆解", "复杂系统拆解", "产品流程设计", "可视化表达"],
    ["方案策划", "用户洞察", "空间分析", "汇报表达", "跨学科协作"],
    800, 112);

  heading(ctx, s, "SOFTWARE SKILLS", 800, 254, 330);
  skillBar(ctx, s, 800, 314, "Fig", 0.86, "#A95C3C");
  skillBar(ctx, s, 800, 358, "Cur", 0.78, "#2E5D47");
  skillBar(ctx, s, 800, 402, "XMd", 0.74, "#6E5848");
  skillBar(ctx, s, 1010, 314, "PPT", 0.88, "#8A4B2D");
  skillBar(ctx, s, 1010, 358, "SQL", 0.58, "#255D67");
  skillBar(ctx, s, 1010, 402, "Py", 0.54, "#CC6A2E");

  heading(ctx, s, "INTEREST", 908, 438, 260);
  interest(ctx, s, 822, "AI", "AI Agent");
  interest(ctx, s, 946, "研", "User Research");
  interest(ctx, s, 1070, "旅", "Travel Design");
  interest(ctx, s, 1194, "图", "Visual Story");
  box(ctx, s, 850, 480, 400, 1, S.line);

  heading(ctx, s, "CONTACT", 800, 586, 330);
  roundBox(ctx, s, 800, 646, 28, 28, "#000000");
  txt(ctx, s, "@", 800, 654, 28, 10, 12, "#FFFFFF", true, "center");
  txt(ctx, s, "2364314755@qq.com", 838, 650, 260, 17, 15, S.ink);
  roundBox(ctx, s, 800, 684, 28, 28, "#000000");
  txt(ctx, s, "☎", 800, 692, 28, 10, 12, "#FFFFFF", true, "center");
  txt(ctx, s, "19307065732", 838, 688, 220, 17, 15, S.ink);

  return s;
}
