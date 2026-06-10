import { C, box, roundBox, txt, label, pill, arrow, researchSlide } from "./research-foundation.mjs";

export default async function make13(presentation, ctx) {
  const s = researchSlide(presentation);
  box(ctx, s, 0, 0, 1280, 720, C.deep);
  txt(ctx, s, "02 / USER RESEARCH SYSTEM", 54, 36, 300, 18, 12, C.pink, true);
  txt(ctx, s, "用户自调研系统", 54, 130, 620, 68, 58, C.white, true);
  txt(ctx, s, "从真实用户声音生成可追溯的研究报告", 58, 214, 580, 34, 24, C.pink, true);
  txt(ctx, s, "输入研究问题 → 自动生成关键词 → 跨平台抓取用户反馈 → 清洗分析 → 输出带原话证据的结构化报告", 58, 278, 610, 60, 18, "#E9F1EC");
  pill(ctx, s, "AI Research Agent", 58, 380, 170, true);
  pill(ctx, s, "User Voice Mining", 246, 380, 178);
  pill(ctx, s, "Evidence-based Insight", 444, 380, 210, true);

  txt(ctx, s, "⚡", 640, -300, 585, 1220, 1180, C.pink, true, "center", "Segoe UI Symbol");
  roundBox(ctx, s, 720, 86, 460, 528, "#07492E", "#0D6B42", 1);
  label(ctx, s, "AUTOMATED RESEARCH PIPELINE", 760, 126, 280, C.pink);
  const nodes = [
    ["研究问题", "用户输入要研究的产品/市场问题"],
    ["关键词", "LLM 生成规范化英文关键词"],
    ["抓取", "Twitter / YouTube / Reddit"],
    ["清洗", "去重、标准化、过滤噪声"],
    ["报告", "结构化结论 + 原话证据"],
  ];
  nodes.forEach(([t, b], i) => {
    const y = 170 + i * 78;
    roundBox(ctx, s, 760, y, 352, 54, i === 4 ? C.pink : C.paper, i === 4 ? C.pink : C.border, 1);
    txt(ctx, s, t, 780, y + 11, 92, 24, 18, i === 4 ? C.deep : C.green, true);
    txt(ctx, s, b, 876, y + 14, 220, 20, 12, i === 4 ? C.deep : C.text);
    if (i < nodes.length - 1) arrow(ctx, s, 928, y + 56, 54);
  });
  txt(ctx, s, "真实用户声音，不靠主观脑补", 760, 566, 352, 28, 18, C.white, true, "center");
  return s;
}
