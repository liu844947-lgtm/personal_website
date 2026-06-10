import { C, box, roundBox, txt, label, pill, miniCard, researchSlide, researchPage } from "./research-foundation.mjs";

export default async function make14(presentation, ctx) {
  const s = researchSlide(presentation);
  researchPage(ctx, s, 2, "产品概况", "让产品经理、创业者、投资人、自媒体博主快速获取真实用户声音");
  roundBox(ctx, s, 54, 172, 456, 405, C.deep);
  label(ctx, s, "POSITIONING", 84, 206, 160, C.pink);
  txt(ctx, s, "真实用户声音\n自动沉淀为研究结论", 84, 238, 370, 92, 36, C.white, true);
  txt(ctx, s, "围绕跨平台调研、用户反馈分析、潜在机会发现，系统把原始发言转成可引用、可追溯的结构化报告。", 86, 360, 362, 74, 18, "#E6F0E9");
  pill(ctx, s, "节省调研时间", 86, 486, 126, true);
  pill(ctx, s, "提高可信度", 226, 486, 118);
  pill(ctx, s, "原话可追溯", 358, 486, 124, true);

  const users = [
    ["产品经理", "竞品分析、用户需求挖掘"],
    ["创业者", "验证市场方向与早期机会"],
    ["投资人", "尽调、口碑判断、风险识别"],
    ["自媒体", "选题调研、内容角度发现"],
  ];
  users.forEach(([t, b], i) => {
    const x = 552 + (i % 2) * 322;
    const y = 172 + Math.floor(i / 2) * 142;
    miniCard(ctx, s, x, y, 292, 112, `0${i + 1}`, t, b, i === 0);
  });
  label(ctx, s, "CORE SCENARIOS", 552, 482, 190);
  ["跨平台调研", "用户反馈分析", "潜在机会发现"].forEach((v, i) => {
    roundBox(ctx, s, 552 + i * 210, 512, 180, 48, i === 1 ? C.pink : C.white, i === 1 ? C.pink : C.border, 1);
    txt(ctx, s, v, 552 + i * 210, 527, 180, 18, 16, i === 1 ? C.deep : C.green, true, "center");
  });
  return s;
}
