import { C, box, roundBox, txt, label, miniCard, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make21(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 9, "数据与评估", "用数据量、引用密度和去偏规则验证调研结果是否可信");
  const metrics = [
    ["抓取量", "每课题上千条真实用户反馈"],
    ["结论引用", "每条关键判断至少 2-3 条原话"],
    ["平台覆盖", "Twitter / YouTube / Reddit"],
    ["去偏原则", "不注入先验、不引用官方、不编造观点"],
  ];
  metrics.forEach(([t, b], i) => {
    const x = 54 + (i % 2) * 560;
    const y = 184 + Math.floor(i / 2) * 146;
    miniCard(ctx, s, x, y, 506, 118, `0${i + 1}`, t, b, i === 1);
  });
  roundBox(ctx, s, 54, 520, 512, 86, C.green);
  label(ctx, s, "EFFICIENCY", 82, 542, 180, C.pink);
  txt(ctx, s, "调研效率提升 5-10 倍", 82, 566, 420, 26, 25, C.white, true);
  roundBox(ctx, s, 618, 520, 548, 86, C.pink);
  label(ctx, s, "TRUST", 646, 542, 180, C.deep);
  txt(ctx, s, "结论可信度高，且能回到原始用户声音", 646, 566, 470, 26, 23, C.deep, true);
  box(ctx, s, 1058, 178, 108, 306, C.deep);
  txt(ctx, s, "EVIDENCE", 1058, 268, 108, 28, 20, C.pink, true, "center");
  txt(ctx, s, "FIRST", 1058, 310, 108, 28, 25, C.pink, true, "center");
  return s;
}
