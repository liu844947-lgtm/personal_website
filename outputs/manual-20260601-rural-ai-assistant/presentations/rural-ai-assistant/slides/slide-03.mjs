import { RC, ruralSlide, pageBase, tag } from "./rural-foundation.mjs";
import { box, roundBox, txt } from "./foundation.mjs";

const IMG = {
  home: "E:/vibe_coding/profilo/demo_pic/茶韵莲乡首页_透明底.png",
  guide: "E:/vibe_coding/profilo/demo_pic/乡村AI文化导览_透明底.png",
  booking: "E:/vibe_coding/profilo/demo_pic/乡村活动预约_透明底.png",
  cocreate: "E:/vibe_coding/profilo/demo_pic/乡村村民共创_透明底.png",
  insight: "E:/vibe_coding/profilo/demo_pic/乡村运营洞察_透明底.png",
};

function scopeCard(ctx, s, x, y, w, h, num, title, body, active = false) {
  roundBox(ctx, s, x, y, w, h, active ? RC.green : RC.white, active ? RC.green : RC.border, 1.1);
  roundBox(ctx, s, x + 16, y + 16, 40, 30, RC.lotus);
  txt(ctx, s, num, x + 16, y + 25, 40, 11, 12, RC.deep, true, "center");
  txt(ctx, s, title, x + 70, y + 15, w - 90, 18, 17, active ? RC.white : RC.green, true);
  txt(ctx, s, body, x + 70, y + 42, w - 90, h - 50, 13, active ? "#E6F0E9" : RC.text);
}

async function phoneShot(ctx, s, path, x, y, w, caption) {
  await ctx.addImage(s, { path, x, y, w, h: w * 1.333, fit: "contain", alt: caption });
  txt(ctx, s, caption, x - 6, y + w * 1.333 + 4, w + 12, 14, 10, RC.green, true, "center");
}

export default async function slide03(presentation, ctx) {
  const s = ruralSlide(presentation);
  pageBase(ctx, s, 3, "产品化重构：乡村文旅 AI 助手 MVP", "用最小闭环验证游客是否愿意了解乡村文化、预约体验活动，并留下反馈。");

  roundBox(ctx, s, 54, 164, 382, 104, RC.green);
  txt(ctx, s, "01 MVP 目标", 78, 186, 180, 18, 15, RC.lotus, true);
  txt(ctx, s, "验证游客是否愿意通过小程序了解乡村文化、预约体验活动，并留下反馈。", 78, 216, 320, 32, 20, RC.white, true);

  tag(ctx, s, "02 核心功能", 54, 298, 108, true);
  scopeCard(ctx, s, 54, 334, 382, 58, "01", "AI 文化导览", "茶文化、莲文化、村庄历史与体验推荐。", true);
  scopeCard(ctx, s, 54, 404, 382, 58, "02", "活动预约", "活动、时段、余量、主理人与参与入口。");
  scopeCard(ctx, s, 54, 474, 382, 58, "03", "村民共创发布", "农产品、活动主理人、村庄故事入口。");
  scopeCard(ctx, s, 54, 544, 382, 58, "04", "运营洞察看板", "预约、热门活动、反馈关键词与优化建议。", true);

  roundBox(ctx, s, 466, 164, 344, 420, RC.white, RC.border, 1.2);
  tag(ctx, s, "03 核心流程", 490, 186, 108, true);
  const steps = ["游客发现体验", "AI 推荐 / 讲解", "预约参与", "提交反馈", "运营方优化", "村民继续共创"];
  steps.forEach((step, i) => {
    const y = 234 + i * 50;
    roundBox(ctx, s, 490, y, 42, 28, i === 0 || i === 5 ? RC.lotus : RC.greenSoft);
    txt(ctx, s, String(i + 1).padStart(2, "0"), 490, y + 8, 42, 10, 10, i === 0 || i === 5 ? RC.deep : RC.green, true, "center");
    txt(ctx, s, step, 552, y + 5, 210, 16, 16, i === 0 || i === 5 ? RC.green : RC.ink, true);
    if (i < steps.length - 1) box(ctx, s, 510, y + 30, 2, 18, RC.lotus);
  });

  roundBox(ctx, s, 466, 604, 344, 28, RC.lotus);
  txt(ctx, s, "能力迁移：场景理解 → 需求拆解 → MVP 边界 → AI 闭环", 486, 613, 306, 11, 12, RC.deep, true, "center");

  tag(ctx, s, "04 不做什么", 840, 164, 108, true);
  const noItems = ["不做酒店交通", "不做复杂多日行程", "不做完整电商", "不做社交社区", "不做复杂支付系统"];
  noItems.forEach((item, i) => {
    const x = 840 + (i % 2) * 170;
    const y = 204 + Math.floor(i / 2) * 40;
    roundBox(ctx, s, x, y, 150, 28, RC.panel, RC.border, 1);
    txt(ctx, s, item, x + 12, y + 8, 126, 10, 11, RC.text, true, "center");
  });

  await phoneShot(ctx, s, IMG.home, 826, 350, 86, "首页");
  await phoneShot(ctx, s, IMG.guide, 910, 324, 96, "AI 导览");
  await phoneShot(ctx, s, IMG.booking, 1008, 350, 86, "预约");
  await phoneShot(ctx, s, IMG.cocreate, 1090, 324, 96, "共创");
  await phoneShot(ctx, s, IMG.insight, 1170, 350, 86, "洞察");
  return s;
}
