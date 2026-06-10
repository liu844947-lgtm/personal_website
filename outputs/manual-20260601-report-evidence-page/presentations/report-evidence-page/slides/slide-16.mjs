import { C, box, roundBox, txt, label, processNode, arrow, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make16(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 4, "产品方案", "三步实现：关键词生成 → 跨平台抓取 → 数据清洗与报告生成");
  const steps = [
    ["01", "关键词生成", "理解研究意图，生成覆盖不同维度的规范化英文关键词，而非简单翻译课题。"],
    ["02", "跨平台抓取", "Twitter 每关键词 20 条；YouTube 每关键词 10 个视频、每视频 50 条评论；Reddit 每关键词 10 个帖子、每帖 50 条评论。"],
    ["03", "清洗与报告", "去重、标准化、过滤噪声，输出 Word 结构化报告，结论附用户原话。"],
  ];
  steps.forEach(([n, t, b], i) => {
    const x = 54 + i * 382;
    roundBox(ctx, s, x, 182, 338, 196, i === 1 ? C.green : C.white, i === 1 ? C.green : C.border, 1.2);
    roundBox(ctx, s, x + 22, 204, 60, 42, C.pink);
    txt(ctx, s, n, x + 22, 214, 60, 22, 18, C.deep, true, "center");
    txt(ctx, s, t, x + 98, 210, 210, 30, 23, i === 1 ? C.white : C.green, true);
    txt(ctx, s, b, x + 24, 266, 286, 80, 16, i === 1 ? "#E6F0E9" : C.text);
    if (i < 2) arrow(ctx, s, x + 343, 270, 38);
  });
  label(ctx, s, "SYSTEM FLOW", 54, 430, 180);
  const flow = ["问题", "关键词", "抓取", "清洗", "报告"];
  flow.forEach((v, i) => {
    const x = 90 + i * 226;
    processNode(ctx, s, x, 466, 164, v, i === 2 ? "Twitter / YouTube / Reddit" : "自动进入下一步", i === 4);
    if (i < flow.length - 1) {
      box(ctx, s, x + 166, 508, 50, 3, C.pink);
      box(ctx, s, x + 210, 503, 10, 10, C.pink);
    }
  });
  return s;
}
