import { C, roundBox, txt, label, miniCard, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make18(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 6, "关键设计", "围绕数据覆盖、证据追溯和防偏原则，拆成四个可解释模块");
  const modules = [
    ["关键词生成模块", "理解问题意图，覆盖研究维度，避免把中文问题只翻译成单个英文词"],
    ["抓取模块", "保证数据量和多样性，每个课题沉淀上千条跨平台反馈。"],
    ["分析模块", "完成数据清洗、标准化、聚类整理和结构化报告生成。"],
    ["可追溯性设计", "每条结论至少引用 2-3 条来自不同平台的用户原话。"],
  ];
  modules.forEach(([t, b], i) => {
    const x = 54 + (i % 2) * 578;
    const y = 184 + Math.floor(i / 2) * 152;
    miniCard(ctx, s, x, y, 526, 124, `0${i + 1}`, t, b, i === 3);
  });
  roundBox(ctx, s, 54, 520, 1116, 86, C.pink);
  label(ctx, s, "ANTI-BIAS PRINCIPLES", 82, 540, 220, C.deep);
  txt(ctx, s, "不注入先验认知    /    不引用官方文档    /    不编造观点", 82, 568, 1040, 25, 23, C.deep, true, "center");
  return s;
}
