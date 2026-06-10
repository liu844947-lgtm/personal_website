import { C, box, roundBox, txt, label, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make17(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 5, "用户核心流程", "闭环流程、全自动、可追溯、真实用户声音");
  const items = [
    ["用户输入研究问题", "明确产品、竞品、市场或内容选题"],
    ["系统理解意图，自动生成关键词", "覆盖功能、痛点、替代方案、情绪表达"],
    ["跨平台抓取用户声音", "Twitter / YouTube / Reddit"],
    ["数据清洗、去重、标准化", "过滤重复、广告、无效评论"],
    ["生成结构化报告", "每条结论附用户原话"],
    ["可追溯输出，可直接引用", "报告用于汇报、判断、下一步验证"],
  ];
  items.forEach(([t, b], i) => {
    const x = i % 2 === 0 ? 80 : 680;
    const y = 176 + Math.floor(i / 2) * 128;
    roundBox(ctx, s, x, y, 478, 84, i === 5 ? C.green : C.white, i === 5 ? C.green : C.border, 1.2);
    roundBox(ctx, s, x + 18, y + 18, 42, 42, C.pink);
    txt(ctx, s, `0${i + 1}`, x + 18, y + 30, 42, 15, 13, C.deep, true, "center");
    txt(ctx, s, t, x + 76, y + 16, 360, 23, 18, i === 5 ? C.white : C.green, true);
    txt(ctx, s, b, x + 76, y + 45, 360, 21, 14, i === 5 ? "#E6F0E9" : C.text);
    if (i < items.length - 1) {
      const nextX = i % 2 === 0 ? 558 : 620;
      box(ctx, s, nextX, y + 40, i % 2 === 0 ? 82 : 44, 3, C.pink);
    }
  });
  label(ctx, s, "OUTPUT PROMISE", 80, 574, 190);
  txt(ctx, s, "不是生成“像报告的文字”，而是生成“每个判断都能回到用户原话”的研究资产。", 220, 568, 780, 28, 20, C.ink, true);
  return s;
}
