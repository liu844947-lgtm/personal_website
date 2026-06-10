import { C, roundBox, txt, miniCard, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make15(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 3, "用户痛点", "传统调研不是没有信息，而是信息过散、整理过慢、结论不够能被验证");
  miniCard(ctx, s, 54, 184, 530, 150, "01", "调研碎片化", "用户反馈分散在不同平台、不同语言、不同语境里，产品判断很难从单一平台得出。");
  miniCard(ctx, s, 636, 184, 530, 150, "02", "手工整理成本高", "抓取、筛选、清洗、归类都需要大量人工时间，调研周期被拉长。");
  miniCard(ctx, s, 54, 370, 530, 150, "03", "不可追溯", "很多结论只剩一句总结，缺少原始用户数据支持，汇报时难以回答“证据在哪”。");
  miniCard(ctx, s, 636, 370, 530, 150, "04", "易受先验偏见影响", "手工总结容易注入主观判断，忽略真实用户表达中的反常识信号。", true);
  roundBox(ctx, s, 54, 555, 1112, 54, C.pink);
  txt(ctx, s, "设计机会：把“散落的声音”转化为“带证据链的判断”，让研究结论经得起追问。", 82, 571, 1040, 24, 20, C.deep, true);
  return s;
}
