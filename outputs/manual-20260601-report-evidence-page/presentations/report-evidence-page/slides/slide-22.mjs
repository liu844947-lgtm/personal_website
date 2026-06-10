import { C, box, roundBox, txt, label, pill, researchSlide, researchPage } from "./research-foundation.mjs";

function findingBlock(ctx, s, x, y, w, h, num, title, problem, impact, iteration, active = false) {
  roundBox(ctx, s, x, y, w, h, active ? C.green : C.white, active ? C.green : C.border, 1.2);
  roundBox(ctx, s, x + 22, y + 22, 64, 42, C.pink);
  txt(ctx, s, num, x + 22, y + 32, 64, 18, 17, C.deep, true, "center");
  txt(ctx, s, title, x + 104, y + 24, w - 132, 28, 24, active ? C.white : C.green, true);

  const sections = [
    ["发现问题", problem],
    ["影响结果", impact],
    ["迭代方向", iteration],
  ];
  sections.forEach(([k, v], i) => {
    const yy = y + 88 + i * 82;
    pill(ctx, s, k, x + 24, yy, 74, i === 2);
    txt(ctx, s, v, x + 114, yy - 1, w - 142, 58, 15, active ? "#E6F0E9" : C.text);
  });
}

export default async function make22(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 9, "测试发现与迭代方向", "从 MVP 测试中定位两个影响可信度和可用性的关键问题");

  findingBlock(
    ctx,
    s,
    54,
    174,
    542,
    396,
    "01",
    "跨平台抓取不稳定",
    "Twitter / YouTube / Reddit 在接口限制、反爬策略、关键词命中率上表现不一致，导致同一课题下不同平台返回数据量波动较大。",
    "数据量不稳定会影响报告覆盖度，部分结论可能出现平台样本偏向，进而影响用户对报告可信度的判断。",
    "建立抓取监控与降级机制：记录成功率、有效样本数和失败原因；失败时自动切换备用关键词、降低抓取深度，或提示补充数据源。",
  );

  findingBlock(
    ctx,
    s,
    638,
    174,
    542,
    396,
    "02",
    "AI 追问还不够基于证据",
    "当前 AI Agent 能围绕报告继续回答问题，但追问主要依赖大模型总结，容易泛化，不能稳定定位到具体用户原话和样本来源。",
    "用户追问“为什么得出这个结论”“有没有反例”“某类用户具体怎么说”时，系统需要更强的证据检索能力。",
    "引入 RAG 机制：将评论、帖子、视频评论切分为可检索语料库，让二次问答先检索原始样本再生成回答，并附平台、原文和链接。",
    true,
  );

  roundBox(ctx, s, 54, 590, 1126, 32, C.pink);
  txt(ctx, s, "下一步重点：把“能生成报告”升级为“稳定抓取 + 证据驱动追问”的研究 Agent。", 78, 599, 1078, 15, 16, C.deep, true, "center");
  return s;
}
