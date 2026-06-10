import { C, slide, box, roundBox, txt } from "./foundation.mjs";

const A = {
  green: "#005331",
  deep: "#003C24",
  paper: "#FBF9F3",
  card: "#FFFDF8",
  panel: "#F4F3EA",
  pink: "#EC78A6",
  pinkSoft: "#F7D7E4",
  gold: "#EADCC5",
  text: "#243B31",
  muted: "#66776D",
  line: "#D8D2C1",
};

function label(ctx, s, text, x, y, w = 120) {
  roundBox(ctx, s, x, y, w, 28, A.pinkSoft, null);
  txt(ctx, s, text, x, y + 7, w, 12, 12, A.deep, true, "center");
}

function infoRow(ctx, s, y, icon, text, right = "") {
  txt(ctx, s, icon, 74, y, 32, 20, 18, A.green, true, "center");
  txt(ctx, s, text, 116, y + 2, 330, 18, 15, A.text);
  if (right) txt(ctx, s, right, 438, y + 2, 92, 18, 14, A.text);
  box(ctx, s, 70, y + 31, 438, 1, A.line);
}

function sectionHead(ctx, s, icon, title, x, y, w) {
  roundBox(ctx, s, x, y, 34, 34, A.green);
  txt(ctx, s, icon, x, y + 8, 34, 12, 13, A.card, true, "center");
  txt(ctx, s, title, x + 48, y + 5, 160, 18, 18, A.deep, true);
  box(ctx, s, x + 170, y + 16, w - 170, 1, A.line);
}

function abilityCard(ctx, s, x, y, w, title, body, num) {
  roundBox(ctx, s, x, y, w, 112, A.card, A.line, 0.8);
  txt(ctx, s, title, x + 54, y + 22, w - 76, 20, 16, A.deep, true);
  txt(ctx, s, body, x + 28, y + 56, w - 48, 42, 13, A.text);
  roundBox(ctx, s, x + w - 32, y + 14, 22, 22, A.pink);
  txt(ctx, s, String(num), x + w - 32, y + 20, 22, 8, 9, A.card, true, "center");
  box(ctx, s, x + 54, y + 48, w - 80, 1, A.line);
}

function projectCard(ctx, s, x, y, w, title, body, glyph) {
  roundBox(ctx, s, x, y, w, 90, A.card, A.line, 0.8);
  roundBox(ctx, s, x + 18, y + 18, 48, 48, "#E9F0E8", A.green, 1);
  txt(ctx, s, glyph, x + 18, y + 32, 48, 16, 18, A.green, true, "center");
  txt(ctx, s, title, x + 82, y + 16, w - 100, 28, 13, A.deep, true);
  txt(ctx, s, body, x + 82, y + 51, w - 100, 25, 9, A.text);
}

function award(ctx, s, x, icon, title) {
  roundBox(ctx, s, x, 548, 44, 44, A.panel, A.line, 1);
  txt(ctx, s, icon, x, 562, 44, 14, 16, A.green, true, "center");
  txt(ctx, s, title, x - 42, 600, 130, 42, 9, A.text, false, "center");
}

export default async function aboutMe(presentation, ctx) {
  const s = slide(presentation);
  box(ctx, s, 0, 0, 1280, 720, A.paper);

  txt(ctx, s, "About Me", 34, 32, 310, 55, 49, A.green, false, "left", "Georgia");
  txt(ctx, s, "刘颖", 36, 122, 132, 44, 34, A.green, true);
  roundBox(ctx, s, 178, 128, 258, 38, A.pinkSoft);
  txt(ctx, s, "AI 产品经理实习生候选人", 196, 139, 220, 14, 18, A.deep, true, "center");
  txt(ctx, s, "城乡规划背景  |  AI Agent  |  用户洞察  |  复杂场景产品化", 36, 190, 474, 22, 17, A.deep);

  roundBox(ctx, s, 34, 230, 446, 202, A.card, A.line, 0.8);
  infoRow(ctx, s, 252, "校", "安徽建筑大学 · 城乡规划", "合肥");
  txt(ctx, s, "2022.09 - 2027.06", 116, 276, 220, 14, 11, A.text);
  infoRow(ctx, s, 294, "电", "手机：19307065732");
  infoRow(ctx, s, 334, "邮", "邮箱：2364314755@qq.com");
  infoRow(ctx, s, 374, "职", "求职方向：AI 产品经理实习生");
  txt(ctx, s, "时", 74, 414, 32, 18, 17, A.green, true, "center");
  txt(ctx, s, "可随时到岗，可实习 3 个月以上", 116, 416, 310, 16, 13, A.text);

  roundBox(ctx, s, 34, 454, 446, 168, A.card, A.line, 0.8);
  roundBox(ctx, s, 52, 474, 34, 34, A.green);
  txt(ctx, s, "我", 52, 484, 34, 12, 13, A.card, true, "center");
  txt(ctx, s, "我是谁？", 96, 480, 160, 22, 19, A.deep, true);
  txt(ctx, s, "我本科来自城乡规划专业，正在转向 AI 产品经理方向。\n相比只从功能出发，我更擅长从真实场景中拆解用户角色、需求冲突与系统关系，并将复杂问题转化为清晰的产品流程、AI 工作流和可视化方案。", 60, 524, 382, 66, 12, A.text);

  box(ctx, s, 532, 146, 1, 492, A.line);
  roundBox(ctx, s, 1066, 30, 174, 174, "#F8EDE4");
  await ctx.addImage(s, { path: "E:/vibe_coding/profilo/outputs/manual-20260601-about-me-page/presentations/about-me-page/assets/portrait-circle.png", x: 1076, y: 38, w: 154, h: 154, fit: "contain", alt: "刘颖头像" });
  roundBox(ctx, s, 1212, 176, 24, 24, A.pink);

  sectionHead(ctx, s, "★", "能力结构", 554, 158, 456);
  abilityCard(ctx, s, 554, 204, 220, "AI 产品设计", "需求分析 / 用户流程 / PRD / Prompt 设计 / RAG 基础认知 / AI 工作流设计", 1);
  abilityCard(ctx, s, 790, 204, 220, "原型与落地", "Figma / Cursor / XMind / Excel / Python 基础 / SQL 基础", 2);
  abilityCard(ctx, s, 1026, 204, 220, "跨学科优势", "用户调研 / 空间分析 / 复杂系统拆解 / 可视化表达 / 方案汇报", 3);

  sectionHead(ctx, s, "包", "代表项目", 554, 360, 670);
  projectCard(ctx, s, 554, 408, 220, "AI 用户自调研系统", "用户声音抓取、清洗、分析与报告生成工具", "研");
  projectCard(ctx, s, 790, 408, 220, "AI 旅行规划 Agent", "偏好驱动的个性化行程生成与迭代", "旅");
  projectCard(ctx, s, 1026, 408, 220, "茶韵莲乡：乡村文旅 AI 助手", "文化导览、活动预约、村民共创与运营闭环", "莲");

  sectionHead(ctx, s, "奖", "教育与奖项", 554, 510, 670);
  award(ctx, s, 590, "校", "安徽建筑大学\n城乡规划本科\nGPA 3.7/5\n（前 20%）");
  award(ctx, s, 742, "奖", "2023-2024\n国家励志奖学金");
  award(ctx, s, 894, "星", "2022-2024\n校三等奖学金");
  award(ctx, s, 1046, "杯", "乡村规划大赛\n省级一等奖 /\n国家佳作奖");
  award(ctx, s, 1198, "山", "长三角黄山竞赛\n传统乡村生活场景\n设计赛道优秀奖");
  box(ctx, s, 632, 570, 536, 1, A.line);

  box(ctx, s, 0, 654, 1280, 66, A.deep);
  const bottom = [
    ["真实场景理解", 160],
    ["用户需求拆解", 462],
    ["AI 产品思维", 764],
    ["可视化表达", 1066],
  ];
  bottom.forEach(([t, x], i) => {
    txt(ctx, s, i === 0 ? "◎" : i === 1 ? "人" : i === 2 ? "脑" : "图", x - 52, 678, 34, 14, 21, A.gold, true, "center");
    txt(ctx, s, t, x, 678, 150, 16, 17, A.card, true);
    if (i < 3) box(ctx, s, x + 198, 675, 1, 28, "#7BA28E");
  });
  return s;
}
